import { FormattedMessage } from 'react-intl';
import { IconFlask2 } from '@tabler/icons-react';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS - ATHANOR PAGE ||============================== //

const icons = {
    IconFlask2
};
const teknePage: NavItemType = {
    id: 'tekne',
    title: <FormattedMessage id="Tekne" />,
    icon: icons.IconFlask2,
    type: 'group',
    url: '/tekne'
};

export default teknePage;
