/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Button from '../Button';
import { colors } from '../../styles';

interface HeadProps {
  title: string;
  handleClose: () => void;
  closeText?: string;
}

export default function ModalHead(props: HeadProps) {
  const { title, handleClose, closeText = 'Cancel' } = props;
  return (
    <Head>
      <Empty />
      <Title>{title}</Title>
      <CloseButton buttonType="PrimaryText" onClick={handleClose}>
        {closeText}
      </CloseButton>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.backgroundEmbed};
  height: 44px;
  box-shadow: rgba(${colors.grey08}) 0px 1px 0px;
  & > * {
    flex: 1;
  }
`;

const Empty = styled.div`
  height: 100%;
  width: 90px;
  max-width: 90px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const CloseButton = styled(Button)`
  &.Button {
    height: 90%;
    width: 76px;
    max-width: 76px;
    font-size: 16px;
    padding: 0 16px;
    box-sizing: border-box;
  }
`;
