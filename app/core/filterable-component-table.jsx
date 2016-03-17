import React            from 'react';
import ComponentTable   from './components/component-table';
import SearchBar        from './components/search-bar';

class FilterableComponentTable extends React.Component {

  constructor() {
    super();
    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      filterText: ''
    }
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {

    const components = [
      {name: "Badge"},
      {name: "Reactive Text"},
      {name: "Reactive Numeric"}
    ];

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ComponentTable
          components={components}
          filterText={this.state.filterText}
        />
      </div>
    )
  }

}

export default FilterableComponentTable;
