import {StyleSheet} from 'react-native'
export const CardStyles = StyleSheet.create({

    card:{
        width:'99%'
    },

    card_heading:{
        // fontWeight: "bold",
        // color:"#048FC1"
    },

    card_content:{
        color:'#999',
        fontSize:14,
        marginTop:10
    },

    blog_btn_container:{
        justifyContent:'space-between',
        width:'100%',
    },

    contest_btn_container:{
        justifyContent:'space-between',
        width:'100%',
    },

    contest_image:{
        width:64,
        height:64
    },

    twitter_image:{
        marginTop:20,
        width:48,
        height:48,
        alignSelf:'center',
    },

    contest_body:{
        display: "flex",
        justifyContent:'space-between',
        flexDirection:'row'
    },  

    left_image:{

    },

    blog_card_btn:{
        color: '#009688',
        fontSize:14
    },

    blog_card_tag:{
        width:'20%',
        backgroundColor: '#009688',
        color:'#FFF',
        fontSize:10
    },

    intern_btn_container:{
        justifyContent:'flex-start',
        width:'100%',
    },

    intern_card_tag:{
        width:'20%',
        backgroundColor: '#E91E63',
        color:'#FFF',
        fontSize:10
    },

    intern_card_btn:{
        marginLeft:10,
        backgroundColor:'#00BCD4'
    },

    contest_card_tag:{
        width:'25%',
        backgroundColor: '#673AB7',
        color:'#FFF',
        fontSize:10
    },

    contest_card_btn:{
        color: '#FFC107',
        fontSize:14
    },

    twitter_card_tag:{
        backgroundColor: '#03A9F4',
        width:'25%',
        color:'#FFF',
    },

    twitter_card_btn:{
        color: '#03A9F4',
        fontSize:14
    },

    twitter_body:{
        display: "flex",
        justifyContent:'space-between',
        flexDirection:'row'
    },
})