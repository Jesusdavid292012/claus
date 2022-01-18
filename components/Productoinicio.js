import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/productoinicio.module.css'


const Productoinicio = ({nueva_coleccion, promocion, blusas, jeans}) => {

  
  return ( 
    
                <div div className={Styles.container}>
                      
                    <Link href="/nuevacoleccion">
                            <div className={Styles.nueva_coleccion}>
                        <Image layout={'fill'} width={300} height={400}  src={nueva_coleccion.foto}  alt={`imagen tienda ${nueva_coleccion.nombre}`}/>
                        <p>nueva colección</p>
                        </div>
                    </Link>

                    <Link href="/vestidos">   
                        <div className={Styles.promocion}>
                          <Image layout={'fill'} width={300} height={400} src={promocion.foto}  alt={`imagen tienda ${promocion.nombre}`}/>
                          <p>promoción</p>
                        </div>
                      </Link> 

                    <Link href="/blusas">
                        <div className={Styles.blusas}>
                          <Image layout={'fill'} width={300} height={400} src={blusas.foto}  alt={`imagen tienda ${blusas.nombre}`}/>
                          <p>blusas</p>
                        </div>
                    </Link>

                    <Link href="/jeans">
                        <div className={Styles.jeans}>
                        
                            <Image layout={'fill'} width={300} height={400} src={jeans.foto}  alt={`imagen tienda ${jeans.nombre}`}/>
                            <p>jeans</p>
                            
                        </div>
                    </Link>
               

            {/* <Link
            href={`/tienda/${url}`}>
              <a className={Styles.enlace}>Ver Fotos</a>
            </Link> */}

            {/* <div className={Styles.enlace}>
            <button  className={Styles.boton}
                >
                  <a href={`https://wa.me/+573122196229?text=${foto[0].formats.thumbnail.url}`}>
                    ¡lo quiero!
                  </a>
                
                </button>
                </div> */}


      
      </div>

   );
}
 
export default Productoinicio;