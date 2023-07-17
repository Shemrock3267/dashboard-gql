import React, { useState, useEffect, useRef } from 'react';
import { Stack, LinearProgress, Box } from '@mui/material';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [negProgress, setNegProgress] = useState(100);
  const [negBuffer, setNegBuffer] = useState(10);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const progressRef = useRef(() => {});
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const negProgressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
    negProgressRef.current = () => {
      if (progress === 0) {
        setNegProgress(100);
        setNegBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setNegProgress(progress - diff);
        setNegBuffer(progress - diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);
    const negTimer = setInterval(() => {
      negProgressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(negTimer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack
        sx={{
          width: '100%',
        }}
        spacing={4}
      >
        <LinearProgress
          color='primary'
          variant='buffer'
          value={progress}
          valueBuffer={buffer}
        />
        <LinearProgress
          color='warning'
          variant='determinate'
          value={progress}
        />
        <LinearProgress
          color='error'
          variant='buffer'
          value={negProgress}
          valueBuffer={negBuffer}
        />
      </Stack>
    </Box>
  );
};

export default Loader;
