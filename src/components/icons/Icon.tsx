import React from 'react';
import { PhoneOutline } from './svg/icon-phone-outline';
import { TalkFilled } from './svg/icon-talk-filled';
import { TopRightArrow } from './svg/icon-top-right-arrow';
import { Minus } from './svg/icon-minus';
import { PlusFilled } from './svg/icon-plus-filled';

export type IconName = 
  | 'phone-outline'
  | 'talk-filled'
  | 'top-right-arrow'
  | 'minus'
  | 'plus-filled'
  | 'right-arrow-head';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case 'phone-outline':
      return <PhoneOutline {...props} />;
    case 'talk-filled':
      return <TalkFilled {...props} />;
    case 'top-right-arrow':
      return <TopRightArrow {...props} />;
    case 'minus':
      return <Minus {...props} />;
    case 'plus-filled':
      return <PlusFilled {...props} />;
    case 'right-arrow-head':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      );
    default:
      return null;
  }
}
