import React, {useState} from 'react';
import {View, Text, Image, TextInput} from "react-native";
import {useRoute} from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import image from '../../../assets/images/Saly-31.png';
import styles from "./styles";

interface CoinExchangeProps {

}

const CoinExchangeScreen = () => {

     const route = useRoute();

    // @ts-ignore
    const isBuy = route?.params?.isBuy;
    // @ts-ignore
    const coinData = route?.params?.coinData;

    const [coinAmount, setCoinAmount] = useState('');
    const [coinUSDValue, setCoinUSDValue] = useState('');


    // @ts-ignore
    return (
        <View style={tw`bg-blue-700 flex-1`}>
            <View style={tw`items-center`}>
                <Text style={ [tw` mt-10 text-white text-3xl font-medium`]}>
                    {isBuy ? "Buy " : " Sell "}
                    {coinData?.name}
                </Text>

                <View style={tw``}>
                    <Text style={tw`text-white text-xl font-medium mt-5`}>
                        1 {coinData?.symbol}
                        {" = "}
                        ${coinData?.currentPrice}
                    </Text>
                </View>

                <View style={tw`mt-10`}>
        {/*// @ts-ignore*/}
                    <Image style={styles.image [tw``]} source={image} />
                </View>

            </View>

            <View style={[styles.root, tw`mt-16 mx-10 items-center`]}>

                <View style={tw`flex items-center bg-blue-400 p-5 rounded-lg`}>
        {/*// @ts-ignore*/}
                    <TextInput keyboardType="decimal-pad" value={coinAmount} onTextChange={() => setCoinAmount(text)} style={tw`bg-white px-6 py-3 font-bold text-gray-500 text-lg rounded-lg`} placeholder={"0"} />
                    <Text style={tw`text-white text-xl font-bold mt-3`}>{coinData?.symbol}</Text>
                </View>

                <View style={tw``}>
                    <Text style={tw`text-2xl text-white font-bold`}>=</Text>
                </View>

                <View style={tw` flex items-center bg-blue-400 p-5 rounded-lg`}>
        {/*// @ts-ignore*/}
                    <TextInput keyboardType="decimal-pad" value={coinUSDValue} onTextChange={() => setUSDCoinValue(text)}  style={tw`bg-white px-6 py-3 font-bold text-gray-500 text-lg rounded-lg`} placeholder={"0"} />
                    <Text style={tw`text-white text-xl font-bold mt-3`}>{coinData?.symbol}</Text>
                </View>

            </View>

        </View>
    );
};

export default CoinExchangeScreen;
