import React, {useEffect, useState} from 'react';
import { List } from '@mui/material';
import Comic from '../types';
import ComicItem from '../component/ComicItem'
import useApi from '../../common/hooks/useApi';

interface ComicPage {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: Comic[]
}

function ComicsContainer() {
    const [options, setOptions] = useState({orderBy: 'title', limit: '20', offset: '0'})
    const [comics, setComics] = useState<Comic[]>([]);
    const { data, error, isLoading } = useApi<object, ComicPage>({
        url: '/v1/public/comics',
        parameters: options,
        method: 'GET'
    });

    useEffect(() => {
        if (data) {
            setComics(data.results ?? []);
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <List>
                {comics.map((comic) => (
                    <ComicItem comic={comic}/>
                ))}
            </List>
        </div>
    );
}

export default ComicsContainer;