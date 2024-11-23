import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchPollutionData } from '../services/environmentDataService';

const PollutionMonitoringScreen = () => {
  const [pollutionData, setPollutionData] = useState(null);

  useEffect(() => {
    fetchPollutionData().then(data => setPollutionData(data));
  }, []);

  return (
    <View>
      <Text>Real-Time Pollution Monitoring</Text>
      {pollutionData ? (
        <Text>Pollution Level: {pollutionData.level}</Text>
      ) : (
        <Text>Loading pollution data...</Text>
      )}
    </View>
  );
};

export default PollutionMonitoringScreen;
