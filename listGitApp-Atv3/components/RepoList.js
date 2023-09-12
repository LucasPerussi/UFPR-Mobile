import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const username = 'lucasperussi';

    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter os repositórios:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repositórios do GitHub</Text>
      <FlatList
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.repoItem}>
            <Text style={styles.repoName}>{item.name}</Text>
            <Text style={styles.repoDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  repoItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  repoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  repoDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default RepoList;
