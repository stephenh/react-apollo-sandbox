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
  const q1 = useQuery(GET_DOGS, { onError: (e) => setState(e?.message) });
  console.log("q1", {
    data: q1.data,
    loading: q1.loading,
    error: q1.error?.message,
  });

  // const q2 = useQuery(GET_CATS, {
  //   onError: (error) => setState(error?.message),
  //   skip: false,
  // });
  // console.log("q2", {
  //   data: q2.data,
  //   loading: q2.loading,
  //   error: q2.error?.message,
  // });

  return (
    <h1>
      Vite + React <div>{q1.error?.message}</div>
    </h1>
  );
}

export default App;
