import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RepoList from './components/RepoList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Repos">
        <Stack.Screen name="Repos" component={RepoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
