import {Avatar, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import React from 'react';
import Comic from '../types';

interface ComicItemProps {
    comic: Comic
}

function ComicItem({ comic }: ComicItemProps) {
    const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    return (
        <ListItem key={comic.id}>
            <ListItemAvatar>
                <Avatar alt="Selected Image"
                        src={imageUrl}
                        variant="square" />
            </ListItemAvatar>
            <ListItemText primary={comic.title} secondary={comic.description ? comic.description : 'description'} />
        </ListItem>
    );
}

export default ComicItem;
