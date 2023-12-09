import './App.css';
import Header from './Components/Header';
import Generator from './Components/Generator';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='h-screen bg-gray-900'>
      <Header />
      <Generator />
      <Footer />
    </div>
  );
}

export default App;
