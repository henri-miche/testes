import React, {useState}from 'react';
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView,Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputName from "../../Components/InputName";
import firebase from '../../Connection/Firebase';
import { Container,
BtnInstituição
} from './styles';





export default () => {

    const navigation = useNavigation();
    const [senhaField,setSenhaField] = useState('');
     const [instituicao,setInstituicao] = useState('AC');
      const [emailField,setEmailField] = useState('');
      

    
    
   const handleSignClic = () => {

        if(emailField != '' && senhaField != '') {

            /*função ouvinte a ser passada para sistemaconect*/
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                   

                   navigation.reset({

                        routes: [{name: 'Gerencial',params:{instituicao:instituicao} }]

                            });

                }
            });
            /*conexao firebase cadastro*/
            firebase.auth().signInWithEmailAndPassword(
                emailField,
                senhaField).catch((error) => {
                    

                    switch (error.code) {
                        case 'auth/invalid-email':
                            alert("E-mail inválido!");
                            break;

                        case 'auth/wrong-password':
                            alert("Senha inválida!");
                            break;

                        case 'auth/user-not-found':
                            alert("Usuário não encontrado!");
                            break;

                        default:
                            break;
                    }

                });
        } else {
            alert("Preencha os campos corretamente");
        }
    

    }

    return (
        <Container >
            <View>
                <Picker
        selectedValue={instituicao}
        style={{ height: 50, width: 150,backgroundColor:'#D3D3D3',marginBottom:15,alignSelf:'center' }}
        onValueChange={(itemValue, itemIndex) => setInstituicao(itemValue)}
      >
        <Picker.Item label="AC" value="AC" />
        <Picker.Item label="BH" value="BH" />
        <Picker.Item label="RC" value="RC" />
        <Picker.Item label="JOP" value="JOP" />
      </Picker>

      <InputName
            placeholder="E-mail" 
            value={emailField} 
            onChangeText={t => setEmailField(t)} 
              />
      <InputName 
           placeholder="Senha" 
            value={senhaField} 
            onChangeText={t => setSenhaField(t)} 
            password={true}   
      />
            </View>
      <BtnInstituição onPress={handleSignClic}>

        <Text style={{color:'#000'}}>OK</Text>
      </BtnInstituição>

           <Text style={{color:'#fff'}}>{instituicao}</Text>

           

        </Container>
    );
}

/*função ouvinte a ser passada para sistemaconect*/
           /* firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.navigate('Gerencial',{instituicao:instituicao});
                }
            });
            /*conexao firebase cadastro*/
           /* firebase.auth().signInWithEmailAndPassword(
                email,
                senha).catch((error) => {
                    

                    switch (error.code) {
                        case 'auth/invalid-email':
                            alert("E-mail inválido!");
                            break;

                        case 'auth/wrong-password':
                            alert("Senha inválida!");
                            break;

                        case 'auth/user-not-found':
                            alert("Usuário não encontrado!");
                            break;

                        default:
                            break;
                    }

                });*/