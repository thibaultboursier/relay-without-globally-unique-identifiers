import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
  const fakeResponse = {
    data: {
      books: [
        {
          id: "1",
          title: "Book 1"
        },
        {
          id: "2",
          title: "Book 2"
        }
      ],
      songs: [
        {
          id: "1",
          title: "Song 1"
        },
        {
          id: "2",
          title: "Song 2"
        }
      ]
    }
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(fakeResponse), 1000);
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
