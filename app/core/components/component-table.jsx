import React from 'react';
import ComponentRow from './component-row';

const ComponentTable = ({components, filterText}) => {
  let rows = [];

  components.map((component) => {
    if (component.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(<ComponentRow component={component} key={component.name}/>);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ComponentTable;
