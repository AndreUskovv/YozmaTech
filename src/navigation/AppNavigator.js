import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import mockData from '../mock';
import Company from '../screens/Company';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const API_KEY = "95b8357b1e7640b7b0b7807ff5aa0bcd";

const TabNavigator = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(r => setArticles(r.articles))
    }, []);

    return (
        <Tab.Navigator initialRouteName="Yozma Tech">
            {
                mockData.companies.map((item, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={item.title}
                            component={() => <Company item={item} articles={articles[index]}  />}
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
