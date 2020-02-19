import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

let width = 300;
let height = 100;
let borderWidth = 3;

let pointerWidth = 3;

let areaSize = 250;


let maxWidth = width - borderWidth - pointerWidth;

let frameRate = 60;
let speed = 10;

class Metro extends Component {


    constructor(props){
        super(props);

        

    }

    state = {
        position: 0,
        direction: "right",
        // inArea : this.checkArea(),
    }

    move = () => {

        if (this.state.position >= maxWidth) {
            this.setState(previousState => ({direction: "left", position: maxWidth}))
        }

        if (this.state.position <= 0) {
            this.setState(previousState => ({direction: "right", position: 0}))
        }

        if (this.state.direction == "right") {

            this.setState(previousState => (
                { position: this.state.position + speed }
            ))
        }else if(this.state.direction == "left"){
            this.setState(previousState => (
                { position: this.state.position - speed }
            ))
        }

        this.positionTrim()
    }

    componentDidMount() {
        setInterval(this.move, 1000/frameRate);
    }

    positionTrim = () =>{
        if(this.state.position > maxWidth){
            this.setState(previousState => ({position: maxWidth}))
        }else if(this.state.position < 0){
            this.setState(previousState => ({position: 0}))
        }
        return this.state.position;
    }

    checkArea(){
        if(this.state.position >= width/2 - areaSize/2 && this.state.position <= width/2 + areaSize/2 ){
            return true;
        }
        return false;
    }


    render() {
        return (
            <View style={styles.container} >

                <View style={styles.area}></View>
                <View style={[styles.pointer, { left: this.state.position }]}></View>
                
            </View>
        );
    }

};

const styles = StyleSheet.create({

    container: {
        width: width,
        height: height,
        backgroundColor: "#ffffff",
        borderColor: "#black",
        borderWidth: borderWidth,
    },

    pointer: {
        width: pointerWidth,
        height: height - 2 * borderWidth,
        backgroundColor: "black",

        position: "absolute",
    },

    area: {
        width: areaSize,
        height: height - 2 * borderWidth,
        backgroundColor: "#405d3a",

        position: "absolute",
        left: width/2 - areaSize/2,
    }


});

export default Metro;