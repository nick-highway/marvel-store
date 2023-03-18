import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import {Grid} from '@mui/material';
import styled from 'styled-components';
import Comic from '../types';

interface ComicItemProps {
    comic: Comic
}

const CoverImage = styled.img`
    min-height: calc(${props => props.width}px * 1.5);
`;

function ComicItem({ comic }: ComicItemProps) {
    const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    const shortenTitle = comic.title.length > 40 ? `${comic.title.slice(0, 35)}...` : comic.title;
    const shortenDescription = comic.description?.length > 40 ? comic.description.slice(0, 35) : comic.description;
    const decodedDescription = new DOMParser().parseFromString(shortenDescription, 'text/html').body.textContent;
    return (
        <Grid item key={comic.id} xs={12} sm={6} md={4}>
            <Card
                variant="outlined"
                sx={(theme) => ({
                    '&:hover': {
                        borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                        transform: 'translateY(-2px)',
                    },
                })}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                    <Typography fontWeight="lg">{shortenTitle}</Typography>
                </Box>
                <CoverImage
                    src={imageUrl}
                    alt="image"
                    loading="lazy" />
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1, marginTop: 1}}>
                    <Typography fontSize="sm">
                        {decodedDescription}
                        <Link
                            component="button"
                            underline="none"
                            fontSize="sm"
                            startDecorator="…"
                            sx={{ color: 'text.tertiary' }}
                        >
                            more
                        </Link>
                    </Typography>
                </Box>
            </Card>
        </Grid>
    );
}

export default ComicItem;
