import { AxiosError } from 'axios';

export const printSuccess = (queryKey: string, data: unknown) => {
    console.log(queryKey + ' - success :');
    console.log(data);
};

export const printError = (queryKey: string, error: AxiosError) => {
    console.log(queryKey + ' - error :');
    console.log(error);
}