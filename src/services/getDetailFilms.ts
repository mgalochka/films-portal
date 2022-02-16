import axios, {AxiosResponse, AxiosRequestConfig}  from "axios";

const getDetailFilms = (id:string): Promise<AxiosResponse> => {
    const option: AxiosRequestConfig = {
        method: 'GET',
        url: `https://api.tvmaze.com/shows/${id}`,
    };
    return axios.request(option)
}



export default getDetailFilms;
