import { Component } from 'react';
import getApiData from '../shared/getApiData';
import ApiData from '../shared/types';
import './ResultSection.css';

interface State {
  apiData: ApiData | null;
}

class ResultSection extends Component {
  state: State  = {
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
          <div>
            <p>Result</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default ResultSection;