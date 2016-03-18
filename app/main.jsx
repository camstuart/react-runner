import React                    from  'react';
import {render}                 from  'react-dom';
import FilterableComponentTable from  './core/filterable-component-table';


// init shell
renderShell();

function renderShell() {
    var shell = document.createElement('main');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(<FilterableComponentTable />, shell);
}
