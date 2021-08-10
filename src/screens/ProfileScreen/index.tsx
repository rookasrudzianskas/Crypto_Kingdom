import React from 'react';
import {View, Text, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-16.png';
import styles from "../PortfolioScreen/styles";
import UserRankingItem from "../../components/UserRankingItem";


const user = [{
    id: '1',
    name: 'Rokas',
    symbol: 'USD',
    netWorth: 79.993,
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
}, {
    id: '2',
    name: 'Tom',
    symbol: 'BTC',
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    netWorth: 90.993,
}, {
    id: '3',
    name: 'James',
    symbol: 'ETH',
    netWorth: 100.993,
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
}, {
    id: '4',
    name: 'Tim',
    symbol: 'ETH',
    netWorth: 100.993,
    image: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
}];


// @ts-ignore
const ProfileScreen = (props) => {
    return (
        <View style={[styles.root, tw`bg-blue-700`]}>
            <>
                <Image  source={image} style={[styles.image, tw``]}/>
                <View style={[styles.balanceContainer, tw`mb-16 items-center`]}>
                   <View>
                       <View style={[styles.container, tw`items-center bg-blue-700`]}>
                           <View style={tw`ml-5 flex flex-row bg-blue-700  items-center justify-center`}>
                               {/*<Image source={{uri: image}} style={[styles.image, tw`rounded-full`]} />*/}
                           </View>
                           <View  style={tw`flex-1  bg-blue-700`}>
                               <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>Rokas</Text>
                               {/*<Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>{symbol}</Text>*/}
                           </View>

                           <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>
                               {/*<Text style={[styles.name, tw`mr-5 text-xl  text-white font-extrabold text-white`]}>${netWorth}</Text>*/}
                               {/*<Text style={[{color: valueChange24H > 0 ? '#4ddb00' : '#f10000'}, tw`font-bold`]}>*/}
                               {/*    {valueChange24H > 0 && '+'} {valueChange24H}*/}
                               {/*</Text>*/}
                           </View>

                       </View>
                   </View>
                </View>
            </>

        </View>
    );

};

export default ProfileScreen;
