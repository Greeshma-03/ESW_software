
// 'use strict';
import React, { Component } from 'react'
import { SyncStorage } from 'react-native';


import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, StyleSheet, View, Text } from 'react-native';
// import InfoBox from 'react-native-infobox'
import {
  AppRegistry,
  Button,
  Alert
} from 'react-native';


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'blue'
  }
})


const Current = (props) => {
  const [users, setUsers] = useState([]);
  const [flag1, setflag1] = useState(1);
  const [flag2, setflag2] = useState(1);
  const [flag3, setflag3] = useState(1);
  const [flag4, setflag4] = useState(1);
  const [flag5, setflag5] = useState(1);

  // var templimit = useState(SyncStorage.getItem("temp"));
  // var spo2limit = useState(SyncStorage.getItem("spo2"));
  // var heartratelimit = useState(SyncStorage.getItem("heart"));
  

  var templimit=92;
  var spo2limit=90;
  var heartratelimit=100;

  console.log(templimit);
  console.log(spo2limit);
  console.log(heartratelimit);

  var Temp = 0;
  var SpO2 = 0;
  var HeartRate = 0;
  var steps = 0;
  var gsr = 0;

  var dummy;
  var url="https://api.thingspeak.com/channels/1848342/feeds.json?api_key=F8K4OFRIMWP3MN38";

  var start = 0;

  useEffect(() => {
    axios
    axios
      .get(`${url}&results=1`)
      .then((response) => {
        setUsers(response.data.feeds);
        if (dummy != users[0] && users[0] != null) {
          dummy = users[0];
          setflag1(1);
          setflag2(1);
          setflag3(1);
          setflag4(1);
          setflag5(1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dummy]);


  if (users[0] != null) {
    Temp = users[0].field1;

    steps = users[0].field2;

    gsr = users[0].field3;

    HeartRate = users[0].field4;

    SpO2 = users[0].field5;



    if (Temp > templimit) {
      if (flag1 == 1) {
        console.log(Temp);
        alert('Hight Temperatures reported!');
        setflag1(0);
      }
    }

    if (SpO2 <= spo2limit) {
      if (flag2 == 1) {
        console.log(Temp);
        alert('Detected Low oxygen levels!');
        setflag2(0);
      }
    }


    if (HeartRate >= heartratelimit) {
      if (flag3 == 1) {
        console.log(Temp);
        alert('High heart beat!!');
        setflag3(0);
      }
    }
  }


  return (
    <View>

      <Text style={styles.text}>
        Temperature = {Temp} °F{'\n'}
        Step Count = {steps} {'\n'}
        Heart Rate = {HeartRate} bpm{'\n'}
        SpO2 = {SpO2} %</Text>
    </View>
  );

}
export default Current;

