import React from 'react';
import {
  Box,
  Link,
  Card,
  Avatar,
  Typography,
  CardContent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Icon from '@mdi/react';
import { mdiMessageReply, mdiShareVariantOutline, mdiHeart } from '@mdi/js';

import { generateRandomNumber } from '../../helpers/generateMockData';

const mockData = {
  id: crypto.randomUUID(),
  title: 'This is an Imperial News Network travel ban update.',
  content:
    'If you encounter evidence of a rakghoul plague outbreak, report it immediately to the nearest Imperial military station. Failure to comply is considered treason. This has been an Imperial News Network special bulletin.',
  createdAt: '3639 BBY',
  linkText: 'Learn more',
  person: 'Jonabroo Wiljus',
  linkUrl: 'https://starwars.fandom.com/wiki/Rakghoul_pandemic',
  replies: generateRandomNumber(),
  shares: generateRandomNumber(),
  likes: generateRandomNumber(),
};

const ChartCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ width: 60, height: 60, mr: 2 }}
            src='https://randomuser.me/api/portraits/men/28.jpg'
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Typography variant='body1' sx={{ fontWeight: 600 }}>
              {mockData.person}
            </Typography>
            <Link
              href={mockData.linkUrl}
              underline='always'
              variant='body1'
              color={theme.palette.text.primary}
              sx={{ fontWeight: 500, fontStyle: 'italic' }}
            >
              {mockData.linkText}
            </Link>
          </Box>
        </Box>
      </Box>
      <CardContent sx={{ p: 0, mb: 0 }}>
        <Link
          href={mockData.linkUrl}
          underline='none'
          target='_blank'
          rel='noopener'
        >
          <Typography
            variant='h5'
            sx={{
              mb: 0,
              fontWeight: 'bold',
              color: theme.palette.grey[800],
            }}
          >
            {mockData.title}
          </Typography>
        </Link>
        <Typography
          variant='subtitle1'
          color={theme.palette.grey[500]}
          sx={{ mb: 1 }}
        >
          {mockData.createdAt}
        </Typography>
        <Typography variant='body1' sx={{ mb: 3 }}>
          {mockData.content}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Link
              underline='none'
              href='#'
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  background: theme.palette.background.default,
                  width: 40,
                  height: 40,
                  p: 1,
                  mr: 1,
                }}
              >
                <Icon path={mdiMessageReply} size={1} color='#333'></Icon>
              </Box>
              <Typography
                variant='body1'
                color='text.primary'
                component='span'
                sx={{ fontWeight: '500' }}
              >
                {mockData.replies}K
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link
              underline='none'
              href='#'
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  background: theme.palette.background.default,
                  width: 40,
                  height: 40,
                  p: 1,
                  mr: 1,
                }}
              >
                <Icon
                  path={mdiShareVariantOutline}
                  size={1}
                  color='#333'
                ></Icon>
              </Box>
              <Typography
                variant='body1'
                color='text.primary'
                component='span'
                sx={{ fontWeight: '500' }}
              >
                {mockData.shares}K
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link
              underline='none'
              href='#'
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  background: theme.palette.background.default,
                  width: 40,
                  height: 40,
                  p: 1,
                  mr: 1,
                }}
              >
                <Icon path={mdiHeart} size={1} color='#333'></Icon>
              </Box>
              <Typography
                variant='body1'
                color='text.primary'
                component='span'
                sx={{ fontWeight: '500' }}
              >
                {mockData.likes}K
              </Typography>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
