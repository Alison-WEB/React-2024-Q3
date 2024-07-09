import { Component } from 'react';

import ApiData from '../shared/types';
import Card from '../entity/Card';
import './ResultSection.css';

interface Props {
  apiData: ApiData[] | null;
}

class ResultSection extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { apiData } = this.props;
    console.log(apiData);
    return (
      <div className="result-section">
        {apiData && apiData.length > 0 ? (
          apiData.map((data) => (
            <Card key={data.uid} astronomicalObject={data} />
          ))
        ) : (
          <p>
            {apiData && apiData.length === 0
              ? "We couldn't find anything for your search. Try adjusting your search terms."
              : 'Loading...'}
          </p>
        )}
      </div>
    );
  }
}

export default ResultSection;
