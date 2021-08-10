import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-10.png';
import styles from "./styles";


// @ts-ignore
const PortfolioScreen = (props) => {
    return (
        <View style={[styles.root, tw`bg-blue-700`]}>
            <Image  source={image} style={styles.image}/>
            <View style={styles.balanceContainer}>
                <View style={[tw`mt-12`]}>
                           <Text style={tw`text-3xl text-gray-200 font-bold`}>Portfolio balance</Text>
                           <View style={tw`mt-3`}>
                               <Text style={tw`text-3xl text-white font-bold`}>$ <Text style={tw`text-4xl font-extrabold text-green-500 mt-5 text-center`}>64,423</Text></Text>
                           </View>
                       </View>
                </View>
            </View>
    );
};

export default PortfolioScreen;
