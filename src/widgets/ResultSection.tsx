import { ApiData, AstronomicalObject } from '../shared/types';
import Card from '../entity/Card';
import './ResultSection.css';

const ResultSection = ({ apiData }: { apiData: ApiData | null }) => {
  return (
    <div className="result-section">
      {apiData && apiData.astronomicalObjects.length > 0 ? (
        apiData.astronomicalObjects.map((data: AstronomicalObject) => (
          <Card key={data.uid} astronomicalObject={data} />
        ))
      ) : (
        <p>
          {apiData && apiData.astronomicalObjects.length === 0
            ? "We couldn't find anything for your search. Try adjusting your search terms."
            : 'Loading...'}
        </p>
      )}
    </div>
  );
};

export default ResultSection;
