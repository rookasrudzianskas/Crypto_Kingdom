import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

// @ts-ignore
const RankingsScreen = (props) => {
    return (
        <View style={tw`items-center flex-1 bg-blue-700`}>
            <Text style={tw`text-2xl font-bold`}>Something new</Text>
        </View>
    );
};

export default RankingsScreen;
