import Layout from '../components/Layout'
import Producto from '../components/Producto'
import Styles from '../styles/Tienda.module.css'




const Tienda = ({resultados}) => {

  console.log(resultados.nueva_coleccion)
  const jeans = resultados.filter(resultado=>resultado.nueva_coleccion===true)

  return ( 
    <Layout
    pagina='nueva_coleccion'>

      <main className='contenedor'>
        <h2 className='heading'>nueva colección</h2>
      

          <div className={Styles.tienda}>
        
          {jeans.map(resultado=>(
            <Producto
            key={resultado.url}
            resultado={resultado}/>
          ))}
          
          </div>
    </main>
  
  </Layout> 
  );
}

export async function getStaticProps () {

  const url=`${process.env.API_URL}/tiendas?_sort=created_at:desc`
    const respuesta = await fetch(url);
    const resultados = await respuesta.json();

  return {
    props:{
    resultados
  }
  }
}
 
/* export async function getServerSideProps () {

  const url=`${process.env.API_URL}/tiendas`
    const respuesta = await fetch(url);
    const resultados = await respuesta.json();

  return {
    props:{
    resultados
  }
  }
} */
export default Tienda;