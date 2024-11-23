import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Smart Traffic App</Text>
      <Button
        title="Go to Traffic Dashboard"
        onPress={() => navigation.navigate('Traffic Dashboard')}
      />
      <Button
        title="Public Transport"
        onPress={() => navigation.navigate('Public Transport')}
      />
      <Button
        title="Pollution Monitoring"
        onPress={() => navigation.navigate('Pollution Monitoring')}
      />
      <Button
        title="Route Planner"
        onPress={() => navigation.navigate('Route Planner')}
      />
    </View>
  );
};

export default HomeScreen;
