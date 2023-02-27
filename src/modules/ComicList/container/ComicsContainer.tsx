import React, {useEffect, useState} from 'react';
import { List } from '@mui/material';
import IComic from '../model/Comic';
import Comic from '../component/Comic'
import useAPI from '../../common/hooks/UseApi';

interface ComicPage {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: IComic[]
}

interface RequestParameters {
    [key: string]: string;
}

function ComicsContainer() {
    const [options, setOptions] = useState<RequestParameters>({orderBy: 'title', limit: '20', offset: '0'})
    const [comics, setComics] = useState<IComic[]>([]);
    const { data, error, isLoading } = useAPI<object, ComicPage>({
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
                    <Comic key={comic.title} comic={comic}/>
                ))}
            </List>
        </div>
    );
}

export default ComicsContainer;