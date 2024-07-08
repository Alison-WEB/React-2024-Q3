import { Component } from 'react';
import getApiData from '../shared/getApiData';
import ApiData from '../shared/types';
import Card from '../entity/Card';
import './ResultSection.css';

interface State {
  apiData: ApiData[] | null;
}

class ResultSection extends Component {
  state: State = {
    apiData: null
  };

  async componentDidMount() {
    const data = await getApiData();
    this.setState({ apiData: data });
  }

  render() {
    const { apiData } = this.state;

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