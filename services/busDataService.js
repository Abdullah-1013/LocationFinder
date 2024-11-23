import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import busDataService from './busDataService';

const PublicTransportScreen = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const data = await busDataService.getAllBuses();
        setBuses(data);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Loading bus data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Public Transport Buses</Text>
      <FlatList
        data={buses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.route}</Text>
            <Text style={styles.info}>Timing: {item.timing}</Text>
            <Text style={styles.info}>Capacity: {item.capacity}</Text>
            <Text style={styles.status}>
              Status: {item.currentStatus === "On Time" ? "✅ On Time" : "⚠️ Delayed"}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
export default PublicTransportScreen;
