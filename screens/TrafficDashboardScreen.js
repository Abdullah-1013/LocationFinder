import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTrafficData } from '../services/trafficService';

const TrafficDashboardScreen = () => {
  const [trafficData, setTrafficData] = useState(null);

  useEffect(() => {
    getTrafficData().then((data) => {
      setTrafficData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traffic Dashboard</Text>
      {trafficData ? (
        <View style={styles.trafficData}>
          <Text>Current Traffic Density: {trafficData.density}</Text>
          <Text>Congestion Points: {trafficData.congestion_points}</Text>
          <Text>Average Speed: {trafficData.avg_speed} km/h</Text>
        </View>
      ) : (
        <Text>Loading traffic data...</Text>
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
  trafficData: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
  },
});

export default TrafficDashboardScreen;
