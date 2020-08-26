/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import cx from 'classnames';
import { colors } from '../../styles';

interface ModalTabSelectProps {
  className?: string;
  tabs: string[];
  selected?: string;
  handleSelect: (selected: string) => void;
}

export default function ModalTabSelect(
  props: ModalTabSelectProps,
): JSX.Element {
  const { className, tabs, selected, handleSelect } = props;

  return (
    <Tabs className={cx('ModalTabSelect', className)}>
      {tabs.map(tab => (
        <TabItem selected={selected === tab} onClick={() => handleSelect(tab)}>
          {tab}
        </TabItem>
      ))}
    </Tabs>
  );
}

const Tabs = styled.nav`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 16px;
  background-color: ${colors.modalContentWrapper};
  box-shadow: ${colors.grey08} 0px -1px 0px, ${colors.grey08} 0px 1px 0px;
`;

const TabItem = styled.div<{ selected: boolean }>`
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 8px;
  &::after {
    position: absolute;
    left: 8px;
    bottom: 0;
    width: calc(100% - 16px);
    height: 2px;
    background-color: ${colors.grey};
  }
  ${p => p.selected && "&::after { content: '';}"}
  cursor: pointer;
`;
