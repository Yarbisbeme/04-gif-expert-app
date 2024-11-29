import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './gifExpertApp.jsx';
import './Styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp/>
  </StrictMode>
);

