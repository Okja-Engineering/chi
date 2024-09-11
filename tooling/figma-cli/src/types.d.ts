enum ERRORS {
  FIGMA_API = "FIGMA_API",
}

interface ErrorResponse {
  readonly err?: string;
  readonly status?: 400 | 403 | 404 | 429 | 500;
}

class CodedError extends Error {
  public code: ERRORS;
  public hideStack: boolean;

  constructor(code: ERRORS, message: string, hideStack = false) {
    super(message);
    this.code = code;
    this.hideStack = hideStack;
    Object.setPrototypeOf(this, CodedError.prototype);
  }
}

interface Config {
  baseUrl: string;
  fileKey: string;
  headers: Headers;
}
