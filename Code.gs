function testConnector() {
  //console.log(bmScrvizConnector.isAdminUser())
  //console.log(bmScrvizConnector.getConfig())
  //console.log(bmScrvizConnector.getSchema())
  // we need to emulate a request
  const request =
  {
    scriptParams: {
      lastRefresh: '1628897778779',
      noCache: false,
      noCacheStudio: false
    },
    fields: [
      { name: 'ownerName' },
      { name: 'ownerId' },
      { name: 'ownerAppsScriptRepos' },
    ]
  }
  const data = bmScrvizConnector.getData(request)
  sheetDump({
    owner: data
  })
   //console.log(bmScrvizConnector.getAuthType())
}
