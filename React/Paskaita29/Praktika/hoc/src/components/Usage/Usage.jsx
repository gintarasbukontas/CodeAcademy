import DataFetcher from "../DataFetcher/DataFetcher";

export default function Usage() {
  return (
    <div>
      <DataFetcher
        render={({ posts, isLoading }) => {
          if (isLoading) return <p>Loading...</p>;
          if (!posts.length) return <p>No data available.</p>;

          return (
            <div>
              {posts.map((post) => (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}
