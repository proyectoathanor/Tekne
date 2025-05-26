import { FormattedMessage } from 'react-intl';
import { IconFlask2 } from '@tabler/icons-react';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS - ATHANOR PAGE ||============================== //

const icons = {
    IconFlask2
};
const athanorPage: NavItemType = {
    id: 'athanor-page',
    title: <FormattedMessage id="Athanor" />,
    icon: icons.IconFlask2,
    type: 'group',
    url: '/athanor-page'
};

export default athanorPage;
