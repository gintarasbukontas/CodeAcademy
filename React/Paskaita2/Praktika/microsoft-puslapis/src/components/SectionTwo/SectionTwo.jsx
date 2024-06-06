import classnames from "classnames";

export default function SectionTwo({ title, text, text2, bgColor }) {
  return (
    <section className={classnames("padding", bgColor)}>
      <h1 className={"bgGreen"}>{title}</h1>
      <p>{text}</p>
      <p>{text2}</p>
    </section>
  );
}
