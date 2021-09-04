import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CardList from "./components/CardList";
import Quotes from "./components/Quotes";

import Gambar from "./assets/images/gambar1.jpg";

const quotes = "Secapek-capeknya kerja lebih capek nganggur.";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList
      name="adriansyah"
      nim="21120118130098"
      kelompok="11"
      isNameBold
      image={Gambar}
    />
    <Quotes author="Ernest Prakasa" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);
