export default () => (next: any) => (action: { type: any; payload: any; meta: any; }) => {
  const { type, payload, meta } = action;
  console.groupCollapsed(type);
  console.log('Payload:', payload);
  console.log('Meta:', meta);
  console.groupEnd();
  next(action);
};
