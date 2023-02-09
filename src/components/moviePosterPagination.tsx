// import React from 'react';
// import {View, Text, FlatList} from 'react-native';
// import {Movie} from '../interfaces/movieInterface';
// import {MoviePoster} from './MoviePoster';

// interface Props {
//   title?: string;
//   movies: Movie[];
// }

// export const HorizontalSlider = ({title, movies}: Props) => {
//   return (
//     <View
//       style={{
//         height: title ? 200 : 160,
//     //   }}>
//       {title && (
//         <Text
//           style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             marginLeft: 15,
//             color: 'white',
//           }}>
//           {title}
//         </Text>
//       )}

//       <FlatList
//         data={movies}
//         renderItem={({item}: any) => (
//           <MoviePoster Movie={item} width={100} height={150} />
//         )}
//         keyExtractor={item => item.id.toString()}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };
