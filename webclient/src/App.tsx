import {Component} from "react";

interface Props {
   name:
    string
}

class App extends Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
      </>
    );
  }
}

export default App;
