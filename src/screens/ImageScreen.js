import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import ImageCardz from "../Components/ImageCards"

const ImageScreens =()=>{

    return (
    <ScrollView>
        <ImageCardz  title="Shiva" img={require('../../assets/shiva.jpeg')} />
        <ImageCardz  title="Mithun" img={require('../../assets/mithun.jpeg')} />
        <ImageCardz  title="Renju" img={require('../../assets/renj.jpeg')} />
        <ImageCardz  title="Anju" img={require('../../assets/anj.jpeg')} />
        <ImageCardz  title="Aneesh" img={require('../../assets/anish.jpeg')} />
        <ImageCardz  title="Monish" img={require('../../assets/monish.jpeg')} />
        <ImageCardz  title="Raji" img={require('../../assets/raji.jpeg')} />
        <ImageCardz  title="Aji" img={require('../../assets/aji.jpeg')} />
        <ImageCardz  title="Pazham Penn" img={require('../../assets/pazham.jpeg')} />

    </ScrollView>


    );

};

const styles=StyleSheet.create({
    igmsize:{
        width:220,
        height:220
    }
});

export default ImageScreens;