import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError("Sorry something went wrong try again later.");
                setIsLoading(false);
                throw Error(err.message);
            });
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
