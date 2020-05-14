import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View} from 'react-native';

import axios from 'axios';

export default class App extends Component {

  getData(){
    axios.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
    .then(function(response){
      alert("Foo1 = "+response.data.foo1 +"\nFoo2 = "+ response.data.foo2); 
    }); 
  }
 
  render() {
    return (
      <ImageBackground source={require('./assets/fundo.jpeg')} style={styles.image}>
        
          <TouchableOpacity
            style={styles.button}
            onPress={this.getData()}
            >
              <Text style={styles.text}>Botão</Text>
          </TouchableOpacity>
      
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    alignItems:'center', 
    borderRadius:20,
  },
  image: {
    flex: 1,
    justifyContent:'center',
  },

  text:{
    backgroundColor: 'gray',
    fontSize:30,
    padding: 25,
    borderColor: 'black',
    borderRadius:25 
  }
});