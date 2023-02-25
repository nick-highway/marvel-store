import {Avatar, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import React from 'react';
import IComic from '../model/Comic';

interface ComicProps {
    comic: IComic
}

function Comic({ comic }: ComicProps) {
    const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    return (
        <ListItem key={comic.title}>
            <ListItemAvatar>
                <Avatar alt="Selected Image"
                        src={imageUrl}
                        variant="square" />
            </ListItemAvatar>
            <ListItemText primary={comic.title} secondary={comic.description ? comic.description : 'description'} />
        </ListItem>
    );
}

export default Comic;
