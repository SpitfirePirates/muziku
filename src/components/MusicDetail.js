import React, { Component } from 'react';
import {Card, CardMedia, CardContent, Typography, IconButton} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';

export default class MusicDetail extends Component {
  onBackClick() {
    if (this.props.onClose) {
      this.props.onClose.call();
    }
  }

  render () {
    const className = "MusicDetail" + ((this.props.show) ? " visible" : "");

    if (this.props.album === null) {
      return (<div></div>);
    }

    const album = this.props.album,
      name = album.name,
      image = album.images[0].url,
      artist = album.artists[0].name;

    return (
      <div className={className}>
        <Card>
          <CardMedia image={image}>
            <IconButton onClick={e=>this.onBackClick(e)}>
              <ArrowBack></ArrowBack>
            </IconButton>
          </CardMedia>
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
    )
  }
}
