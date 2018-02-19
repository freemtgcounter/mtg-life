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
          title: 'Orange',
          value: 'orange',
        },
        {
          title: 'B',
          value: 'b',
        },
        {
          title: 'C',
          value: 'c',
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
