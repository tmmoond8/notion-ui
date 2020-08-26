/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import cx from 'classnames';
import { colors } from '../../styles';

interface ModalSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ModalSection(props: ModalSectionProps): JSX.Element {
  const { children, className } = props;
  return (
    <Section className={cx('ModalSection', className)}>{children}</Section>
  );
}

const Section = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.modalContentWrapper};
  box-shadow: ${colors.grey08} 0px -1px 0px, ${colors.grey08} 0px 1px 0px;
  margin-top: 28px;
  padding: 14px;
`;
