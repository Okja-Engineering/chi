import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExclamationTriangle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M8.445.609a1.1 1.1 0 0 0-1.89 0L.161 11.337A1.1 1.1 0 0 0 1.106 13h12.788a1.1 1.1 0 0 0 .945-1.663zm-1.03.512a.1.1 0 0 1 .17 0l6.395 10.728a.1.1 0 0 1-.086.151H1.106a.1.1 0 0 1-.086-.151zm-.588 3.365a.674.674 0 1 1 1.346 0L8.02 8.487a.52.52 0 0 1-1.038 0zm1.423 5.99a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgExclamationTriangle);
export default ForwardRef;