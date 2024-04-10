import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/a-propos" element={<About />}/>
          <Route path="/plat/:slug" element={<DishDetails />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
