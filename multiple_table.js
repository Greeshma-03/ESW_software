import { data } from './constants'
import { DataTable, DataTableCell, DataTableRow, DataTablePagination } from 'material-bread';


import axios from 'axios';
import { useState, useEffect } from 'react';
// import Table from 'react-smart-dynamic-table'

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import Table from 'react-smart-dynamic-table'
import Plotly from 'react-native-plotly';



const TableDemo = (props) => {
   
   var page=0,perPage=2;

    return (
        <DataTable>
            <DataTableRow>
                <DataTableCell text={'Desert'} type={'header'} borderRight relativeWidth={2} />
                <DataTableCell text={'Calories'} type={'header'} right />
                <DataTableCell text={'Fat (g)'} type={'header'} right />
                <DataTableCell text={'Carbs (g)'} type={'header'} right />
                <DataTableCell text={'Protein (g)'} type={'header'} right />
            </DataTableRow>
            {data
                .slice(
                    page * perPage,
                    page * perPage + perPage,
                )
                .map(row => (
                    <DataTableRow key={row.name}>
                        <DataTableCell text={row.name} borderRight relativeWidth={2} />
                        <DataTableCell text={row.calories} right />
                        <DataTableCell text={row.fat} right />
                        <DataTableCell text={row.carbs} right />
                        <DataTableCell text={row.protein} right />
                    </DataTableRow>
                ))}

            <DataTablePagination
                page={page}
                numberOfPages={data.length / perPage}
                numberOfRows={data.length}
                perPage={perPage}
                onChangePage={page => this.setState({ page: page })}
                onChangeRowsPerPage={perPage => this.setState({ perPage: perPage })}
                possibleNumberPerPage={[2, 3, 4, 5, 6]}
            />
        </DataTable>
    );

    
};

export default TableDemo;
