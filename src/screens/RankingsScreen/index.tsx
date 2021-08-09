import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

// @ts-ignore
const RankingsScreen = (props) => {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-2xl font-bold`}>Something new</Text>
        </View>
    );
};

export default RankingsScreen;
