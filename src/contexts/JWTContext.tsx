import React, { createContext, useEffect, useReducer } from 'react';

// reducer - state management
import { LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';

// types
import { InitialLoginContextProps, JWTContextType } from 'types/auth';
import { supabase } from '../api/supabaseClient';

// state inicial
const initialState: InitialLoginContextProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const setSession = (serviceToken?: string | null) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
    } else {
        localStorage.removeItem('serviceToken');
    }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    const loginWithGoogle = async () => {
        try {
            await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'http://localhost:3000/' // o la URL de tu dashboard si tienes una
                }
            });
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error);
        }
    };

    useEffect(() => {
        const init = async () => {
            try {
                const {
                    data: { session }
                } = await supabase.auth.getSession();

                if (session) {
                    const token = session.access_token;
                    const user = session.user;

                    setSession(token);

                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isLoggedIn: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isLoggedIn: false,
                            user: null
                        }
                    });
                }
            } catch (err) {
                console.error('Error en init:', err);
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isLoggedIn: false,
                        user: null
                    }
                });
            }
        };

        init();
    }, []);

    const login = async (email: string, password: string) => {
        console.error('[Error] login sin contenido');
    };

    const register = async (email: string, password: string, firstName: string, lastName: string) => {
        console.error('[Error] register sin contenido');
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    const resetPassword = async (email: string) => {};
    const updateProfile = () => {};

    if (!state.isInitialized) {
        return <Loader />;
    }

    return (
        <JWTContext.Provider value={{ ...state, login, loginWithGoogle, logout, register, resetPassword, updateProfile }}>
            {children}
        </JWTContext.Provider>
    );
};

export default JWTContext;
