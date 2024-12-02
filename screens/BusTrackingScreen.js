import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { getBusData } from '../services/transportService';

const BusTrackingScreen = () => {
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    getBusData().then((data) => {
      setBusData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Bus</Text>
      {busData.length > 0 ? (
        <FlatList
          data={busData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.busItem}>
              <Text>Bus ID: {item.id}</Text>
              <Text>Status: {item.status}</Text>
              <Text>Location: {item.location}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Loading bus data...</Text>
      )}
      <Button title="Refresh Data" onPress={() => getBusData().then(setBusData)} />
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
  busItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
});

export default BusTrackingScreen;
