import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Album from './Album';
import axios from 'axios';

export default class MusicList extends Component {
  constructor(props) {
    super(props);
    this.apiHost = 'http://localhost:8800';
    this.state = { albums: [] };
    this.getMusic();
  }

  getMusic() {
    const that = this;
    axios.get(this.apiHost + '/releases')
      .then(function (response) {
        that.setState({ albums: response.data.albums.items });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    const albums = this.state.albums.map(function (album) {
      return (
        <Grid key={album.id} item xs={3}>
          <Album album={album}></Album>
        </Grid>
      );
    }, []);

    return (
      <Grid container spacing={2} className="MusicList">
        {albums}
      </Grid>
    );
  }
}
