/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} = useMovies();

  if (isLoading) {
    return <FullScreenLoader/>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Propulares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Mejor Calificada" />

        {/* Proximamente */}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
