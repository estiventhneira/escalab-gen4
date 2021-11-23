import React, {useState} from 'react';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import {data} from '../../assets/data';

const index = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: '#2d2e32'}}>
      <ScrollView>
        <Header />
        <SearchBar setText={setText} />
        <Text style={{fontSize: 25, color: 'white', paddingHorizontal: 25}}>
          Resultados de Busqueda: {text}
        </Text>
        {data.map(item => {
          return (
            <Card
              url={item.url}
              modelo={item.modelo}
              key={item.id}
              id={item.id}>
              {item.description}
            </Card>
          );
        })}
        <Button BgColor={'black'}>Go to Space X</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
