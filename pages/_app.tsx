import "../styles/globals.css";

import Layout from "components/layout";

import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TonConnectUIProvider
      manifestUrl="https://temecoin.xyz/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.DARK }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TonConnectUIProvider>
  );
}
export default MyApp;
