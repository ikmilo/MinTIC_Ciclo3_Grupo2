import { useState, Fragment, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { isValidEmail, isValidPassword, isValidUser } from '../../utils/MiscellaneousUtils'
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
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { RegisterAPI } from '../../services/LoginAPI'
import { AppContext } from '../../contexts/LoginContext';

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

const RegisterPage = () => {
  //Styles

  const contentCenter = {
    marginTop: '2%',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  }


  // ** State
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    showPassword: false
  })
  const [userValue, setUserValue] = useState(null);
  const [validation, setValidation] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [focusUser, setFocusUser] = useState(true);
  const [focusEmail, setFocusEmail] = useState(true);
  const [focusPass, setFocusPass] = useState(true);
  const [userValidation, setUserValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passValidation, setPassValidation] = useState(false);
  const [isClear, setIsClear] = useState(true);
  const [isLogged, setIsLogged] = useContext(AppContext);
  const [userInfo, setUserInfo] = useContext(AppContext);

  const msjError = {
    user: 'El usaurio debe tener de 4 a 15 caracteres',
    email: 'el email ingresado no es válido',
    password: 'La contraseña debe ser de mínimo 8 caracteres y debe contener Mayusculas, minusculas, numeros y caracter especial'
  }

  const navigate = useNavigate();

  // ** Hook
  //const theme = useTheme()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
    setUserValidation(isValidUser(values.username))
    setEmailValidation(isValidEmail(values.email))
    setPassValidation(isValidPassword(values.password))
    if (!isClear) {
      setFocusUser(userValidation)
      setFocusEmail(emailValidation)
      setFocusPass(passValidation)
    }

  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const handleButtomLogin = event => {
    event.preventDefault()
    setIsClear(false)
    setValidation(userValidation && emailValidation && passValidation)
    if (userValidation && emailValidation && passValidation) {
      setErrorMessage(true)
      handleRegisterAPI(values.username, values.email, values.password)
    } else {
      if (!userValidation) {
        setErrorMessage(msjError.user)
      } else if (!emailValidation) {
        setErrorMessage(msjError.email)
      } else if (!passValidation) {
        setErrorMessage(msjError.password)
      } else {
        setErrorMessage("Error inesperado")
        console.error("Error Inesperado al momento del Login")
      }
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
  const handleRegisterAPI = (user, email, password) => {

    RegisterAPI.emailCheck(email)
      .then(res => {
        if (res !== true) {
          RegisterAPI.signUp(user, email, password)
          .then(res => {
            if (res !== false) {
              setIsLogged(true);
              setUserInfo(res);
              navigate("/");
              //console.clear();
            } else {
              setValidation(res)
              setErrorMessage('email o contraseña inválida')
            }
          })
          .catch((e) => {
            console.error("Error Inesperado")
            })
        } else {
          setValidation(!res)
          setErrorMessage('el email que intenta registar ya está en uso')
        }
      })
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
              style={handleFocusFail(focusUser)}
              label='Usuario'
              autoFocus
              id='username'
              onChange={handleChange('username')}
              fullWidth
              sx={{ marginBottom: 4 }}
            />
            <TextField
              style={handleFocusFail(focusEmail)}
              label='Email'
              autoFocus
              id='email'
              onChange={handleChange('email')}
              fullWidth
              sx={{ marginBottom: 4 }} />
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
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>Acepto </span>

                  <LinkStyled onClick={e => e.preventDefault()}>terminos & condiciones</LinkStyled>

                </Fragment>
              }
            />
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              onClick={handleButtomLogin}
            >
              Crear Cuenta
            </Button>
            <Stack style={handleViewError(validation)} sx={{ mb: 2, width: '100%', alignItems: 'center' }} spacing={2}>
              <Alert severity="error">{errorMessage}</Alert>
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                ¿Tienes una cuenta?
              </Typography>
              <Typography variant='body2'>
                <Link to={"/LoginPage"}>
                  <LinkStyled>Ingresar al sistema</LinkStyled>
                </Link>

              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default RegisterPage
