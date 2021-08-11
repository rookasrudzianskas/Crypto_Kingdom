import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "../../components/MarketCoin/style";
import tw from "tailwind-react-native-classnames";

const CoinDetailsScreen = () => {
    return (
        <View>
            <View style={[styles.root, tw`items-center bg-blue-700`]}>
                <View style={tw`ml-5  bg-blue-700`}>
                    {/*<Image source={{uri: image}} style={[styles.image, tw``]} />*/}
                </View>
                <View  style={tw`flex-1  bg-blue-700`}>
                    <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>ROkas</Text>
                    <Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>Rokas</Text>
                </View>

                <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>

                </View>

            </View>
        </View>
    );
};

export default CoinDetailsScreen;
