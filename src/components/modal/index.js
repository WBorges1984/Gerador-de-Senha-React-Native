import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from "../hooks/useStorege";




export function ModalPassword({password, handleClose}) {

  const {saveItem} = useStorage();

  async function HandleCopyPassword() {
    await Clipboard.setStringAsync(password)
    alert("Senha salva com sucesso!")
    await saveItem("@pass", password)
    handleClose();
  }
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.title}>Senha gerada</Text>
        <Pressable style={style.innerPassword} onPress={HandleCopyPassword}>
          <Text style={style.text}>{password}</Text>
        </Pressable>
        <View style={style.buttonArea}>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText} onPress={handleClose}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={HandleCopyPassword} style={[style.button, style.buttonSave]}>
                <Text style={style.buttonSaveText}>Salvar senha</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#FFF",
    width: "80%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword:{
    backgroundColor:"#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8
  },
  text:{
    color: "#fff",
    textAlign:"center"
  },
  buttonArea:{
    flexDirection:"row",
    width: "90%",
    marginTop:8,
    alignItems:"center",
    justifyContent:"space-between"
  },
  button:{
    flex: 1,
    alignItems:"center",
    marginTop:14,
    marginBottom: 14,
    padding: 8
  },
  buttonSave:{
    backgroundColor: "#392de9",
    borderRadius: 8
  },
  buttonSaveText:{
    color: "#fff",
    fontWeight:"bold"
  }
});
