import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchTrafficData } from '../services/trafficDataService';

const TrafficDashboardScreen = () => {
  const [trafficData, setTrafficData] = useState(null);

  useEffect(() => {
    fetchTrafficData().then(data => setTrafficData(data));
  }, []);

  return (
    <View>
      <Text>Real-Time Traffic Dashboard</Text>
      {trafficData ? (
        <Text>Traffic Density: {trafficData.density}</Text>
      ) : (
        <Text>Loading traffic data...</Text>
      )}
    </View>
  );
};

export default TrafficDashboardScreen;
