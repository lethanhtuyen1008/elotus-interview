import { Route } from 'react-router-dom';
import { RouteProps } from './types';

export const BaseNavigator = ({ element, path }: RouteProps) => <Route path={path} element={element} />;

export default BaseNavigator;
