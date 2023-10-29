import { Task, TaskWithId } from "@/redux/initialStates/tasks";
import { UserType } from "@/redux/initialStates/user";

type RequestOptionsType = {
    method: string;
    headers: {
        'accept': string;
        'Content-Type': string;
    };
    body?: BodyInit;
};

export type ErrorType = {
    error?: string
}

const requestOptions = (
    type: string,
    requestBody?: BodyInit
): RequestOptionsType => {
    const objToSend: RequestOptionsType = {
        method: type,
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
    if (requestBody) {
        objToSend['body'] = requestBody
    }
    return objToSend
}

export default class ApiService {
    private isLogged: boolean
    private readonly API_URL: string

    constructor(isLogged: boolean) {
        this.isLogged = isLogged
        this.API_URL = 'https://reqres.in/api/'
    }

    private isNotLoggedValidation() {
        if (!this.isLogged) throw new Error('No has iniciado sesión')
    }

    private async request(apiUrl: string, options?: RequestOptionsType): Promise<any> {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) await this.throwError(response, true);
            if (response.status === 204) return
            let data = await response.json();
            return data;
        } catch (error) {
            throw error
        }
    }

    async throwError (
        error: Response,
        assumingIsError: boolean = false
    ): Promise<ErrorType> {
        if (error instanceof Response) {
            const jsonError = await error.json();
            if (assumingIsError) throw jsonError
            return jsonError
        }
        if (assumingIsError) throw error
        return error
    }

    async getTasks(page: number, perPage: number): Promise<Task[]> {
        this.isNotLoggedValidation()
        const apiUrl = `${this.API_URL}resource?page=${page}&per_page=${perPage}`;
        try {
            const data = await this.request(apiUrl)
            return data.data
        } catch (error) {
            throw error
        }
    }

    async createTask(task: Task): Promise<Task> {
        this.isNotLoggedValidation()
        const requestBody = JSON.stringify(task)
        const apiUrl = `${this.API_URL}resource`;
        const options = requestOptions('POST', requestBody)
        try {
            const data = await this.request(apiUrl, options)
            data['id'] = Number(data.id)
            return data
        } catch (error) {
            throw error
        }
    }

    async updateTask(task: TaskWithId): Promise<Task> {
        this.isNotLoggedValidation()
        const parsedId = Number(task.id)
        const requestBody = JSON.stringify(task)
        const apiUrl = `${this.API_URL}resource/${parsedId}`;
        const options = requestOptions('PUT', requestBody)
        try {
            const data = await this.request(apiUrl, options)
            data['id'] = Number(task.id)
            return data
        } catch (error) {
            throw error
        }
    }

    async deleteTask(id: number): Promise<number> {
        this.isNotLoggedValidation()
        const parsedId = Number(id)
        const apiUrl = `${this.API_URL}resource/${parsedId}`;
        const options = requestOptions('DELETE')
        try {
            await this.request(apiUrl, options)
            return parsedId
        } catch (error) {
            throw error
        }
    }

    async login(email: string, password: string): Promise<UserType> {
        const requestBody = JSON.stringify({
            email,
            password
        })
        const apiUrl = `${this.API_URL}login`
        const options = requestOptions('POST', requestBody)
        try {
            const data = await this.request(apiUrl, options)
            return data
        } catch (error) {
            this.throwError(error as Response, true)
            throw error
        }
    }

    async logout(): Promise<undefined> {
        const apiUrl = `${this.API_URL}logout`
        const options = requestOptions('POST')
        try {
            const data = await this.request(apiUrl, options)
            return data
        } catch (error) {
            throw error
        }
    }
}