import { createContext, useState } from "react";

type AproximatinCicleContext = {
    cicle: number,
    newIteration: () => void
} | undefined;

export const AproximatinCicleContext = createContext<AproximatinCicleContext>(undefined);

export const AproximatinCicleProvider = ({ children }: { children: React.ReactNode }) => {
    const [cicle, setCicle] = useState(100); // Valor inicial

    const newIteration = () => {
        setCicle((s) => s - 1)
    }

    return (
        <AproximatinCicleContext.Provider value={{ cicle, newIteration }}>
            {children}
        </AproximatinCicleContext.Provider>
    );
};