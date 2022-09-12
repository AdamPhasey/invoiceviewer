import Head from 'next/head'
import { INVOICES } from '../interfaces/invoices';
import { useEffect, useState } from 'react';



const Home = () => {

  const [invoices, setInvoices] = useState<INVOICES>()

  useEffect(() => {
    async function fetchData(){
    const data = await fetch('api/hello')
    const res = await data.json()
    setInvoices(res)
    }
    fetchData()
  })

  

  return (
    <div>
      <Head>
        <title>Client Portal</title>
        <meta name="description" content="Client Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       
      </main>

      <footer>
       
      </footer>
    </div>
  )
}

export default Home
