import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useApolloClient } from "@apollo/react-hooks";
import './App.css';

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

  const handleInput = async (id) => {
    const queryResult = await client.query({
      query: USER_QUERY,
      variables: { id: id }
    });
    setResult(queryResult);
  }

  return (
    <div className="App">
      {/* Form */}
      <fieldset className="form">
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
