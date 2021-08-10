import React from 'react';
import {View} from "../Themed";
import tw from "tailwind-react-native-classnames";
import styles from "./style";

export const PortfolioCoinProps = {
    image: String,
    name: String,
    symbol: String,
    amount: Number,
    valueUSD: Number,
}

const PortfolioCoin = (props: PortfolioCoinProps) => {

    const {
        image,
        name,
        symbol,
        amount,
        valueUSD,
    } = props;

    return (
        <View style={[styles.root, tw``]}>

        </View>
    );
};

export default PortfolioCoin;
