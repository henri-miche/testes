import React, {useEffect, useState}from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, Modal, SafeAreaView,Text, View } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import InputName from "../../Components/InputName"
import firebase from '../../Connection/Firebase';
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
                console.log(json.nome)
                console.log(json.setor)
               
               const reqModulos = await firebase.database().ref('Permissoes').child(user.uid).once('value');
               const resModulos = await reqModulos.toJSON();
               setModulox(resModulos.modulox)
               setModuloy(resModulos.moduloy)
               setModuloh(resModulos.moduloh)
               setModuloz(resModulos.moduloz)
                console.log(resModulos.moduloy)
                }
              }

              useEffect(()=>{
                  poolPermissions();
              },[]) 

    return (
        <Container >
           {modulox &&
            <View style ={{width:100,height:100,backgroundColor:'#fff',marginBottom:10}}>
              <Text>Módulo xxxx</Text>
            </View>
           
           }

           {moduloy &&
           <View style ={{width:100,height:100,backgroundColor:'#fff',marginBottom:10}}>
              <Text>Módulo yyyy</Text>
            </View>
           
           }

           {moduloz &&
           <View style ={{width:100,height:100,backgroundColor:'#fff',marginBottom:10}}>
              <Text>Módulo zzzzzzz</Text>
            </View>
           
           }

           {moduloh &&
           <View style ={{width:100,height:100,backgroundColor:'#fff',marginBottom:10}}>
              <Text>Módulo hhhhh</Text>
            </View>
           
           }
           <Text style={{color:'#fff'}}>{usuario}</Text>
            <Text style={{color:'#fff'}}>{setor} {instituicao}</Text>


           

           <Button title='Logout' onPress ={Logout} />

           

        </Container>
    );
}