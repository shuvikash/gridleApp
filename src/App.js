import React from 'react';
import AutoComplete from  './AutoComplete';
import subjects from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    };
  }
  onFocusText = () => {
    const value = this.state.text;
    let suggestions = subjects;
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = subjects.sort().filter(v => regex.test(v));
    }
     this.setState({ suggestions, text: value })
  }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = subjects.sort().filter(v => regex.test(v));
    }
     this.setState({ suggestions, text: value })
  }
  onSuggestionSelect = (value) => {
    this.setState({suggestions: [], text: value })
  }
  render() {
    return (
      <div className="autocomplete">
         <div className="autocomplete-component">
             <AutoComplete text={this.state.text} suggestions={this.state.suggestions} onFocusText={this.onFocusText} onSuggestionSelect={this.onSuggestionSelect} onTextChanged={this.onTextChanged} />
         </div>
      </div>
      );
    }
  }

export default App;
