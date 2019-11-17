import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

const CONTENT_TYPE_HEADER = 'Content-Type';

/**
 * Generic REST API service
 */
@Injectable({
    providedIn: 'root',
})
export class ApiService {
    /** The API's base URL including protocol, port etc */
    public readonly baseUrl = 'https://codecamphn.herokuapp.com/api';

    /** Default request options */
    private readonly defaultOptions: any = {
        headers: {
            [CONTENT_TYPE_HEADER]: 'application/json',
        },
    };

    /** Allowed request methods */
    private readonly allowedMethods = ['GET', 'POST', 'PUT'];

    /** Constructor */
    public constructor(public http: HttpClient) {
    }

    /** Merge the given options with the default options */
    public mergeRequestOptions(options: any): object {
        const headers = {...this.defaultOptions.headers, ...(options.headers || {})};

        return {
            ...options,
            headers: new HttpHeaders(headers),
        };
    }

    /** Request wrapper */
    public async request(method: string, endpoint: string, options: object = {}): Promise<any> {
        try {
            if (!this.allowedMethods.includes(method)) {
                throw new Error(`Method "${method}" is not allowed`);
            }

            const response = await this.http
                .request<any>(method, `${this.baseUrl}${endpoint}`, this.mergeRequestOptions(options))
                .toPromise();

            if (response.status !== 200) {
                const message = response.message ? `: ${response.message}` : '';
                throw new Error(`JSEND response error - ${response.status}${message}`);
            }

            return response;
        } catch (error) {
            if (error instanceof HttpErrorResponse) {
                throw new Error(`Request failed: ${error.statusText} (${error.status})`);
            }

            if (error instanceof Error) {
                throw error;
            }

            throw new Error(error);
        }
    }

    /** Check if the connection to the api is possible */
    public async getConnectionStatus(): Promise<boolean> {
        try {
            await this.get('/monitoring/ready');
            return true;
        } catch (error) {
            return false;
        }
    }

    /** Generate a GET request for a given endpoint */
    public async get(endpoint: string, params?: any, reqOpts?: any): Promise<Response> {
        const options = {
            ...reqOpts,
            params: params ? new HttpParams() : null,
        };

        if (params) {
            Object.entries(params).forEach(
                ([key, value]) => (options.params = options.params.set(key, value))
            );
        }

        return this.request('GET', endpoint, options);
    }

    /** Generate a POST request for a given endpoint */
    public async post(endpoint: string, body: any, reqOpts?: any): Promise<Response> {
        return this.request('POST', endpoint, {...reqOpts, body});
    }

    /** Generate a PUT request for a given endpoint */
    public async put(endpoint: string, body: any, reqOpts?: any): Promise<Response> {
        return this.request('PUT', endpoint, {...reqOpts, body});
    }
}
