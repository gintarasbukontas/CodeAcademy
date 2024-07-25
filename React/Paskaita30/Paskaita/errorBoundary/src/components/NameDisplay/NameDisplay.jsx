export default function NameDisplay({ name }) {
  if (!name) {
    throw new Error("Name is required");
  }
  return <div>{name}</div>;
}
