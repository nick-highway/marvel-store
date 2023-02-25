import { useState, useEffect } from 'react';
import md5 from 'md5';
import { API_PUBLIC_KEY, API_PRIVATE_KEY } from '../config'

interface Parameters {
    [key: string]: string;
}

interface UseAPIProps<T> {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    parameters: Parameters
    body?: T;
}

interface ApiResponse {
    data?: any;
    error?: any;
}

interface AuthConfig {
    publicKey: string;
    privateKey: string;
}

function useAPI<T extends {}>({
                                  url,
                                  method,
                                  parameters,
                                  body,
                              }: UseAPIProps<T>): { response: ApiResponse, isLoading: boolean } {
    const [response, setResponse] = useState<ApiResponse>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [authConfig, setAuthConfig] = useState<AuthConfig>({
        publicKey: API_PUBLIC_KEY,
        privateKey: API_PRIVATE_KEY,
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const ts = Date.now().toString();
            const hash = md5(ts + authConfig.privateKey + authConfig.publicKey);


            const authParams = `apikey=${encodeURIComponent(authConfig.publicKey)}&ts=${encodeURIComponent(ts)}&hash=${encodeURIComponent(hash)}`;
            const queryParams = buildQueryString(parameters, authParams);
            try {
                const response = await fetch(`${url}?${queryParams}`, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                const json = response.json();

                if (response.ok) {
                    setResponse({data: json});
                } else {
                    setResponse({error: json});
                }
            } catch (err : any) {
                setResponse({ error: err.message })
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, method, body, authConfig]);

    return { response, isLoading };
}

function buildQueryString(parameters: Parameters, authParams: string): string {
    const params = [];

    for (const [key, value] of Object.entries(parameters)) {
        params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }

    return `${params.join('&')}&${authParams}`;
}

export default useAPI;