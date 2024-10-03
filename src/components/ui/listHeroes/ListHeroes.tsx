import { FC } from "react";
import { Heroes } from "../../../types/heroes";
import styles from "./ListHeroes.module.css"
import CardHero from "../cardHero/CardHero";

interface ListHeroes {
  heroes: Heroes[];
  title: string;
}

const ListHeroes: FC<ListHeroes> = ({ heroes, title }) => {
  return (
    <div className={styles.containerPrincipalList}>
      <div className={styles.containerTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.containerList}>
        {heroes.map((hero) => (
          <CardHero key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default ListHeroes;
