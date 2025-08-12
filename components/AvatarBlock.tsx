import React from 'react';
import { Flex, Avatar, Text } from '@radix-ui/themes';
import { getAssetPath } from '../utils/assets';

interface AvatarBlockProps {
  name: string;
  avatarUrl?: string;
  size?: '1' | '2' | '3' | '4';
}

const AvatarBlock: React.FC<AvatarBlockProps> = ({ 
  name, 
  avatarUrl = getAssetPath('/assets/avatar.png'),
  size = '3'
}) => {
  return (
    <Flex align="center" gap="3">
      <Avatar 
        src={avatarUrl} 
        fallback={name.charAt(0).toUpperCase()} 
        size={size}
        radius="full"
      />
      <Text size={size} weight="medium">
        {name}
      </Text>
    </Flex>
  );
};

export default AvatarBlock;