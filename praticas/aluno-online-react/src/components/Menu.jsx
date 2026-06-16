import cap from "../assets/learn.svg";
<<<<<<< HEAD
import { NavLink, Link } from "react-router-dom";


function Menu() {

=======

function Menu() {
>>>>>>> 9273755204a60aea853366cbbec4b8bf19ddea0d
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-300 p-6">
      <div className="flex items-center gap-2 mb-8">
        <img src={cap} alt="Quepe" className="w-6 h-6" />

        <h1 className="text-lg font-bold text-gray-800">Aluno Online</h1>
      </div>
      <nav>
        <ul className="space-y-5 text-gray-800">
<<<<<<< HEAD
          <li>
            < NavLink to="/dashboard">Dashboard </NavLink> 
          </li>
          <li>
            < NavLink to="/notas">Notas </NavLink>
          </li>
          <li>
          < NavLink to="/faltas">Faltas </NavLink>
          </li>
          <li> 
            < NavLink to="/boletos">Boletos </NavLink>
          </li>
          <li> 
            <NavLink to="/requerimentos">Requerimentos </NavLink> 
          </li>
          <li> 
            < NavLink to="/login"> Sair </NavLink>
          </li>
=======
          <li className="cursor-pointer hover:text-black">Dashboard</li>
          <li className="cursor-pointer hover:text-black">Notas</li>
          <li className="cursor-pointer hover:text-black">Faltas</li>
          <li className="cursor-pointer hover:text-black">Boletos</li>
          <li className="cursor-pointer hover:text-black">Requerimentos</li>
          <li className="cursor-pointer hover:text-black">Sair</li>
>>>>>>> 9273755204a60aea853366cbbec4b8bf19ddea0d
        </ul>
      </nav>
    </aside>
  );
}

<<<<<<< HEAD
export default Menu;
=======
export default Menu;

>>>>>>> 9273755204a60aea853366cbbec4b8bf19ddea0d
