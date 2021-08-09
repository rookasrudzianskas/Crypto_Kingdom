import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { BottomTabParamList } from '../../types';
import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import MarketScreen from "../screens/MarketScreen";
import RankingsScreen from "../screens/RankingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {AntDesign, Entypo} from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

    return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={30} color={color} />,
        }}
      />

        <BottomTab.Screen
            name="Market"
            component={MarketScreen}
            options={{
                // tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />

        <BottomTab.Screen
            name="Rankings"
            component={RankingsScreen}
            options={{
                // tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />

        <BottomTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                // tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

