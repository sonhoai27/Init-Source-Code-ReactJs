import * as React from 'react';

const S = require('../Styles/Container.scss')

interface IContainerProps {
  children: any;
  custom?: any;
}

const Container = (props: IContainerProps) => (
  <div className={S['container']} {...props.custom}>
    {props.children}
  </div>
)

const ContainerFluid = (props: IContainerProps) => (
  <div className={S['container-fluid']} {...props.custom}>
    {props.children}
  </div>
)

export {
  ContainerFluid,
}
export default Container
