import React, {useState} from 'react';
import {View, Text, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-16.png';
import styles from "../PortfolioScreen/styles";
import UserRankingItem from "../../components/UserRankingItem";



// @ts-ignore
const ProfileScreen = (props) => {

    const [user, setUser] = useState({
        id: '1',
        name: 'Rokas',
        netWorth: 79993,
        email: 'rokas@byrookas.com',
        image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    });


    return (
        <View style={[styles.root, tw`bg-blue-700`]}>
            <>
                <Image  source={image} style={[styles.image, tw``]}/>
                <View style={[styles.balanceContainer, tw`mb-16 items-center`]}>
                   <View>

                               <Image source={{uri: user.image}} style={[styles.image, tw`rounded-full`]} />
                               <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{user.name}</Text>
                               <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{user.email}</Text>

                               <Text style={tw``}>{user.netWorth}</Text>

                   </View>
                </View>
            </>

        </View>
    );

};

export default ProfileScreen;
