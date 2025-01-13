import { useGetAllPostDataQuery } from './redux/features/post/postApi';

const App = () => {
  const { data, isLoading, isError, error } = useGetAllPostDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || 'Something went wrong!'}</div>;
  }

  return (
    <div>
      <h1>Redux Toolkit - Posts</h1>
      <div>
        {data && data.length > 0 ? (
          <ul>
            {data.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default App;
