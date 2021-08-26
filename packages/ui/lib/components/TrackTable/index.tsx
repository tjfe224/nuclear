import React, { useMemo } from 'react';
import cx from 'classnames';
import { useTable, Column, useRowSelect, useGlobalFilter, useAsyncDebounce } from 'react-table';
import _ from 'lodash';
import { DragDropContext, Droppable, Draggable, DragDropContextProps } from 'react-beautiful-dnd';
import {Icon} from 'semantic-ui-react';
import DeleteCell from './Cells/DeleteCell';
import FavoriteCell from './Cells/FavoriteCell';
import PositionCell from './Cells/PositionCell';
import SelectionCell from './Cells/SelectionCell';
import ThumbnailCell from './Cells/ThumbnailCell';
import TitleCell from './Cells/TitleCell';
import TrackTableCell from './Cells/TrackTableCell';
import SelectionHeader from './Headers/SelectionHeader';
import { getTrackThumbnail } from '../TrackRow';
import { TrackTableColumn, TrackTableExtraProps, TrackTableHeaders, TrackTableSettings, TrackTableStrings } from './types';
import styles from './styles.scss';
import SearchBoxStyle from '../SearchBox/styles.scss';
import common from '../../common.scss';
import artPlaceholder from '../../../resources/media/art_placeholder.png';
import { Track } from '../../types';

export type TrackTableProps = TrackTableExtraProps &
  TrackTableHeaders &
  TrackTableSettings & {
    tracks: Track[];
    isTrackFavorite: (track: Track) => boolean;
    onDragEnd?: DragDropContextProps['onDragEnd'];

    strings: TrackTableStrings;
  }

function GlobalFilter({
  globalFilter,
  setGlobalFilter
}) {

  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className={cx(common.nuclear, SearchBoxStyle.search_box_container)}>
      <div
        className={cx(
          common.nuclear,
          SearchBoxStyle.search_box
        )}>
        <Icon name='search' disabled={false} />
        
        <input
          value={value||''}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder='Search...'
        />
      </div>
    </div>
  );
}

const TrackTable: React.FC<TrackTableProps> = ({
  tracks,
  isTrackFavorite,
  onDragEnd,

  positionHeader,
  thumbnailHeader,
  artistHeader,
  titleHeader,
  albumHeader,
  durationHeader,

  displayDeleteButton = true,
  displayPosition = true,
  displayThumbnail = true,
  displayFavorite = true,
  displayArtist = true,
  displayAlbum = true,
  displayDuration = true,
  selectable = true,
 
  ...extraProps
}) => {
  const columns = useMemo(() => [
   
    displayDeleteButton && {
      id: TrackTableColumn.Delete,
      Cell: DeleteCell
    },
    displayPosition && {
      id: TrackTableColumn.Position,
      Header: () => <span className={styles.center_aligned}>{positionHeader}</span>,
      accessor: 'position',
      Cell: PositionCell
    },
    displayThumbnail && {
      id: TrackTableColumn.Thumbnail,
      Header: () => <span className={styles.center_aligned}>{thumbnailHeader}</span>,
      accessor: (track) => getTrackThumbnail(track) || artPlaceholder,
      Cell: ThumbnailCell
    },
    displayFavorite && {
      id: TrackTableColumn.Favorite,
      accessor: isTrackFavorite,
      Cell: FavoriteCell
    },
    {
      id: TrackTableColumn.Title,
      Header: titleHeader,
      accessor: (track) => track.title ?? track.name,
      Cell: TitleCell
    },
    displayArtist && {
      id: TrackTableColumn.Artist,
      Header: artistHeader,
      accessor: (track) => _.isString(track.artist)
        ? track.artist
        : track.artist.name,
      Cell: TrackTableCell
    },
    displayAlbum && {
      id: TrackTableColumn.Album,
      Header: albumHeader,
      accessor: 'album',
      Cell: TrackTableCell
    },
    displayDuration && {
      id: TrackTableColumn.Duration,
      Header: durationHeader,
      accessor: 'duration',
      Cell: TrackTableCell
    },
    selectable && {
      id: TrackTableColumn.Selection,
      Header: SelectionHeader,
      Cell: SelectionCell
    }
  ].filter(Boolean) as Column<Track>[], [displayDeleteButton, displayPosition, displayThumbnail, displayFavorite, isTrackFavorite, titleHeader, displayArtist, artistHeader, displayAlbum, albumHeader, displayDuration, durationHeader, selectable, positionHeader, thumbnailHeader]);

  
  const data = useMemo(() => tracks, [tracks]);
  
  const {
    getTableProps,
    getTableBodyProps,
    state,
    rows,
    visibleColumns,
    prepareRow,
    setGlobalFilter    
  }  = useTable<Track>({ columns, data }, useRowSelect, useGlobalFilter);


  return (  
    <table {...getTableProps()} className={styles.track_table}>
      <thead>
        <tr>
          <th colSpan={visibleColumns.length}>
            <GlobalFilter
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter} />
          </th>
        </tr>
      </thead>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='track_table'>
          {(provided) => (
          
            <tbody
              ref={provided.innerRef}
              {...getTableBodyProps()}
              {...provided.droppableProps}
            >
              {rows.map(row => {
                prepareRow(row);
                return (
                  <Draggable
                    key={`${row.values[TrackTableColumn.Title]} ${row.index}`}
                    draggableId={`${row.values[TrackTableColumn.Title]} ${row.index}`}
                    index={row.index}
                    isDragDisabled={!onDragEnd}
                  >
                    {(provided, snapshot) => (
                      <tr
                        ref={provided.innerRef}
                        className={cx({ [styles.is_dragging]: snapshot.isDragging })}
                        {...row.getRowProps()}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {row.cells.map((cell, i) => (cell.render('Cell', { ...extraProps, key: i })))}
                      </tr>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  );
};

export default TrackTable;
