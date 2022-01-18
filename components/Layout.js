import Header from './Header'
import Head from 'next/head'
import  Footer from './Footer'
import React from 'react';


const Layout = ({children, pagina}) => {
  return ( 
    <div>
      <Head>
        <title>Klaus Boutique - {pagina}</title>
        <meta name="description" content="Sitio Web Klaus Boutique"/>
      </Head>

      <Header />

      {children}

      <Footer/>
    </div>
   );
}
 
export default Layout;