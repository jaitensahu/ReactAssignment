import logo from './logo.svg';
import './App.css';
import QuoteCard from './Components/QuoteCard';
import Header from './Components/Header';
import quoteData from './Data.json'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      {
        quoteData.map(dt=>{
          return <QuoteCard {...dt}/>
        })
      }
     < Footer />
    </div>
  );
}

export default App;
