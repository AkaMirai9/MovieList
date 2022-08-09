import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

var appHeight = Dimensions.get('window').height
var appWidth = Dimensions.get('window').width

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

// COMPONENTS
const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerItem} onPress={handleClickMenu} >
        <FontAwesome5 name={'bars'} color={'white'} size={32} />
      </Text>
      <Text style={styles.headerItem}>
        Ma Liste de Film
      </Text>
      <Text style={styles.headerItem} onPress={handleClickSetting}>
        <FontAwesome5 name={'cog'} color={'white'} size={32} />
      </Text>
    </View>
  )
}


// FUNCTIONS
const handleClickMenu = () => {
  Alert.alert('Menu Button Clicked')
}

const handleClickSetting = () => {
  Alert.alert('Settings Button Clicked')
}


// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#403d3d',
  },
  header:{
    backgroundColor: '#1f1d1d',
    width: appWidth,
    height: appHeight / 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerItem: {
    paddingTop: 45,
    paddingStart: 10,
    paddingEnd: 10,
    color: 'white',
    fontSize: 30
  }
});
