import {DrawerLayoutAndroid, Image, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";



const Nav = (drawer:React.RefObject<DrawerLayoutAndroid>) => (
  <View className="w-full flex-1 bg-gray-300">
    <View className="w-full items-center justify-center h-[220px]">
      {/*<Image*/}
      {/*  source={{*/}
      {/*    uri: "",*/}
      {/*  }} className="w-[100px] h-[100px] border-purple-600  rounded-full"*/}
      {/*/>*/}
        <View className="w-[100px] h-[100px] border-purple-600  rounded-full"></View>
    </View>
  {/*    menu*/}
      <View>
        <MenuItem name={"home"} title={"Home"} navigate={'/'} drawer={drawer}/>
        <MenuItem name={"profile"} title={"Profile"} navigate={'/'} drawer={drawer}/>
        <MenuItem name={"back"} title={"Back"} navigate={'/'} drawer={drawer}/>

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
