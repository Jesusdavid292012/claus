import Link from 'next/link'
import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import React ,{ useState } from 'react'

const Header = () => {

 const [isOpen, setIsOpen] = useState(false)

  const abrir =(e)=>{
    e.stopPropagation()
    setIsOpen(true)
  }


  return ( 
    <header className={Styles.header} onClick={() => setIsOpen(false)} >
      <div >

      <img className={Styles.iconomenu}  alt={'menu'} src={'/img/menu.png'} 
      onClick={abrir} />


        <div className={Styles.barra}>


      <div className={isOpen?Styles.listado:Styles.listadoclose}>
        <ul className={Styles.ulul}>
          <li>
            <a  onClick={() => setIsOpen(false)}>Cerrar</a>
          </li>
          <li>
            <a>
            <Link href="/">Inicio</Link>
            </a>
          </li>
          <li>
            <a>
            <Link href="/tienda">Tienda</Link>
            </a>
          </li>
          <li>
              <a>
              <Link href="/nuevacoleccion">Nueva Colección</Link>
              </a>
          </li>
          <li>
            <a>
              <Link href="/vestidos">Vestidos</Link>
            </a>
          </li>
          <li>
            <a>
            <Link href="/jeans">Jeans</Link>
            </a>
          </li>
          <li>
            <a>
            <Link href="/blusas">Blusas</Link>
            </a>
          </li>
        </ul>
      </div>

    

         
              <Link href="/">
                <div className={Styles.imag} >
        
                    <Image 
                     width={400} height={200}  src="/img/logo.jpeg" alt="logo"/>
                    
                  </div>
                  </Link>

            
        </div>
      </div>
    </header>
   );
}
 
export default Header;




{/* <nav  className={Styles.navegacion}>
              <Link href="/">Inicio</Link>
              <Link href="/nosotros">Nosotros</Link>
              <Link href="/tienda">Tienda</Link>
              <Link href="/jeans">Jeans</Link>
              <Link href="/vestidos">Vestidos</Link>
              <Link href="/blusas">Blusas</Link>
            

            </nav> */}