import React from 'react';
import RealtimeResults from './components/RealtimeResults/RealtimeResults';
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="lg" disableGutters={true}>
          <RealtimeResults />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
