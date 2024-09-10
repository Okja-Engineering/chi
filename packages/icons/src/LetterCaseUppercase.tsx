import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLetterCaseUppercase = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M3.626 2.75a.5.5 0 0 1 .469.327l3.075 8.32a.5.5 0 0 1-.938.346L5.224 9.016H2.027L1.02 11.743a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .469-.326m0 1.942L4.91 8.166H2.34zm7.746-1.942a.5.5 0 0 1 .469.327l3.075 8.32a.5.5 0 0 1-.938.346L12.97 9.016H9.774l-1.008 2.727a.5.5 0 1 1-.938-.347l3.075-8.32a.5.5 0 0 1 .469-.326m0 1.942 1.284 3.474h-2.568z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLetterCaseUppercase);
export default ForwardRef;