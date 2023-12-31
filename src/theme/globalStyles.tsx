import React from 'react';
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: '0px 5px',
          width: '100%',
          height: '100%',
          backgroundColor: '#F5F5F5 !improtant',
          overflowX: 'hidden',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        th: {
          width: '20%',
        },
        // remove pie selection border
        'path:focus': {
          outline: 'none !important',
        },
        'g:focus': {
          outline: 'none !important',
        },
      }}
    />
  );

  return inputGlobalStyles;
}
