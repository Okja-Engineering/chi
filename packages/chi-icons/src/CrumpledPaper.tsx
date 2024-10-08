import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrumpledPaper = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.61.063a.45.45 0 0 0-.528.27l-.928 2.32-2.321.93a.45.45 0 0 0-.193.687l1.371 1.829-.948 3.792a.45.45 0 0 0 .264.524L4.2 11.613l1.425 2.137a.45.45 0 0 0 .498.183l3.5-1 .018-.006 3-1a.45.45 0 0 0 .297-.33l1-4.5a.45.45 0 0 0-.169-.457l-1.82-1.365V3a.45.45 0 0 0-.249-.402l-3-1.5a.5.5 0 0 0-.092-.035zm6.822 5.949 1.343 1.007-2.563 2.135a.45.45 0 0 0-.139.204l-.82 2.457-1.515-.947a.45.45 0 1 0-.477.764l1.142.713-2.21.632L4.873 11a.45.45 0 0 0-.2-.165L2.03 9.734l.821-3.284H5a.45.45 0 1 0 0-.9H2.725L1.712 4.2l1.802-.721 2.844.948a.45.45 0 0 0 .493-.146l1.773-2.216 2.426 1.213v1.917l-2.217.887a.45.45 0 0 0-.26.276l-.5 1.5a.45.45 0 1 0 .854.284L9.36 6.84zM7.711 1.766 6.345 3.474l-2.25-.75.677-1.692zm2.5 10.023 1.905-.635.659-2.964-1.889 1.574z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCrumpledPaper);
export default ForwardRef;