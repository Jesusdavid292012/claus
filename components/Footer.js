
  import Link from 'next/link'
  import Styles from '../styles/Header.module.css'
  import Stylesf from '../styles/Footer.module.css'
  
  const Footer = () => {
    return ( 
      <header className={Stylesf.footer}>
        <div className={`contenedor ${Styles.contenido}`}>
          
  
              <nav  className={Stylesf.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/tienda">Tienda</Link>

             
                <div className={Stylesf.copyright}>
                <p >Todos Los Derechos Reservados</p>
                </div>
  
             
  
              </nav>
              <div id="whatsapp-icon" style={{position:'fixed', right:'10px', bottom:'20px', textalign:'center', padding:'5px'}}>
                <a href="https://api.whatsapp.com/send?phone=+573122196229" target={'_blank'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" width="100" height="100"/></a>
                </div>
          </div>
        
      </header>
     );
  }
   
export default Footer;