function sheetDump(data) {
  const id = '1WCqfBN-xVH9a6bccCfmLO-jmT__SHX9jx_EQDpGuajg'

  Object.keys(data).forEach (key=> {
    const d = data[key]
    console.log('writing sheet', d)
    bmPreFiddler.PreFiddler().getFiddler({
      id,
      sheetName: key,
      createIfMissing: true
    }).setData(d.rows.map(row => {
      return d.schema.reduce((p, c, i) => {
        p[c.name] = row.values[i]
        return p
      }, {})
    }))
    .dumpValues()
  })



}
