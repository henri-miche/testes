import React,{useState,useEffect} from 'react';
import { Button, Image,StyleSheet,View,Text } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import { Container} from './styles';
import moment from 'moment';

export default () => {

        const route = useRoute();
        const navigation = useNavigation();
        const [key, setKey] = useState(route.params.key);
        const [nome, setNome] = useState();
        const [identidade, setIdentidade] = useState();
        const [cpf, setCpf] = useState();
        const [chaveFoto, setChaveFoto] = useState();
        const [data, setData] = useState();
        const [hora, setHora] = useState();
        const [nascimento, setNascimento] = useState();
        const [tipoRo, setTipoRo] = useState();
        const [local, setLocal] = useState();
        const [mae, setMae] = useState();
        const [pai, setPai] = useState();
        const [telefone, setTelefone] = useState();
        const [genero, setGenero] = useState();
        const [historico, setHistorico] = useState();
        const [cosop, setCosop] = useState();
        const [endereço, setEndereço] = useState();
       
        const [env3,setEnv3] = useState(false);
        const [env4,setEnv4] = useState(false);
        const [historicoOcorr,sethistoricoOcorr] = useState(true);
        const [agenteIntegrante,setAgenteIntegrante] = useState(true);
        const [responsavelPrisão,setresponsavelPrisão] = useState(true);
        const [relatorOcorrencia, setRelatorOcorrencia] = useState(true);
        const [recibo, setRecibo] = useState(true);
        const [tipoOcorrencia,setTipoOcorrencia] = useState();
        const [nomeOcorrencia,setNomeOcorrencia] = useState('');
       
          
        const [nomeQuemGerou, setNomeQuemGerou] = useState('');
        
        const [horaGearacao, setHoraGeracao] = useState(moment().utcOffset('-03:00').format(' hh:mm:ss a'));
        const [dataGeracao, setDataGeracao] = useState(moment().format('DD-MM-YYYY'));

        //Variáveis envolvido 3
        const [cpfEnv3, setCpfEnv3] = useState();
        const [nomeEnv3, setNomeEnv3] = useState();
        const [identidadeEnv3, setIdentidadeEnv3] = useState();
        const [nascimentoEnv3, setNascimentoEnv3] = useState(); 
        const [maeEnv3, setMaeEnv3] = useState();
        const [paiEnv3, setPaiEnv3] = useState();
        const [telefoneEnv3, setTelefoneEnv3] = useState();
        const [generoEnv3, setGeneroEnv3] = useState();
        const [estadoEnv3, setEstadoEnv3] = useState();
        const [cepEnv3, setCepEnv3] = useState();
        const [cidadeEnv3, setCidadeEnv3] = useState();
        const [bairroEnv3, setBairroEnv3] = useState();
        const [logradouroEnv3, setLogradouroEnv3] = useState();
        const [numeroCasaEnv3, setNumeroCasaEnv3] = useState();
        const [complementoEnv3, setComplementoEnv3] = useState();   
        const [tipoDeEnvolvimentoEnv3, setTipoDeEnvolvimentoEnv3] = useState();
        const [nacionalidadeEnv3, setNacionalidadeEnv3] = useState();
        const [naturalidadeEnv3, setNaturalidadeEnv3] = useState();
        const [idadeAparenteEnv3, setIdadeAparenteEnv3] = useState();
        const [estadoCivilEnv3, setEstadoCivilEnv3] = useState();
        const [cutisEnv3, setCutisEnv3] = useState();
        const [ocupaçãoAtualEnv3, setOcupaçãoAtualEnv3] = useState();
        const [grauEscoarEnv3, setGrauEscolarEnv3] = useState();
        const [orgãoExpedidorEnv3, setOrgãoEpedidorEnv3] = useState();
        const [ufEnvolvidoEnv3, setUfEnvolvidoEnv3] = useState();
        const [paisMoradiaEnv3, setpaisMoradiaEnv3] = useState();

        //Variáveis envolvido 4
        const [cpfEnv4, setCpfEnv4] = useState();
        const [nomeEnv4, setNomeEnv4] = useState();
        const [identidadeEnv4, setIdentidadeEnv4] = useState();
        const [nascimentoEnv4, setNascimentoEnv4] = useState(); 
        const [maeEnv4, setMaeEnv4] = useState();
        const [paiEnv4, setPaiEnv4] = useState();
        const [telefoneEnv4, setTelefoneEnv4] = useState();
        const [generoEnv4, setGeneroEnv4] = useState();
        const [estadoEnv4, setEstadoEnv4] = useState();
        const [cepEnv4, setCepEnv4] = useState();
        const [cidadeEnv4, setCidadeEnv4] = useState();
        const [bairroEnv4, setBairroEnv4] = useState();
        const [logradouroEnv4, setLogradouroEnv4] = useState();
        const [numeroCasaEnv4, setNumeroCasaEnv4] = useState();
        const [complementoEnv4, setComplementoEnv4] = useState();   
        const [tipoDeEnvolvimentoEnv4, setTipoDeEnvolvimentoEnv4] = useState();
        const [nacionalidadeEnv4, setNacionalidadeEnv4] = useState();
        const [naturalidadeEnv4, setNaturalidadeEnv4] = useState();
        const [idadeAparenteEnv4, setIdadeAparenteEnv4] = useState();
        const [estadoCivilEnv4, setEstadoCivilEnv4] = useState();
        const [cutisEnv4, setCutisEnv4] = useState();
        const [ocupaçãoAtualEnv4, setOcupaçãoAtualEnv4] = useState();
        const [grauEscoarEnv4, setGrauEscolarEnv4] = useState();
        const [orgãoExpedidorEnv4, setOrgãoEpedidorEnv4] = useState();
        const [ufEnvolvidoEnv4, setUfEnvolvidoEnv4] = useState();
        const [paisMoradiaEnv4, setpaisMoradiaEnv4] = useState();

        
          
       
    const pushDados = () =>{
     try {
     firebase.database().ref('/Ocorrencias').child(key)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().nome;
                    const identidade = snapshot.val().identidade;
                    const cpf = snapshot.val().cpf;
                    const chaveFoto = snapshot.val().chaveFoto;
                    const data = snapshot.val().data;
                    const hora = snapshot.val().hora;
                    const nascimento = snapshot.val().nascimento;
                    const tipoRo = snapshot.val().tipoRo;
                    const local = snapshot.val().local;
                    const mae = snapshot.val().mae;
                    const pai = snapshot.val().pai;
                    const telefone = snapshot.val().telefone;
                    const genero =snapshot.val().genero;
                    const historico = snapshot.val().historico;
                    const cosop = snapshot.val().cosop;
                    const endereço = snapshot.val().endereço;

                    const env3 = snapshot.val().env3;
                    const nomeEnv3 = snapshot.val().nomeEnv3;
                    const cpfEnv3 =snapshot.val().cpfEnv3;
                    const identidadeEnv3 = snapshot.val().identidadeEnv3;
                    const nascimentoEnv3 = snapshot.val().nascimentoEnv3;
                    const maeEnv3 = snapshot.val().maeEnv3;
                    const paiEnv3 = snapshot.val().paiEnv3;
                    const telefoneEnv3 = snapshot.val().telefoneEnv3;
                    const generoEnv3 = snapshot.val().generoEnv3;
                    const estadoEnv3 = snapshot.val().estadoEnv3;
                    const cepEnv3 = snapshot.val().cepEnv3;
                    const cidadeEnv3 = snapshot.val().cidadeEnv3;
                    const bairroEnv3 = snapshot.val().bairroEnv3;
                    const logradouroEnv3 = snapshot.val().logradouroEnv3;
                    const numeroCasaEnv3 = snapshot.val().numeroCasaEnv3;
                    const complementoEnv3 = snapshot.val().complementoEnv3;
                    const tipodeEnvolvimentoEnv3 = snapshot.val().tipodeEnvolvimentoEnv3;
                    const nacionalidadeEnv3 =snapshot.val().nacionalidadeEnv3;
                    const naturalidadeEnv3 = snapshot.val().naturalidadeEnv3;
                    const idadeAparenteEnv3 = snapshot.val().idadeAparenteEnv3;
                    const estadoCivilEnv3 = snapshot.val().estadoCivilEnv3;
                    const cutisEnv3 = snapshot.val().cutisEnv3;
                    const ocupaçãoAtualEnv3 = snapshot.val().ocupaçãoAtualEnv3;
                    const grauEscolarEnv3 = snapshot.val().grauEscolarEnv3;
                    const orgãoExpedidorEnv3 = snapshot.val().orgãoExpedidorEnv3;
                    const ufEnvolvidoEnv3 = snapshot.val().ufEnvolvidoEnv3;
                    const paisMoradiaEnv3 = snapshot.val().paisMoradiaEnv3;


                    const env4 = snapshot.val().env4;
                    const nomeEnv4 = snapshot.val().nomeEnv4;
                    const cpfEnv4 =snapshot.val().cpfEnv4;
                    const identidadeEnv4 = snapshot.val().identidadeEnv4;
                    const nascimentoEnv4 = snapshot.val().nascimentoEnv4;
                    const maeEnv4 = snapshot.val().maeEnv4;
                    const paiEnv4 = snapshot.val().paiEnv4;
                    const telefoneEnv4 = snapshot.val().telefoneEnv4;
                    const generoEnv4= snapshot.val().generoEnv4;
                    const estadoEnv4 = snapshot.val().estadoEnv4;
                    const cepEnv4 = snapshot.val().cepEnv4;
                    const cidadeEnv4 = snapshot.val().cidadeEnv4;
                    const bairroEnv4 = snapshot.val().bairroEnv4;
                    const logradouroEnv4 = snapshot.val().logradouroEnv4;
                    const numeroCasaEnv4 = snapshot.val().numeroCasaEnv4;
                    const complementoEnv4 = snapshot.val().complementoEnv4;
                    const tipodeEnvolvimentoEnv4 = snapshot.val().tipodeEnvolvimentoEnv4;
                    const nacionalidadeEnv4 =snapshot.val().nacionalidadeEnv4;
                    const naturalidadeEnv4 = snapshot.val().naturalidadeEnv4;
                    const idadeAparenteEnv4 = snapshot.val().idadeAparenteEnv4;
                    const estadoCivilEnv4 = snapshot.val().estadoCivilEnv4;
                    const cutisEnv4 = snapshot.val().cutisEnv4;
                    const ocupaçãoAtualEnv4 = snapshot.val().ocupaçãoAtualEnv4;
                    const grauEscolarEnv4 = snapshot.val().grauEscolarEnv4;
                    const orgãoExpedidorEnv4 = snapshot.val().orgãoExpedidorEnv4;
                    const ufEnvolvidoEnv4 = snapshot.val().ufEnvolvidoEnv4;
                    const paisMoradiaEnv4 = snapshot.val().paisMoradiaEnv4;
                   


                   
                    
                    setIdentidade(identidade);
                    setNome(nome);
                    setCpf(cpf);
                    setChaveFoto(chaveFoto);
                    setData(data);
                    setHora(hora);
                    setNascimento(nascimento);
                    setTipoRo(tipoRo);
                    setLocal(local);
                    setMae(mae);
                    setPai(pai);
                    setTelefone(telefone);
                    setGenero(genero);
                    setHistorico(historico);
                    setCosop(cosop);
                    setEndereço(endereço);

                    setEnv3(env3)
                    setNomeEnv3(nomeEnv3);
                    setCpfEnv3(cpfEnv3);
                    setIdentidadeEnv3(identidadeEnv3);
                    setNascimentoEnv3(nascimentoEnv3);
                    setMaeEnv3(maeEnv3);
                    setPaiEnv3(paiEnv3);
                    setTelefoneEnv3(telefoneEnv3);
                    setGeneroEnv3(generoEnv3);
                    setEstadoEnv3(estadoEnv3);
                    setCepEnv3(cepEnv3);
                    setCidadeEnv3(cidadeEnv3);
                    setBairroEnv3(bairroEnv3);
                    setLogradouroEnv3(logradouroEnv3);
                    setNumeroCasaEnv3(numeroCasaEnv3)
                    setComplementoEnv3(complementoEnv3);
                    setTipoDeEnvolvimentoEnv3(tipodeEnvolvimentoEnv3);
                    setNacionalidadeEnv3(nacionalidadeEnv3);
                    setNaturalidadeEnv3(naturalidadeEnv3);
                    setIdadeAparenteEnv3(idadeAparenteEnv3);
                    setEstadoCivilEnv3(estadoCivilEnv3);
                    setCutisEnv3(cutisEnv3);
                    setOcupaçãoAtualEnv3(ocupaçãoAtualEnv3);
                    setGrauEscolarEnv3(grauEscolarEnv3);
                    setOrgãoEpedidorEnv3(orgãoExpedidorEnv3);
                    setUfEnvolvidoEnv3(ufEnvolvidoEnv3);
                    setpaisMoradiaEnv3(paisMoradiaEnv3);

                    
                    setNomeEnv4(nomeEnv4);
                    setCpfEnv4(cpfEnv4);
                    setIdentidadeEnv4(identidadeEnv4);
                    setNascimentoEnv4(nascimentoEnv4);
                    setMaeEnv4(maeEnv4);
                    setPaiEnv4(paiEnv4);
                    setTelefoneEnv4(telefoneEnv4);
                    setGeneroEnv4(generoEnv4);
                    setEstadoEnv4(estadoEnv4);
                    setCepEnv4(cepEnv4);
                    setCidadeEnv4(cidadeEnv4);
                    setBairroEnv4(bairroEnv4);
                    setLogradouroEnv4(logradouroEnv4);
                    setNumeroCasaEnv4(numeroCasaEnv4)
                    setComplementoEnv4(complementoEnv4);
                    setTipoDeEnvolvimentoEnv4(tipodeEnvolvimentoEnv4);
                    setNacionalidadeEnv4(nacionalidadeEnv4);
                    setNaturalidadeEnv4(naturalidadeEnv4);
                    setIdadeAparenteEnv4(idadeAparenteEnv4);
                    setEstadoCivilEnv4(estadoCivilEnv4);
                    setCutisEnv4(cutisEnv4);
                    setOcupaçãoAtualEnv4(ocupaçãoAtualEnv4);
                    setGrauEscolarEnv4(grauEscolarEnv4);
                    setOrgãoEpedidorEnv4(orgãoExpedidorEnv4);
                    setUfEnvolvidoEnv4(ufEnvolvidoEnv4);
                    setpaisMoradiaEnv4(paisMoradiaEnv4);
                     

                });

    } catch (error) {
      alert(error);
    }
}

 
useEffect(() => {
      let isUnmount = false;

      setTimeout(() => {
          
      
      if (!isUnmount) {
          pushDados();
          
      }
   }, 1000);
   return ()=>{
      isUnmount = true;
    setIdentidade('');
    setNome('');
    setCpf('');
    setChaveFoto('');
    setData('');
    setHora('');
    setNascimento('');
    setTipoRo('');
    setLocal('');
    setMae('');
    setPai('');
    setTelefone('');
    setGenero('');
    setHistorico('');
    setCosop('');
    setEndereço('');

      
   }
  }, [])

     const sair = () => {
        setIdentidade('');
        setNome('');
        setCpf('');
        setChaveFoto('');
        setData('');
        setHora('');
        setNascimento('');
        setTipoRo('');
        setLocal('');
        setMae('');
        setPai('');
        setTelefone('');
        setGenero('');
        setHistorico('');
        setCosop('');
        setEndereço('');
        navigation.goBack();
    };
   
    

  

