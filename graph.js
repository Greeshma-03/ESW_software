import axios from 'axios';
import { useState, useEffect } from 'react';
// import Table from 'react-smart-dynamic-table'

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import Table from 'react-smart-dynamic-table'
import Plotly from 'react-native-plotly';


import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const createdtime1 = [1]
  const createdtime2 = []
  const createdtime3 = []
  const createdtime4 = []
  const createdtime5 = []
  const field1 = [1]
  const field2 = []
  const field3 = []
  const field4 = []
  const field5 = []
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
  }

  const AllTime = (event) => {
    event.preventDefault();
    axios
      .get('https://api.thingspeak.com/channels/1848342/feeds.json?api_key=F8K4OFRIMWP3MN38')
      .then((response) => {
        setUsers(response.data.feeds);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  var i = 0;
  for (i = 0; i < users.length; i++) {
    if (users[i].field1 != 'nan' && users[i].field1 != null && users[i] != null) {
      // createdtime1.push(i)
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


  return (<View>
    {
      console.log(createdtime1)
    }
    <View>
      <Button
        title="View All Time statistics"
        onPress={AllTime}
      />

    </View>
    {
      console.log(createdtime1)
    }

    {
      console.log(field1)
    }



    {/* <Plotly
      data={data}
      layout={layout}
    /> */}

    <LineChart
      data={{
        labels: createdtime1,
        datasets: [{
          data: field1
        }]
      }}
      width={Dimensions.get('window').width} // from react-native
      height={220}
      chartConfig={{
        // backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 5) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      // bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />




  </View>
  );
};

export default Home;
