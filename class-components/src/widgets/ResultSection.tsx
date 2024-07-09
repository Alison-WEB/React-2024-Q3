import { Component } from 'react';

import ApiData from '../shared/types';
import Card from '../entity/Card';
import './ResultSection.css';

interface Props {
  searchQuery: string;
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
        {apiData ? (
          apiData.map((data) => (
            <Card key={data.uid} astronomicalObject={data} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default ResultSection;
