// third-party
import firebase from 'firebase/compat/app';

// project imports
import type { User } from '@supabase/supabase-js';

export type FirebaseContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: User | null | undefined;
    logout: () => Promise<void>;
    login: () => void;
    firebaseRegister: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
    firebaseEmailPasswordSignIn: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
    firebaseGoogleSignIn: () => Promise<firebase.auth.UserCredential>;
    resetPassword: (email: string) => Promise<void>;
    updateProfile: VoidFunction;
};

export type Auth0ContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: User | null | undefined;
    logout: () => void;
    login: () => void;
    resetPassword: (email: string) => Promise<void>;
    updateProfile: VoidFunction;
};

export interface JWTDataProps {
    userId: string;
}

export type JWTContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: User | null | undefined;
    logout: () => void;
    login: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    updateProfile: VoidFunction;
};

export type AWSCognitoContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: User | null | undefined;
    logout: () => void;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<unknown>;
    resetPassword: (verificationCode: string, newPassword: string) => Promise<any>;
    forgotPassword: (email: string) => Promise<void>;
    updateProfile: VoidFunction;
};

export interface InitialLoginContextProps {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: User | null | undefined;
}
