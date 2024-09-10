import { basename } from "node:path";
import type {
  Canvas,
  Document,
  FileImageResponse,
  FileResponse,
} from "figma-js";

import {
  addSizePrefix,
  camelCase,
  CodedError,
  ERRORS,
  kebabCase,
} from "../utils";

// export async function getFigmaDocument(file: string): Promise<Document> {
//   const resp = await fetch(`${FigmaApiConfig.baseUrl}/v1/files/${file}`, {
//     headers: FigmaApiConfig.headers,
//   });
//   const data = (await resp.json()) as FileResponse & ErrorResponse;

//   if (data.status === 403 && data.err === "Invalid token") {
//     throw new CodedError(ERRORS.FIGMA_API, "An invalid token was used.");
//   }

//   return data.document;
// }

// export function extractIconsPage(document: Document): Canvas {
//   const canvas = document.children.find(
//     (page) => page.name.toLowerCase() === "icons",
//   );

//   if (canvas?.type !== "CANVAS") {
//     throw new CodedError(ERRORS.FIGMA_API, "Could not find the icons page.");
//   }

//   return canvas;
// }

// export async function extractIcons({
//   children: [nodes],
// }: Canvas): Promise<any[]> {
//   const images = await getSvgImageUrl(Object.keys((nodes as any).children));

//   return (nodes as any).children.map(
//     async (node: any) => ({
//       ...node,
//       url: images[node.id],
//       name: kebabCase(node.name),
//       size: addSizePrefix(basename(node.name).toLowerCase().trim()),
//       type: camelCase(basename(node.name).trim()),
//     }),
//     {},
//   );
// }

// export async function getSvgImageUrl(ids: string[]): Promise<any> {
//   const resp = await fetch(
//     `${FigmaApiConfig.baseUrl}/v1/images/${FigmaApiConfig.fileKey}?ids=${ids}&format=svg`,
//     {
//       headers: FigmaApiConfig.headers,
//     },
//   );

//   const data = (await resp.json()) as FileImageResponse;

//   const error =
//     typeof data.err === "object" ? JSON.stringify(data.err, null, 2) : data.err;

//   if (!resp.ok) {
//     switch (resp.status) {
//       case 400:
//         throw new CodedError(
//           ERRORS.FIGMA_API,
//           `Unexpected error encountered from Figma API\n${error}`,
//         );
//       case 404:
//         throw new CodedError(
//           ERRORS.FIGMA_API,
//           "One or more of the icons couldn't be found in Figma. Check to see if they still exist, and try again.",
//         );
//       case 500:
//         throw new CodedError(
//           ERRORS.FIGMA_API,
//           "Figma could not render the icons. ಠ_ಠ",
//         );
//       default:
//         throw new CodedError(
//           ERRORS.UNEXPECTED,
//           `An error occured while rendering icons to SVG.\n${resp.status}\n${error}`,
//         );
//     }
//   }

//   if (!data.images ?? !Object.keys(data.images).length) {
//     throw new CodedError(
//       ERRORS.UNEXPECTED,
//       `An error occured after rendering icons in Figma. Render response:\n${JSON.stringify(data, null, 2)}`,
//     );
//   }

//   console.log("images", JSON.stringify(data.images, null, 2));

//   return data.images;
// }

export function createClient(
  baseURL: string,
  defaultOptions: { headers: Record<string, string> } = { headers: {} },
) {
  if (!process.env.FIGMA_ACCESS_TOKEN) {
    throw new Error("FIGMA_ACCESS_TOKEN is not set in environment variables.");
  }

  return async <T>(endpoint: string, options: RequestInit = {}) => {
    const response = await fetch(`${baseURL}${endpoint}`, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        "X-Figma-Token": process.env.FIGMA_ACCESS_TOKEN!,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error: ${response.status} - ${(errorData as Error).message}`,
      );
    }

    return response.json() as T;
  };
}
