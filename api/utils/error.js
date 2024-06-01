
// function for custom error , sometimes we need to show custom error in our application 

export const errorHandler = (statusCode, message) => {

    const error = new Error();

    error.statusCode = statusCode;
    error.message = message;
    return error;
} 