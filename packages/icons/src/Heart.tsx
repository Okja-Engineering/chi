import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeart = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.893 2.352a2.547 2.547 0 0 0-2.54 2.553c0 1.477.857 3.012 2.02 4.43 1.021 1.246 2.222 2.335 3.127 3.143.905-.808 2.106-1.897 3.127-3.143 1.163-1.418 2.02-2.953 2.02-4.43a2.547 2.547 0 0 0-2.54-2.553c-.836 0-1.288.291-1.567.606-.261.295-.394.628-.515.932l-.063.156a.5.5 0 0 1-.924 0l-.063-.156c-.121-.304-.254-.637-.515-.932-.279-.315-.73-.606-1.567-.606m-3.54 2.553a3.547 3.547 0 0 1 3.54-3.553c1.115 0 1.842.408 2.316.943.112.126.208.259.291.39.083-.131.18-.264.291-.39.474-.535 1.2-.943 2.316-.943a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;