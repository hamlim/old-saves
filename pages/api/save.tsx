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

function create(records: any): Promise<[Error | null, any]> {
  return new Promise((resolve) => {
    base.table('Saves').create(records, (error: Error | null, results: any) => {
      resolve([error, results])
    })
  })
}

export default async function (req, res) {
  await runMiddleware(req, res, cors)

  let [err, results] = await create({
    Link: 'https://twitter.com',
    Notes: 'Some notes here',
  })

  res.end(`
Errors: ${JSON.stringify(err, null, 2)}
Results: ${typeof results}
  `)
}
