import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { directive } from '@babel/types';
import React, { Component } from "react";


class BCA_Viewer extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      columnDefs: [
        { headerName: 'EPIC Details', field: 'department_id', sortable: true, filter: true },
        { headerName: 'Department Name', field: 'department_name', sortable: true, filter: true },
        { headerName: 'Specialty', field: 'specialty', sortable: true, filter: true }
        
      ],
      rowData: [
        { department_id: 10201001, department_name: 'PAMC PCU', specialty: null },

        
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
        width: 600,
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

export default BCA_Viewer