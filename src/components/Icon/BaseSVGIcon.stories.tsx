import React from 'react';
import styled from '@emotion/styled';
import Icon from '.';

export default {
  title: 'Icon',
  component: Icon,
};

export const size = () => (
  <div>
    <p>tiny 12px</p>
    <Icon icon="hambugMenu" size="tiny" className="HambugIcon" />
    <p>small 14px</p>
    <Icon icon="hambugMenu" size="small" className="HambugIcon" />
    <p>default 1em</p>
    <Icon icon="hambugMenu" className="HambugIcon" />
    <p>normal 16px</p>
    <Icon icon="hambugMenu" size="normal" className="HambugIcon" />
    <p>big 18px</p>
    <Icon icon="hambugMenu" size="big" className="HambugIcon" />
  </div>
);

export const color = () => (
  <div>
    <p>default responsive grey</p>
    <Icon icon="hambugMenu" size="big" className="HambugIconr" />
    <p>red color</p>
    <Icon icon="hambugMenu" size="big" color="red" className="HambugIcon" />
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
      <Icon icon="hambugMenu" size="huge" className="hambugMenuIcon" />
      <p>hambugMenu</p>
    </IconPack>
    <IconPack>
      <Icon icon="arrowLeft" size="huge" className="arrowLeftIcon" />
      <p>arrowLeft</p>
    </IconPack>
    <IconPack>
      <Icon icon="add" size="huge" className="addIcon" />
      <p>add</p>
    </IconPack>
    <IconPack>
      <Icon icon="arrowRight" size="huge" className="arrowRightIcon" />
      <p>arrowRight</p>
    </IconPack>
    <IconPack>
      <Icon icon="arrowToEnd" size="huge" className="arrowToEndIcon" />
      <p>arrowToEnd</p>
    </IconPack>
    <IconPack>
      <Icon icon="box" size="huge" className="boxIcon" />
      <p>box</p>
    </IconPack>
    <IconPack>
      <Icon icon="check" size="huge" className="checkIcon" />
      <p>check</p>
    </IconPack>
    <IconPack>
      <Icon icon="checkList" size="huge" className="checkListIcon" />
      <p>checkList</p>
    </IconPack>
    <IconPack>
      <Icon icon="comment" size="huge" className="commentIcon" />
      <p>comment</p>
    </IconPack>
    <IconPack>
      <Icon icon="comment2" size="huge" className="comment2Icon" />
      <p>comment2</p>
    </IconPack>
    <IconPack>
      <Icon icon="copy" size="huge" className="copyIcon" />
      <p>copy</p>
    </IconPack>
    <IconPack>
      <Icon icon="dropDown" size="huge" className="dropDownIcon" />
      <p>dropDown</p>
    </IconPack>
    <IconPack>
      <Icon icon="expand" size="huge" className="expandIcon" />
      <p>expand</p>
    </IconPack>
    <IconPack>
      <Icon icon="expandDown" size="huge" className="expandDownIcon" />
      <p>expandDown</p>
    </IconPack>
    <IconPack>
      <Icon icon="filter" size="huge" className="filterIcon" />
      <p>filter</p>
    </IconPack>
    <IconPack>
      <Icon icon="halfMoon" size="huge" className="halfMoonIcon" />
      <p>halfMoon</p>
    </IconPack>
    <IconPack>
      <Icon icon="help" size="huge" className="helpIcon" />
      <p>help</p>
    </IconPack>
    <IconPack>
      <Icon icon="keyboard" size="huge" className="keyboardIcon" />
      <p>keyboard</p>
    </IconPack>
    <IconPack>
      <Icon icon="link" size="huge" className="linkIcon" />
      <p>link</p>
    </IconPack>
    <IconPack>
      <Icon icon="moreHorizon" size="huge" className="moreHorizonIcon" />
      <p>moreHorizon</p>
    </IconPack>
    <IconPack>
      <Icon icon="notification" size="huge" className="notificationIcon" />
      <p>notification</p>
    </IconPack>
    <IconPack>
      <Icon icon="openInFull" size="huge" className="openInFullIcon" />
      <p>openInFull</p>
    </IconPack>
    <IconPack>
      <Icon icon="people" size="huge" className="peopleIcon" />
      <p>people</p>
    </IconPack>
    <IconPack>
      <Icon icon="picture" size="huge" className="pictureIcon" />
      <p>picture</p>
    </IconPack>
    <IconPack>
      <Icon icon="picture2" size="huge" className="picture2Icon" />
      <p>picture2</p>
    </IconPack>
    <IconPack>
      <Icon icon="publish" size="huge" className="publishIcon" />
      <p>publish</p>
    </IconPack>
    <IconPack>
      <Icon icon="redo" size="huge" className="redoIcon" />
      <p>redo</p>
    </IconPack>
    <IconPack>
      <Icon icon="search" size="huge" className="searchIcon" />
      <p>search</p>
    </IconPack>
    <IconPack>
      <Icon icon="setting" size="huge" className="settingIcon" />
      <p>setting</p>
    </IconPack>
    <IconPack>
      <Icon icon="shapes" size="huge" className="shapesIcon" />
      <p>shapes</p>
    </IconPack>
    <IconPack>
      <Icon icon="smile" size="huge" className="smileIcon" />
      <p>smile</p>
    </IconPack>
    <IconPack>
      <Icon icon="sort" size="huge" className="sortIcon" />
      <p>sort</p>
    </IconPack>
    <IconPack>
      <Icon icon="trash" size="huge" className="trashIcon" />
      <p>trash</p>
    </IconPack>
    <IconPack>
      <Icon icon="trash2" size="huge" className="trash2Icon" />
      <p>trash2</p>
    </IconPack>
    <IconPack>
      <Icon icon="triangle" size="huge" className="triangleIcon" />
      <p>triangle</p>
    </IconPack>
    <IconPack>
      <Icon icon="undo" size="huge" className="undoIcon" />
      <p>undo</p>
    </IconPack>
  </div>
);
