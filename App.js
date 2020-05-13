import React, { Component } from 'react';
import { StyleSheet, Button, Alert, ImageBackground} from 'react-native';

import axios from 'axios';

const image = {uri: "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"};

export default class App extends Component {


  
  getDataUsingGet(){
    axios.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
    .then(function(response){
      alert("Foo1 = "+response.data.foo1 +"\nFoo2 = "+ response.data.foo2); 
    }); 
  }
 
  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <Button style={styles.Button} title='Botão' onPress={this.getDataUsingGet}/>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  Button :{
    justifyContent: 'center',
    flex:1,

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  
});