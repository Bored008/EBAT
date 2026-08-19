import React from 'react';
import { PhoneOutline } from './svg/icon-phone-outline';
import { TalkFilled } from './svg/icon-talk-filled';

export type IconName = 'phone-outline' | 'talk-filled';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case 'phone-outline':
      return <PhoneOutline {...props} />;
    case 'talk-filled':
      return <TalkFilled {...props} />;
    default:
      return null;
  }
}
