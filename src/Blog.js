import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            <h2 className="heading">Read Blogs!!</h2>
            {blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    <Link to={`blog/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>Wrriten by {blog.author}</p>
                    </Link>
                    <button onClick={() => deleteblog(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

async function deleteblog(id) {
    await fetch(
        `https://my-json-server.typicode.com/ahmed-abbe/JSON-server/blogs/${id}`,
        {
            method: "DELETE",
        }
    );
    window.location.assign("/Blog-App");
}

export default BlogList;
