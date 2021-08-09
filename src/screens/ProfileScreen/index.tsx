import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

// @ts-ignore
const ProfileScreen = (props) => {
    return (
        <View style={tw`flex: 1, justify-center, items-center`}>
            <Text>ProfileScreen</Text>
        </View>
    );
};

export default ProfileScreen;
