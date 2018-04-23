// 1
import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import {ConnectionHandler} from 'relay-runtime'
  import environment from './Environment'
  // 2
  const mutation = graphql`
    mutation CreatePostMutation($input: CreatePostInput!) {
      createPost(input: $input) {
        post {
          id
          description
          imageUrl
        }
      }
    }
  `
  // 3
  export default (description, imageUrl, viewerId, callback) => {
    // 4
    const variables = {
      input: {
        description,
        imageUrl,
        clientMutationId: ""
      },
    }
  // 5
    commitMutation(
      environment,
      {
        mutation,
        variables,
        // 6
        optimisticUpdater: (proxyStore) => {
          // ... you'll implement this in a bit
        },
        updater: (proxyStore) => {
          // ... this as well
        },
        // 7
        onCompleted: () => {
          callback()
        },
        onError: err => console.error(err),
      },
    )
}