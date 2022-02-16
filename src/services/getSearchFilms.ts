import axios, { AxiosResponse } from "axios";

const getSearchFilms = (value: string): Promise<AxiosResponse> =>
axios.get(`https://api.tvmaze.com/search/shows?q=${value}`);

export default getSearchFilms;

