import { ApiResponse } from "../../types/apiResponse";
import { instance } from "../instance";

export type Response = ApiResponse<{id: string; title: string; date: string; place: string; stage: number; image: string;}[]>;

export const getAllConcerts = async() => {
    const response = await instance.get<Response>('/concerts');
    return response.data;
}