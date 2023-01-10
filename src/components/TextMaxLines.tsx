import React, { forwardRef, ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';

type Props = TypographyProps & {
  line?: number;
  children: ReactNode;
};

const TextMaxLine = forwardRef<HTMLAnchorElement, Props>(({ line = 2, children, sx, ...other }, ref) => {
  const style = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
    ...sx,
  } as const;

  return (
    <Typography ref={ref} sx={{ ...style }} {...other}>
      {children}
    </Typography>
  );
});

export default TextMaxLine;
