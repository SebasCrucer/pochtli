import { useNavigate, useNavigation } from 'react-router-dom';
import './PageContainer.css'

export const PageContainer = ({ from, title, children, actions }: {
    from: string,
    title: string,
    children: React.ReactNode,
    actions?: React.ReactNode
}) => {
    const navigate = useNavigate();
    const { state } = useNavigation()

    return (
        <section className="PageContainer">
            <div>
                <button
                    className='PageContainer-Options-back'
                    onClick={(e) => { e.preventDefault(); navigate(from) }}
                    disabled={(state === 'submitting')}
                >
                    <box-icon name='chevron-left' />
                    Volver
                </button>
            </div>
            <div className='PageContainerCont'>
                <header className="PageContainerHeader">
                    <h1 className="PageContainerTitle">{title}</h1>
                    {actions && <div className="PageContainerActions">{actions}</div>}
                </header>
                <div className="PageContainer__content">
                    {children}
                </div>
            </div>
        </section>
    )
}
