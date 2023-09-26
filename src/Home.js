import BlogList from "./Blog";
import useFetch from "./useFetch";

const Home = () => {
    const {
        data: blogs,
        isLoading,
        error,
    } = useFetch("http://localhost:8000/blogs");

    return (
        <section className="home">
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading"></div>}
            {blogs && <BlogList blogs={blogs} />}
        </section>
    );
};

export default Home;
