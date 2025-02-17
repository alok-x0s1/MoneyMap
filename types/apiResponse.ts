export interface SuccessResponse<T> {
	success: true;
	message: string;
	data: T;
}

export interface ErrorResponse {
	success: false;
	message: string;
	errorDetails?: string;
}
