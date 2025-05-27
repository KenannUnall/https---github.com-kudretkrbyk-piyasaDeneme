import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Swiper modülleri
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// AOS
import 'aos/dist/aos.css';
import AOS from 'aos';

// Swiper'ı kaydet
register();

// AOS'u başlat
AOS.init({
  duration: 1000,
  once: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
