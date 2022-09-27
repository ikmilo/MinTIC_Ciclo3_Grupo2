import { useState} from 'react'
import { Link} from 'react-router-dom';
import { isValidEmail, isValidPassword } from '../../utils/MiscellaneousUtils'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
//import {useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  //Styles

  const contentCenter = {
    marginTop: '2%',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  }

 
  const handleFocusFail = (error) => {

    const view = {
      boxShadow: '0 0px 5px 2px rgba(2520,35,35,.5)',
      backgroundColor: 'rgba(2520,35,35,.2)',
    }
    const hold = { background: 'none' }

    if (error) {
      return hold
    } else {
      return view
    }
  }



  // ** State
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const [userValue, setUserValue] = useState(null)
  const [validation, setValidation] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [focusEmail, setFocusEmail] = useState(true)
  const [focusPass, setFocusPass] = useState(true)

  // ** Hook
  //const theme = useTheme()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleButtomLogin = event => {
    const emailValidation = isValidEmail(userValue)
    const passValidation = isValidPassword(values.password);
    setFocusPass(passValidation)
    setFocusEmail(emailValidation)
    setValidation(emailValidation && passValidation)
    if (emailValidation && passValidation) {
      console.log('Login Exitoso')
    } else if (emailValidation) {
      setErrorMessage('Contraseña invalida')
    } else if (passValidation) {
      setErrorMessage('email invalido')
      console.log(emailValidation)
    } else {
      setErrorMessage('email o contraseña inválida')
    }
  }

  const handleViewError = (error) => {

    const view = { display: 'block' }
    const hold = { display: 'none' }

    if (error) {
      return hold
    } else {
      return view
    }
  }




  return (
    <Box style={contentCenter}>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Bienvenido!
            </Typography>
            <Typography variant='body2'>Inicia sesisón para comenzar a comprar</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField
              style={handleFocusFail(focusEmail)}
              onChange={(event) => setUserValue(event.target.value)}
              autoFocus
              fullWidth
              id='email'
              label='Email'
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Contraseña</InputLabel>
              <OutlinedInput
                style={handleFocusFail(focusPass)}                
                label='Password'
                value={values.password}
                id='auth-login-password'
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{ mb: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel control={<Checkbox />} label='Remember Me' />

            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 2 }}
              onClick={handleButtomLogin}
            >
              Login
            </Button>
            <Stack style={handleViewError(validation)} sx={{ mb: 2, width: '100%', alignItems: 'center' }} spacing={2}>
              <Alert severity="error">{errorMessage}</Alert>
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                ¿Eres nuevo en nuestra tienda?
              </Typography>
              <Typography variant='body2'>
                <Link to={"/RegisterPage"}>
                  <LinkStyled>Crear una Cuenta</LinkStyled>
                </Link>
              </Typography>
            </Box>

          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default LoginPage
