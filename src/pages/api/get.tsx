import Airtable from 'airtable'
import Cors from 'cors'

let apiKey = process.env.AIRTABLE_KEY
let appId = 'appTWbPsiTboaINrN'

let cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

let base = new Airtable({
  endpointUrl: 'https://api.airtable.com',
  apiKey,
}).base(appId)

function get(): Promise<[Error | null, any]> {
  return new Promise((resolve) => {
    base
      .table('Saves')
      .select({ maxRecords: 10 })
      .all((err, res) => {
        resolve([err, res])
      })
  })
}

export default async function (req, res) {
  await runMiddleware(req, res, cors)

  let [err, results] = await get()

  res.json(results)
}
