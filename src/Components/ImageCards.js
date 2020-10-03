import React from 'react';
import { Dimensions } from 'react-native';
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageCardz =(card)=>{


return( 
<View style={styles.igmsize} >
<Image source={card.img} style={styles.iim}  />
    <Text style={styles.name}>{card.title} </Text>
</View>
);
};
const styles=StyleSheet.create({
  
    igmsize:{
        width: '100%',
        height: 700,
        },

        iim:{
            flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
        },
        name:{
            backgroundColor:'magenta',
            fontSize:25,
            fontStyle:'italic',
            textAlign:'center',
            color:'yellow'

            
        }
});

export default ImageCardz;