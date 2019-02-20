const DEV = require('./Dev.json')

type TApiConfigsProps = {
  URL: string;
}

const API_CONFIG = (): TApiConfigsProps => {
  switch (true) {
    case window.location.hostname.indexOf('localhost') > -1:
      return {
        ...DEV,
      }
    default:
      return {
        ...DEV,
      }
  }
}

export {
  TApiConfigsProps,
}

export default API_CONFIG
