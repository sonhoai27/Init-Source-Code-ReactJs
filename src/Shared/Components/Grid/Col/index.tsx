import * as React from 'react';

const S = require('../Styles/Col.scss')

interface IColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: any;
  custom?: any;
}

const onCS = (props, size) => {
  if (props[size] && props[size] !== undefined) {
    return `col-${size === 'xs' ? '' : size }${size === 'xs' ? props[size] : `-${props[size]}`}`
  }

  return ''
}

const onCN = item => item ? `${item} ` : ''

const onMakeClassName = (props) => {
  const size = Object.keys(props)
  let className = ''
  // tslint:disable-next-line:no-increment-decrement
  for (let i = 0; i < size.length; i++) {
    if (size[i] !== 'custom' || size[i] !== 'children') {
      className = `${className}${onCN(S[onCS(props, size[i])])}`
    }
  }

  return className
}

const Col = (p: IColProps) => (
  <div
      className={`${onMakeClassName(p)}`}
      {...p.custom}>
    {p.children}
  </div>
)

export default Col
