import React from 'react';
import App from './src/App';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function MainApp() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        <App />
      </ApplicationProvider>
    </>
  );
}