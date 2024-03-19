import './App.css';
import Login from './Login/Login';

function App() {
  const menuItems = [
    { title: 'Anasayfa', url: '#' },
    { title: 'Hakkımızda', url: '#' },
    { title: 'Hizmetler', url: '#' },
    { title: 'İletişim', url: '' },
];

  return (
    <div className="App">
        <p>Hello World !</p>
        <p>Local Branch</p>
        <p>Dev Branch</p>
      <Login/>
   
    </div>
  );
}

export default App;
