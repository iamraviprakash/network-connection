import React, { useState } from 'react';
import { Detector } from "react-detect-offline";
import gql from 'graphql-tag';
import './App.css';
import { useApolloClient } from "@apollo/react-hooks";

const USER_QUERY = gql`
  query ($id: ID!){
    user(id: $id) {
      id
      name
    }
  }
`;

const UserList = ({result: {loading, error, data}}) => {
  if (loading) return <div>Fetching...</div>;
  if (error) return <div>Error</div>;
  if (data.user) {
    return (
      <div>
        <div>ID: {data.user.id} Name: {data.user.name}</div>
      </div>
    )
  } else {
    return <div>User Not Found</div>
  }
}


function App() {

  const client = useApolloClient();

  const [result, setResult] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [formEditState, setFormEditState] = useState("")


  const handleInput = async (id) => {
    const queryResult = await client.query({
      query: USER_QUERY,
      variables: { id: id }
    });
    setResult(queryResult);
  }

  const pollingObject = {
    enabled: true,
    url: "https://ipv4.icanhazip.com",
    interval: 5000,
    timeout: 5000
  }

  return (
    <div className="App">
      <Detector
        polling={pollingObject}
        render={({ online }) => {
          
          if (online) {
            setFormEditState(false)
          } else {
            setFormEditState(true)
          }

          return (
            <div className={online ? "online" : "offline"}>
              You are currently {online ? "online" : "offline"}
            </div>
          )
        }}
      />

      {/* Form */}
      <fieldset className="form" disabled={formEditState}>
        <form>
          <input
            placeholder="What needs to be done?"
            onChange={e => (handleInput(e.target.value))}
          />
        </form>
      </fieldset>
      

      {/* Results */}
      <div className="user-list">
        <UserList result={result} />
      </div>
    </div>
  );
}

export default App;
