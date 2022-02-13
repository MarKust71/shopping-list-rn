import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  Provider as PaperProvider,
  Appbar,
  TextInput,
  Button,
} from 'react-native-paper';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './api/firebase.config';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        username,
        password,
      );
      console.log({credentials});
    } catch (error) {
      console.debug({error});
    }
  };

  return (
    <PaperProvider>
      <Appbar>
        <Appbar.Header>
          <Appbar.Content title="Shopping List" subtitle="just another" />
        </Appbar.Header>
      </Appbar>

      <Text> RN Shopping List</Text>
      <TextInput
        placeholder="User"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button onPress={registerUser}>Register</Button>
    </PaperProvider>
  );
};

export default App;
