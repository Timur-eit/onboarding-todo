import { Label, Text } from '@wildberries/ui-kit';
import type { FontColorType } from '@wildberries/ui-kit/lib/text/types';
import { memo } from 'react';

type TTextColor = FontColorType;

type TProps = {
  label: string;
  text: string;
  textColor: TTextColor;
  fieldClassName?: string;
  textClassName?: string;
};

export const ItemField = memo(
  ({ label, text, textColor, fieldClassName, textClassName }: TProps) => (
    <div className={fieldClassName}>
      <Label htmlFor="id3" isNotHover>
        {label}
      </Label>
      <div className={textClassName}>
        <Text color={textColor} size="h3" text={text} />
      </div>
    </div>
  ),
);
