import { useEffect, useState } from 'react'
import './Table.css'

export const Table = ({ data }) => {

    const [columns, setColumns] = useState<string[]>([])

    useEffect(() => {
        setColumns(Object.keys(data[0]))
    }, [data])


    return (
        <div>{columns}</div>
    )
}
