import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useIntl } from 'react-intl';
import App from '../App/App';



const Layout = props => {
    const intl = useIntl();
    const [pageLang, setPageLang] = useState('en');
    useEffect(() => {
        if (intl.locale === 'en') {
            setPageLang('en');
        } else {
            setPageLang('ar');
        }
    }, [intl.locale]);
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}


export default Layout;
