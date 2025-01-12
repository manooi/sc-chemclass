export interface APIResponse<T> {
    data: T;
    status: number;
    success?: boolean;
    message?: string;
}

class HttpClient {
    static async get<T>(url: string) {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json() as Promise<APIResponse<T>>;
    }

    static async post<T>(url: string, body: any) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return response.json() as Promise<APIResponse<T>>;
    }
}

export default HttpClient;