import React from 'react';
import { Badge } from '@radix-ui/themes';

interface StatusPillProps {
  status: 'published' | 'draft' | 'in-progress' | 'completed';
}

const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  const getColorAndLabel = () => {
    switch (status) {
      case 'published':
        return { color: 'green' as const, label: 'Published' };
      case 'completed':
        return { color: 'green' as const, label: 'Completed' };
      case 'in-progress':
        return { color: 'orange' as const, label: 'In Progress' };
      case 'draft':
      default:
        return { color: 'gray' as const, label: 'Draft' };
    }
  };

  const { color, label } = getColorAndLabel();

  return (
    <Badge color={color} variant="soft" radius="full">
      {label}
    </Badge>
  );
};

export default StatusPill;