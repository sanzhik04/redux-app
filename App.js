import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {store} from './store/store';
import { Appbar } from 'react-native-paper';
export default function App() {


  const _handleMore = () => console.log('Shown more');

  return (
    <View>
      <Appbar.Header>
      <Appbar.Content title="CounterApp" subtitle="Redux & UI library" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    <Provider store={store}>
        <Counter/>
    </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
