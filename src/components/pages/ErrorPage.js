import { useRouteError } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { Helmet } from 'react-helmet';

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <>
            <Helmet>
                <title>Attire - ErrorPage</title>
            </Helmet>
            <Header/>
            <div className='content'>
                <div className="errorbox">
                    <p className='title1'>Opps!</p>
                    <p className='txterr'> Sorry, something went wrong</p>
                    <p className='txterr'>{error.statusText ?? error.message}</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}
