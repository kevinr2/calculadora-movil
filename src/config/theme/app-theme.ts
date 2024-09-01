import { Button, StyleSheet } from "react-native";

export const colors ={
    darkGray:'#2D2D2D',
    lightGray:'#989898',
    oragen:'#FF9427',

    textPrimary:'white',
    textSecondary:'#666666',
    background:'#000000'
}


export const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:colors.background,   
    },
    calulatorContainer:{
        flex:1,
        padding:20,
        justifyContent:'flex-end'
    },


    mainResult:{
        color:colors.textPrimary,
        fontSize:70,
        textAlign:'right',
        marginBottom:10,
        fontWeight:'300',

    },
    subResult:{
        color:colors.textSecondary,
        fontSize:40,
        textAlign:'right',
        fontWeight:'300'
    },
    row:{
       flexDirection:'row',
       justifyContent:'center',
       paddingBottom:18,
       paddingHorizontal:18 
    },
    button:{
        height:100,
        width:100,
        backgroundColor:colors.darkGray,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight:'300'
    }

})