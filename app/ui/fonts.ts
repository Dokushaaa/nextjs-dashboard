import { Inter, Lusitana, Newsreader, Playfair } from 'next/font/google';
import { Noto_Sans, } from 'next/font/google'; 

export const newsreader = Newsreader({ subsets: ['latin'] });   
export const playfair = Playfair({ subsets: ['latin'] });
export const inter = Inter({ subsets: ['latin'] });
export const sans = Noto_Sans({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});