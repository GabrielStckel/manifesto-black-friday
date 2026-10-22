import { useVisibleAnimation } from "./useVisibleAnimation";

export function MarkedTitle({ text, phrase, className = "" }: { text: string; phrase: string; className?: string }) {
  const { ref, visible } = useVisibleAnimation<HTMLHeadingElement>(true, "0px 0px -12% 0px");
  const index = text.indexOf(phrase);
  return <h2 ref={ref} className={`mk ${visible ? "is-in" : ""} ${className}`}>
    {index < 0 ? text : <>{text.slice(0, index)}<mark>{phrase}</mark>{text.slice(index + phrase.length)}</>}
  </h2>;
}