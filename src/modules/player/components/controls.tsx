import * as React from 'react';
import { Icon } from 'office-ui-fabric-react';
import "../scss/controls.scss";

export class Controls extends React.Component {
  public render() {
    return (
      <section className="controls-container">
        <button className="player-control-button">
          <Icon iconName="previous" />
        </button>
        <button className="player-control-button">
          <Icon iconName="pause" />
        </button>
        <button className="player-control-button">
          <Icon iconName="next" />
        </button>
      </section>
    );
  }
}