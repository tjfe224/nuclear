/* eslint-disable no-console */
import {GridTrackTable} from '../..';
import React, { useState } from 'react';
import { GridTrackTableProps } from '../../lib/components/GridTrackTable';
import { Track } from '../../lib/types';
import { swap } from '../storyUtils';

export default {
  title: 'Components/GridTrackTable',
  component: GridTrackTable
};

const tracks = [
  {
    position: 1,
    thumbnail: 'https://i.imgur.com/4euOws2.jpg',
    artist: 'Test Artist',
    title: 'Test Title',
    album: 'Test Album',
    duration: '1:00'
  }, {
    position: 2,
    thumbnail: 'https://i.imgur.com/4euOws2.jpg',
    artist: 'Test Artist 2',
    name: 'Test Title 2',
    album: 'Test Album',
    duration: '1:00'
  } as Track,
    {
      position: 3,
      thumbnail: 'https://i.imgur.com/4euOws2.jpg',
      artist: { name: 'Test Artist 3' },
      name: 'Test Title 3',
      album: 'Test Album',
      duration: '1:00'
    } as Track
];


const TrackTableTemplate = <T extends Track>(args: Partial<GridTrackTableProps<T>>) => <GridTrackTable
  tracks={tracks} 
  positionHeader='Position'
  thumbnailHeader='Thumbnail'
  artistHeader='Artist'
  albumHeader='Album'
  titleHeader='Title'
  durationHeader='Length'
  {...args} 
/>;

export const Basic = () => (
  <div className='bg column'>
    <TrackTableTemplate />
  </div>
);

export const DragAndDropVirtualized = () => {
  const [trackRows, setTrackRows] = useState([...tracks]);

  return <div className='bg column'>
    <TrackTableTemplate
      tracks={Array.from({ length: 1000 }, (_, i) => ({
        ...trackRows[i % trackRows.length],
        position: i + 1
      }))}  
      onDragEnd={(result) => {
        const { source, destination } = result;
        console.log({ source, destination });
        setTrackRows(swap(trackRows, source.index, destination!.index));
      }}
    />
  </div>;
};
