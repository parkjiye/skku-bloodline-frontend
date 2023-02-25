import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getAllConcerts, Response } from '../../apis/concerts/getAllConcerts';
import { printError, printSuccess } from '../../utils/printResult';

const queryKey = 'getAllConcerts';

const useGetAllConcertsQuery = () => {
    return useQuery<Response, AxiosError>(queryKey, ()=>getAllConcerts(), {
        onSuccess: data=> printSuccess(queryKey, data),
        onError: error=> printError(queryKey, error),
    });
};

export default useGetAllConcertsQuery;
