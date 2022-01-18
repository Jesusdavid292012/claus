import Layout from '../../components/Layout'
import Styles from '../../styles/EntradaProducto.module.css'
import Entrada from '../../components/Entrada'

const EntradaProducto = ({resultados}) => {

  const {titulo, precio, foto, id} = resultados[0]

console.log(resultados)

    return ( 
      <Layout
      pagina={titulo}>
  
        <main className='contenedor'>
          <h2 className='heading'>{titulo}</h2>
          <p className={Styles.precio}>${precio}.000</p> 
          <div className={Styles.enlace}>
               
               <a href={`https://wa.me/+573122196229?text=Hola,%20me%20interesa%20el%20vestido%20${titulo}%20precio:$${precio}.000%20foto:%20${foto[0].formats.thumbnail.url}` } target={'_blank'}><button className={Styles.boton}
               >
                ¡Lo Quiero!
                </button></a>
                </div>
        
  
            <div className={Styles.tienda}>
          
            {foto.map(resultado=>(
              <Entrada
              key={resultado.id}
              resultado={resultado}
              />
            ))}
            
            </div>
      </main>
    
    </Layout> 
    );
  }



/* export async function getServerSideProps({query:{id}}) {

    
    const url=`http://localhost:1337/tiendas/${id}`
    const respuesta = await fetch(url);
    const resultados = await respuesta.json();
    
    return{
      props:{
        resultados

      }
    }
} */

export async function getStaticPaths() {

  const url=`${process.env.API_URL}/tiendas`
  const respuesta = await fetch(url);
  const resultados = await respuesta.json();
  const paths = resultados.map(resultado=>({
    params: {url: resultado.url }

  }))
  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params:{url}}) {

  
  const urlTiendas=`${process.env.API_URL}/tiendas?url=${url}`
  const respuesta = await fetch(urlTiendas);
  const resultados = await respuesta.json();
  
  return{
    props:{
      resultados

    }
  }
}

 
export default EntradaProducto;