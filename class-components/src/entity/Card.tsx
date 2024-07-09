import { Component } from 'react';
import ApiData from '../shared/types';
import './Card.css';

interface Props {
  astronomicalObject: ApiData;
}

class Card extends Component<Props> {
  render() {
    const { astronomicalObject } = this.props;
    return (
      <div className="card">
        <h2>Name: {astronomicalObject.name}</h2>
        <p>Type: {astronomicalObject.astronomicalObjectType}</p>
        {astronomicalObject.location !== null && (
          <p>Location: {astronomicalObject.location.name}</p>
        )}
      </div>
    );
  }
}

export default Card;
