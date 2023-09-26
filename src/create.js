import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [body, setBody] = useState();
    const [isLoading, setIsLoading] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault();

        if (title && body && author) {
            let newBlog = { title, body, author };

            setIsLoading(true);

            fetch(
                "https://my-json-server.typicode.com/ahmed-abbe/JSON-server/blogs",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newBlog),
                }
            ).then(() => {
                setIsLoading(false);
                window.location.assign("/Blog-App");
            });
        }
    };

    return (
        <form className="create-form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Create New Blog!</h1>
            <div>
                <label htmlFor="title">Type The Blog Tilte</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    autoComplete="off"
                    minLength="3"
                    placeholder="Type at least 3 chars"
                    onChange={(e) => {
                        handleInput(3, e.target, setTitle);
                    }}
                />
            </div>
            <div>
                <label htmlFor="author">Choose Author</label>
                <input
                    id="author"
                    name="author"
                    list="author-list"
                    required
                    autoComplete="off"
                    placeholder="Choose author from the list"
                    onBlur={(e) => {
                        handleSelect(
                            ["Mohamed", "Ahmed", "Ali", "Other"],
                            e.target,
                            setAuthor
                        );
                    }}
                />
                <datalist id="author-list">
                    <option value="Mohamed"></option>
                    <option value="Ahmed"></option>
                    <option value="Ali"></option>
                    <option value="Other"></option>
                </datalist>
            </div>
            <div>
                <label htmlFor="body">Type Blog Body</label>
                <textarea
                    id="body"
                    name="body"
                    required
                    minLength="15"
                    placeholder="Type at least 15 chars"
                    onChange={(e) => {
                        handleInput(15, e.target, setBody);
                    }}
                ></textarea>
            </div>
            {!isLoading && <button>Add blog</button>}
            {isLoading && <button class="wait">Adding Your Blog</button>}
        </form>
    );
};
let handleInput = (len, element, setFunc) => {
    if (element.value.length < len) {
        element.style.cssText = "border-color: red; caret-color: red;";
        setFunc(undefined);
    } else {
        element.style.cssText =
            "border-color: var(--main-color); caret-color: var(--main-color);";
        setFunc(element.value);
    }
};

let handleSelect = (arr, element, setFunc) => {
    let newArr = arr.filter((authorName) => authorName === element.value);

    if (newArr.length === 0) {
        element.style.cssText = "border-color: red; caret-color: red;";
        setFunc(undefined);
    } else {
        element.style.cssText =
            "border-color: var(--main-color); caret-color: var(--main-color);";
        setFunc(element.value);
    }
};

export default Create;
