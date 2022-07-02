import http from '../utils/http';
import type { User } from '../types/models';
import { APIResponse } from './types';

const TOKEN_STORAGE_KEY = 'auth-token';

enum Endpoint {
  SignIn = '/signin',
  SignUp = '/signup',
  SignOut = '/signout',
  Authenticate = '/authenticate',
}

const getToken = () => localStorage.getItem(TOKEN_STORAGE_KEY) || sessionStorage.getItem(TOKEN_STORAGE_KEY);
const setToken = (token = getToken(), remember = false) => {
  if (token) {
    http.defaults.headers.common.Authorization = `Bearer ${token}`;
    (remember ? localStorage : sessionStorage)
      .setItem(TOKEN_STORAGE_KEY, token);
  }
};
const revokeToken = () => {
  delete http.defaults.headers.common.Authorization;
  sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};

interface SignInPayload {
  email: string;
  password: string;
}

interface SignInResponseData {
  user: User;
  token: string;
}

const signIn = async (payload: SignInPayload, remember = false) => {
  const resp = await http.post<SignInPayload, APIResponse<SignInResponseData>>(Endpoint.SignIn, payload);
  const { token, user } = resp.data;

  setToken(token, remember);

  return user;
};

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

interface SignUpResponseData {
  username: string;
  token: string;
}

const signUp = async (payload: SignInPayload) => {
  const resp = await http.post<SignUpPayload, APIResponse<SignUpResponseData>>(Endpoint.SignUp, payload);
  const { token } = resp.data;

  setToken(token);
};

const signOut = async () => {
  await http.get(Endpoint.SignOut);
  revokeToken();
};

const authenticate = async () => {
  await http.get(Endpoint.Authenticate);
};

export {
  signIn,
  signUp,
  signOut,
  authenticate,
  revokeToken,
};

export type {
  SignInPayload,
  SignUpPayload,
};
