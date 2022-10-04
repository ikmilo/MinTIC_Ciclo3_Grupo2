// ** React Imports
//import { useState } from 'react'

// ** MUI Imports
import { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { AppContext } from '../../../contexts/LoginContext';


const TabAccount = () => {
  const [userInfo] = useContext(AppContext);
  const handleDeleteUser = () => {
    alert("Seguro seguro seguro?")

  }
  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Username' placeholder={userInfo.username} defaultValue={userInfo.username} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Name' placeholder={userInfo.name} defaultValue={userInfo.name} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Lastname' placeholder={userInfo.lastname} defaultValue={userInfo.lastname} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder={userInfo.email}
              defaultValue={userInfo.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Actualizar Datos
            </Button>
            <Button variant='outlined' color='secondary' onClick={(e) => { handleDeleteUser() }}>
              Eliminar Cuenta
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending anonymous
                  location data to Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
