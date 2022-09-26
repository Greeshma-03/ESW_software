// import axios from 'axios';
import { useState, useEffect } from 'react';
// import Table from 'react-smart-dynamic-table'

// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import Table from 'react-smart-dynamic-table'
// import Plotly from 'react-native-plotly';
import { Table, Row, Rows } from 'react-native-table-component';

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
  

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
// } from "react-native-chart-kit";

import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native'
// import { render } from 'react-dom';



class Homee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '456\n789'],
                ['a', 'b', 'c', 'd']
            ]
        }



        // const [users, setUsers] = useState([]);
        // const [timed, setTimed] = useState([]); 
        const createdtime1 = [3, 19]
        const createdtime2 = []
        const createdtime3 = []
        const createdtime4 = []
        const createdtime5 = []
        const field1 = [2, 7]
        const field2 = []
        const field3 = []
        const field4 = []
        const field5 = []


        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        }
        
        var i = 0;
        for (i = 0; i < users.length; i++) {
            if (users[i].field1 != 'nan' && users[i].field1 != null && users[i] != null) {
                createdtime1.push(users[i].created_at)
                field1.push(users[i].field1)
            }

            if (users[i].field2 != 'nan' && users[i].field2 != null && users[i] != null) {
                createdtime2.push(users[i].created_at)
                field2.push(users[i].field2)
            }

            if (users[i].field3 != 'nan' && users[i].field3 != null && users[i] != null) {
                createdtime3.push(users[i].created_at)
                field3.push(users[i].field3)
            }

            if (users[i].field4 != 'nan' && users[i].field4 != null && users[i] != null) {
                createdtime4.push(users[i].created_at)
                field4.push(users[i].field4)
            }

            if (users[i].field5 != 'nan' && users[i].field5 != null && users[i] != null) {
                createdtime5.push(users[i].created_at)
                field5.push(users[i].field5)
            }

        }

        const f1 = ["3ew", "45es", "gh", "2ew"];
        const f2 = [2, 1, 2.5, 197.6789];


        const data = {
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 3, 4, 8],
            type: 'scatter',
        };
        const layout = { title: 'My cool chart!' };
    }

    render() {
        const state = this.state;
        return (<View>
          
            <View>
                <Button
                    title="View All Time statistics"
                    onPress={AllTime}
                />
            </View>
            {
                console.log(createdtime1)
            }
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
        </View>
        )
    }
}
export default Homee;
