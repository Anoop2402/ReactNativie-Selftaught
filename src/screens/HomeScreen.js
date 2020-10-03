import React from "react";
import { Text, StyleSheet, View,Image , Button } from "react-native";

const HomeScreen = ({navigation}) => {
  const name="Anoop";
  return (<View>
    
    <Text style={styles.intro}>React Native App</Text>
    <Button style={styles.buttonspace} onPress={()=>navigation.navigate('sample')} 
    title="Cousins" />
    <Button style={styles.buttonspace} onPress={()=>navigation.navigate('FlatListExample')}
     title="Age" />
     <Button onPress={()=>navigation.navigate('Gallery')} title="Image Gallery" />
     <Button onPress={()=>navigation.navigate('Counter')} title="Counter"/>
     <Button onPress={()=>navigation.navigate('Color') } title="Color Screen" />
     <Button onPress={()=>navigation.navigate('ColorAdjust')} title="Color Adjuster" />
       </View>);
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 50
  },
  intro:{
    fontSize: 35,
     marginVertical:5
  },
  buttonspace:{
    marginVertical: 50
  },
  igmsize:{
    width:80,
    height:80
}
});

export default HomeScreen;
