import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkBreak2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5M.646.646a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708M0 4.5A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m12 6a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M10.5 12a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5m1.646.146a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 1 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707M7.765 3.7c.427-.427.592-.589.747-.694.676-.46 1.531-.468 2.166-.051.145.095.299.245.71.657.413.412.563.566.658.71.417.636.408 1.49-.052 2.167-.104.154-.267.32-.694.747l-.618.619a.5.5 0 1 0 .707.707l.618-.619.043-.043c.37-.37.606-.606.772-.849.675-.994.71-2.288.06-3.278-.16-.241-.39-.472-.742-.823l-.044-.045-.045-.045c-.351-.351-.582-.582-.824-.74-.99-.651-2.283-.616-3.277.06-.243.164-.48.4-.85.77l-.042.043-.619.619a.5.5 0 0 0 .707.707zM2.992 7.06l-.043.042c-.37.37-.606.606-.771.85-.676.993-.71 2.287-.06 3.277.158.241.39.472.74.824l.046.044.044.045c.351.351.582.582.824.74.99.651 2.284.616 3.278-.059.243-.165.48-.402.849-.771l.043-.043.618-.619a.5.5 0 0 0-.707-.707l-.619.619c-.427.427-.592.589-.746.694-.677.46-1.532.468-2.167.051-.144-.095-.298-.245-.71-.657s-.563-.566-.657-.71c-.418-.636-.409-1.49.05-2.167.106-.154.268-.32.695-.747l.619-.619a.5.5 0 1 0-.707-.707z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLinkBreak2);
export default ForwardRef;