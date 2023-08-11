type Status = 'AUTHORIZED' | 'DENIED'

type statusAuth = {
    message: string,
    status: Status
}

export { statusAuth, Status }