import { AstronomicalObject } from '../shared/types';
import './Card.css';

const Card = ({
  astronomicalObject,
  onClick,
}: {
  astronomicalObject: AstronomicalObject;
  onClick: (object: AstronomicalObject) => void;
}) => {
  return (
    <div className="card" onClick={() => onClick(astronomicalObject)}>
      <h2>{astronomicalObject.name}</h2>
    </div>
  );
};

export default Card;
