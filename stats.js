
// 'use strict';
import React, { Component } from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, StyleSheet, View, Text } from 'react-native';
// import InfoBox from 'react-native-infobox'
import {
    AppRegistry,
    Button,
    Alert
} from 'react-native';

const onPressButton = () => {

};


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green'
    }
})


const Statss = (props) => {
    
    const [users, setUsers] = useState([]);
    const startDateTime = new Date();
    const endDateTime = new Date();
    startDateTime.setUTCHours(0, 0, 0, 0);
    // console.log(startDateTime.toUTCString());
    endDateTime.setUTCHours(23, 59, 59, 999);
    // console.log(endDateTime.toUTCString());

    // const [isClick, setClick] = useState(false);

    // const [url, seturl] = useState(localStorage.getItem("url"));
    // var url=localStorage.getItem("url");
    var url="https://api.thingspeak.com/channels/1848342/feeds.json?api_key=F8K4OFRIMWP3MN38";

    // const url= "https://api.thingspeak.com/channels/1848342/feeds.json?api_key=F8K4OFRIMWP3MN38";
   
    // const [MHeartRate, setMHR] = useState(0);
    const [TotalSteps, setTotalSteps] = useState(0);

    const current = new Date();
    // console.log(current);

    useEffect(() => {
        axios.get(`${url}&start=${startDateTime.toUTCString()}&end=${endDateTime.toUTCString()}`)
        .then((response) => {
                setUsers(response.data.feeds);
            })
            .catch((error) => {
                console.log(error);
            });
    });


    var i = 0;
    var heart = 0;
    var count = 0;
    var MHeartRate = 0
    for (i = 0; i < users.length; i++) {
        if (users[i].field4 != "nan" && users[i].field4 != null && users[i] != null) {
            if (MHeartRate < parseInt(users[i].field4))
                MHeartRate = parseFloat(users[i].field4) ;
            
            heart += parseInt(users[i].field4);
            count++;
        }
    }

    if (count != 0)
        heart /= count;

    var tot = TotalSteps;
    for (i = 0; i < users.length; i++) {
        if (users[i].field2 != "nan" && users[i].field2 != null && users[i] != null) {
            tot += parseInt(users[i].field2);
        }
    }

    var spo2 = 0;
    var count = 0;
    var ms = 0;
    for (i = 0; i < users.length; i++) {
        if (users[i].field5 != "nan" && users[i].field5 != null && users[i] != null && parseInt(users[i].field5) != 0) {
            if(ms < parseFloat(users[i].field5))
                ms = parseFloat(users[i].field5);
            
            spo2 += parseFloat(users[i].field5);
            count++;
        }
    }
    if (count != 0)
        spo2 /= count;
    var gsr = 0;
    var count = 0;
    var arr = [];
    for(i = 0;i < users.length; i++)
    {
        if (users[i].field3 != "nan" && users[i].field3 != null && users[i] != null && parseInt(users[i].field3) != 0) {
            arr = users[i].field3.split("\r\n");
            gsr += parseFloat(arr[0]);
            count++;
        }
    }    
    if(count != 0)
        gsr /= count; 

    var Temp = 0;
    var count = 0;
    var mTemp = 0
    for(i = 0;i < users.length; i++)
    {
        if (users[i].field1 != "nan" && users[i].field1 != null && users[i] != null && parseInt(users[i].field1) != 0) {
            if(mTemp < parseFloat(users[i].field1))
                mTemp = parseFloat(users[i].field1);

            Temp += parseFloat(users[i].field1);
            count++;
        }
    }
    if (count != 0)
    Temp /= count;
    

    return (
        <View>

            <Text style={styles.text}>

                Average Temperature = {Temp} °F{'\n'}
                Total Step Count = {tot} steps {'\n'}
                Average Heart Rate = {heart} bpm{'\n'}
                Average SpO2 = {spo2}% {'\n'}{'\n'} </Text>

            <Text style={styles.text}>
                max Temperature = {mTemp} °F{'\n'}
                max Heart Rate = {MHeartRate} bpm{'\n'}
                max SpO2 = {ms} %</Text>
        </View>
    );

}
export default Statss;

