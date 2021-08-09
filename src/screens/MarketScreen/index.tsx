import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

// @ts-ignore
const MarketScreen = (props) => {
    return (
        <View style={tw`items-center flex-1 bg-blue-700`}>
            <Text>MarketScreen</Text>
        </View>
    );
};

export default MarketScreen;
