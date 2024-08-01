import {View, Text, TouchableOpacity} from 'react-native'
import {FontAwesome6, MaterialCommunityIcons} from "@expo/vector-icons";
interface Subject {
    name: string;
    grade: string;
    credit: number;
}

interface ResultsTableProps {
    subjects: Subject[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
}

const ResaltTable = ({ subjects, onEdit, onDelete }:ResultsTableProps) => {
  return (
      <View className={"p-4"}>
          <View className="flex-row bg-purple-600 p-2">
              <Text className="flex-1 text-white text-center">Subject Name</Text>
              <Text className="flex-1 text-white text-center">Grade</Text>
              <Text className="flex-1 text-white text-center">Credit</Text>
              <Text className="flex-1 text-white text-center">Actions</Text>
          </View>
          {subjects.map((subject, index) => (
              <View key={index} className="flex-row bg-gray-100 p-2 border-b border-gray-300">
                  <Text className="flex-1 text-center">{subject.name}</Text>
                  <Text className="flex-1 text-center">{subject.grade}</Text>
                  <Text className="flex-1 text-center">{subject.credit}</Text>
                  <View className="flex-1 flex-row justify-center">
                      <TouchableOpacity onPress={() => onEdit(index)} className="mx-2">
                          <FontAwesome6 name="edit" size={24} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => onDelete(index)} className="mx-2">
                          <MaterialCommunityIcons name="delete-empty" size={24} color="black" />
                      </TouchableOpacity>
                  </View>
              </View>
          ))}
      </View>
  )
}

export default ResaltTable
