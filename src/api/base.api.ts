import axios from "axios";

export const BaseURL = "https://rickandmortyapi.com/api/";

export const instance = axios.create({
    baseURL : BaseURL
})