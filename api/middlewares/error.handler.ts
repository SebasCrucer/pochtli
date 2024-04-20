import { ErrorRequestHandler } from "express";
import { io } from "..";

export const logErrors: ErrorRequestHandler = (err, _req, _res, next) => {
    !err.status && console.error('¡ERROR EN EL SERVIDOR!: ', err);
    next(err);
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const { session_id } = req.body
    const error = {
        message: err.message,
        stack: err.stack,
        error: err,
        errno: err.errno && err.errno
    }
    io.to(session_id).emit('error', { error })
    res.status(err.status ? err.status : 500).json(error);
    next()
}