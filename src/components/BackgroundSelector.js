import React from 'react';

class BackgroundSelector extends React.Component {
  constructor(props) {
    super(props);

    console.log(this);

    this.state = {
      selectedValue: '',
      optionsArr: [
        {
          title: 'select background',
          value: 'neutral',
        },
        {
          title: 'colorless',
          value: 'colorless',
        },
        {
          title: 'white',
          value: 'white',
        },
        {
          title: 'blue',
          value: 'blue',
        },
        {
          title: 'black',
          value: 'black',
        },
        {
          title: 'red',
          value: 'red',
        },
        {
          title: 'green',
          value: 'green',
        },
        {
          title: 'white / blue',
          value: 'bluewhite',
        },
        {
          title: 'white / black',
          value: 'blackwhite',
        },
        {
          title: 'blue / red',
          value: 'redblue',
        },
        {
          title: 'blue / black',
          value: 'blueblack',
        },
        {
          title: 'black / red',
          value: 'blackred',
        },
        {
          title: 'black / green',
          value: 'blackgreen',
        },
        {
          title: 'green / white',
          value: 'greenwhite',
        },
        {
          title: 'green / blue',
          value: 'greenblue',
        },
        {
          title: 'red / white',
          value: 'redwhite',
        },
        {
          title: 'red / green',
          value: 'redgreen',
        },
      ],
    };
  };

  selectBg(e) {
    this.props.callbackToParent(e.target.value);
  };

  render () {
    const label_id = 'background-selector-'+this.props.player_id
    return <div>
      <label htmlFor={label_id}>Select background</label>
      <select id={label_id} className="pconfig-item bg-selector" onChange={this.selectBg.bind(this)}>
        {this.state.optionsArr.map( theOption => <option key={theOption.value} value={theOption.value}> {theOption.title} </option>) }
      </select>
    </div>
  }
}

export default BackgroundSelector;
