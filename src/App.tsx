import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

export const GET_CATS = gql`
  query GetCats {
    cats {
      id
      breed
    }
  }
`;

function App() {
  const [state, setState] = useState("");
  const { data, loading, error } = useQuery(GET_DOGS, {
    onError: (e) => setState(e?.message),
  });

  if (!data && !loading && !error) {
    throw new Error("Unexpected state");
  }

  return (
    <h1>
      Vite + React <div>{error?.message}</div>
    </h1>
  );
}

export default App;
