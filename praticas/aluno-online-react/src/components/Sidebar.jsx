<<<<<<< HEAD
import logo from './assets/learn.svg'

function Sidebar(){
    return (  
    <aside className='hidden md:block bg-gray-300'>
    <header className='flex flex-rol'>
      <img src={logo} alt="imagem do logo" />
      <h1>ALuno Online</h1>
    </header>
    <Menu/>
    </aside>
    )
=======
import './Sidebar.css';
import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar() {
  return (
    <aside className="sidebar">
      <figure className="logo">
        <img src={logo} alt="Imagem de um capelo" />
        <h1>Aluno Online</h1>
      </figure>
      <Menu/>
    </aside>
  );
>>>>>>> 850cb0932671f7999605115c4d2dbc2bed3bd11a
}

export default Sidebar;