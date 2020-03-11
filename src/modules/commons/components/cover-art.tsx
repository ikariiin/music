import * as React from 'react';
import "../scss/cover-art.scss";

export interface CoverArtProps {
  size: number;
};

export class CoverArt extends React.Component<CoverArtProps> {
  public render() {
    return (
      <div className="cover-art" style={{ width: this.props.size, height: this.props.size }} />
    );
  }
}