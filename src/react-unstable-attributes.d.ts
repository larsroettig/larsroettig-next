/* eslint-disable react/no-typos */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// eslint-disable-next-line quotes
import 'react';

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    loading?: 'lazy' | 'eager' | 'auto';
  }
}
