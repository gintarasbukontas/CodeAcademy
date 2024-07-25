export default function errorFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>ErrorFallback Component</p>
      <p>{error.message}</p>
    </div>
  );
}
