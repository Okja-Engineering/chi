import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStar = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="m6.98 1.252-.022.05L5.588 4.6a.3.3 0 0 1-.253.184l-3.561.286-.055.004-.331.027-.3.024a.3.3 0 0 0-.172.527l.23.196.252.216.041.036 2.713 2.324a.3.3 0 0 1 .097.297l-.83 3.475-.012.053-.077.323-.07.294a.3.3 0 0 0 .448.326l.258-.158.284-.173.046-.028 3.049-1.863a.3.3 0 0 1 .312 0l3.049 1.863.046.028.284.173.258.158a.3.3 0 0 0 .448-.326l-.07-.293-.077-.324-.013-.053-.829-3.475a.3.3 0 0 1 .097-.297L13.562 6.1l.041-.036.253-.216.23-.196a.3.3 0 0 0-.172-.527l-.3-.024-.332-.027-.055-.004-3.56-.286a.3.3 0 0 1-.254-.184L8.042 1.302l-.021-.05-.128-.307-.116-.279a.3.3 0 0 0-.554 0l-.116.279zm.52 1.352-.99 2.38a1.3 1.3 0 0 1-1.096.797l-2.57.206 1.958 1.677a1.3 1.3 0 0 1 .418 1.29l-.598 2.507 2.2-1.344a1.3 1.3 0 0 1 1.356 0l2.2 1.344-.598-2.508a1.3 1.3 0 0 1 .418-1.289l1.958-1.677-2.57-.206a1.3 1.3 0 0 1-1.096-.797z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;