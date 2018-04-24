/**
 * @flow
 * @relayHash 38f90854a7220b0be225ad609e8e2e1a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostMutationVariables = {|
  input: {
    description: string,
    imageUrl: string,
    clientMutationId: string,
  },
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +post: ?{|
      +id: string,
      +description: string,
      +imageUrl: string,
    |},
  |},
|};
*/


/*
mutation CreatePostMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    post {
      id
      description
      imageUrl
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreatePostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreatePostInput!"
      }
    ],
    "concreteType": "CreatePostPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "post",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageUrl",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreatePostMutation",
  "id": null,
  "text": "mutation CreatePostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n      description\n      imageUrl\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePostMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'dd8f84e516490eb1c058fc1b330a55fc';
module.exports = node;
