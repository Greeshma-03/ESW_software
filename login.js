
// 'use strict';
import React, { Component } from 'react'
import { createRef } from 'react';

import { FormItem } from 'react-native-form-component';
// import { Modal } from 'react-native-form-component';

import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, StyleSheet, View, Text } from 'react-native';
// import InfoBox from 'react-native-infobox'
import {
    AppRegistry,
    Button,
    Alert
} from 'react-native';



const Login = ({navigation}) => {
    const [users, setUsers] = useState([]);

    const [heart, setheart] = useState();
    const [spo2, setspo2] = useState();
    const [temp, settemp] = useState();




    const onSubmit = () => {
        var address = "https://api.thingspeak.com/channels/";
        address += temp;
        address += "/feeds.json?api_key=";
        address += spo2;
    
        console.log(address);
        SyncStorage.setItem("url", address);
        alert(`${heart}, you are successfully logged in!!`);
        navigation.navigate('Mobile', { name: 'Edit Profile' })

    }


    return (
        <View>

            <FormItem
                label="Enter Name"
                // isRequired
                value={heart}
                onChangeText={(heart) => setheart(heart)}
            // asterik
            />



            <FormItem
                label="Enter Channel ID"
                // isRequired
                value={temp}
                onChangeText={(temp) => settemp(temp)}
            // asterik
            />


            <FormItem
                label="Enter API Key"
                // isRequired
                value={spo2}
                onChangeText={(spo2) => setspo2(spo2)}
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
export default Login;

