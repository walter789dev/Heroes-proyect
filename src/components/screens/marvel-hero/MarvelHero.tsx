import { useEffect, useState } from "react";
import { Heroes } from "../../../types/heroes";
import { heroesData } from "../../../data/heroes";
import ListHeroes from "../../ui/listHeroes/ListHeroes";

const MarvelHero = () => {
  const [heroes, setHeroes] = useState<Heroes[]>([]);

  const handleGetHeroesDC = () => {
    const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics");
    setHeroes(result);
  };

  useEffect(() => {
    handleGetHeroesDC();
  }, []);

  return <ListHeroes heroes={heroes} title="Heroes Marvel Comics" />;
};

export default MarvelHero;
