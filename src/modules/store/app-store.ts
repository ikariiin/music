import { types } from 'mobx-state-tree';

const MusicConfig = types.model("MusicConfig", {
  directories: types.array(types.string)
});

const Music = types.model("Music", {
  file: types.string,
  loaded: types.boolean,
  playing: types.boolean,
  title: types.string,
  album: types.string,
  track: types.number,
  bitrate: types.number,
  duration: types.number,
  artist: types.string
});

const MusicPlaylist = types.model("MusicPlaylist", {
  list: types.array(Music)
});

const MusicAppStore = types.model("MusicAppStore", {
  config: MusicConfig
});