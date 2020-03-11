import * as React from 'react';
import { Music } from '../../../types';
import "../scss/content.scss";

export interface ContentProps {
  playlist: Set<Music>;
  dirs: Array<string>;
}

export class Content extends React.Component<ContentProps> {
  public render() {
    return (
      <section className="content-container">
        Content
      </section>
    )
  }
}