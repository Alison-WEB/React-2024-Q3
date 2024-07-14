import { AstronomicalObject } from '../shared/types';
import './CardDetails.css';

const CardDetails = ({
  astronomicalObject,
}: {
  astronomicalObject: AstronomicalObject;
}) => {
  return (
    <div className="card-details">
      <h2>Name: {astronomicalObject.name}</h2>
      <p>Type: {astronomicalObject.astronomicalObjectType}</p>
      {astronomicalObject.location !== null && (
        <p>Location: {astronomicalObject.location.name}</p>
      )}
    </div>
  );
};

export default CardDetails;
