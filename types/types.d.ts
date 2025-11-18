export type MuteChangeEvent = CustomEvent<{ isMuted: boolean }>;

export type ArchivedSite = Readonly<{
  version: string;
  image: string;
  year: string;
  description: string;
  url: string;
}>;
