export const HttpStatus = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
} as const;

export const ErrorMessages = {
    BAD_REQUEST: "Invalid request data.",
    INVALID_CREDENTIALS: "User or password incorrect.",
    ACCESS_DENIED: "You do not have permission.",
    NOT_FOUND: "Resource not found.",
    SERVER_ERROR: "Internal server error. Try again later."
};
