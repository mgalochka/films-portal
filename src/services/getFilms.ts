import axios, {AxiosResponse, AxiosRequestConfig}  from "axios";

const getFilms = (): Promise<AxiosResponse> => {
    const option: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://api.tvmaze.com/shows',
    };
    return axios.request(option)
}


export default getFilms;