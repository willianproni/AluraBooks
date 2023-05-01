import React, { createContext, useContext, useEffect, useState } from "react";
import http from "../http";

type UserProps = {
    name?: string;
    token?: string;
}

interface AuthContextProps {
    user: UserProps;
    getStorageUser: () => Promise<UserProps | null>;
    setStorageToken: () => void;
    cleanStorageToken: () => void;
    signIn: (params: SignInProps) => Promise<void>;
}

type SignInProps = {
    email: string;
    senha: string;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: any) {

    const [user, setUser] = useState<UserProps>({})

    useEffect(() => {
        async function verifyCache() {
            const respose = await getStorageUser()
            console.log(respose)
            if (respose) {
                setUser(respose)
            }
        }
        verifyCache()
    }, [])

    async function signIn(params: SignInProps) {
        http.post('/public/login', params)
            .then((response) => {
                let user = {
                    name: response.data.user.nome,
                    token: response.data.access_token
                }
                sessionStorage.setItem('token', user.token)
                setUser(user)
            })
            .catch((err) => {
                console.log('Erro: ', err)
            })
    }

    const setStorageToken = async () => {
        return (token: string) => {
            sessionStorage.setItem('token', token);
        };
    };

    const getStorageUser = async ():Promise<UserProps> => {
        const reponse = sessionStorage.getItem('user');
        if (reponse)
            return JSON.parse(reponse)
        return {}
    };

    const cleanStorageToken = async () => {
        setUser({})
        sessionStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{
            user,
            setStorageToken,
            getStorageUser,
            cleanStorageToken,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export function UseAuth() {
    const context = useContext(AuthContext)
    return context;
}