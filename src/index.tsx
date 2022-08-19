import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Curriculum from './components/curriculum/Curriculum';
import reportWebVitals from './reportWebVitals';
import SocialMedia from "./components/socialmedia/SocialMedia"
import Profile from './components/profile/Profile';
import Body from './components/body/Body';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <header>
      <Profile/>
    </header>
    <Curriculum>
      <SocialMedia/>
      <Body/>
    </Curriculum> 
  </React.StrictMode>
);

reportWebVitals();
