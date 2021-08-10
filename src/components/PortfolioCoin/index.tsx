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
        <View style={[styles.root, tw`bg-blue-700`]}>
            <View style={tw`flex flex-row items-center w-full`}>
                <Image source={{uri: image}} style={[styles.image, tw``]} />

                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>

                <View>
                    <Text style={styles.name}>${valueUSD}</Text>
                    <Text style={styles.symbol}>{symbol}{amount}</Text>
                </View>

            </View>
        </View>
    );
};

export default PortfolioCoin;
