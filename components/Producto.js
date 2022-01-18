import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Producto.module.css'


const Producto = ({resultado}) => {

  const {titulo, foto, id, precio, url, promocion, nueva_coleccion } = resultado
  
  return ( 
    
    <article>
      <div
      className={Styles.contenido}>

            <h3>{titulo}</h3>
            <div >
                <div className={Styles.container2}>
                      <div>
                    <Image layout="responsive" width={600} height={750} src={foto[0].formats.medium.url}  alt={`imagen tienda ${titulo}`}/>

                      <div>
                          {promocion?<p className={Styles.imagenPromo}>promoción</p>:nueva_coleccion?<p className={Styles.imagenNew}>nueva colección</p>:null}
                      </div>
                    
                    
                    </div>
                </div>
            </div>

           <p className={Styles.precio}>${precio}.000</p> 

            <Link
            href={`/tienda/${url}`}>
              <a className={Styles.enlace}>Ver Fotos</a>
            </Link>

            <div className={Styles.enlace}>
            <button  className={Styles.boton}
                >
                  <a href={`https://wa.me/+573122196229?text=Hola,%20me%20interesa%20el%20vestido%20${titulo}%20precio:$${precio}.000%20foto:%20${foto[0].formats.thumbnail.url}`} target={'_blank'}>
                    ¡lo quiero!
                  </a>
                
                </button>
                </div>


      
      </div>

      </article>
   );
}
 
export default Producto;