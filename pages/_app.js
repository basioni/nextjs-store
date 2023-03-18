import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

// import Chart.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from '../models/chartData';

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>


      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Navbar/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-9 gx-5">

            <Component {...pageProps} />
          </div>
        </div>
      </div>

    </>
  )
}
export default App;