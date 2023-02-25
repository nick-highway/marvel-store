import IComic from "../model/Comic";
import Comic from "../component/Comic"
import React, { useState } from "react";
import useAPI from "../../../hooks/UseApi";
import { List } from "@mui/material";

const ComicsContainer = () => {
    console.log("comics container started")
    const [options, setOptions] = useState<{}>({orderBy: "title", limit: 20, offset: 0})
    const [comics, setComics] = useState<IComic[]>([]);
    const { response, isLoading } = useAPI<{}>({
        url: "https://gateway.marvel.com/v1/public/comics",
        parameters: options,
        method: "GET",
        body: {},
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (response.error) {
        return <div>Error: {response.error}</div>;
    }

    const newComics = response.data?.results ?? [];
    setComics((prevComics) => [...prevComics, ...newComics]);

    return (
        <div>
            <List>
                {comics.map((comic) => (
                    <Comic comic={comic}/>
                ))}
            </List>
        </div>
    );
};

export default ComicsContainer;