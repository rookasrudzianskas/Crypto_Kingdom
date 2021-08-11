import React from 'react';
import {View, Text} from "react-native";
import {useRoute} from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

interface CoinExchangeProps {

}

const CoinExchangeScreen = () => {

     const route = useRoute();

     const isBuy = route?.params?.isBuy;
     const coinData = route?.params?.coinData;


    return (
        <View style={tw``}>
            <Text style={tw``}>
                {isBuy ? "Buy" : "Sell"}
                {coinData.name}
            </Text>
        </View>
    );
};

export default CoinExchangeScreen;
