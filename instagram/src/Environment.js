// 1 required JS modules
const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime')
// 2 store cached data
const store = new Store(new RecordSource())
// 3knows your GraphQL server
const network = Network.create((operation, variables) => {
        // 4 relay end point
        return fetch('https://api.graph.cool/relay/v1/cjgcpzdjf46nc0154rtlwdyb6', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: operation.text,
                variables,
            }),
        }).then(response => {
            return response.json()
        })
    })
// 5 instantiate environment
const environment = new Environment({
        network,
        store,
    })
// 6 export environment
export default environment