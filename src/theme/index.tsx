import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';

import palette from './pallete';
import GlobalStyles from './globalStyles';
import { TChildren } from '../types/props';

export default function ThemeProvider({ children }: TChildren) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
