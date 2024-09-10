import { existsSync } from "node:fs";
import { resolve } from "node:path";
import type { FileImageResponse, FileResponse, Instance } from "figma-js";
import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { z } from "zod";

import { createClient } from "../services";
import {
  camelCase,
  extractFrame,
  extractInstances,
  extractPage,
  pipe,
  writeToFile,
} from "../utils";

const schema = z.object({
  file: z.string(),
  output: z.string(),
});

export const downloadIconsCommand = new Command()
  .name("download-icons")
  .description("Download icons from Figma")
  .option("-f, --file <file>", "Figma file key")
  .option("-o, --output <output>", "Output folder")
  .action(async (opts: unknown) => {
    try {
      const options = schema.parse(opts);
      const output = resolve(options.output);

      if (!existsSync(output)) {
        console.log(
          chalk.red(
            `The path ${output} does not exist. Please create folder and try again.`,
          ),
        );
      }

      const figmaApiClient = createClient("https://api.figma.com/v1", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { document } = await figmaApiClient<FileResponse>(
        `/files/${options.file}`,
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const icons: Instance[] = pipe(
        document,
        extractPage("icons"),
        extractFrame("icons"),
        extractInstances,
      );

      const ids: string = icons.map(({ id }: Instance) => id).join(",");

      const { images }: { images: Record<string, string> } =
        await figmaApiClient<FileImageResponse>(
          `/images/${options.file}?ids=${ids}&format=svg`,
        );

      const spinner = ora(`Downloading SVGs...`).start();

      for (const icon of icons) {
        spinner.text = `Downloading ${icon.name}...`;

        const url = images[icon.id];

        if (typeof url === "string") {
          const { body } = await fetch(url);
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          await writeToFile(`${output}/${camelCase(icon.name)}.svg`, body!);
        }
      }

      spinner.succeed(`Complete.`);
    } catch (error) {
      console.error(error);
    }
  });
