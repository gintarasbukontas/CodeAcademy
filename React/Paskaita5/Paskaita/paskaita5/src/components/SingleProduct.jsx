export default function SingleProduct(props) {
  return (
    <div className="card">
      <h4>{props.comment.name}</h4>
      <h5>{props.comment.email}</h5>
      <h5>{props.comment.body}</h5>
    </div>
  );
}
