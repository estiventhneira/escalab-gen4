import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';

const data = [
  {
    url: 'https://www.hibridosyelectricos.com/media/hibridos/images/2020/06/16/2020061614034799243.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempori busamet consectetur adipisicing elit. Temporibus',
    modelo: 'Modelo S',
    id: 1,
  },
  {
    url: 'https://www.hibridosyelectricos.com/media/hibridos/images/2020/06/16/2020061614034799243.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempori busamet consectetur adipisicing elit. Temporibusr sit amet consectetur adipisicing elit. Tempori busamet consectetur adipisicing elit. Temporibus',
    modelo: 'Modelo 3',
    id: 2,
  },
  {
    url: 'https://d501.epimg.net/cincodias/imagenes/2020/03/18/motor/1584520800_462879_1584520950_noticia_normal.jpg',
    modelo: 'Modelo Y',
    id: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempori busamet',
  },
]

const index = () => {
  const [text, setText] = useState('');
  const [teslaBuscar, setTeslaBuscar] = useState(data);

  useEffect(() => {
      if(!text) return setTeslaBuscar([]);

      if(isNaN(Number(text))){
        setTeslaBuscar(
          data.filter(item => item.modelo.toLocaleLowerCase().includes(text.toLocaleLowerCase()) )
        )
      }else{
        const carDetected = data.filter( item => item.id == text );
        setTeslaBuscar( carDetected ? carDetected : [] );
      }

  }, [text])

  const renderResultados = () => (
    <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>No hay resultados</Text>
  )

  return (
    <ScrollView>
      <Header />
      <SearchBar setText={setText} />
      <Text style={{fontSize: 25, color: 'white'}}>
        Resultados de Busqueda: {text}
      </Text>
      {
        teslaBuscar.length === 0 ? renderResultados() : teslaBuscar.map(item => (
          <Card item={item} key={item.id}>
            {item.description}
          </Card>))
      }
    </ScrollView>
  );
};

export default index;
