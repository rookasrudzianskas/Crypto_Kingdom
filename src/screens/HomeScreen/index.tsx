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
            <View style={tw`p-24 flex items-center justify-center`}>
                <Image source={image} style={styles.image} />
                <Text style={tw` text-3xl font-bold mt-10 text-gray-500`}>Welcome to Crypto Kingdom</Text>
                <Text style={tw` text-2xl font-bold text-gray-700`}>Invest your virtual $100,000 and compete with others</Text>
            </View>
        </View>
    );
};

export default HomeScreen;
