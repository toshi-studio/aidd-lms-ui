import React from 'react';
import { Box, Progress } from '@radix-ui/themes';

interface CompletionMeterProps {
  percentage: number;
  size?: 'small' | 'medium' | 'large';
  showRadial?: boolean;
}

const CompletionMeter: React.FC<CompletionMeterProps> = ({ 
  percentage, 
  size = 'medium',
  showRadial = false 
}) => {
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.min(100, Math.max(0, percentage));

  if (showRadial) {
    // Radial progress implementation
    const sizePx = size === 'small' ? 60 : size === 'medium' ? 80 : 100;
    const strokeWidth = size === 'small' ? 4 : size === 'medium' ? 6 : 8;
    const radius = (sizePx - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (normalizedPercentage / 100) * circumference;

    return (
      <Box style={{ position: 'relative', width: sizePx, height: sizePx }}>
        <svg width={sizePx} height={sizePx} style={{ transform: 'rotate(-90deg)' }}>
          {/* Background circle */}
          <circle
            cx={sizePx / 2}
            cy={sizePx / 2}
            r={radius}
            stroke="#e5e5e5"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={sizePx / 2}
            cy={sizePx / 2}
            r={radius}
            stroke={normalizedPercentage >= 80 ? '#65CA98' : normalizedPercentage >= 50 ? '#FFA500' : '#4F4FEB'}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: size === 'small' ? '14px' : size === 'medium' ? '18px' : '24px',
            fontWeight: 'bold',
            color: '#020244'
          }}
        >
          {normalizedPercentage}%
        </Box>
      </Box>
    );
  }

  // Linear progress bar
  return (
    <Progress 
      value={normalizedPercentage} 
      size={size === 'small' ? '1' : size === 'medium' ? '2' : '3'}
      color={normalizedPercentage >= 80 ? 'green' : normalizedPercentage >= 50 ? 'orange' : 'violet'}
      style={{ width: '100%' }}
    />
  );
};

export default CompletionMeter;