 import { useLinkProps } from '@react-navigation/native';
 import { StatusBar } from 'expo-status-bar';
 import React from 'react';
 import { Text, View, StyleSheet,ImageBackground, ImageStore, ProgressBarAndroidComponent } from 'react-native';
 import BackgroundImage from '../components/BackgroundImage';
 import Buttons from '../components/Buttons';
 import {recipes} from '../constants/recipes.js';
 
 export default function Recettes(props){
     return (
         <View style={styles.container}>
           <BackgroundImage/>
           <View style = {styles.title}>
             <Text style = {{fontFamily:'Snell Roundhand',color:'#fff',  fontSize : 35,fontWeight:'bold', fontStyle:'italic'}}>Restaurants partenaires</Text>
           </View>
           <View style = {styles.texte2}>
             <Text style ={{fontWeight:'bold',fontSize:12,fontStyle:'italic'}}>
             Toutes les recettes du bateau de Thibault. 
             </Text>
             <Text style ={{fontWeight:'normal',fontStyle:'italic',fontSize:15}}>
               06.63.99.99.78 
             </Text>
             <Text style ={{fontWeight:'normal',fontStyle:'italic',fontSize:15}}>
               lebateaudethibault@gmail.com
             </Text>  
             <Text style ={{fontWeight:'normal',fontStyle:'italic',fontSize:15}}>
               www.facebook.com/lebateaudethibault 
             </Text>
             <StatusBar style="auto" />
           </View>
           <View style = {styles.row} >
             {recipes.map((value,index)=>{
               if(index<2){
                 return <Buttons style = {{alignItems:'center'}}
                         key={index}
                         text={value.name}
                         image={value.image_icon}
                         screen={"RecetteDetail"}
                         navigation={props.navigation}
                         data={value}>
                         </Buttons>  
               }        
         })}</View>
         <View style = {styles.row} >
             {recipes.map((value,index)=>{
             if(index>1 && index<4){
                 return <Buttons style = {{alignItems:'center'}}
                         key={index}
                         text={value.name}
                         image={value.image_icon}
                         screen={"RecetteDetail"}
                         navigation={props.navigation}
                         data={value}>
                         </Buttons> 
             }         
         })}</View>
         <View style = {styles.row} >
             {recipes.map((value,index)=>{
             if(index>3){
                 return <Buttons 
                         key={index}
                         text={value.name}
                         image={value.image_icon}
                         screen={"RecetteDetail"}
                         navigation={props.navigation}
                         data={value}>
                         </Buttons> 
             }         
         })}</View>
           </View>
         
       );
 }
 
 const styles = StyleSheet.create({
     container: {
       flex : 1,
       flexDirection : 'column',
       alignItems: 'stretch',
       textAlign: 'center',
       justifyContent: 'center',
       
     },
     
     texte2 : {
       flex : 1,
       alignItems: 'center',
     },
     title : {
       flex: 1,
       justifyContent: 'flex-start',
       marginTop: 75,
       fontStyle : 'italic',
       fontFamily : 'Snell Roundhand, cursive',
       alignItems: 'center',
     },
     row : {
       flex : 1,
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:"row",
       margin:2,
       backgroundColor:'rgba(52,52,52,0.3)',
       borderColor:'black',
       borderWidth:1,
       },
 
     
   });
 
