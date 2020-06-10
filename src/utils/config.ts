const getDocsLocation = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return 'https://dev.docs.payid.org'
    case 'stage':
      return 'https://stage.docs.payid.org'
    case 'prod':
      return 'https://docs.payid.org'
    default:
      return 'http://localhost:3000'
  }
}

export default getDocsLocation
