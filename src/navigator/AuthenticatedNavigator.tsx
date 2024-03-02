import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from 'providers/cookieProvider';
import { COOKIE_ACCESS_TOKEN } from 'constants/cookie-keys';
import { AuthRoute } from 'routers/constants';

export const AuthenticatedNavigator: FC<{ children: React.ReactElement }> = ({ children }) => {
  if (!getCookie(COOKIE_ACCESS_TOKEN)) {
    return <Navigate to={AuthRoute.SIGN_IN} />;
  }

  return children;
};

export default AuthenticatedNavigator;
