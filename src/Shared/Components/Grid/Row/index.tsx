import * as React from 'react';

const S = require('../Styles/Row.scss')

interface IRowProps {
  children: any;
  custom?: any;
}

const Row = (props: IRowProps) => (
  <div className={S['row']} {...props.custom}>
    {props.children}
  </div>
)

export default Row
