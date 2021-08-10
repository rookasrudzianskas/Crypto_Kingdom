import React from 'react';
import {View, Text, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-10.png';
import styles from "./styles";
import PortfolioCoin from "../../components/PortfolioCoin";

const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    symbol: 'USD',
    amount: 79.993,
    valueUSD: 79.993,
}, {
    id: '2',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 90.993,
    valueUSD: 90.993,
}, {
    id: '3',
    name: 'Eutherium',
    symbol: 'ETH',
    amount: 100.993,
    valueUSD: 100.993,
}]


// @ts-ignore
const PortfolioScreen = (props) => {
    return (
        <View style={[styles.root, tw`bg-blue-700`]}>
            <Image  source={image} style={styles.image}/>
            <View style={styles.balanceContainer}>
                <View style={[tw`mt-12`]}>
                           <Text style={tw`text-3xl text-gray-200 font-bold`}>Portfolio balance</Text>
                           <View style={tw`mt-2`}>
                               <Text style={tw`text-3xl text-white font-bold`}>$ <Text style={tw`text-4xl font-extrabold text-green-500 mt-5 text-center`}>64,423</Text></Text>
                           </View>
                       </View>
                </View>

            <FlatList data={portfolioCoins} renderItem={({item}) => <PortfolioCoin />} />
            </View>
    );
};

export default PortfolioScreen;
