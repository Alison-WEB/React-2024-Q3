import { AstronomicalObject } from '../shared/types';
import './Card.css';

const Card = ({
  astronomicalObject,
}: {
  astronomicalObject: AstronomicalObject;
}) => {
  return (
    <div className="card">
      <h2>Name: {astronomicalObject.name}</h2>
      <p>Type: {astronomicalObject.astronomicalObjectType}</p>
      {astronomicalObject.location !== null && (
        <p>Location: {astronomicalObject.location.name}</p>
      )}
    </div>
  );
};

export default Card;
