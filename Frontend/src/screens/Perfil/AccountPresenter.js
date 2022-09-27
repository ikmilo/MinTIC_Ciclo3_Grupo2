import AccountSettings from './AccountSettings'

const AccountPresenter = () => {

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

    return (
        <div style={contenedorStyle}>
            <AccountSettings></AccountSettings>
        </div>
    )

}

export default AccountPresenter