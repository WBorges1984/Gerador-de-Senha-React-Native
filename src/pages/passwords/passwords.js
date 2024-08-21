import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../components/hooks/useStorege";
import { PasswordItem } from "./components/passwordItem";
export default function Passwords() {

  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const {getItem, removeItem} = useStorage();
  const teste = ["123","456","789"]
  useEffect(()=>{
    async function loadPasswords() {
      const passwords = await getItem("@pass")
      setListPasswords(passwords)
      console.log(passwords)
    }

    loadPasswords();
  },[focused])

  async function HandleDeletePassword(item){
    const password = await removeItem("@pass", item)
    setListPasswords(password)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList style={{flex:1, paddingTop: 14}} data={listPasswords}
          keyExtractor={(item)=>String(item)}
          renderItem={({ item }) => {
            return <PasswordItem data={item} removePassword={()=>HandleDeletePassword(item)}/>;
          }}
        />
       
         
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 70
  },
  title:{
    color: "#fff",
    fontSize:20,
    fontWeight: "bold"
  },
  content:{
    flex: 1,
    paddingLeft:14,
    paddingRight: 14
  }
});
