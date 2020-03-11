import * as React from 'react';
import {render} from 'react-dom';
import "./styles/base.scss";
import { Fabric } from 'office-ui-fabric-react';
import "./theme";
import { App } from '../app/components/app';

render(
  <Fabric>
    <App />
  </Fabric>,
  document.querySelector('[data-mount]')
);