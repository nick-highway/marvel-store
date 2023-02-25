import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import IComic from "../model/Comic";
import React from "react";

interface ComicProps {
    comic: IComic
}

const Comic = ({ comic }: ComicProps) => {
    const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    return (
        <ListItem key={comic.title}>
            <ListItemAvatar>
                <Avatar alt="Selected Image"
                        src={imageUrl}
                        variant="square" />
            </ListItemAvatar>
            <ListItemText primary={comic.title} secondary={comic.description ? comic.description : "description"} />
        </ListItem>
    );
};

export default Comic;
