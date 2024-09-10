import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconJarLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5.003c-.695 0-1.25.278-1.25.747 0 .247.174.37.327.477.118.084.223.158.223.273 0 .207-.738.243-1.602.284-1.222.06-2.698.13-2.698.716A.5.5 0 0 0 3 3h9a.5.5 0 0 0 .5-.5c0-.586-1.476-.657-2.698-.716C8.938 1.743 8.2 1.707 8.2 1.5c0-.115.105-.19.223-.273.153-.107.327-.23.327-.477 0-.469-.555-.747-1.25-.747m-4.605 6.12a1.96 1.96 0 0 0-.87 1.933l.81 4.421A1.87 1.87 0 0 0 4.662 14h5.676c.898 0 1.651-.644 1.826-1.523l.81-4.42c.116-.733-.145-1.524-.84-1.963-.405-.264-.492-.762 0-.966C12.828 4.864 12.695 4 12 4H3c-.695 0-.801.893-.105 1.157.491.175.404.673 0 .966M8.2 6.25c0-.432-.114-.874-.294-1.25H4.111a1.4 1.4 0 0 1 .118.655c-.034.57-.383 1.014-.749 1.278l-.025.018-.026.017a.96.96 0 0 0-.418.92l.807 4.4a.87.87 0 0 0 .843.712h5.676c.4 0 .756-.285.843-.711l.807-4.4c.061-.407-.092-.763-.388-.95l-.011-.007c-.393-.256-.755-.704-.79-1.284A1.4 1.4 0 0 1 10.912 5H9.055A2 2 0 0 0 9 5.5c0 .474.217.871.444 1.287.249.456.51.934.51 1.563 0 .92-.455 1.492-1.332 1.492-.49 0-1.044-.381-1.044-1.084 0-.405.138-.742.283-1.098.164-.402.34-.83.34-1.41" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgIconJarLogo);
export default ForwardRef;