import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from './views/home'
import Erro from './views/erro'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
