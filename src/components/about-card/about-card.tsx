import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AboutCardProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

export function AboutCard({ title, content, className }: AboutCardProps) {
  return (
    <Card
      className={cn('flex h-full min-h-[350px] w-full flex-col p-0', className)}
    >
      <CardHeader className='rounded-t-xl bg-green-50 p-1'>
        <CardTitle className='text-center text-lg'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-1 items-start pb-4  text-base'>
        {content}
      </CardContent>
    </Card>
  );
}
