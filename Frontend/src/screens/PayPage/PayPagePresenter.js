import React, { useState } from 'react';
import TableSpanning from "./TableSpanning"


//MUI Button

//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const PayPagePresenter = () => {

    const contenedorStyle = {
        margin: 'auto',
        marginTop: '2%',
        //background: 'red',
        maxWidth: '1600px',
        //display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const titleStyle = {
        textAlign: 'left'
    }

    const buttomStyle = {
        marginTop: '2%',
        alignItems: 'right',
        justifyContent: 'right',
    }
    const [count, setCount] = useState(0);

    return (
        <div style={contenedorStyle}>
            <h1 style={titleStyle}>Carrito ({count})</h1>
            <TableSpanning></TableSpanning>
            <div style={buttomStyle}>
                <Button variant="contained" size="large">
                    Comprar
                </Button>
            </div>
        </div>
    )

}

export default PayPagePresenter