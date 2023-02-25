export interface ApiResponse<T = Record<string, never>> {
    statusCode: string;
    message: string;
    data: T;
}