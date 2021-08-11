import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "../../components/MarketCoin/style";
import tw from "tailwind-react-native-classnames";
import {AntDesign} from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";

const CoinDetailsScreen = () => {

    const [coinData, setCoinData] = useState({
        id: '1',
        image: 'https://bitcoin.org/img/icons/opengraph.png?1628351347',
        symbol: 'USD',
        valueChange24H: -1.12,
        valueChange1D: 3.342,
        valueChange7D: -3.423,
        valueUSD: 459342,
        name: 'Bitcoin',
        currentPrice: 3423432,
        amount: 2,

    });

    const [liked, setLiked] = useState(false);
    const [icon, setIcon] = useState('staro');

    const liking = () => {

        if(liked) {
            setLiked(false);
        } else {
            setLiked(true);
        }
        if(liked) {
            setIcon('star');
        } else {
            setIcon('staro');
        }
    };

    return (
        <View style={tw`bg-blue-700 flex-1`}>
                <View style={tw`flex items-center mt-14 mb-10`}>
                    <Text style={tw`text-2xl font-bold text-white`}>Price Data</Text>
                </View>
            <View style={[styles.root, tw`items-center bg-blue-700`]}>
                <View style={tw`ml-5  bg-blue-700`}>
                    <Image source={{uri: coinData.image}} style={[styles.image, tw``]} />
                </View>
                <View  style={tw`flex-1  bg-blue-700`}>
                    <Text style={[styles.name, tw` text-white ml-5 text-xl font-bold`]}>{coinData.name}</Text>
                    <Text style={[styles.symbol, tw`ml-5  text-white text-sm font-medium`]}>{coinData.symbol}</Text>
                </View>

                <View style={tw`flex flex-col  bg-blue-700 items-center justify-center`}>
                    <TouchableOpacity onPress={liking} style={tw`mr-5`} activeOpacity={0.8}>
                        <AntDesign name={icon} size={30} color={"#eac928"} />
                    </TouchableOpacity>
                </View>

            </View>




        {/*    bottom side with differnces */}

            <View style={tw`flex flex-row mx-8 mt-10`}>
                <View style={tw`flex w-1/3`}>
                    <Text style={tw`text-lg text-white`}>Current Price</Text>
                    <Text style={tw`text-white text-xl font-bold`}>$ {coinData.currentPrice}</Text>
                </View>

                <View style={tw`w-1/3 flex flex-row justify-between`}>
                <View style={tw`mx-8`}>
                    <Text style={tw`text-lg text-white mb-3`}>1 Hour</Text>
                    <PercentageChange style={{fontSize: 15}} value={coinData.valueChange24H} />
                </View>

                <View style={tw`mx-2`}>
                    <Text style={tw`text-lg text-white mb-3`}>1 Day</Text>
                    <PercentageChange style={{fontSize: 15}} value={coinData.valueChange1D} />
                </View>

                <View style={tw`mx-2`}>
                    <Text style={tw`text-lg text-white mb-3`}>7 Days</Text>
                    <PercentageChange style={{fontSize: 15}} value={coinData.valueChange7D} />
                </View>
                </View>
            </View>

            <View style={tw`flex flex-row mt-10 mx-8`}>
                <View style={tw`flex flex-1`}>
                    <Text  style={tw`text-lg text-white font-bold`}>Position</Text>
                </View>

                <View  style={tw`flex `}>
                    <Text  style={tw`text-lg text-white`}>
                        <Text style={tw`font-bold`}>{coinData.symbol}</Text> <Text style={tw`text-green-500 font-bold`}>{coinData.amount}</Text> ($ {coinData.currentPrice * coinData.amount})
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default CoinDetailsScreen;
