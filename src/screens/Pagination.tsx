import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const Pagination = () => {
  const [equipo, setEquipo] = React.useState([]);
  const imagen = equipo?.results?.map(e => e.poster_path);
  console.log(imagen);
  React.useEffect(() => {
    //console.log('useEffect');
    datos();
  }, []);

  const datos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=30615a56d997ae776d691f810bf89430&language=es-ES&page=${count}`,
    );
    const users = await data.json();
    //console.log(users);
    setEquipo(users);
  };

  const [count, setCount] = useState(1);

  const onPressAnt = () => {
    setCount(prevCount => prevCount + 1);
    datos();
  };

  const onPressSig = () => {
    setCount(prevCount => prevCount - 1);
    datos();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text>Nosotros</Text>
          <View
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {equipo?.results?.map(item => (
              <Image
                style={{
                  width: 200,
                  height: 200,
                  margin: 10,
                }}
                key={item.poster_path}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
              />
            ))}
          </View>
        </View>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressAnt}>
          <Text style={styles.buttons}>Sigiente</Text>
        </TouchableOpacity>
        {count > 1 && (
          <TouchableOpacity style={styles.button} onPress={onPressSig}>
            <Text style={styles.buttons}>Anterior</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  button: {
    display: 'flex',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#100a1f',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#241744',
    borderRadius: 100,
    height: 50,
    width: 150,
    color: 'white',
    fontSize: 20,
    textJustify: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
