import * as React from 'react';
import "../scss/player.scss";
import { Controls } from './controls';
import { CoverArt } from '../../commons/components/cover-art';

export class Player extends React.Component<{}> {
  public render() {
    return (
      <aside className="player-sidebar">
        <div className="player-header">Currently Playing</div>

        <CoverArt size={512} />
        <Controls />
      </aside>
    );
  }
}