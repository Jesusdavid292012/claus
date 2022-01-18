import {useState} from 'react';

import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Entrada.module.css'
import Smodal from '../styles/Modal.module.css'



const Entrada = ({resultado}) => {
  const [modal, setModal] = useState(false)

  
  return ( 
    
    <article className={modal?Smodal.modal:null} >
      <div
      className={Smodal.modalcontainer} >
        

          
          
            
          <div className={!modal?Styles.imag:null}>
            <Image onClick={()=>setModal(true)} 
            width={600} 
            height={700} 
            src={resultado.formats.large.url}  
            alt={`imagen tienda`}/>
          </div>
          
              

            {modal?(<button 
            className={Smodal.modalclose}
            onClick={()=>setModal(false)}>
            X
             </button>):null}
            
                

                {!modal?(<button 
                className={Styles.enlace}
                onClick={()=>setModal(true)}>
                Ver Foto
                </button>):null}

      </div>

      </article>
   );
}
 
export default Entrada;