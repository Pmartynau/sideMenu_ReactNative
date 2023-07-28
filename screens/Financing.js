import {Image, Text} from "react-native";
import random from "../assets/header-background.png";
import React from "react";
import CardComponent from "./diagnostics";

const CurrentScreen=({tabTitle})=>{
    return (
        <>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
            }}>{tabTitle}</Text>

            <Image source={random} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25
            }}></Image>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
                , paddingTop: 15,
                paddingBottom: 5
            }}>Lorum epsum</Text>

            <Text style={{
            }}>Lorem fsdfsd dolor sit amet.</Text>

            <CardComponent/>
        </>
    );
}
export default CurrentScreen