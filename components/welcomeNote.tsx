import { View, Text } from 'react-native'


const WelcomeNote = () => {
  return (
    <View>
      <Text className="text-base font-bold text-left mt-6 text-black ml-8">
            Welcome to My App!
        </Text>
        <Text className="text-base text-left mt-2 text-gray-700 ml-8 mr-3">
            Your one-stop solution for managing your courses and enhancing your learning experience.
        </Text>
    </View>
  )
}

export default WelcomeNote