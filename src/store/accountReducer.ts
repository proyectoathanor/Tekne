// action - state management
import { LOGIN, LOGOUT } from './actions';
// import { InitialLoginContextProps } from 'types/auth';

// ==============================|| ACCOUNT REDUCER ||============================== //

// interface AccountReducerActionProps {
//     type: string;
//     payload?: InitialLoginContextProps;
// }

// const initialState: InitialLoginContextProps = {
//     isLoggedIn: false,
//     isInitialized: false,
//     user: null
// };

const accountReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INITIALIZE':
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                isInitialized: true,
                user: action.payload.user
            };
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
};

export default accountReducer;
