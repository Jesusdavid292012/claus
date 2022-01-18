import Layout from '../components/Layout'
import Styles from '../styles/Nosotros.module.css'
import Image from 'next/image'


const Nosotros = () => {
  return ( 
    <Layout
    pagina='Nosotros'>
  
  <main className="contenedor">
    <h2 className="heading">Nosotros</h2>

    <div className={Styles.contenido}>

      <Image priority="true" layout="responsive" width={600} height={450} src="/img/nosotros.jpeg" alt="nosotros" />

      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat odio et sapien ultrices, quis faucibus orci molestie. Aliquam interdum turpis lorem, ut sodales augue tincidunt commodo. Cras luctus turpis sed augue aliquet accumsan sed nec magna. Curabitur ac ante eget libero porta efficitur ac nec neque. Suspendisse tristique ultrices dictum. Sed id mi dolor. Sed facilisis sodales erat vel aliquam. Integer mollis dolor quis elit faucibus, in efficitur mauris vestibulum. Sed non aliquam elit. Praesent sit amet nunc sed diam ultricies ornare. Phasellus sit amet pretium enim. Aenean fringilla nibh eget felis vulputate, nec aliquet nisl faucibus. Mauris eu euismod elit, hendrerit dignissim arcu. Morbi consequat lacus in ex finibus pulvinar. Duis rhoncus efficitur magna, sit amet malesuada nulla sollicitudin eget. Integer feugiat lectus massa.</p>
      </div>

    </div>
  </main>
  
  </Layout> 
  );
}
 
export default Nosotros;