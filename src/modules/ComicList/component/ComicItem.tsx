import {Card, CardContent, CardHeader, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';
import Comic from '../types';

interface ComicItemProps {
    comic: Comic
}

function ComicItem({ comic }: ComicItemProps) {
    const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    const decodedDescription = comic.description ?
        new DOMParser().parseFromString(comic.description, 'text/html').body.textContent
        : 'description';
    return (
        <Grid item key={comic.id} xs={12} sm={6} md={4}>
            <Card>
                <CardHeader title={comic.title} />
                <CardMedia
                    component="img"
                    height="250"
                    image={imageUrl}
                    alt="Selected Image"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {decodedDescription}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ComicItem;
