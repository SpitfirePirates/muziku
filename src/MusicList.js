import React from 'react';
import { Grid } from '@material-ui/core';
import Album from './Album';

function MusicList() {
  return (
    <Grid container className="MusicList">
      <Grid item xs={3}>
        <Album></Album>
      </Grid>
    </Grid>
  );
}

export default MusicList;
