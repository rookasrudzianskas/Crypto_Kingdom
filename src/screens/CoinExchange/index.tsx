import React from 'react';
import {View, Text, Image} from "react-native";
import {useRoute} from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-31.png';
import styles from "./styles";

interface CoinExchangeProps {

}

const CoinExchangeScreen = () => {

     const route = useRoute();

    // @ts-ignore
    const isBuy = route?.params?.isBuy;
    // @ts-ignore
    const coinData = route?.params?.coinData;


    return (
        <View style={tw``}>
            <Text style={tw``}>
                {isBuy ? "Buy" : "Sell"}
                {coinData?.name}
            </Text>

            <View style={tw``}>
                <Text style={tw``}>
                    1 {coinData?.symbol}
                    {" = "}
                    ${coinData?.currentPrice}
                </Text>
            </View>

            <View>
                <Image style={styles.image} source={image} />
            </View>
        </View>
    );
};

export default CoinExchangeScreen;
