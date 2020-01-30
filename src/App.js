import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import environment from "./relay/environment";

function App() {
  return (
    <div className="App">
      <QueryRenderer
        environment={environment}
        query={graphql`
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
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }

          if (!props) {
            return <div>Loading...</div>;
          }

          return (
            <>
              <div className="jumbotron">
                <h1 className="display-4">Relay without unique identifiers</h1>
                <p className="lead">
                  This is an example of using Relay without globally unique
                  identifiers.
                </p>
                <hr className="my-4" />
                <p>
                  We have two entities: <strong>song</strong> and{" "}
                  <strong>books</strong>. As the identifiers of each entity are
                  not globally unique, a conflict occurs in the store. <br />
                  Entities of type book are overwritten by entities of type
                  song, as we can see in the list below.
                </p>
                <p className="lead">
                  <a
                    className="btn btn-primary btn-lg"
                    href="https://chrome.google.com/webstore/detail/relay-devtools/oppikflppfjfdpjimpdadhelffjpciba"
                    target="_blank"
                    role="button"
                  >
                    Donwload Relay Devtools and inspect store
                  </a>
                </p>
              </div>
              <div className="container-fluid">
                <section>
                  <h2>List of books</h2>
                  <ul>
                    {props.books.map(({ id, title }) => (
                      <li key={id}>{title}</li>
                    ))}
                  </ul>
                  <div class="alert alert-danger" role="alert">
                    List of books should have been <strong>Book 1</strong> and{" "}
                    <strong>Book 2</strong>.
                  </div>
                </section>
                <section>
                  <h2>List of songs</h2>
                  <ul>
                    {props.songs.map(({ id, title }) => (
                      <li key={id}>{title}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
