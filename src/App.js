import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Header />
      <main className='container mt-5 '>
        <Routes element={<Layout />}>
          <Route index element={<Home/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
