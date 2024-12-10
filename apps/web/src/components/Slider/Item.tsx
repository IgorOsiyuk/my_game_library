'use client';

import XBoxIcon from '@/icons/xbox.svg';
import { Button, Card, CardFooter, CardHeader, Chip, Image } from '@nextui-org/react';
export default function Item() {
  return (
    <Card className="h-60">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start gap-2">
        <div className="flex flex-row gap-2 w-3 h-3 fill-default-50">
          <XBoxIcon />
        </div>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-3.jpeg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div className="flex flex-row gap-2">
          <Chip color="default" size="sm">
            Default
          </Chip>
          <Chip color="default" size="sm">
            Default
          </Chip>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Info
        </Button>
      </CardFooter>
    </Card>
  );
}
