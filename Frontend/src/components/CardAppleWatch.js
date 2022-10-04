import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import {useNavigate } from 'react-router-dom';

const CardAppleWatch = ({ data, login, car}) => {
  

  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();
  const jsonTxt = data;
  const txt = jsonTxt;
  const articulo = JSON.parse(txt);
  const currency = (number) => {
    return new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(number);
  };

  const handleCarChopping = (item) => {
    if (login) {
      setCarrito([...carrito, item])
    } else {
      navigate("/LoginPage");
      setCarrito([])
    }

  }
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardMedia sx={{ height: '15rem', width: '270px', margin: 'auto' }} image={articulo.url} />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 1, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {articulo.title}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>{currency(articulo.price)}</Typography>
        <Typography variant='body1' sx={{ width: '500px' }}>
          {articulo.description}
        </Typography>
      </CardContent>
      <Button
        variant='contained'
        sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        onClick={(event) => { handleCarChopping(articulo) }}
      >
        Agregar al Carrito
      </Button>
    </Card>
  )
}

export default CardAppleWatch
