import React from 'react';
import { saveState } from './localStorage';

const AuthorizedContext = React.createContext(false);
saveState({ authorized: AuthorizedContext });

export const AuthorizedProvider = AuthorizedContext.Provider;
export const AuthorizedConsumer = AuthorizedContext.Consumer;
export default AuthorizedContext;
