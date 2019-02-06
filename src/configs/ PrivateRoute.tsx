import { Redirect, Route } from 'react-router-dom'
import * as React from 'react'

type IPrivateRouteProps = {
  component: React.ComponentClass<any> | React.StatelessComponent<any>;
  apiLogin: any;
  path: any;
  history?: any;
}

const PrivateRouter = ({
  component: Component,
  apiLogin: Login,
  ...rest
}: IPrivateRouteProps) => (
  <Route
    {...rest}
    render={(props) => {
      return (Login.status === 200 ? <Component {...props} /> : <Redirect to="/login"/>)
    }} />
);

export default PrivateRouter
