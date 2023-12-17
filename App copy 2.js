import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View
      style={styles.txt}
    >
      <View
        style={styles.txt1}
      >
        <Text>FAHAD</Text>
      </View>
      <View
        style={styles.txt2}
      >
        <Text>FAHAD</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  txt: {
    flex: 1,
    color: 'white',
    backgroundColor: 'red',
  },
  txt1: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt2: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default App;







// import { View, Text, TextInput, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <View style={styles.view}>
//         {/* <Text style={styles.txt}>AsSalamOAlaikum</Text> */}
//         <TextInput placeholder='Enter your username' />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   txt: {
//     backgroundColor: 'purple',
//     color: 'white',
//     // flex:1,
//     textAlign: 'center',
//   },
//   view: {
//     // flex:1,
//     display: 'flex',
//     justifyContent: 'center',
//     // alignItems:'center',
//     height: '100%',
//   },
// })

// export default App;

// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
