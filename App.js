import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{height: 60,
          backgroundColor:"blue"}}>
       <Text style={{color: "white" }}>This is a text</Text>
       </View>
      <View style={{height: 60,  backgroundColor:"green"}}>
       <Text style={{fontsize: 24,
         color: "white",
         fontWeight: "bold",
         padding: 10}}>This is another text</Text>
       </View>
       <View style={{marginTop: 50, marginLeft: 40}}>
       <Image style={{height: 180, width: 200}} 
       source={require('./assets/favicon.png')}
       resizeMode="contain"
       />
       
       </View>
       <View style={{marginTop: 50, marginLeft: 40}}>
       <Image style={{height: 180, width: 200}} 
       source={{uri: "https://i.ibb.co/q9wzfnD/hilux.jpg"}}
       resizeMode="contain"
       />
       
       </View>

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     
  },
});
