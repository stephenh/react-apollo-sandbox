import { gql, useQuery } from "@apollo/client";

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_DOGS);

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
