import Head from "next/head";
import { INVOICES } from "../interfaces/invoices";
import { SetStateAction, useEffect, useState } from "react";
import ListMui from "../components/ListMui";

const Home = () => {
  const [invoices, setInvoices] = useState<INVOICES[]>();
  const [users, setUsers] = useState<Array<String>>();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("api/hello");
      const res = await data.json();
      setInvoices(res);
    }
    fetchData();
    getAllUsers();
  }, []);

  function getAllUsers() {
    if (invoices) {
      let data: Array<String> = [];
      for (let i = 0; i < invoices.length; i++) {
        if (!data.includes(invoices[i].COMPANYTOINVOICE)) {
          data.push(invoices[i].COMPANYTOINVOICE);
        }
      }
      setUsers(data);
      console.log(data);
    }
  }

  return (
    <div>
      <Head>
        <title>Client Portal</title>
        <meta name="description" content="Client Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex h-screen w-screen flex-col justify-center items-center">
          <h1 className="text-3xl">Welcome!</h1>
          <h1 className="text-3xl">
            Please select your company from the list below:
          </h1>
          {users && <ListMui users={users} />}
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
