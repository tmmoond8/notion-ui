/** @jsx jsx */
import { jsx } from '@emotion/core';
import cx from 'classnames';
import * as icons from './icons';
import * as styles from './styles';

export { default as IconButton } from './IconButton';

type IconType = keyof typeof icons;
type IconSize = 'tiny' | 'small' | 'normal' | 'big' | 'huge';
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // for storybook

export type IconProps = {
  /** icon name (ex: hambug) */
  icon: IconType;
  /** icon color */
  color?: string;
  /** icon size ('tiny' = 12px, 'small' = '14px', 'normal' = '16px', 'big' = '18px') */
  size?: IconSize;
  className?: string;
};

const sizeMap = {
  tiny: '12px',
  small: '14px',
  normal: '16px',
  big: '18px',
  huge: '20px',
  default: '1em',
};

/**
 *
 * this component show as a svg format, you can styling by color and size.
 *
 */
export default function Icon(props: IconProps): JSX.Element {
  const { icon, color, size = 'default', className } = props;
  const customStyle = styles.customStyle({
    color,
    size: sizeMap[size],
  });
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={[styles.base, customStyle]}
      className={cx('Icon', className)}
    />
  );
}
