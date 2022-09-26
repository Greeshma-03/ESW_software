import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Node } from 'react';



// import TableDemo from './multiple_table';
import HomeScreen from './home';
import ProfileScreen from './profile';
import Home from './graph';

const Stack = createNativeStackNavigator();
import Current from './Current';
import { StyleSheet, Text, View } from 'react-native';
import Statss from './stats';
import Eprof from './editprofile';
import Login from './login';

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        {/* <Stack.Screen
          name="login"
          component={Login}
          options={{ title: 'Login!!' }}
        /> */}
        <Stack.Screen name="Mobile" component={HomeScreen} />
        <Stack.Screen
          name="Current"
          component={Current}
          options={{ title: 'View the latest data' }}
        />
        <Stack.Screen
          name="Stats"
          component={Statss}
          options={{ title: "Today's Stats" }}
        />

        <Stack.Screen
          name="Eprofile"
          component={Eprof}
          options={{ title: "Edit Profile" }}
        />

        <Stack.Screen
          name="Graphs"
          component={Home}
          options={{ title: "Edit Profile" }}
        />

        {/* <Stack.Screen name="Profile" component={Current} /> */}
      </Stack.Navigator>

      {/* <TableExample /> */}
      {/* <TableDemo /> */}
      {/* <Current /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});