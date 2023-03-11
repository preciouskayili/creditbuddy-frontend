import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-ltinb5sfiurrzj0j.us.auth0.com";
  const clientId = "pcNn9nSBiFuyrcM8pIeNSyfrAp8ZXWvtU";

  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUrl={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
