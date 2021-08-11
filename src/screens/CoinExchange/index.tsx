import React from 'react';
import {View, Text} from "react-native";
import {useRoute} from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

interface CoinExchangeProps {

}

const CoinExchangeScreen = (props) => {

     const route = useRoute();

     const {isBuy, coinData} = route?.params;

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
