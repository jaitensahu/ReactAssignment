import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Section2 from './components/Section2/Section'
import TeamMembers from './components/Team/TeamMembers';
import Footer from './components/Footer/Footer';

function App(Props) {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section2 />
      <TeamMembers />
      <Footer />
      {/* <Button  buttonData="Jaiten"/> */}
    </div>
  );
}

export default App;
