import { IAudioMetadata } from 'music-metadata';

export interface Music {
  file: string;
  metadata: IAudioMetadata;
  audioObject: HTMLAudioElement;
}

export interface AppState {
  playlist: Set<Music>;
  config: Config;
}

export interface Config {
  dirs: Array<string>;
}

export enum Method {
  GET,
  POST,
  PUT,
  DELETE
}

export interface Route {
  uri: string;
  method: Method;
}

export type ConfigItems = "dirs";