import { Component } from 'react';
import './ErrorButton.css';

interface State {
  hasError: boolean;
}

interface Props {
  type: string;
}

class ErrorButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  throwError() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error('The button to generate an error was pressed.');
    }
    return (
      <button className="error-button" onClick={() => this.throwError}>
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
