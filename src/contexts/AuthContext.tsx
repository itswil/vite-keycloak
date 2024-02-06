import Keycloak from "keycloak-js";
import { ReactKeycloakProvider } from "@react-keycloak/web";

const keycloakConfig = new Keycloak({
  url: "http://localhost:8080",
  realm: "wld",
  clientId: "myclient",
});

const keycloakInitConfig = {
  onLoad: "login-required",
};

type AuthProviderProps = {
  children?: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const handleKeycloakEvent = (event, error) => {
    console.log("handleKeycloakEvent", event, error);
  };

  const handleKeycloakTokens = (tokens) => {
    console.log("handleKeycloakTokens", tokens);
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloakConfig}
      initOptions={keycloakInitConfig}
      onEvent={handleKeycloakEvent}
      onTokens={handleKeycloakTokens}
    >
      {children}
    </ReactKeycloakProvider>
  );
};
