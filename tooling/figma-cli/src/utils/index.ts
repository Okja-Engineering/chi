import { createWriteStream } from "node:fs";
import { join } from "node:path";
import { Readable } from "stream";
import { finished } from "stream/promises";
import type { Canvas, Document, Frame, Instance } from "figma-js";
import type * as streamWeb from "node:stream/web";

export const OUTPUT_FOLDER = "./assets";
export const RATE_LIMIT = 20;
export const WAIT_TIME_IN_SECONDS = 45;
export const ENV_OUTPUT_FILE = ".env";

export enum ERRORS {
  NETWORK_OFFLINE = "NETWORK_OFFLINE",
  DIRTY_WORKING_DIR = "DIRTY_WORKING_DIR",
  UNEXPECTED = "UNEXPECTED",
  NO_ICONS_PAGE = "NO_ICONS_PAGE",
  NO_ICONS_IN_SETS = "NO_ICONS_IN_SETS",
  FIGMA_API = "FIGMA_API",
}

export class CodedError extends Error {
  public code: ERRORS;
  public hideStack: boolean;

  constructor(code: ERRORS, message: string, hideStack = false) {
    super(message);
    this.code = code;
    this.hideStack = hideStack;
    Object.setPrototypeOf(this, CodedError.prototype);
  }
}

const stringTokenPattern = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g;

export const pipe = (value: any, ...fns: Function[]) =>
  fns.reduce((acc, fn) => fn(acc), value);

export const removeSizePrefix = (size: string): string =>
  size.replace(/^:?(.*)/, "$1");

export const addSizePrefix = (size: string): string =>
  `:${size.replace(/^(:?)(.*)/, "$2")}`;

export const kebabCase = (str: string): string =>
  (String(str).match(stringTokenPattern) ?? [])
    .map((value) => value.toLowerCase())
    .join("-");

export const camelCase = (str: string): string =>
  str.replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));

export const filePathFromIcon = ({
  size = "",
  svgName = "",
  type = "",
}: Record<string, string>): string =>
  join(type, removeSizePrefix(size), `${svgName}.svg`);

export const writeToFile = async (
  path: string,
  data: streamWeb.ReadableStream,
): Promise<void> => {
  const stream = createWriteStream(path);

  await finished(Readable.fromWeb(data).pipe(stream));
};

export function extractPage(name: string): (document: Document) => Canvas {
  return (document: Document) => {
    const canvas = document.children.find(
      (page) => page.name.toLowerCase() === name.toLowerCase(),
    );

    if (canvas?.type !== "CANVAS") {
      throw new CodedError(ERRORS.FIGMA_API, "Could not find the icons page.");
    }

    return canvas;
  };
}

export function extractFrame(name: string): (canvas: Canvas) => Frame {
  return (canvas: Canvas) => {
    const frame = canvas.children.find(
      (layer) => layer.name.toLowerCase() === name.toLowerCase(),
    );

    if (frame?.type !== "FRAME") {
      throw new CodedError(ERRORS.FIGMA_API, "Could not find the icons frame.");
    }

    return frame;
  };
}

export function extractInstances(frame: Frame): Instance[] {
  return frame.children.filter(({ type }) => type === "INSTANCE") as Instance[];
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
