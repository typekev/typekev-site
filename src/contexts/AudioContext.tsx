import { createContext, useState, useEffect, PropsWithChildren } from "react";

const IS_MUTE_LOCAL_KEY = "isMute";
enum IS_MUTE {
  true = "true",
  false = "false",
}

interface Context {
  themeSwitchAudio?: HTMLAudioElement;
  botNotificationAudio?: HTMLAudioElement;
  isMute?: boolean;
  toggleMute: VoidFunction;
}

export const AudioContext = createContext<Context>({
  themeSwitchAudio: undefined,
  botNotificationAudio: undefined,
  isMute: undefined,
  toggleMute: () => undefined,
});

export const AudioProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isMute, setIsMute] = useState<boolean>();
  const [unmuteAudio, setUnmuteAudio] = useState<HTMLAudioElement>();
  const [themeSwitchAudio, setThemeSwitchAudio] = useState<HTMLAudioElement>();
  const [botNotificationAudio, setBotNotificationAudio] =
    useState<HTMLAudioElement>();

  useEffect(() => {
    setUnmuteAudio(new Audio("/audio/unmute.mp3"));
    setThemeSwitchAudio(new Audio("/audio/lightswitch.mp3"));
    setBotNotificationAudio(new Audio("/audio/notification.mp3"));
  }, []);

  useEffect(() => {
    if (isMute === undefined) {
      setIsMute(localStorage.getItem(IS_MUTE_LOCAL_KEY) === IS_MUTE.true);
    } else {
      localStorage.setItem(
        IS_MUTE_LOCAL_KEY,
        isMute ? IS_MUTE.true : IS_MUTE.false
      );
    }
  }, [isMute]);

  const toggleMute = () => {
    setIsMute(!isMute);
    if (isMute) {
      unmuteAudio?.load();
      unmuteAudio?.play();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        themeSwitchAudio: isMute ? undefined : themeSwitchAudio,
        botNotificationAudio: isMute ? undefined : botNotificationAudio,
        isMute,
        toggleMute,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
