import React from 'react';
import {View, Text} from "react-native";
import tw from 'tailwind-react-native-classnames';


// @ts-ignore
const HomeScreen = (props) => {
    return (
        <View style={tw`flex: 1 justify-center items-center`}>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
