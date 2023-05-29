import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/main/Page';

export default function App(){
   return (
      <div className='App' >
         <Header/>
       <Page/>
       <Footer/>
      </div>
   )
}