useEffect(()=>{

    switch (tipoRo) {
        case "BO":
            setNomeOcorrencia('BOLETIM DE OCORRÊNCIA')
            break;
        case "RO":
            setNomeOcorrencia('RELATÓRIO DE OCORRÊNCIA')
            break;
        case "RRM":
            setNomeOcorrencia('RECOLHIMENTO DE MERCADORIA ')
            break;
        case "RAU":
            setNomeOcorrencia('ATENDIMENTO AO USUÁRIO')
            break;        
    
        default:
            break;
    }

},[tipoRo])

    const pushUser = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.database().ref('usuarios').child(user.uid)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().nome;
                    setNomeQuemGerou(nome);

                });
        }}

    useEffect(()=>{
        pushUser();
        if (env3 === true) {
            setEnv4(true);
            sethistoricoOcorr(false);
            setAgenteIntegrante(false);
            setresponsavelPrisão(false);
            setRelatorOcorrencia(false);
            setRecibo(false);

        }else{
            setEnv3(false)
            setEnv4(false);
            sethistoricoOcorr(true);
            setAgenteIntegrante(true);
            setresponsavelPrisão(true);
            setRelatorOcorrencia(true);
            setRecibo(true);
        }
       

    },[env3])

  

  const pagina3 = () => {
      navigation.navigate('HomeRauSearch',{key:key})
  }

    return (
        <Container >
            <View style={{flexDirection:'row'}}>
            
                <View>
                    <Image source={require('../../../assets/brasaoTransarente.png')} style={{width:50,height:50,marginLeft:5,marginTop:5,marginRight:5}} />
                </View>

                <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}} >

                    <View style={{borderWidth:1,marginTop:5,height:25,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>SUPERINTENDÊNCIA DE TRENS URBANOS-BH</Text>
                    </View>

                    <View style={{height:25,borderWidth:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,flexDirection:'row'}}>

                        <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}} >{nomeOcorrencia}</Text>
                        </View>

                        <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:12,fontWeight:'bold'}} >AUTENTICAÇÃO {chaveFoto}</Text>
                        </View>

                    </View>

                </View>

           </View>

            <View style={{height:30,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,flexDirection:'row'}}>
                
                <View style={{borderWidth:1,flex:1,width:'100%',flexDirection:'column',}}>
                    <Text style={styles.textoTitulo} >UNIDADE RESPONSAVEL PELO REGISTRO</Text>
                    <Text style={styles.textoConteudo} >CIA. BRASILEIRA DE TRENS URBANOS/STU-BH</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',flexDirection:'column',}}>
                    <Text style={styles.textoTitulo} >ENDEREÇO</Text>
                    <Text style={styles.textoConteudo} >RUA JANUÁRIA 181-BAIRRO FLORESTA-BELO HORIZONTE</Text>
                </View>

            </View>

            {env3 &&
            <View>
             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>ENVOLVIDO 3</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>




                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SEXO</Text>
                    <Text style={styles.textoConteudo} >{generoEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TIPO DE ENVOLVIMENTO</Text>
                    <Text style={styles.textoConteudo} >{tipoDeEnvolvimentoEnv3}</Text>
                </View>
               
                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>DATA DE NASCIMENTO</Text>
                    <Text style={styles.textoConteudo} >{nascimentoEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NATURALIDADE/UF</Text>
                    <Text style={styles.textoConteudo} >{naturalidadeEnv3}</Text>
                </View>

            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                <Text style={styles.textoConteudo} >{nomeEnv3}</Text>
            </View>

           
            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>IDADE APARENTE</Text>
                    <Text style={styles.textoConteudo} >{idadeAparenteEnv3}</Text>
                </View>



                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ESTADO CIVIL</Text>
                    <Text style={styles.textoConteudo} >{estadoCivilEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NACIONALIDADE</Text>
                    <Text style={styles.textoConteudo} >{nacionalidadeEnv3}</Text>
                </View>

            </View>    

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CÚTIS</Text>
                    <Text style={styles.textoConteudo} >{cutisEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>OCUPAÇÃO ATUAL</Text>
                    <Text style={styles.textoConteudo} >{ocupaçãoAtualEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>GRAU DE ESCOLARIDADE</Text>
                    <Text style={styles.textoConteudo} >{grauEscoarEnv3}</Text>
                </View>

            </View>   

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>MÃE</Text>
                <Text style={styles.textoConteudo} >{maeEnv3}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>PAI</Text>
                <Text style={styles.textoConteudo} >{paiEnv3}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO DA IDENTIDADE</Text>
                    <Text style={styles.textoConteudo} >{identidadeEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ORGÃO EXPEDIDOR</Text>
                    <Text style={styles.textoConteudo} >{orgãoExpedidorEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{ufEnvolvidoEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CPF</Text>
                    <Text style={styles.textoConteudo} >{cpfEnv3}</Text>
                </View>

            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ENDEREÇO</Text>
                    <Text style={styles.textoConteudo} >{logradouroEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO</Text>
                    <Text style={styles.textoConteudo} >{numeroCasaEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                    <Text style={styles.textoConteudo} >{complementoEnv3}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>BAIRRO</Text>
                    <Text style={styles.textoConteudo} >{bairroEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                    <Text style={styles.textoConteudo} >{cidadeEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{estadoEnv3}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>PAÍS</Text>
                    <Text style={styles.textoConteudo} >{paisMoradiaEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CEP</Text>
                    <Text style={styles.textoConteudo} >{cepEnv3}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TELEFONE</Text>
                    <Text style={styles.textoConteudo} >{telefoneEnv3}</Text>
                </View>





            </View>  
               </View> }




               {env4 &&
            <View>
             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>ENVOLVIDO 4</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>




                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SEXO</Text>
                    <Text style={styles.textoConteudo} >{generoEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TIPO DE ENVOLVIMENTO</Text>
                    <Text style={styles.textoConteudo} >{tipoDeEnvolvimentoEnv4}</Text>
                </View>
               
                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>DATA DE NASCIMENTO</Text>
                    <Text style={styles.textoConteudo} >{nascimentoEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NATURALIDADE/UF</Text>
                    <Text style={styles.textoConteudo} >{naturalidadeEnv4}</Text>
                </View>

            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                <Text style={styles.textoConteudo} >{nomeEnv4}</Text>
            </View>

           
            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>IDADE APARENTE</Text>
                    <Text style={styles.textoConteudo} >{idadeAparenteEnv4}</Text>
                </View>



                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ESTADO CIVIL</Text>
                    <Text style={styles.textoConteudo} >{estadoCivilEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NACIONALIDADE</Text>
                    <Text style={styles.textoConteudo} >{nacionalidadeEnv4}</Text>
                </View>

            </View>    

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CÚTIS</Text>
                    <Text style={styles.textoConteudo} >{cutisEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>OCUPAÇÃO ATUAL</Text>
                    <Text style={styles.textoConteudo} >{ocupaçãoAtualEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>GRAU DE ESCOLARIDADE</Text>
                    <Text style={styles.textoConteudo} >{grauEscoarEnv4}</Text>
                </View>

            </View>   

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>MÃE</Text>
                <Text style={styles.textoConteudo} >{maeEnv4}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>PAI</Text>
                <Text style={styles.textoConteudo} >{paiEnv4}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO DA IDENTIDADE</Text>
                    <Text style={styles.textoConteudo} >{identidadeEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ORGÃO EXPEDIDOR</Text>
                    <Text style={styles.textoConteudo} >{orgãoExpedidorEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{ufEnvolvidoEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CPF</Text>
                    <Text style={styles.textoConteudo} >{cpfEnv4}</Text>
                </View>

            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ENDEREÇO</Text>
                    <Text style={styles.textoConteudo} >{logradouroEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO</Text>
                    <Text style={styles.textoConteudo} >{numeroCasaEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                    <Text style={styles.textoConteudo} >{complementoEnv4}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>BAIRRO</Text>
                    <Text style={styles.textoConteudo} >{bairroEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                    <Text style={styles.textoConteudo} >{cidadeEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{estadoEnv4}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>PAÍS</Text>
                    <Text style={styles.textoConteudo} >{paisMoradiaEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CEP</Text>
                    <Text style={styles.textoConteudo} >{cepEnv4}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TELEFONE</Text>
                    <Text style={styles.textoConteudo} >{telefoneEnv4}</Text>
                </View>





            </View>  
               </View> } 

            { historicoOcorr && 
            <View>

                <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#BEBEBE'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>HISTÓRICO</Text>
                </View>

                <View style={{borderWidth:1,width:'100%',height:200}}>
                    <Text style={styles.textoConteudo}>{historico}</Text>
                </View> 

            </View> 
            }

            
            



                



              { responsavelPrisão && 

            <View>
                <View style={{borderWidth:1,height:32,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>RESPONSÁVEL PELA APREENSÃO/PRISÃO/CONDUÇÃO</Text>
                </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UNIDADE</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MATRICULA</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SIAPE</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CARGO</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

            </View>

            

             
            </View>
                 }

            { relatorOcorrencia && 

            <View>
                <View style={{borderWidth:1,height:32,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>RELATOR DA OCORRÊNCIA</Text>
                </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UNIDADE</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MATRICULA</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SIAPE</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CARGO</Text>
                    <Text style={styles.textoConteudo} >{}</Text>
                </View>

            </View>

            

             
            </View>
                 }
            
            

           
               

                
               

                    

             { agenteIntegrante && 
             
            <View>
                
                    <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>AGENTE INTEGRANTE</Text>
                    </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>MATRÍCULA</Text>
                        <Text style={styles.textoConteudo} >{identidade}</Text>
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>SIAPE</Text>
                        <Text style={styles.textoConteudo} >{data}</Text>
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>CARGO</Text>
                        <Text style={styles.textoConteudo} >{hora}</Text>
                    </View>

            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                    <Text style={styles.textoConteudo} >{hora}</Text>
            </View>
            
            </View>
                 }

                 { recibo && 
             
            <View>
                
                    <View style={{borderWidth:1,height:50,marginTop:10,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>RECIBO DA AUTORIDADE A QUE SE DESTINA OU SEU AGENTE/AUILIAR POICIAL</Text>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>OU RECIBO DO RESPONSÁVEL CIVIL</Text>
                    </View>

                     <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>DESTINATÁRIO/RECIBO 1</Text>
                    </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>RECEBI O "{nomeOcorrencia}" DE AUTENTICAÇÃO {chaveFoto} PARA CONHECIMENTO E PROVIDÊNCIAS, BEM COMO AS PESSOAS, MATERIAIS, OBJETOS
                        , ANIMAIS, SUBSTÂNCIAS E/ OU DOCUMENTOS QUE, EXISTINDO, ESTEJAM DESCRITOS OU ASSINALADOS NESTE DOCUMENTO.
                        </Text>
                        
                    </View>

                   

            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>Data</Text>
                        
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>HORA</Text>
                        
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>MATRÍCULA</Text>
                       
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>NOME</Text>
                        
                    </View>

            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>CARGO</Text>
                   
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>ORGÃO/UF</Text>
                    
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>UNIDADE</Text>
                    
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>PROVIDENCIA A SER TOMADA PELA AUTORIDADE</Text>
                    
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>ASSINATURA</Text>
                    
            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>RECIBO GERADO POR</Text>
                        <Text style={styles.textoConteudo} >{nomeQuemGerou}</Text>
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>data de criação do recibo</Text>
                        <Text style={styles.textoConteudo} >{dataGeracao} {horaGearacao}</Text>
                    </View>

                   

            </View>
            
            </View>
                 }

                   
           <View style={{marginTop:100}} >
                      <Button title='Página 3' onPress={pagina3}  />
           </View>

            

        </Container>
    );
}

const styles = StyleSheet.create({
    viewPadrao:{
        borderWidth:1,
        flex:1,
        width:'100%',
    },
    textoConteudo:{
        fontSize:12,
         paddingLeft:2,
    },
textoTitulo:{
        fontSize:10,
         paddingLeft:2,
    },
    viewImage:{
        
        marginTop:15,
        marginLeft:30,
        marginRight:15,
    },
    itemAvatar: {
        width: 116,
        height: 156,
        borderRadius: 5,
        
    },

})






/* <ViewTitullo>
                
                <TextTitulo>Detalhes da Ocorrência</TextTitulo>
                
                <TouchSair onPress = {sair}>
                    <Image source = {require('../../../assets/SetaSair.png')} />
                </TouchSair>
            
            </ViewTitullo>

            <ViewQualificaçao>
                <TextQuaificaçao>Qualificação do Envolvido</TextQuaificaçao>

                <View style = {{flexDirection:'row'}}>

                 <View style={styles.viewImage}>
                    <Image source={avatar2} style={styles.itemAvatar} />
                </View>

                <View style={{}}>
                <TextNome>{nome}</TextNome>

                <View style={{marginTop:16}}>
                <TextLabel>RG:<TextLabelText>{identidade}</TextLabelText></TextLabel>
                <TextLabel>CPF:<TextLabelText>{cpf}</TextLabelText></TextLabel>
                <TextLabel>Telefone:<TextLabelText>{telefone}</TextLabelText></TextLabel>
                <TextLabel>Nascimento:<TextLabelText>{nascimento}</TextLabelText></TextLabel>
                </View>
                
                </View>
               
                </View>
            </ViewQualificaçao>

            <View style={{marginLeft:30}}>
                <TextLabelcamposmae>Mãe:<TextCamposmae>{mae}</TextCamposmae></TextLabelcamposmae>
                <TextLabelcamposmae>Pai:<TextCamposmae>{pai}</TextCamposmae></TextLabelcamposmae>
                 
                 <View style = {{flexDirection:'row'}}>
                     <View style={{flex:1}}>
                     <TextLabelcamposmae>CEP:<TextCamposmae>{}</TextCamposmae></TextLabelcamposmae>
                    </View>

                        <View style={{flex:1}}>
                      <TextLabelcamposmae>Gênero:<TextCamposmae>{genero}</TextCamposmae></TextLabelcamposmae>
                </View>
                 </View>
                 
                <TextLabelcamposmae>Endereço:<TextCamposmae>{endereço}</TextCamposmae></TextLabelcamposmae>
            </View>
            
            <View style={{marginLeft:30,marginTop:35}}>
                <TextDetallhesOcorr>Detalhes da Ocorrência</TextDetallhesOcorr>
            </View>

            <View style={{marginTop:15,marginLeft:30}}>

                <View style={{flexDirection:'row'}} >
                   
                   <View style={{flex:1}}>
                    <TextLabeldetalhes>Data:<TextDetalhes>{data}</TextDetalhes></TextLabeldetalhes>
                    </View>
               
                <View style={{flex:1}}>
                    <TextLabeldetalhes>Hora:<TextDetalhes>{hora}</TextDetalhes></TextLabeldetalhes>
                </View>
                
                </View>

                <View style={{flexDirection:'row'}}>
                    
                    <View style={{flex:1}}>
                        <TextLabeldetalhes>RO:<TextDetalhes>{tipoRo}</TextDetalhes></TextLabeldetalhes>
                    </View>

                    <View style={{flex:1}}>

                         <TextLabeldetalhes>Local:<TextDetalhes>{local}</TextDetalhes></TextLabeldetalhes>
                    </View>

                     
                   
                </View>

                <View>
                    <TextLabeldetalhes>ASO:<TextDetalhes>{cosop}</TextDetalhes></TextLabeldetalhes>
                    <TextLabeldetalhes>Detalhes:<TextDetalhes>{historico}</TextDetalhes></TextLabeldetalhes>
                </View>
            </View>

            <View style = {{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <TextCodRegistro>Código de Registro: {chaveFoto}</TextCodRegistro>
            </View>

            <Button title='Gerar PDF' onPress={createAndSavePDF}/>
            */
  