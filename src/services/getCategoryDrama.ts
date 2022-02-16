import axios, {AxiosResponse, AxiosRequestConfig}  from "axios";

const getCategoryDrama = (): Promise<AxiosResponse> => {
    const option: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://api.tvmaze.com/search/shows?q=drama',
    };
    return axios.request(option)
    
}


export default getCategoryDrama;
