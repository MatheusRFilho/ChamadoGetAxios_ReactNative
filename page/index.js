import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View} from 'react-native';

import axios from 'axios';

export default class Index extends Component {
  
   
  getData = () => {
    axios.get('https://api.github.com/repos/facebook/react')
    .then(function (response){
      alert("ID = "+response.data.id +"\nName = "+response.data.name); 
      console.log(response.data);
    }); 
  }
  
  render() {
    return (
      <ImageBackground source={require('../assets/fundo.jpeg')} style={styles.image}>
        
          <TouchableOpacity
            style={styles.button}
            onClick={() => {this.getData())}
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
