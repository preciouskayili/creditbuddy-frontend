import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-ltinb5sfiurrzj0j.us.auth0.com";
  const clientId = "cNn9nSBiFuyrcM8pIeNSyfrAp8ZXWvtU";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "http://localhost:5173/dashboard",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
