import React from 'react';
import {View, Text} from "react-native";
import {useRoute} from "@react-navigation/native";

interface CoinExchangeProps {

}

const CoinExchangeScreen = (props) => {

     const route = useRoute();

    return (
        <View>
            <Text>Rokas</Text>
        </View>
    );
};

export default CoinExchangeScreen;
