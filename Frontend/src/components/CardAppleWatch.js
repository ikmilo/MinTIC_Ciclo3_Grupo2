// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = () => {
  return (
    <Card sx={{ maxWidth: '500px'}}>
      <CardMedia sx={{ height: '15rem', width: '200px', margin: 'auto' }} image='https://puppis.vteximg.com.br/arquivos/ids/183266-600-600/252213.jpg?v=637698190685970000' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 1, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Casita Térmica Durapets Roja - 4
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>$120USD</Typography>
        <Typography variant='body1'>
          - Medidas: 92.0 x 90.0 x 89.0 cm ( Largo x Ancho x Alto)
          - Peso: 10.3 kg.
          - Comedero de REGALO
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Agregar al Carrito
      </Button>
    </Card>
  )
}

export default CardAppleWatch
