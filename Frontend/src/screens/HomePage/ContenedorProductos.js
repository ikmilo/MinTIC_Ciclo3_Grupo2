import SpacingGrid from '../../components/SpacingGrid'

const ContenedorProducto = () => {

    const contenedorStyle = {
        margin: 'auto',
        marginTop: '2%',
        //background: 'red',
        maxWidth: '1600px',
        
    }
    return (
        <div style={contenedorStyle}>
            <SpacingGrid></SpacingGrid>
        </div>

    )

}

export default ContenedorProducto