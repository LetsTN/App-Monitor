import React, { FC } from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import { Home }  from '../pages/Home';
import { Dashboard }  from '../pages/Dashboard';

import colors from '../assets/styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.background
      },
      headerStyle: {
        backgroundColor: colors.primaryLight,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
  >
    <stackRoutes.Screen 
      name="Home"
      component={Home}
      options={{
        headerShown: false
      }}
    />

    <stackRoutes.Screen 
      name="Dashboard"
      component={Dashboard}
      options={{ title: 'Dashboard' }}
    />

  </stackRoutes.Navigator>
)

export default AppRoutes;
