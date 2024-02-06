import { useKeycloak } from "@react-keycloak/web";
import "./App.css";

function App() {
  const { keycloak, initialized } = useKeycloak();

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => keycloak.logout()}>Logout</button>
      {initialized && (
        <pre>
          <code>{JSON.stringify(keycloak, null, 4)}</code>
        </pre>
      )}
    </>
  );
}

export default App;
