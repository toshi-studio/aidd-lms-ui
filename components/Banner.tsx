import React from 'react';
import { Flex, Button, Avatar, Box } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { getAssetPath } from '../utils/assets';

interface BannerProps {
  isLoggedIn?: boolean;
  userName?: string;
  avatarUrl?: string;
}

const Banner: React.FC<BannerProps> = ({ 
  isLoggedIn = false, 
  userName = 'User',
  avatarUrl = getAssetPath('/assets/avatar.png') 
}) => {
  return (
    <header
      style={{
        backgroundColor: '#020244',
        backgroundImage: `url(${getAssetPath('/assets/aidd-banner.webp')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        color: 'white',
        height: '64px'
      }}
    >
      <Flex
        align="center"
        justify="between"
        px="4"
        py="3"
      >
      {/* Logo Section */}
      <Flex align="center" gap="4">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img 
            src={getAssetPath('/assets/logo.png')} 
            alt="AIDD LMS Logo" 
            style={{ height: '40px' }}
          />
        </Link>
      </Flex>

      {/* Navigation and Actions */}
      <Flex align="center" gap="4">
        {/* Search */}
        <Flex align="center" gap="2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '4px' }}>
          <MagnifyingGlassIcon />
          <input
            placeholder="Search courses..."
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              outline: 'none',
              width: '200px'
            }}
          />
        </Flex>

        {/* Auth Section */}
        {isLoggedIn ? (
          <Flex align="center" gap="3">
            <Avatar 
              src={avatarUrl} 
              fallback={userName.charAt(0)} 
              size="2"
              radius="full"
            />
            <span>{userName}</span>
          </Flex>
        ) : (
          <Flex gap="3" style={{ alignItems: 'center' }}>
            <Button asChild variant="ghost" style={{ color: 'white' }}>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button asChild variant="solid" color="pink">
              <Link href="/login">Register</Link>
            </Button>
          </Flex>
        )}
      </Flex>
      </Flex>
    </header>
  );
};

export default Banner;