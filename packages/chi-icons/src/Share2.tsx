import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShare2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M3.5 5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1.25a.5.5 0 0 1 0-1h1.25A1.5 1.5 0 0 1 13 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-6A1.5 1.5 0 0 1 3.5 4h1.25a.5.5 0 0 1 0 1zM7 1.636 5.568 3.068a.45.45 0 0 1-.636-.636l2.25-2.25a.45.45 0 0 1 .636 0l2.25 2.25a.45.45 0 0 1-.636.636L8 1.636V8.5a.5.5 0 0 1-1 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgShare2);
export default ForwardRef;