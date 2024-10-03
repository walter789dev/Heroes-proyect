import { FC } from "react"
import { Heroes } from "../../../types/heroes"
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./CardHero.module.css"

interface CardHero {
   hero: Heroes
}

const CardHero: FC<CardHero> = ({ hero }) => {
   const navigate = useNavigate()
   const handleNavigateHero = () => {
      navigate(`/hero/${hero.id}`)
   }

  return (
    <Card className={styles.card} onClick={handleNavigateHero} style={{ width: "100%" }}>
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
      <Card.Body>
           <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
         <span><b>Alter Ego: {hero.alter_ego} </b></span>
         <span><b>Publicadora: {hero.publisher} </b></span>
         <span><b>Primera Aparición: {hero.first_appearance} </b></span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHero
