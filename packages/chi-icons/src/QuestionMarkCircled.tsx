import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionMarkCircled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346 5.673 5.673 0 0 0 0-11.346m.75 8.673a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-2.2-4.25c0-.678.585-1.325 1.45-1.325s1.45.647 1.45 1.325c0 .491-.27.742-.736 1.025q-.078.047-.176.104a5 5 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004.4.4 0 0 1 .1-.098c.102-.079.215-.144.366-.232q.116-.067.27-.159c.534-.325 1.264-.861 1.264-1.965 0-1.322-1.115-2.425-2.55-2.425S4.95 4.928 4.95 6.25a.55.55 0 0 0 1.1 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgQuestionMarkCircled);
export default ForwardRef;