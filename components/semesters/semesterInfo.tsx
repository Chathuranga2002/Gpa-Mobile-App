import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import DeleteConfirmationModal from "@/components/modal/deleteConfirmationModal";
import DeleteConfirmationSemModal from "@/components/modal/sem/deleteConfirmationSemModal";
import { router } from "expo-router";

const SemesterInfo = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <TouchableOpacity
      className="m-3 ml-6 mr-6 p-4 bg-gray-300 rounded-lg shadow-lg"
      onPress={() =>
        router.navigate("/semMarks")
      }
    >
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-semibold text-black">
          Year 1 Semester 1
        </Text>
        <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
          <MaterialCommunityIcons name="delete-empty" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View className="mt-2">
        <Text className="text-black text-base">CGPA : 0.0000</Text>
        <Text className="text-black text-base">Total Credits : 0</Text>
      </View>

      <DeleteConfirmationSemModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
      />
    </TouchableOpacity>
  );
};

export default SemesterInfo;
