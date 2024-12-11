import React, { useEffect } from 'react';
import { MiniPlayer } from '@nuclear/ui';

import {
  usePlayerControlsProps,
  useSeekbarProps,
  useTrackInfoProps,
  useVolumeControlsProps
} from '../PlayerBarContainer/hooks';
import { useMiniPlayerSettings } from './hooks';
import { ipcRenderer } from 'electron';
import { IpcEvents } from '@nuclear/core';

let miniPlayerWidth=0;
let miniPlayerHeight=0;

const MiniPlayerContainer: React.FC = () => {
  const seekbarProps = useSeekbarProps();
  const playerControlsProps = usePlayerControlsProps();
  const trackInfoProps = useTrackInfoProps();
  const volumeControlsProps = useVolumeControlsProps();

  const {
    isMiniPlayerEnabled,
    toggleMiniPlayer
  } = useMiniPlayerSettings();

  useEffect(() => {
    if (isMiniPlayerEnabled) {
      if (miniPlayerWidth !== 0 || miniPlayerHeight !== 0){
        ipcRenderer.send(
          IpcEvents.WINDOW_MINIFY_SAVE, 
          [miniPlayerWidth, miniPlayerHeight]
        );
      } else {
        miniPlayerWidth = 1;
        miniPlayerHeight = 1;
        ipcRenderer.send(IpcEvents.WINDOW_MINIFY);
      }
    } else {
      if (miniPlayerWidth !== 0 || miniPlayerHeight !== 0){
        miniPlayerWidth = window.innerWidth;
        miniPlayerHeight = window.innerHeight;
      }
      ipcRenderer.send(IpcEvents.WINDOW_RESTORE);
    }
  }, [isMiniPlayerEnabled]);

  return isMiniPlayerEnabled
    ? (
      <MiniPlayer
        {...seekbarProps}
        {...playerControlsProps}
        {...trackInfoProps}
        {...volumeControlsProps}
        onDisableMiniPlayer={toggleMiniPlayer}
        style={{
          zIndex: isMiniPlayerEnabled && 1000
        }}
      />
    )
    : null;
};

export default MiniPlayerContainer;
