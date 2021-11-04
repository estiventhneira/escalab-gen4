import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#2d2e32'}}>
      <ScrollView>
        <Header />
        <Card
          url={
            'https://www.hibridosyelectricos.com/media/hibridos/images/2020/06/16/2020061614034799243.jpg'
          }
          modelo={'Modelo S'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempori
          busamet consectetur adipisicing elit. Temporibus
        </Card>
        <Card
          url={
            'https://www.hibridosyelectricos.com/media/hibridos/images/2019/09/25/2019092511104966010.jpg'
          }
          modelo={'Modelo 3'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempori
          busamet consectetur adipisicing elit. Temporibusr sit amet consectetur
          adipisicing elit. Tempori busamet consectetur adipisicing elit.
          Temporibus
        </Card>
        <Card
          url={
            'https://d501.epimg.net/cincodias/imagenes/2020/03/18/motor/1584520800_462879_1584520950_noticia_normal.jpg'
          }
          modelo={'Modelo Y'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempori
          busamet
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
