import { useMemo, useCallback } from "react";
import { LiveKitRoom, RoomAudioRenderer, StartAudio } from "@livekit/components-react";
import { AnimatePresence, motion } from "framer-motion";
import { useConnection } from "@/hooks/useConnection";
import { useConfig } from "@/hooks/useConfig";
import { useToast } from "@/components/toast/ToasterProvider";
import Playground from "@/components/playground/Playground";
import PlaygroundConnect from "@/components/PlaygroundConnect";
import PlaygroundToast from "@/components/toast/PlaygroundToast";

const themeColors = ["cyan", "green", "amber", "blue", "violet", "rose", "pink", "teal"];

export default function Home() {
  const { shouldConnect, wsUrl, token, mode, connect, disconnect } = useConnection();
  const { config } = useConfig();
  const { toastMessage, setToastMessage } = useToast();

  const handleConnect = useCallback(
    (c) => {
      const connectionMode = process.env.NEXT_PUBLIC_LIVEKIT_URL ? "env" : mode;
      c ? connect(connectionMode) : disconnect();
    },
    [connect, disconnect, mode]
  );

  const showPlayground = useMemo(() => {
    return process.env.NEXT_PUBLIC_LIVEKIT_URL || wsUrl;
  }, [wsUrl]);

  return (
    <main className="relative flex flex-col justify-center px-4 items-center h-full w-full bg-F5E7DE repeating-square-background">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="left-0 right-0 top-0 absolute z-10"
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -50 }}
          >
            <PlaygroundToast />
          </motion.div>
        )}
      </AnimatePresence>

      {showPlayground ? (
        <LiveKitRoom
          className="flex flex-col h-full w-full"
          serverUrl={wsUrl}
          token={token}
          connect={shouldConnect}
          onError={(e) => {
            setToastMessage({ message: e.message, type: "error" });
            console.error(e);
          }}
        >
          <Playground themeColors={themeColors} onConnect={handleConnect} />
          <RoomAudioRenderer />
          <StartAudio label="Click to enable audio playback" />
        </LiveKitRoom>
      ) : (
        <PlaygroundConnect accentColor={themeColors[0]} onConnectClicked={() => handleConnect(true)} />
      )}
    </main>
  );
}
