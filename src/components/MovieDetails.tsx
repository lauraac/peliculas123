import React from 'react';
import {View, Text, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastItem} from './CastItem';
import {color} from 'react-native-reanimated';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="red" size={20} />

          <Text style={{color: 'white', backgroundColor: 'red'}}>
            {' '}
            {movieFull.vote_average}{' '}
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 11,
              color: 'white',
              backgroundColor: 'red',
            }}>
            -{movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>
        <Text style={{fontSize: 14, color: 'black'}}>{movieFull.overview}</Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18, color: 'black'}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};
