import { Route, Routes } from "react-router-dom";
import Header from "../components/ui/header/Header";
import Home from "../components/screens/home/Home";
import Search from "../components/screens/search/Search";
import DcHero from "../components/screens/dc-hero/DcHero";
import MarvelHero from "../components/screens/marvel-hero/MarvelHero";
import HeroPage from "../components/screens/heroPage/HeroPage";

const ProtectedRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dcHeroes" element={<DcHero />} />
        <Route path="/marvelHeroes" element={<MarvelHero />} />
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </>
  );
};

export default ProtectedRoutes;
