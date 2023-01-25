const pgp = require('pg-promise')()
const config = require('../config/db')

const db = () => {
  const dbKey = Symbol.for(db + '.db')
  const globalSymbols = Object.getOwnPropertySymbols(global)
  if (globalSymbols.indexOf(dbKey) < 0) {
    console.dir(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`)
    global[dbKey] = pgp(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`)
  }

  return global[dbKey]
}

export default (db)()