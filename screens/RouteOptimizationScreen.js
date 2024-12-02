import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RouteOptimizationScreen = () => {
  const optimizeRoutes = () => {
    // This function would call your route optimization logic or API
    console.log('Optimizing routes...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Route Optimization</Text>
      <Button title="Optimize Routes" onPress={optimizeRoutes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RouteOptimizationScreen;
