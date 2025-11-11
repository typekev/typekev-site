export type MuteChangeEvent = CustomEvent<{ isMuted: boolean }>;

export interface ArchivedSite {
  version: string;
  image: string;
  year: string;
  description: string;
  url: string;
}
