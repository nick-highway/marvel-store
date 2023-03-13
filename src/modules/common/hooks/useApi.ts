import { useState, useEffect } from 'react';
import md5 from 'md5';
import { API_PUBLIC_KEY, API_PRIVATE_KEY } from '../../../config'

interface Parameters {
    [key: string]: string;
}

interface UseAPIProps<T> {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    parameters: Parameters
    body?: T;
}

interface AuthConfig {
    publicKey: string;
    privateKey: string;
}

interface ApiError {
    code?: string,
    message: string
}

interface ApiResult<R> {
    data?: R,
    error?: ApiError,
    isLoading: boolean
}

const BASE_URL = 'https://gateway.marvel.com';

function useApi<T, R extends object>({
                                  url,
                                  method,
                                  parameters,
                                  body,
                              }: UseAPIProps<T>): ApiResult<R> {
    const [data, setData] = useState<R>();
    const [error, setError] = useState<ApiError>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const authConfig: AuthConfig = {
        publicKey: API_PUBLIC_KEY,
        privateKey: API_PRIVATE_KEY,
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const ts = Date.now().toString();
            const hash = md5(ts + authConfig.privateKey + authConfig.publicKey);

            try {
                const urlParams = new URLSearchParams({
                    ...parameters,
                    apikey: authConfig.publicKey,
                    ts,
                    hash
                }).toString()

                const response = await fetch(`${BASE_URL}${url}?${urlParams}`, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : null,
                });

                const json = await response.json();

                if (response.ok) {
                    setData(json.data);
                } else {
                    setError(json);
                }
            } catch (err : unknown) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, method, parameters, body, authConfig]);

    return { data, error, isLoading };
}

export default useApi;