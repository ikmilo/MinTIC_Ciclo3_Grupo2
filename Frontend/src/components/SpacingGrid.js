import React, { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardAppleWatch from './CardAppleWatch';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { ItemListAPI } from '../services/ProductsAPI'
import { AppContext } from '../contexts/LoginContext';

export default function SpacingGrid() {
  const [articulos, setArticulos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shop, setShop] = useState([]);
  const [isLogged, setIsLogged] = useContext(AppContext);
  const spacing = 4;

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
    
  }, []);

  const handleCarrito = (e) =>{
    setShop(e)
    console.log("res")
  }


  
  
  return (
    <>
      {isLoaded ?
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <button type="button" onClick={handleCarrito}>test</button>
          <Grid item xs={13}>
            <Grid container justifyContent="center" spacing={spacing}>
              {articulos.map((value) => (
                <Grid item>
                  <CardAppleWatch data={value} login={isLogged} car={(car)=>handleCarrito(car)}></CardAppleWatch>
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
