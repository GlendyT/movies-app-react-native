/* eslint-disable prettier/prettier */
//import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetals} from '../../components/movie/MovieDetals';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  //const {movieId} = useRoute().params;

  const {isLoading, movie, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      {/*Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
      {/*Detalles */}
      <MovieDetals movie={movie!} cast={cast} />
    </ScrollView>
  );
};
