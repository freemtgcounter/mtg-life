import React from 'react';

class BackgroundSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      optionsArr: [
        {
          title: 'select background',
          value: 'neutral',
        },
        {
          title: 'black',
          value: 'black',
        },
        {
          title: 'blue',
          value: 'blue',
        },
        {
          title: 'green',
          value: 'green',
        },
        {
          title: 'red',
          value: 'red',
        },
        {
          title: 'white',
          value: 'white',
        },
        {
          title: 'colorless',
          value: 'colorless',
        },
      ],
    };
  };

  selectBg(e) {
    //this.setState({ selectedValue: e.target.value });
    this.props.callbackToParent(e.target.value);
  };

  render () {
    return <select onChange={this.selectBg.bind(this)}>
      {this.state.optionsArr.map( theOption => <option key={theOption.value} value={theOption.value}> {theOption.title} </option>) }
    </select>
  }

}

export default BackgroundSelector;
