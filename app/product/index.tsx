import {View, Text, TouchableOpacity} from 'react-native'
import Header from "@/layouts/header";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";

const Product = () => {
  return (
    <View>
        <Header Left={<TouchableOpacity>
            <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>}
                CenterText="PRODUCT"
                Right={<TouchableOpacity>
                    <MaterialCommunityIcons name="dots-grid" size={30} color="black" />
                </TouchableOpacity>} />
      <Text>Product   sds</Text>
    </View>
  )
}

export default Product
