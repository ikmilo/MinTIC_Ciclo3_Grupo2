import SpacingGrid from '../../components/SpacingGrid'
import Carousel from '../../components/Carousel'

const ContenedorProducto = () => {

    const contenedorStyle = {
        margin: 'auto',
        marginTop: '2%',
        //background: 'red',
        maxWidth: '1600px',
        
    }
    return (
        <div style={contenedorStyle}>
            <Carousel></Carousel>
            <SpacingGrid></SpacingGrid>
        </div>

    )

}

export default ContenedorProducto