export default function errorFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <p>{error.message}</p>
    </div>
  );
}
