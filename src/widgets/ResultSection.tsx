import { useState, useEffect } from 'react';
import { ApiData, AstronomicalObject } from '../shared/types';
import Card from '../entity/Card';
import CardDetails from '../entity/CardDetails';
import './ResultSection.css';

const ResultSection = ({ apiData }: { apiData: ApiData | null }) => {
  const [selectedObject, setSelectedObject] =
    useState<AstronomicalObject | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      event.target instanceof Element &&
      !event.target.closest('.card-details')
    ) {
      setSelectedObject(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="result-section">
      <div className="result-list">
        {apiData && apiData.astronomicalObjects.length > 0 ? (
          apiData.astronomicalObjects.map((data: AstronomicalObject) => (
            <Card
              key={data.uid}
              astronomicalObject={data}
              onClick={() => setSelectedObject(data)}
            />
          ))
        ) : (
          <p>
            {apiData && apiData.astronomicalObjects.length === 0
              ? "We couldn't find anything for your search. Try adjusting your search terms."
              : 'Loading...'}
          </p>
        )}
      </div>
      {selectedObject && <CardDetails astronomicalObject={selectedObject} />}
    </div>
  );
};

export default ResultSection;
