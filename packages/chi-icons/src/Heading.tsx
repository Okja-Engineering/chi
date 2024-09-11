import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeading = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M8.754 2.05a.45.45 0 1 0 0 .9H9.95v4.1h-4.9v-4.1h1.204a.45.45 0 1 0 0-.9h-3.5a.45.45 0 1 0 0 .9H3.95v9.1H2.754a.45.45 0 0 0 0 .9h3.5a.45.45 0 0 0 0-.9H5.05v-4.1h4.9v4.1H8.754a.45.45 0 0 0 0 .9h3.5a.45.45 0 0 0 0-.9H11.05v-9.1h1.204a.45.45 0 0 0 0-.9z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgHeading);
export default ForwardRef;