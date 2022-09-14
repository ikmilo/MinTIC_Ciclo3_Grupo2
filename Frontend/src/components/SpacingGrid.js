//import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
//import FormLabel from '@mui/material/FormLabel';
//import FormControl from '@mui/material/FormControl';
//import FormControlLabel from '@mui/material/FormControlLabel';
////import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
//import RadioGroup from '@mui/material/RadioGroup';
//import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import CardAppleWatch from './CardAppleWatch';


export default function SpacingGrid() {
  //const [spacing, setSpacing] = useState(4);

  const spacing = 4;
  /* const jsx = `
 <Grid container spacing={${spacing}}>
 `;
 */
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
            <Grid key={value} item>
              <CardAppleWatch></CardAppleWatch>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item>
              
            </Grid>
          </Grid>
        </Paper>

      </Grid>
    </Grid>
  );
}
