import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Smart Public Transportation App</Text>
      <Button 
        title="Track Bus" 
        onPress={() => navigation.navigate('Bus Tracking')} 
      />
      <Button 
        title="Optimize Routes" 
        onPress={() => navigation.navigate('Route Optimization')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
