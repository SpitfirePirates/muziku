import React, { Component } from 'react';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';

export default class Album extends Component {
  onClick() {
    if (this.props.onClick) {
      this.props.onClick.call();
    }
  }

  render() {
    const album = this.props.album,
      name = album.name,
      image = album.images[0].url,
      artist = album.artists[0].name;

    return (
      <div className="Album" onClick={_=>this.onClick()}>
        <Card>
          <CardMedia image={image}/>
          <CardContent>
            <Typography className="AlbumTitle" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography className="ArtistName" variant="body1" component="h3">
              {artist}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
