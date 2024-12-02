import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import BusTrackingScreen from './screens/BusTrackingScreen';
import RouteOptimizationScreen from './screens/RouteOptimizationScreen';
import PollutionMonitoringScreen from './screens/PollutionMonitoringScreen';
import TrafficDashboardScreen from './screens/TrafficDashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Smart Public Transportation App' }}
        />
        <Stack.Screen
          name="Bus Tracking"
          component={BusTrackingScreen}
          options={{ title: 'Track Bus' }}
        />
        <Stack.Screen
          name="Route Optimization"
          component={RouteOptimizationScreen}
          options={{ title: 'Optimize Routes' }}
        />
        <Stack.Screen
          name="Pollution Monitoring"
          component={PollutionMonitoringScreen}
          options={{ title: 'Pollution Data' }}
        />
        <Stack.Screen
          name="Traffic Dashboard"
          component={TrafficDashboardScreen}
          options={{ title: 'Traffic Dashboard' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
