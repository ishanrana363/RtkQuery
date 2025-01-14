import { Link } from 'react-router-dom';
import { useGetAllPostDataQuery } from '../redux/features/post/postApi';

const Home = () => {
    const { data, isLoading, isError, error } = useGetAllPostDataQuery();

    if (isLoading) {
        return <div>Loading...</div>; // Replace with a spinner if desired
    }

    if (isError) {
        return (
            <div>
                <h2>Error</h2>
                <p>{error?.message || 'Something went wrong!'}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Redux Toolkit - Posts</h1>
            <div>
                {data && data.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {data.slice(0, 10).map((post) => (
                            <li key={post.id} className="mb-2">
                                <Link to={`/post-details/${post.id}`}>
                                    {post.title}
                                </Link>
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

export default Home;
