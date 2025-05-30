// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconBug } from '@tabler/icons-react';

// type
import { NavItemType } from 'types';

// constant
const icons = { IconKey, IconBug };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages: NavItemType = {
    id: 'pages',
    title: <FormattedMessage id="pages" />,
    caption: <FormattedMessage id="pages-caption" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'myPages',
            title: <FormattedMessage id="My pages" />,
            type: 'collapse',
            icon: icons.IconBug,
            children: [
                {
                    id: 'prueba-page',
                    title: <FormattedMessage id="Prueba" />,
                    type: 'item',
                    url: '/prueba-page',
                    target: true
                }
            ]
        },
        {
            id: 'maintenance',
            title: <FormattedMessage id="maintenance" />,
            type: 'collapse',
            icon: icons.IconBug,
            children: [
                {
                    id: 'error',
                    title: <FormattedMessage id="error-404" />,
                    type: 'item',
                    url: '/pages/error',
                    target: true
                },
                {
                    id: 'error-500',
                    title: <FormattedMessage id="error-500" />,
                    type: 'item',
                    url: '/pages/500',
                    target: true
                },
                {
                    id: 'coming-soon',
                    title: <FormattedMessage id="coming-soon" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'coming-soon1',
                            title: (
                                <>
                                    <FormattedMessage id="coming-soon" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/pages/coming-soon1',
                            target: true
                        },
                        {
                            id: 'coming-soon2',
                            title: (
                                <>
                                    <FormattedMessage id="coming-soon" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/pages/coming-soon2',
                            target: true
                        }
                    ]
                },
                {
                    id: 'under-construction',
                    title: <FormattedMessage id="under-construction" />,
                    type: 'item',
                    url: '/pages/under-construction',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
