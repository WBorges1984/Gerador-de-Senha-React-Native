import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ModalPassword } from '../../components/modal/index';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function Home() {

  const [size, setSize] = useState(8)
  const [passwordValue, setPasswordValue] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = '';
    for(let i = 0, n=  charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")}
        style={styles.logo}/>
        <Text style={styles.title}>{size} caracteres</Text>

        <View style={styles.area}>
          <Slider style={{height: 50}} 
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor='#FF0000'
            minimumTrackTintColor='#000'
            thumbTintColor='#392de9'
            value={size}
            onValueChange={(value)=>setSize(value.toFixed(0))}
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={generatePassword}> 
          <Text style={styles.buttonText}>Gerar senha</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} 
        animationType='fade' transparent={true}>
          <ModalPassword password={passwordValue} handleClose={()=> setModalVisible(false)}/>
        </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold"
  }
});
