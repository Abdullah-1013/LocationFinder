import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const RoutePlannerScreen = () => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [route, setRoute] = useState(null);

  const planRoute = () => {
    // Logic to fetch route based on start and end location
    setRoute('Optimal Route');
  };

  return (
    <View>
      <Text>Route Planner</Text>
      <TextInput
        placeholder="Enter Start Location"
        value={startLocation}
        onChangeText={setStartLocation}
      />
      <TextInput
        placeholder="Enter End Location"
        value={endLocation}
        onChangeText={setEndLocation}
      />
      <Button title="Plan Route" onPress={planRoute} />
      {route && <Text>Suggested Route: {route}</Text>}
    </View>
  );
};

export default RoutePlannerScreen;
