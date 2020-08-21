/** @jsx jsx */
import { jsx } from '@emotion/core';
import cx from 'classnames';
import * as icons from './icons';
import * as styles from './styles';
import Enum from '../../types/enum';

export { default as IconButton } from './IconButton';

type IconType = keyof typeof icons;

// type IconSize = 'Tiny' | 'Small' | 'Normal' | 'Big' | 'Huge' | 'Default';
export type IconSize = typeof Enum.IconSize[keyof typeof Enum.IconSize];

export const iconTypes: IconType[] = Object.keys(icons) as any[]; // for storybook

export type IconProps = {
  /** icon name (ex: hambug) */
  icon: IconType;
  /** icon color */
  color?: string;
  /** icon size ('Default' = 1em, 'Tiny' = 12px, 'Small' = '14px', 'Normal' = '16px', 'Big' = '18px', 'Huge' = '20px') */
  size?: IconSize;
  className?: string;
};

/**
 *
 * this component show as a svg format, you can styling by color and size.
 *
 */
export default function Icon(props: IconProps): JSX.Element {
  const { icon, color, className, size = 'Default' } = props;
  const customStyle = styles.customStyle({
    color,
  });
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={[styles.base, customStyle, styles.size[size]]}
      className={cx('Icon', `Size-${size}`, className)}
    />
  );
}
