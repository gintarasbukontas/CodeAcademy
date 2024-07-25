export default function ErrorProneComponent({ name }) {
  if (!name) {
    throw new Error("Name is required");
  }
  return <div>{name}</div>;
}
