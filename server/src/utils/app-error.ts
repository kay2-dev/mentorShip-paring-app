export class AppErr extends Error {
    statusCode: number
    status: string
    isOperatoinal: boolean

    constructor (message: string, statusCode: number) {

        super(message)

        this.statusCode = statusCode
        this.status = `${ statusCode }`.startsWith('4') ? 'fail' : 'error'
        this.isOperatoinal = true
    }

}

// notFound
// UnAuthorised
// ineternalServerError
// badRequest

export class NotFoundError extends AppErr {
    constructor (message = 'Not found') {
        super(message, 404)
    }
}


export class BadRequestError extends AppErr {
    constructor (message = 'Bad Request') {
        super(message, 401)
    }
}


export class UnAuthorisedRequestError extends AppErr {
    constructor (message = 'UnAuthorized request') {
        super(message, 403)
    }
}

export class ineternalServerError extends AppErr {
    constructor (message = 'An internal Server error occured') {
        super(message, 401)
    }
}