import { Component } from 'react';
import '../feature/ErrorButton.css';

class ErrorButton extends Component {
  throwError() {
    throw new Error('The button to generate an error was pressed.');
  }
  render() {
    return (
      <button onClick={() => this.throwError()}>Throw Error</button>
    );
  }
}

export default ErrorButton;
