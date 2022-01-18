
import Image from 'next/image'
import Styles from '../styles/Index.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import Productoinicio from '../components/Productoinicio'

export default function Home({resultados, resultadosfotos}) {
 
  
  const url = resultados[0].nombre.url
  console.log(resultadosfotos)
  

  const todos = [ 
    {'nombre':'nueva coleccion',
    'foto': resultadosfotos.filter(foto=>foto.nueva_coleccion===true)[0].foto[0].formats.small.url
  },
  {nombre:'promocion',
      foto: resultadosfotos.filter(foto=>foto.promocion===true)[0].foto[0].formats.small.url
    },
    
    {'nombre':'blusas',
    'foto': resultadosfotos.filter(foto=>foto.categorias.nombre==='blusas')[0].foto[0].formats.small.url
  }
  ,
    {'nombre':'jeans',
    'foto': resultadosfotos.filter(foto=>foto.categorias.nombre==='jeans')[0].foto[0].formats.small.url
  }
  ]
  return (
    
      

      <Layout pagina='Inicio'>

        <div className="contenedor">
          <div className={Styles.body}>


        
              <div className={Styles.video}><video
                id="background-video"
                loop
                autoPlay
                muted
                width="550"
                height="600"
                style={{
                  width: "550",
                  height: "600",
                }}
                >
                  <source src={url} type="video/mp4" />video
                </video>
          
              </div>


             <div className={Styles.productos}>
              
                <Productoinicio
                nueva_coleccion={todos[0]}
                promocion={todos[1]}
                blusas={todos[2]}
                jeans={todos[3]}/>
              
              </div>


          </div>
        </div>


      </Layout>

   
    
  )

}
  export async function getStaticProps () {

    const urlvideo=`${process.env.API_URL}/videos`
    const urlfotos=`${process.env.API_URL}/tiendas`

    const [resvideo, resfotos] = await Promise.all([
      fetch(urlvideo),
      fetch(urlfotos)
    ]);
    
    const [resultados, resultadosfotos] = await Promise.all([
      resvideo.json(),
      resfotos.json()
    ]);
  
    return {
      props:{
      resultados,
      resultadosfotos
    }
    }
  }


  {/* <Link href="/tienda">Tienda</Link>
              <Link href="/jeans">Jeans</Link>
              <Link href="/vestidos">Vestidos</Link>
              <Link href="/blusas">Blusas</Link> */}