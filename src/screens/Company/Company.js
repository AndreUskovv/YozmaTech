import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Article from '../../components/Article';


const Company = ({item, articles}) => {
    console.log("arcticle", articles);
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

            <Article article={articles.content} />
        </ScrollView>
    )
};

export default Company;
