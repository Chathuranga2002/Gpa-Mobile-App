import { View, Text } from 'react-native'
interface IsemD{
    id:any;
    name:any;
}
const SemestersDetails = ({id,name}:IsemD) => {
  return (
      <View>
          <Text className="text-2xl font-bold text-center mt-6 ml-7 mr-7 text-black ">
              Your {name} Course All Semesters
          </Text>
      </View>
  )
}

export default SemestersDetails
