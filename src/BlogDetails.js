import useFetch from "./useFetch";

const BlogDetails = () => {
    let id = window.location.pathname.split("/")[2];

    const {
        data: blog,
        isLoading,
        error,
    } = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="blog-detail">
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading"></div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>Wrriten by {blog.author}</p>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
