import BlogList from "./Blog";
import useFetch from "./useFetch";

const Home = () => {
    const {
        data: blogs,
        isLoading,
        error,
    } = useFetch(
        "https://my-json-server.typicode.com/ahmed-abbe/JSON-server/blogs"
    );

    return (
        <section className="home">
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading"></div>}
            {blogs && <BlogList blogs={blogs} />}
        </section>
    );
};

export default Home;
