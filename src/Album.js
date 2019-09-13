import React, { Component } from 'react';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';

export default class Album extends Component {
  render() {
    return (
      <div className="Album">
        <Card>
          <CardMedia image={this.props.image}/>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.title}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
