import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M3.88 1h7.24c.403 0 .735 0 1.006.022.281.023.54.072.782.196a2 2 0 0 1 .874.874c.124.243.173.501.196.782.022.27.022.603.022 1.005v7.241c0 .403 0 .735-.022 1.006-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196-.27.022-.603.022-1.005.022H3.88c-.403 0-.735 0-1.006-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C1 11.856 1 11.523 1 11.12V3.88c0-.403 0-.735.022-1.006.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.243-.124.501-.173.782-.196C3.144 1 3.477 1 3.88 1m-.924 1.019c-.22.018-.332.05-.41.09a1 1 0 0 0-.437.437c-.04.078-.072.19-.09.41C2 3.18 2 3.472 2 3.9V7h5V2H3.9c-.428 0-.72 0-.944.019M7 8H2v3.1c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019H7zm1 0h5v3.1c0 .428 0 .72-.019.944-.018.22-.05.332-.09.41a1 1 0 0 1-.437.437c-.078.04-.19.072-.41.09-.225.019-.516.019-.944.019H8zm5-1H8V2h3.1c.428 0 .72 0 .944.019.22.018.332.05.41.09a1 1 0 0 1 .437.437c.04.078.072.19.09.41.019.225.019.516.019.944z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgComponent2);
export default ForwardRef;