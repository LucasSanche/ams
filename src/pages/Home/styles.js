import { StyleSheet } from "react-native-web"

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: '#CCD0D9'
 },
 containerHeader:{
  marginTop: '10%',
  marginBottom: '8%',
  paddingStart: '5%',
  flexDirection: 'row',
 },
 infos:{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  
 },
 name:{
  fontSize: 25,
  fontWeight: 'bold',
  color: '#fff'
 },
 number:{
  fontSize: 20,
  fontWeight: 'normal',
  color: '#fff'
 },
 perfil: {
    width: '100px',
    height: '100px'
 },
 containerBody:{
  backgroundColor: '#fff',
  flex: 1,
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingStart: '5%',
  paddingEnd: '5%'
 },
 titleArea:{
  alignItems: 'center',
  marginTop: 28,
 },
 title:{
  fontSize: 20,
  textAlign: 'center'
 },
 icon:{
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: 7
 },
 containerDropdown:{
  backgroundColor: '#1540BF',
  marginTop: 20,
  borderRadius: 8,
  marginBottom: 20
 },
 buttonScaner:{
  backgroundColor: '#090E73',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 8,
  flexDirection: 'row',
  marginBottom: 30
 },
 textScaner:{
  color: '#DFE9F2',
  fontSize: 18,
  fontWeight: 'bold',
 },

 //TELA HOME
 telaHome:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff',
  
  textAlign:'center',
  marginLeft: 15,
 },

 logo:{
  width:'100px',
  height: '100px'
 },

 buttonText:{
  fontSize: 18,
  color: '#fff',
  fontWeight: 'bold',
  backgroundColor: '#4C5059',
  borderRadius: 50,
  paddingVertical: 8,
  shadowColor: 'black',
  shadowOffset: {width: 2, height: 3},
  shadowOpacity: 0.2,
  shadowRadius: 3,
  textAlign:'center',
  marginTop: 25
 },

 //POSIÇÃO BOTAO
 posButton:{
  marginTop: '40%'
 },

})

export default styles;