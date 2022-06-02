import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
   Text,
   View,
   SafeAreaView,
   Image, 
   ScrollView, 
   Pressable } from 'react-native';

// export const Button = ({ title }) => {
//   return (
//     <Pressable 
//     style={{backgroundColor: "blue", padding: 10,
//     alignItems: "center",
//     marginTop: 20,}}
//      onPress={() => {
//       alert("pressed");
//     }}>
//       {/* <View style={{height: 60, width: 60, backgroundColor: "red"}}></View>*/}
//       <Text style={{color: "white"}}>{title}</Text> 
//     </Pressable>
//   )
// }
   
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView>
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
       /> */}
       {/* <Pressable  onPress={() => {
         alert("pressed");
       }}>
         <View style={{height: 60, width: 60, backgroundColor: "red"}}></View>
       </Pressable> */}
       {/* </View> */}
      {/* <Text>
      The Toyota Hilux (Japanese: トヨタ・ハイラックス, Hepburn: Toyota Hairakkusu); stylized as HiLux and historically as Hi-Lux, is a series of pickup trucks produced and marketed by the Japanese automobile manufacturer Toyota. The majority of these vehicles are sold as pickup truck or cab chassis variants, although they could be configured in a variety of body styles.

The pickup truck was sold with the HiLux name in most markets, but in North America, the Hilux name was retired in 1976 in favor of Truck, Pickup Truck, or Compact Truck. In North America, the popular option package, the SR5 (Sport Runabout 5-Speed), was colloquially used as a model name for the truck, even though the option package was also used on other Toyota models, like the 1972 to 1979 Corolla. In 1984, the Trekker, the wagon version of the Hilux, was renamed the 4Runner in Venezuela, Australia and North America, and the Hilux Surf in Japan. In 1992, Toyota introduced a newer pickup model, the mid-size T100 in North America, necessitating distinct names for each vehicle other than Truck and Pickup Truck. Since 1995, the 4Runner is a standalone SUV, and the more recent models of the Hilux are separate in appearance from the Tacoma.
      </Text> */}
      {/* </ScrollView>
      <Button title="press"/>
      <Button title="2nd title"/> */}
      <View style={{flex: 1,
      flexDirection: "row", // main axis -> column
      // alignItems: "center", //it works cross axis
      // justifyContent: "center",
      flexWrap: "wrap"
       }}>
      <View style={styles.view1}/>
      <View style={styles.view2}/>
      <View style={styles.view3}/>
      <View style={styles.view4}/>
      <View style={styles.view5}/>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   
     view1: {
       height: 100,
       width: 100,
       backgroundColor: 'red'
     },
     view2: {
      height: 100,
      width: 100,
      backgroundColor: 'blue',
      alignSelf: "flex-start",
      // marginHorizontal: 20,
     },
     view3: {
      height: 100,
      width: 100,
       backgroundColor: 'green'
     }
  ,
     view4: {
      height: 100,
      width: 100,
       backgroundColor: 'orange'
     }
  ,
     view5: {
      height: 100,
      width: 100,
       backgroundColor: 'purple'
     }
  ,
});
