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
        amount: Number,
        valueUSD: Number,
    }
};

// @ts-ignore
const PortfolioCoin = (props: PortfolioCoinProps) => {

    const {
        portfolioCoin: {
            image,
            name,
            symbol,
            amount,
            valueUSD,
        },
    } = props;

    return (
        <View style={[styles.root, tw`items-center`]}>
            <View style={tw`ml-5`}>
                <Image source={{uri: image}} style={[styles.image, tw``]} />
            </View>
                <View  style={tw`flex-1`}>
                    <Text style={[styles.name, tw`ml-5 text-xl font-bold`]}>{name}</Text>
                    <Text style={[styles.symbol, tw`ml-5  text-sm font-medium`]}>{symbol}</Text>
                </View>

                <View style={tw`flex flex-col items-center justify-center`}>
                    <Text style={[styles.name, tw`mr-5 text-xl font-extrabold text-green-600`]}>${valueUSD}</Text>
                    <Text style={[styles.symbol, tw`mt-2 mr-3 text-sm font-bold`]}>{symbol} {amount}</Text>
                </View>

        </View>
    );
};

export default PortfolioCoin;
