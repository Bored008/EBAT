import React from 'react';
import { PhoneOutline } from './svg/icon-phone-outline';
import { TalkFilled } from './svg/icon-talk-filled';
import { TopRightArrow } from './svg/icon-top-right-arrow';

export type IconName = 
  | 'phone-outline'
  | 'talk-filled'
  | 'top-right-arrow';

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
    default:
      return null;
  }
}
