export const throwError = (mesagge: string, status: number, data?: any) => {
    const error: any = new Error(mesagge)
    error.status = status
    error.data = data
    throw error
}