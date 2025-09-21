import './App.css';
import ContactForm from './componets/Navigation/ContactForm/ContactForm';
import ContactHeader from './componets/Navigation/ContactHeader/ContactHeader';
import Navigation from './componets/Navigation/Navigation';


function App() {
  return (
    <div basename= "/formsproject">
      <Navigation/>
      <main className ='main_container'>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </div>
  );
}

export default App;
