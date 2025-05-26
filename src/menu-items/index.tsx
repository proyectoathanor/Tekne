import teknePage from './Tekne/tekne-page';
import pages from './pages';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
    items: [teknePage, pages]
};

export default menuItems;
