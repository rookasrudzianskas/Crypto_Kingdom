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
            <View>
                <Image source={{uri: image}} style={[styles.image, tw``]} />

            </View>
        </View>
    );
};

export default PortfolioCoin;
