import { NotificationContainer } from 'react-notifications';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <NotificationContainer />
    </>
  );
}

export default App;
