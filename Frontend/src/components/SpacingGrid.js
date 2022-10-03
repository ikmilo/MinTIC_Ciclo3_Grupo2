import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardAppleWatch from './CardAppleWatch';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { ItemListAPI } from '../services/ProductsAPI'




export default function SpacingGrid() {
  const [articulos, setArticulos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const spacing = 4;

  const handlePokeAPI = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      const lista = data.results
      setArticulos(lista)
      setIsLoaded(true)

    } catch (e) {
      console.log(e)
    }
  }
  const handleItemList = async () => {
    try {
      await ItemListAPI.itemList()
        .then(res => {
          setArticulos(res);
        })
      setIsLoaded(true)
    } catch (e) {
      console.log(e)
      console.log("Algo está fallando")
    }

  }

  useEffect(() => {
    handleItemList()
      .then(

    );
  }, []);

  return (
    <>
      {isLoaded ?
        <Grid sx={{ flexGrow: 1}} container spacing={2}>
          <Grid item xs={13}>
            <Grid container justifyContent="center" spacing={spacing}>
              {articulos.map((value) => (
                <Grid item>
                  <CardAppleWatch data={value}></CardAppleWatch>
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
        :
        <div>
          <h1>Cargando</h1>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </div>
      }
    </>
  );
}
