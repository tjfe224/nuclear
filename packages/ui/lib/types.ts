export type Track = {
  local?: boolean;
  album?: string;
  artist?: { name: string } | string;
  duration?: number | string;
  position?: number;
  playcount?: number | string;
  title: string;
  name?: string;
  thumbnail?: string;
};
