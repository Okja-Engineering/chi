import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkNone1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.564 4H5.5a.5.5 0 0 1 0 1h-.875c-.604 0-.836.002-1.019.037-.803.154-1.414.752-1.568 1.496-.035.17-.038.384-.038.967 0 .582.003.798.038.967.154.744.765 1.342 1.568 1.496.183.035.415.037 1.019.037H5.5a.5.5 0 1 1 0 1h-.935c-.523 0-.858 0-1.147-.055-1.18-.226-2.12-1.116-2.36-2.275C1 8.387 1 8.06 1 7.563v-.126c0-.497 0-.824.058-1.107.24-1.16 1.18-2.05 2.36-2.275C3.708 4 4.042 4 4.564 4m6.83 1.037C11.21 5.002 10.979 5 10.375 5H9.5a.5.5 0 1 1 0-1h.935c.523 0 .858 0 1.146.055 1.18.225 2.12 1.115 2.36 2.275.06.283.06.61.059 1.107v.126c0 .497 0 .824-.059 1.107-.24 1.16-1.18 2.05-2.36 2.275-.288.055-.623.055-1.145.055H9.5a.5.5 0 0 1 0-1h.875c.604 0 .836-.002 1.019-.037.803-.154 1.414-.752 1.568-1.496.035-.17.038-.385.038-.967 0-.583-.003-.798-.038-.967-.154-.744-.765-1.343-1.568-1.496" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLinkNone1);
export default ForwardRef;