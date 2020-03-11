import * as React from 'react';
import { Player } from '../../player/components/player';
import { observable } from 'mobx';
import { AppState } from '../../../types';
import { fetchApi } from '../../../api';
import { CONFIG_FETCH_ALL_route } from '../../../api_routes';
import "../scss/app.scss";
import { initializeIcons } from '@uifabric/icons';
import { Content } from '../../content/components/content';
initializeIcons();

export class App extends React.Component<{}> {
  @observable private appState: AppState = {
    config: {
      dirs: []
    },
    playlist: new Set()
  };

  private async fetchConfig(): Promise<void> {
    this.appState.config = await fetchApi(CONFIG_FETCH_ALL_route, {}, 'dirs');
  }

  componentDidMount() {
    // We need to fetch the configs first.
    this.fetchConfig();
  }

  public render() {
    return (
      <section className="app-container">
        <Player />
        <Content dirs={this.appState.config.dirs} playlist={this.appState.playlist} />
      </section>
    );
  }
}