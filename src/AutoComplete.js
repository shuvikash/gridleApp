import React from 'react';
import './AutoComplete.css';

class AutoComplete extends React.Component {
  renderSuggestions () {
    if(this.props.suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {this.props.suggestions.map((item) => <li key={'item_'+ item} onClick= {() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    );
  }
  suggestionSelected (value) {
    this.props.onSuggestionSelect(value);
  }
  render () {
    return (
      <div className="AutoComplete">
        <input type="text" ref="input" value={this.props.text} onChange = {this.props.onTextChanged} onFocus={this.props.onFocusText}/>
        {this.renderSuggestions()}
      </div>
     );
  }
}

export default AutoComplete;
