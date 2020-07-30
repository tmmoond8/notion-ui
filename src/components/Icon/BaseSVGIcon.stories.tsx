import React from 'react';
import styled from '@emotion/styled';
import Icon, { IconButton } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Icon',
  component: Icon,
};

export const size = () => (
  <div>
    <p>tiny 12px</p>
    <Icon icon="hambugMenu" size="Tiny" className="HambugIcon" />
    <p>small 14px</p>
    <Icon icon="hambugMenu" size="Small" className="HambugIcon" />
    <p>default 1em</p>
    <Icon icon="hambugMenu" className="HambugIcon" />
    <p>normal 16px</p>
    <Icon icon="hambugMenu" size="Normal" className="HambugIcon" />
    <p>big 18px</p>
    <Icon icon="hambugMenu" size="Big" className="HambugIcon" />
  </div>
);

export const color = () => (
  <div>
    <p>default responsive grey</p>
    <Icon icon="hambugMenu" size="Big" className="HambugIcon" />
    <p>red color</p>
    <Icon icon="hambugMenu" size="Big" color="red" className="HambugIcon" />
  </div>
);

const IconPack = styled.div`
  display: inline-flex;
  padding: 16px;
  width: 120px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const iconTypes = () => (
  <div style={{ marginTop: '24px' }}>
    <IconPack>
      <Icon icon="hambugMenu" size="Huge" className="hambugMenuIcon" />
      <p>hambugMenu</p>
    </IconPack>
    <IconPack>
      <Icon icon="arrowLeft" size="Huge" className="arrowLeftIcon" />
      <p>arrowLeft</p>
    </IconPack>
    <IconPack>
      <Icon icon="add" size="Huge" className="addIcon" />
      <p>add</p>
    </IconPack>
    <IconPack>
      <Icon icon="arrowRight" size="Huge" className="arrowRightIcon" />
      <p>arrowRight</p>
    </IconPack>
    <IconPack>
      <Icon icon="arrowToEnd" size="Huge" className="arrowToEndIcon" />
      <p>arrowToEnd</p>
    </IconPack>
    <IconPack>
      <Icon icon="box" size="Huge" className="boxIcon" />
      <p>box</p>
    </IconPack>
    <IconPack>
      <Icon icon="check" size="Huge" className="checkIcon" />
      <p>check</p>
    </IconPack>
    <IconPack>
      <Icon icon="checkList" size="Huge" className="checkListIcon" />
      <p>checkList</p>
    </IconPack>
    <IconPack>
      <Icon icon="comment" size="Huge" className="commentIcon" />
      <p>comment</p>
    </IconPack>
    <IconPack>
      <Icon icon="comment2" size="Huge" className="comment2Icon" />
      <p>comment2</p>
    </IconPack>
    <IconPack>
      <Icon icon="copy" size="Huge" className="copyIcon" />
      <p>copy</p>
    </IconPack>
    <IconPack>
      <Icon icon="dropDown" size="Huge" className="dropDownIcon" />
      <p>dropDown</p>
    </IconPack>
    <IconPack>
      <Icon icon="expand" size="Huge" className="expandIcon" />
      <p>expand</p>
    </IconPack>
    <IconPack>
      <Icon icon="expandDown" size="Huge" className="expandDownIcon" />
      <p>expandDown</p>
    </IconPack>
    <IconPack>
      <Icon icon="filter" size="Huge" className="filterIcon" />
      <p>filter</p>
    </IconPack>
    <IconPack>
      <Icon icon="halfMoon" size="Huge" className="halfMoonIcon" />
      <p>halfMoon</p>
    </IconPack>
    <IconPack>
      <Icon icon="help" size="Huge" className="helpIcon" />
      <p>help</p>
    </IconPack>
    <IconPack>
      <Icon icon="keyboard" size="Huge" className="keyboardIcon" />
      <p>keyboard</p>
    </IconPack>
    <IconPack>
      <Icon icon="link" size="Huge" className="linkIcon" />
      <p>link</p>
    </IconPack>
    <IconPack>
      <Icon icon="moreHorizon" size="Huge" className="moreHorizonIcon" />
      <p>moreHorizon</p>
    </IconPack>
    <IconPack>
      <Icon icon="notification" size="Huge" className="notificationIcon" />
      <p>notification</p>
    </IconPack>
    <IconPack>
      <Icon icon="openInFull" size="Huge" className="openInFullIcon" />
      <p>openInFull</p>
    </IconPack>
    <IconPack>
      <Icon icon="people" size="Huge" className="peopleIcon" />
      <p>people</p>
    </IconPack>
    <IconPack>
      <Icon icon="picture" size="Huge" className="pictureIcon" />
      <p>picture</p>
    </IconPack>
    <IconPack>
      <Icon icon="picture2" size="Huge" className="picture2Icon" />
      <p>picture2</p>
    </IconPack>
    <IconPack>
      <Icon icon="publish" size="Huge" className="publishIcon" />
      <p>publish</p>
    </IconPack>
    <IconPack>
      <Icon icon="redo" size="Huge" className="redoIcon" />
      <p>redo</p>
    </IconPack>
    <IconPack>
      <Icon icon="search" size="Huge" className="searchIcon" />
      <p>search</p>
    </IconPack>
    <IconPack>
      <Icon icon="setting" size="Huge" className="settingIcon" />
      <p>setting</p>
    </IconPack>
    <IconPack>
      <Icon icon="shapes" size="Huge" className="shapesIcon" />
      <p>shapes</p>
    </IconPack>
    <IconPack>
      <Icon icon="smile" size="Huge" className="smileIcon" />
      <p>smile</p>
    </IconPack>
    <IconPack>
      <Icon icon="sort" size="Huge" className="sortIcon" />
      <p>sort</p>
    </IconPack>
    <IconPack>
      <Icon icon="trash" size="Huge" className="trashIcon" />
      <p>trash</p>
    </IconPack>
    <IconPack>
      <Icon icon="trash2" size="Huge" className="trash2Icon" />
      <p>trash2</p>
    </IconPack>
    <IconPack>
      <Icon icon="triangle" size="Huge" className="triangleIcon" />
      <p>triangle</p>
    </IconPack>
    <IconPack>
      <Icon icon="undo" size="Huge" className="undoIcon" />
      <p>undo</p>
    </IconPack>
  </div>
);

export const iconButton = (): JSX.Element => (
  <div>
    <p>
      <IconButton
        icon="smile"
        size="Big"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      기본 버튼
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Big"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
        disabled
      />
      비활성 버튼
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Tiny"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Tiny
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Small"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Small
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Normal"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Normal
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Big"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Big
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Huge"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Huge
    </p>
    <p>
      <IconButton
        icon="smile"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Default
    </p>
  </div>
);
