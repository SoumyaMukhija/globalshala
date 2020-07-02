import {StyleSheet} from 'react-native';

const ScreenStyles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-start',
    padding:20
  },
  screen_basic:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    padding:20
  }, 
  screen_centered:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding:20
  },

});

export const TextStyle = StyleSheet.create({
  heading:{
    marginTop:10,
    width:'100%',
    fontWeight: 'bold',
    fontSize: 32,
  },

  heading_centered:{
    marginTop:10,
    width:'100%',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 32,
  },

  subtitle:{
    width:'100%',
    marginTop:10,
    fontSize:18,
    color:'#AAA'
  }
})

export default ScreenStyles;
