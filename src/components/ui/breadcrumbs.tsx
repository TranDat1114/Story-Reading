import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '@components/pages/routes';
import { Home } from 'lucide-react';

const Breadcrumbs = () => {
    const { t } = useTranslation(
        "translation",
        { keyPrefix: "header" }
    )

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div className="text-base breadcrumbs px-2 lg:px-8">
            <ul>
                <li>
                    <Link to={"/"}>
                        <Home size={16} />
                    </Link>
                </li>
                <li>
                    <Link to="/" className='link link-hover'>{t('home')}</Link>
                </li>
                {
                    pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        return (
                            routes.some(p => p.name === name) && (
                                <li key={name}>
                                    {
                                        <Link to={routeTo} className='link link-hover'>
                                            {t(`${name}`)}
                                        </Link>
                                    }
                                </li>
                            )

                        )
                    })
                }
            </ul>
        </div>
    )
}

export { Breadcrumbs }
