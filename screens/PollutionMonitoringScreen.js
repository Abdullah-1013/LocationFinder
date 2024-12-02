import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getPollutionData } from '../services/environmentService';

const PollutionMonitoringScreen = () => {
  const [pollutionData, setPollutionData] = useState(null);

  useEffect(() => {
    getPollutionData().then((data) => {
      setPollutionData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pollution Monitoring</Text>
      {pollutionData ? (
        <View style={styles.pollutionData}>
          <Text>Air Quality Index (AQI): {pollutionData.aqi}</Text>
          <Text>CO2 Level: {pollutionData.co2_level} ppm</Text>
          <Text>PM2.5 Level: {pollutionData.pm25} µg/m³</Text>
        </View>
      ) : (
        <Text>Loading pollution data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pollutionData: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
  },
});

export default PollutionMonitoringScreen;
