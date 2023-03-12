import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>

      
      <div class="container-fluid">
        <div class="row">
          <div class="col">
          <Navbar></Navbar>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-lg-2">
            <Sidebar/>
          </div>
          <div class="col-9 gx-5">
            
          <Component {...pageProps} />
          </div>
        </div>
      </div>
      
    </>
  )
}
export default App;