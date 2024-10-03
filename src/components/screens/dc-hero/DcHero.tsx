import { useEffect, useState } from "react";
import { Heroes } from "../../../types/heroes";
import { heroesData } from "../../../data/heroes";
import ListHeroes from "../../ui/listHeroes/ListHeroes";

const DcHero = () => {
  const [heroes, setHeroes] = useState<Heroes[]>([]);

  const handleGetHeroesDC = () => {
    const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
    setHeroes(result);
  };

  useEffect(() => {
    handleGetHeroesDC();
  }, []);

  return <ListHeroes heroes={heroes} title="Heroes DC Comics" />;
};

export default DcHero;
