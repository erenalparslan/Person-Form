import './App.css';
import Sidebar from './Dashboard/Dashboard';
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
      <Sidebar items={menuItems}/>
      <Login/>
   
    </div>
  );
}

export default App;
