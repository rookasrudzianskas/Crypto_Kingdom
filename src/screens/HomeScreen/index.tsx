import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import tw from 'tailwind-react-native-classnames';
import styles from "./styles";
// @ts-ignore
import image from '../../../assets/images/Saly-1.png';


// @ts-ignore
const HomeScreen = (props) => {
    return (
        <View style={tw`items-center flex-1 bg-blue-700`}>
            <View style={tw`p-24 flex items-center justify-center`}>
                <Image source={image} style={styles.image} />
                <Text style={tw` text-4xl font-bold mt-24 text-white text-center`}>Welcome to Crypto Kingdom</Text>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw` text-3xl font-bold mt-24 text-gray-200 text-center`}>Invest your virtual <Text style={tw`text-green-500 font-extrabold`}>$100,000</Text> and compete with others! 🔥</Text>
                </View>


                <TouchableOpacity activeOpacity={0.8} >
                    <View style={tw`px-16 py-5 bg-white  border-4 border-blue-500 rounded-xl  mt-10`}>
                        <Text style={tw`text-gray-700 text-lg font-bold`}>Take me there!</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default HomeScreen;
