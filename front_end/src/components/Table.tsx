import './Table.css'

export const Table = ({ data, columns, onClick }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>[],
    columns: string[],
    onClick?: (i: number, e: React.MouseEvent<HTMLDivElement>) => void
}) => {


    return (
        <div className='Table'>
            <div className='Table-rows'>
                {
                    columns.map((column, index) => (
                        <div key={index} className='Table-values-column'>
                            <div key={index} className='Table-key'>
                                {column}
                            </div>
                            {
                                data.map((row, index) => (
                                    <div
                                        key={index}
                                        className={`Table-value ${onClick ? 'clickable' : ''}`}
                                        onClick={(e) => onClick && onClick(index, e)}
                                    >
                                        {row[column]}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
