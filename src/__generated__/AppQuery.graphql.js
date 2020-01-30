/**
 * @flow
 * @relayHash 273b4d76bbe1b61bfe6d9f22ea5e702f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +books: ?$ReadOnlyArray<{|
    +id: string,
    +title: string,
  |}>,
  +songs: ?$ReadOnlyArray<{|
    +id: string,
    +title: string,
  |}>,
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  books {
    id
    title
  }
  songs {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
    "name": "title",
    "args": null,
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "books",
    "storageKey": null,
    "args": null,
    "concreteType": "Book",
    "plural": true,
    "selections": (v0/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "songs",
    "storageKey": null,
    "args": null,
    "concreteType": "Song",
    "plural": true,
    "selections": (v0/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  books {\n    id\n    title\n  }\n  songs {\n    id\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6174578770c3abdb6faff6efcc37e48e';
module.exports = node;
