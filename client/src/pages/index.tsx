import Head from "next/head";
import { ConfigProvider } from "@/hooks/useConfig";
import { ConnectionProvider } from "@/hooks/useConnection";
import { ToastProvider } from "@/components/toast/ToasterProvider";
import Home from "./Home";

export default function App() {
  return (
    <ToastProvider>
      <ConfigProvider>
        <ConnectionProvider>
          <Head>
            <title>LiveKit App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Home />
        </ConnectionProvider>
      </ConfigProvider>
    </ToastProvider>
  );
}
