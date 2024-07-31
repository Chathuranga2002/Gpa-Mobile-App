import {DrawerLayoutAndroid, Image, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";



const Nav = (drawer:React.RefObject<DrawerLayoutAndroid>) => (
  <View className="w-full flex-1 bg-gray-300">
    <View className="w-full items-center justify-center h-[220px]">
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }} className="w-[100px] h-[100px] rounded-full"
      />
    </View>
  {/*    menu*/}
      <View>
        <MenuItem name={"home"} title={"Home"} navigate={'/'} drawer={drawer}/>
        <MenuItem name={"profile"} title={"Profile"} navigate={'/catagory'} drawer={drawer}/>
        <MenuItem name={"back"} title={"Back"} navigate={'/catagory'} drawer={drawer}/>

      </View>



  </View>
);

export default Nav;
interface IMenuItem{
    name:"home"|"profile"|"back";
    title:string;
    navigate:string;
    drawer:React.RefObject<DrawerLayoutAndroid>
}


const MenuItem=({name,title,navigate,drawer}:IMenuItem)=>{

    // const  {drawer}=useContext(DrawerContext);

    return <TouchableOpacity className="flex-row w-full items-center justify-between py-3 border-b border-blue-500/25"
                             onPress={()=>{
                                 router.navigate(navigate);
                                 drawer?.current?.closeDrawer();
                             }}>
        <View className="flex-row items-center pl-4">
            <AntDesign name={name} size={35} color="black" />
            <Text className="ml-3">{title}</Text>
        </View>
        <AntDesign name="doubleright" size={24} color="black" />
    </TouchableOpacity>
}
