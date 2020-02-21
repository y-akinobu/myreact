import React from 'react';

class CountButton extends React.Component {

  
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return <button>{this.state.count}</button>;
  }
}

export default CountButton;