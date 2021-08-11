import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "../../components/MarketCoin/style";
import tw from "tailwind-react-native-classnames";
import {AntDesign} from "@expo/vector-icons";

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
    })
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
                    <TouchableOpacity style={tw`mr-5`} activeOpacity={0.8}>
                        <AntDesign name={'staro'} size={30} color={"#eac928"} />
                    </TouchableOpacity>
                </View>

            </View>




        {/*    bottom side with differnces */}

            <View style={tw``}>
                <View style={tw``}>
                    <Text style={tw``}>Current Price</Text>
                    <Text style={tw``}>{coinData.currentPrice}</Text>
                </View>

                <View style={tw``}>
                    <Text style={tw``}>1 Hour</Text>
                    <Text style={tw``}>{coinData.valueChange24H}</Text>
                </View>

                <View style={tw``}>
                    <Text style={tw``}>1 Day</Text>
                    <Text style={tw``}>{coinData.valueChange1D}</Text>
                </View>

                <View style={tw``}>
                    <Text style={tw``}>7 Days</Text>
                    <Text style={tw``}>{coinData.valueChange7D}</Text>
                </View>
            </View>
        </View>
    );
};

export default CoinDetailsScreen;
