import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{height: 30,  backgroundColor:"red"}}>
       <Text>This is a text</Text>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     
  },
});
