import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';


const Article = ({article}) => {
    console.log(article);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {article}
            </Text>
        </View>
    )
};

export default Article;
