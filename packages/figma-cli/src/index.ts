#!/usr/bin/env node
import { Command } from "commander";

import { downloadIconsCommand } from "./commands/download-icons";

import "dotenv/config";

process.on("SIGNINT", () => process.exit(0));
process.on("SIGNTERM", () => process.exit(0));

function main() {
  new Command()
    .name("@chidori/figma-cli")
    .description("A CLI tool for interacting with Figma API")
    .version("0.0.1-development", "-v, --version", "display the version")
    .addCommand(downloadIconsCommand)
    .parse();
}

main();
