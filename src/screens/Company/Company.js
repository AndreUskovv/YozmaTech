import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Images from '../../config/Images';
import styles from './styles';


const Company = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Yozma Tech</Text>
            <Image source={Images.logo} style={styles.logo}/>
            <View style={styles.wrapper}>
                <Text style={styles.description}>
                    Yozma.Tech is a business-oriented outsourcing software development company.
                    We offer a complete cycle of software development for outsourcing. We use cutting-edge technology and advanced development techniques to create a quality product for you. Yozma.Tech team strives to understand your business deeply in order to help you better integrate your ideas. We can find effective solutions for your company and bring it to a new level.
                </Text>
            </View>
        </ScrollView>
    )
};

export default Company;
