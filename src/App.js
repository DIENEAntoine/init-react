import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/plat/:slug" element={<DishDetails/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
