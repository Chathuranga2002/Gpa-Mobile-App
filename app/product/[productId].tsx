import { View, Text } from 'react-native'
import {useLocalSearchParams} from "expo-router";

const SingleProduct = () => {
    const params =useLocalSearchParams()
    console.log(params)
  return (
    <View>
      <Text>[productid]</Text>
        <Text>{params.name}</Text>
        <Text>{params.productId}</Text>

    </View>
  )
}

export default SingleProduct
