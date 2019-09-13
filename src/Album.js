import React from 'react';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';

function Album() {
  return (
    <div className="Album">
      <Card>
        <CardMedia image=""/>
        <CardContent>
          <Typography variant="h5" component="h2">
            Album Title
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Album;
