import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AppRegistry,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Today's Stats"
        onPress={() =>
          navigation.navigate('Stats', { name: ' Today' })
        }
      />
      <Button
        title="Latest Data"
        onPress={() =>
          navigation.navigate('Current', { name: 'Greeshma' })
        }
      />

      <Button
        title="Edit Profile"
        onPress={() =>
          navigation.navigate('Eprofile', { name: 'Edit Profile' })
        }
      />

      <Button
        title="Plots"
        onPress={() =>
          navigation.navigate('Graphs', { name: 'Plots' })
        }
      />
    </View>
  );
};

export default HomeScreen;