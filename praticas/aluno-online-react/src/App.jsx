<<<<<<< HEAD
import { Routes, Route} from "react-router-dom"; 

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimento";
import Layout from "./layout/Layout";


function App () {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/*template */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/requerimentos" element={<Requerimentos />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}


=======


import Login from "./pages/Login";

import Login from "./pages/Login";


import Login from "./pages/Login";



import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ListagemDeFaltas from "./pages/Listagemdefaltas";
import ListagemDeNotas from "./pages/Listagemdenotas";
import ListagemDeBoletos from "./pages/Listagemdeboletos";
import ListagemDeRequerimentos from "./pages/Listagemderequerimentos";

function App() {
  return (
    <Layout>
      {/* Altere o componente aqui dentro para visualizar as outras páginas */}
      <ListagemDeRequerimentos />
    </Layout>
  );
}

>>>>>>> 9273755204a60aea853366cbbec4b8bf19ddea0d
export default App;