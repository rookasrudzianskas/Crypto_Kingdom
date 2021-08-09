import React from 'react';
import {View, Text} from "react-native";
import tw from 'tailwind-react-native-classnames';


// @ts-ignore
const HomeScreen = (props) => {
    return (
        <View style={tw`flex-1 text-2xl font-bold justify-center items-center`}>
            <Text style={tw` text-2xl font-bold`}>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
