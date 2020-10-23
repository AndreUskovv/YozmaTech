import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';


const Company = ({item}) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.logo} style={styles.logo}/>
            <View style={styles.wrapper}>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        </ScrollView>
    )
};

export default Company;
