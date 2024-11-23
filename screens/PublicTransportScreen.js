import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchBusData } from '../services/busDataService';

const PublicTransportScreen = () => {
  const [busData, setBusData] = useState(null);

  useEffect(() => {
    fetchBusData().then(data => setBusData(data));
  }, []);

  return (
    <View>
      <Text>Real-Time Public Transport</Text>
      {busData ? (
        <Text>Next Bus: {busData.nextBus}</Text>
      ) : (
        <Text>Loading bus data...</Text>
      )}
    </View>
  );
};

export default PublicTransportScreen;
