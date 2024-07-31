import {View, Text, TouchableOpacity} from 'react-native'
import {router} from "expo-router";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";


const Footer = () => {
  return (
      <View className="w-full px-5 absolute h-12 bottom-0 left-0 z-50 items-center bg-gray-300 drop-shadow-md flex-row justify-around  ">
          {/*<TouchableOpacity onPress={()=>router.navigate('/product')} className="items-center">*/}
          {/*    /!*<Link className="mb-2 " href={'/product'}>*!/*/}
          {/*    <MaterialIcons name="production-quantity-limits" size={35} color="black" />*/}
          {/*    /!*</Link>*!/*/}
          {/*    <Text>Product</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity  className="items-center"  onPress={()=>router.navigate('/')}>*/}
          {/*    /!*<Link className="mb-2  " href={'/'}>*!/*/}
          {/*    <AntDesign name="home" size={35} color="black" />*/}
          {/*    /!*</Link>*!/*/}
          {/*    <Text>Home</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity  className="items-center" onPress={()=>router.navigate('/catagory')}>*/}
          {/*    /!*<Link className="mb-2 " href={'/catagory'}>*!/*/}
          {/*    <MaterialIcons name="category" size={35} color="black" />*/}
          {/*    /!*</Link>*!/*/}
          {/*    <Text>Category</Text>*/}
          {/*</TouchableOpacity>*/}
      </View>

  )
}

export default Footer
