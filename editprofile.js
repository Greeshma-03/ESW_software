
// 'use strict';
import React, { Component } from 'react'
import { createRef } from 'react';

import { FormItem } from 'react-native-form-component';
import { Modal } from 'react-native-form-component';

import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, StyleSheet, View, Text } from 'react-native';
// import InfoBox from 'react-native-infobox'
// import { SyncStorage } from 'sync-storage';


import {
    AppRegistry,
    Button,
    Alert
} from 'react-native';



const Eprof = (props) => {
    const [users, setUsers] = useState([]);

    // const [heart, setheart] = useState(SyncStorage.get("heart"));
    // const [spo2, setspo2] = useState(SyncStorage.get("spo2"));
    // const [temp, settemp] = useState(SyncStorage.get("temp"));

     const [heart, setheart] =useState();
    const [spo2, setspo2] = useState();
    const [temp, settemp] = useState();




    const onSubmit=()=>{
    //   SyncStorage.setItem("heart",heart);
    //   SyncStorage.setItem("spo2",spo2);
    //   SyncStorage.setItem("temp",temp);
      alert("Threshold values updated!!");
    }


    return (
        <View>

            <FormItem
                label="Maximum HeartRate"
                // isRequired
                value={heart}
                onChangeText={(heart) => setheart(heart)}
                // asterik
            />

            <FormItem
                label="Minimum SPO2"
                // isRequired
                value={spo2}
                onChangeText={(spo2) => setspo2(spo2)}
                // asterik
            />

            <FormItem
                label="Maximum Temperature"
                // isRequired
                value={temp}
                onChangeText={(temp) => settemp(temp)}
                // asterik
            />

            
            

            <Button
                onPress={onSubmit}
                title="Submit"
                color="#841584"
                accessibilityLabel="Submit"
            />

        </View>
    );

}
export default Eprof;

