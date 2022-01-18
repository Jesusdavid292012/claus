import Layout from '../components/Layout'
import Producto from '../components/Producto'
import Styles from '../styles/Tienda.module.css'




const Tienda = ({resultados}) => {

  const vestidos = resultados.filter(resultado=>resultado.categorias.nombre==="vestidos")
 console.log(vestidos)

  return ( 
    <Layout
    pagina='Vestidos'>

      <main className='contenedor'>
        <h2 className='heading'>vestidos</h2>
      

          <div className={Styles.tienda}>
        
          {vestidos.map(resultado=>(
            <Producto
            key={resultado.id}
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