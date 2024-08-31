import { writeFileSync } from "node:fs";
import { join } from "node:path";
import Handlebars from "handlebars";

import * as colors from "../src";

const {
    default: {
        compilerOptions: { outDir: outputDir }
    }
} = await import("../tsconfig.json");

const CSS_MODULE_TEMPLATE =
`
{{selector}} {
    {{#each srgbValues}}
    {{this}}
    {{/each}}
}

@supports (color: color(display-p3 1 1 1)) {
    @media (color-gamut: p3) {
        {{selector}} {
            {{#each p3Values}}
            {{this}}
            {{/each}}
        }
    }
}
`
const template = Handlebars.compile(CSS_MODULE_TEMPLATE);

const toCssCasing = (str: string): string => str.replace(/([a-z])(\d)/, "$1-$2").replace(/([A-Z])/g, "-$1").toLowerCase();
const toFileName = (str: string): string => toCssCasing(str).replace(/-a$/, "-alpha");

const toCssProperties = (values: Record<string, string>): string[] =>
    Object.entries(values).map(([name, value]) => `--${toCssCasing(name)}: ${value};`)

Object.keys(colors)
    .filter((key: string) => !key.includes("P3"))
    .forEach((key: string) => {
        let selector = ":root, .light, .light-theme";

        if (key === "blackA" || key === "whiteA") {
            selector = ":root";
        }
        
        if (key.includes("Dark")) {
            selector = ".dark, .dark-theme";
        }  

        const srgbValues = Object.entries(colors).find(
            ([name]) => name === key
        )?.[1] ?? {};


        const p3Values = Object.entries(colors).find(
            ([name]) => name === key + "P3" || name === key.replace(/.$/, "P3A")
        )?.[1];

        writeFileSync(
            join(outputDir, `${toFileName(key)}.css`),
            template({
                selector,
                srgbValues: toCssProperties(srgbValues),
                p3Values: toCssProperties(p3Values ?? {})
            }))
    });