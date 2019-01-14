interface IVOProps {
  name: string
  object: Object
}

const ValidateObject = (props: IVOProps) => {
  if (props.object[props.name] && props.object[props.name] !== '') return props.object[props.name]

  return ''
}

export {
  IVOProps,
}

export default ValidateObject
