import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinRight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M12.95 1.5a.45.45 0 0 0-.9 0v12a.45.45 0 1 0 .9 0zM6.568 3.932a.45.45 0 1 0-.636.636L8.414 7.05H.5a.45.45 0 0 0 0 .9h7.914l-2.482 2.482a.45.45 0 1 0 .636.636l3.25-3.25a.45.45 0 0 0 0-.636z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgPinRight);
export default ForwardRef;