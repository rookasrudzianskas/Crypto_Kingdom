import React from 'react';
import {View, Text, Image} from "react-native";
import tw from 'tailwind-react-native-classnames';
import styles from "./styles";
// @ts-ignore
import image from '../../../assets/images/Saly-1.png';


// @ts-ignore
const HomeScreen = (props) => {
    return (
        <View style={styles.root}>
            <Image source={image} style={styles.image} />
            <Text style={tw` text-2xl font-bold`}>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
