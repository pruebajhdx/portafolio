import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/pages/Main';

function App() {
  return (
    <div className="App">
      <div className='fixed inset-0 flex justify-center sm:px-8 '>
        <div className='relative overflow-auto'>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
