import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TrafficDashboardScreen from './screens/TrafficDashboardScreen';
import PublicTransportScreen from './screens/PublicTransportScreen';
import PollutionMonitoringScreen from './screens/PollutionMonitoringScreen';
import RoutePlannerScreen from './screens/RoutePlannerScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Traffic Dashboard" component={TrafficDashboardScreen} />
        <Stack.Screen name="Public Transport" component={PublicTransportScreen} />
        <Stack.Screen name="Pollution Monitoring" component={PollutionMonitoringScreen} />
        <Stack.Screen name="Route Planner" component={RoutePlannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
