import firebase from '../../Connection/Firebase';

import * as React from 'react'
import {useEffect, useState}from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, Modal, SafeAreaView,Text, View } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import InputName from "../../Components/InputName";

import PDFReader from 'rn-pdf-reader-js';
import { WebView } from 'react-native-webview';
import { Container,
BtnInstituição
} from './styles';





export default () => {

          const navigation = useNavigation();
          const [senha,setSenha] = useState();
          const route = useRoute();
          const [instituicao,setInstituicao] = useState(route.params.instituicao);
          const [usuario,setUsuario] = useState();
          const [permissao,setPermissao] = useState(false);
          const [email,setEmail] = useState();
          const [modalVisible,setModallVisible] = useState();
          const [setor,setSetor] = useState();
          
          const [modulox,setModulox] = useState();
          const [moduloy,setModuloy] = useState();
           const [moduloz,setModuloz] = useState();
          const [moduloh,setModuloh] = useState();
          const [avatar2,setAvatar2] = useState(null);  

        const buscarFotos = () => {
        const storage = firebase.storage();
        const starsRef = storage.ref('pdf/').child('OCORRENCIATESTE.pdf');
    
        starsRef.getDownloadURL().then(function (url) {
            let avatar1 = { uri: url };
            let avatar3 = avatar1;
            setAvatar2(avatar3);
            console.log(avatar2);
        }).catch((error) => {
        if (error.code === 'storage/object-not-found'){
            
        }
        });
    }



     
          const Logout  = () => {
        firebase.auth().signOut();
        navigation.reset({
            routes: [{ name:  'Home' }]
        });
          setInstituicao('');
    }
    
    const poolPermissions = async () =>{
      
      const user = firebase.auth().currentUser;
       if (user) {

            const req = await firebase.database().ref(instituicao+'/usuario').child(2)
                .once('value');
                const json = await req.toJSON();
                setUsuario(json.nome);
                setSetor(json.setor);
                
               
               const reqModulos = await firebase.database().ref('Permissoes').child(user.uid).once('value');
               const resModulos = await reqModulos.toJSON();
               setModulox(resModulos.modulox)
               setModuloy(resModulos.moduloy)
               setModuloh(resModulos.moduloh)
               setModuloz(resModulos.moduloz)
                
                }
              }

              

              useEffect(()=>{
                 buscarFotos();
                  poolPermissions();
                 
              },[]) 

    return (
        

       
           <PDFReader
        source={
            avatar2
  }
      />
     
          

           

        
    );
}

/* */