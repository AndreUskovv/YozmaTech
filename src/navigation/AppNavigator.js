import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import mockData from '../mock';
import Company from '../screens/Company';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Yozma Tech">
            {
                mockData.companies.map(item => {
                    return (
                        <Tab.Screen
                            key={item.title}
                            name={item.title}
                            component={() => <Company item={item} />}
                        />
                    )
                })
            }
        </Tab.Navigator>
    )
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
