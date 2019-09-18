import React, {Component} from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MusicList from "./MusicList";
import MusicDetail from "./MusicDetail";
import '../App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      album: null,
      showDetail: false
    };
  }

  onAlbumClick(album) {
    this.setState({album: album, showDetail: true});
  }
  
  onCloseDetail() {
    this.setState({showDetail: false});
  }

  render() {
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
          <MusicList onAlbumClick={album=>this.onAlbumClick(album)}/>
          <MusicDetail album={this.state.album} show={this.state.showDetail} onClose={_=>this.onCloseDetail()}/>
        </main>
      </div>
    );
  }
}
