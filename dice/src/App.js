import React from 'react';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { directive } from '@babel/types';


class App extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      columnDefs: [
        { headerName: 'EPIC Department ID', field: 'department_id', sortable: true, filter: true },
        { headerName: 'Department Name', field: 'department_name', sortable: true, filter: true },
        { headerName: 'Specialty', field: 'specialty', sortable: true, filter: true }
        
      ],
      rowData: [
        { department_id: 10201001, department_name: 'PAMC PCU', specialty: null },
        { department_id: 10201002, department_name: 'PAMC 3W ORTHO NEURO', specialty: null  },
        { department_id: 10201003, department_name: 'PAMC 4N SURGICAL', specialty: null },
        { department_id: 10201004, department_name: 'PAMC 5N MEDICAL ONCOLOGY', specialty: 'Oncology'  },
        { department_id: 10201005, department_name: 'PAMC 5W NEURO', specialty: null },
        { department_id: 10201006, department_name: 'PAMC ICU', specialty: 'Critical Care Medicine'  },
        { department_id: 10201007, department_name: 'PAMC CICU', specialty: 'Critical Care Medicine' },
        { department_id: 10201008, department_name: 'PAMC EMERGENCY', specialty: 'Emergency Medicine' },
        { department_id: 10201009, department_name: 'PAMC LABOR AND DEIVERY', specialty: 'Obstetrics' },
        { department_id: 10201010, department_name: 'PAMC NEONATAL INTENSIVE CARE', specialty: 'Neonatal Critical Care Medicine'  }
        
      ]
    };
  }

  // componentDidMount(){
  //   fetch( /*INSERT API */)
  //   .then(rowData => res.json())
  //   .then(rowData => this.setState({ rowData }))
  //   .catch(err => console.log(err));
  // }

  render(){
    return (
      <div
      className="ag-theme-balham"
      style={{
        width: 620,
        height: 600
      }}
      >
        <AgGridReact
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}
      />
      </div>
    )
  }
}

export default App;
