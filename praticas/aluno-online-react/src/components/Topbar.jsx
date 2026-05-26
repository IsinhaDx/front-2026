<<<<<<< HEAD
import avatar from '../assets/avatar.svg'

function Topbar(){
    return (
        <header>
            <h1>Olá, Aluno</h1>
            <img src={avatar} alt='iamgem do avatar'/>
        </header>
    )
=======
import './Topbar.css';
import avatar from '../assets/avatar.svg';

function Topbar() {
  return (
    <header className="topbar">
      <div className="menu-icon-mobile">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
        </svg>
      </div>
      <h1>Olá, Aluno!</h1>
      <img src={avatar} alt="imagem do avatar" className="user-avatar" />
    </header>
  );
>>>>>>> 850cb0932671f7999605115c4d2dbc2bed3bd11a
}

export default Topbar;