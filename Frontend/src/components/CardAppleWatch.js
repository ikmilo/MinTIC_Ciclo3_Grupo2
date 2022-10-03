import React, { useContext } from 'react';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { AppContext } from '../contexts/LoginContext';

const CardAppleWatch = (data) => {

  const [car, setCar] = useContext(AppContext);

  const articulo = data.data
  const id = articulo.url.slice(-3).split("/").join('')
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  console.log(car)
  const handleCarChopping = (item) => {
    console.log("Mensaje")
    //setCarrito([...carrito, item])
  }

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardMedia sx={{ height: '15rem', width: '270px', margin: 'auto' }} image={img} />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 1, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {articulo.name}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>$120USD</Typography>
        <Typography variant='body1'>
          - Medidas: 92.0 x 90.0 x 89.0 cm ( Largo x Ancho x Alto)
          - Peso: 10.3 kg.
          - Comedero de REGALO
        </Typography>
      </CardContent>
      <Button
        variant='contained'
        sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        onClick={(event)=>{handleCarChopping(articulo)}}
      >
        Agregar al Carrito
      </Button>
    </Card>
  )
}

export default CardAppleWatch
