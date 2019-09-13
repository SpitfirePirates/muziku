import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MusicList from './MusicList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <MusicList></MusicList>
      </main>
    </div>
  );
}

export default App;
