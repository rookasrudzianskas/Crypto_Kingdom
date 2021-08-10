import React from 'react';
import {View, Text} from "../Themed";
import tw from "tailwind-react-native-classnames";
import styles from "./style";
import {Image} from "react-native";

export const PortfolioCoinProps = {
    portfolioCoin: {
        image: String,
        name: String,
        symbol: String,
        valueChange24H: Number,
        valueUSD: Number,
    }
};

// @ts-ignore
const MarketCoin = (props: PortfolioCoinProps) => {

    const {
        portfolioCoin: {
            image,
            name,
            symbol,
            valueChange24H,
            valueUSD,
        },
    } = props;

    return (
        <View style={[styles.root, tw`items-center bg-blue-700`]}>
            <View style={tw`ml-5  bg-blue-700`}>
                <Image source={{uri: image}} style={[styles.image, tw``]} />
            </View>
                <View  style={tw`flex-1  bg-blue-700`}>
                    <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{name}</Text>
                    <Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>{symbol}</Text>
                </View>

                <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>
                    <Text style={[styles.name, tw`mr-5 text-xl  text-white font-extrabold text-green-600`]}>${valueUSD}</Text>
                    <Text style={[{color: valueChange24H > 0 ? '#4ddb00' : '#f10000'}, tw`font-bold`]}>
                        {valueChange24H > 0 && '+ '} {valueChange24H}
                    </Text>
                </View>

        </View>
    );
};

export default MarketCoin;
