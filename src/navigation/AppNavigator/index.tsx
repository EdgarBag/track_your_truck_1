import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrucksList from '../../pages/TrucksListPage';
import TruckPage from '../../pages/TruckPage';
import Icon from 'react-native-vector-icons/AntDesign';
import Settings from 'react-native-vector-icons/SimpleLineIcons';
import SettingsPage from '../../pages/SettingsPage';
import { useTranslation } from 'react-i18next';


const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  const { t } = useTranslation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ title: t('truck_list_page_title') }} name="Home" component={TrucksList} />
      <HomeStack.Screen options={{ title: t('truck_details_page_title') }} name="TruckDetails" component={TruckPage} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  const { t } = useTranslation();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen options={{ title: t('settings') }} name="Settings" component={SettingsPage} />
      <SettingsStack.Screen options={{ title: t('truck_details_page_title') }} name="TruckDetails" component={TruckPage} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { t } = useTranslation();
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{
        tabBarLabel: t('home_page_title'),

        tabBarIcon: ({ size, focused, color }) => (
          <Icon
            name="home"
            size={size}
            color={color}
            style={{ opacity: focused ? 1 : 0.4 }}
          />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsStackScreen}
        options={{
          title: t('settings'),
          tabBarIcon: ({ color, size, focused }) => (
            <Settings
              name="settings"
              size={size}
              color={color}
              style={{ opacity: focused ? 1 : 0.4 }}
            />
          ),
        }} />
    </Tab.Navigator>

  );
}