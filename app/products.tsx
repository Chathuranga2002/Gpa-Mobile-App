import {View, Text, TouchableOpacity} from 'react-native'
import Header from "@/layouts/header";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";


const Products = () => {
  return (
    <View>
        <Header Left={<TouchableOpacity>
            <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>}
                Center={<Text className={"text-2xl font-semibold"}>GPA TRACKER</Text>}
                Right={<TouchableOpacity>
                    <MaterialCommunityIcons name="dots-grid" size={30} color="black" />
                </TouchableOpacity>} />
      <Text>prooduct</Text>
    </View>
  )
}

export default Products
