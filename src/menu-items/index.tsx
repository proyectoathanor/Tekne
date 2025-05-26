import athanorPage from './Athanor/athanor-page';
import pages from './pages';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
    items: [athanorPage, pages]
};

export default menuItems;
