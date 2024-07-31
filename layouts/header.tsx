import { View, Text } from 'react-native'

interface IHeader{
    Left?:React.ReactNode;
    CenterText?:string;
    Center?:React.ReactNode;
    Right?:React.ReactNode;
}

const Header = ({Left,CenterText,Center,Right}:IHeader) => {
  return (
      <View className={"w-full z-50 h-[100px]"}>
          <View className='w-full h-[50px] items-end justify-between flex-row px-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          </View>

          <View style={{elevation:5}} className='w-full h-[60px] bg-gray-300 items-end justify-between pb-3 flex-row px-5'>
        {Left?Left:<View/>}
        {Center?Center:CenterText?<Text className={'text-2xl font-semibold'}>{CenterText}</Text>: <View/>}
        {Right?Right:<View/>}


    </View>
      </View>
  )
}

export default Header
