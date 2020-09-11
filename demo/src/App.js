import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme, Content, Icon, Layout, IconButton, Switch, loadTheme, Aside, toggleTheme, Modal, Loader } from 'notion-ui';

function App() {
  useTheme();
  const theme = loadTheme();
  useEffect(() => {
    console.log(window.parent.postMessage('abc'));
  }, [])
  const modal = Modal.useModal();
  const handleOpenShareModal = () => {
    modal.open({
      title: 'share',
      contents: <div>share</div>
    });
  }
  const handleOpenNotificationModal = () => {
    modal.open({
      title: 'notification',
      contents: <div>notification</div>
    });
  }

  const handleCloseAside = Aside.useCloseCallback();

  return (
    <Layout.App
    leftMenus={<>Untiltled</>}
    rightMenus={
      <>
        <IconButton
          icon="moreHorizon"
          size="Big"
          className="MoreHorizon"
        />
        <IconButton
          icon="share"
          size="Big"
          className="Share"
          onClick={handleOpenShareModal}
        />
        <IconButton
          icon="notification"
          size="Big"
          className="Notification"
          onClick={handleOpenNotificationModal}
        />
      </>
    }
    aside={
      <>
        <Margin size={16}/>
        <Aside.Group title="public">
          <Aside.Menu title="vue" handleClick={handleOpenNotificationModal}/>
          <Aside.Menu title="react"/>
          <Aside.Menu title="angular" handleClick={handleCloseAside}/>
        </Aside.Group>
        <Aside.Group title="public">
          <Aside.Menu title="vue"/>
          <Aside.Menu title="react"/>
          <Aside.Menu title="angular"/>
        </Aside.Group>
        <AsideMainMenu title="main menu"/>
        <div>
          toggle Theme
          <Switch
            switchOn={theme === 'Dark'}
            onEvent={toggleTheme}
            offEvent={toggleTheme}
          />
        </div>
        <LoaddingWrapper>
          <Loader.ParentFull backgroundColor='grey'/>
        </LoaddingWrapper>
      </>
    }
    >
      <div className="App">
        <h1>a ddd</h1>
        <Content.Text as="P" color="red" fontSize={17}>addds</Content.Text>
        <AB>babbab</AB>
        <Icon icon="hambugMenu"/>
        {new Array(100).fill(null).map((_, index) => <p key={index}>test</p>)}
      </div>
    </Layout.App>
  );
}

export default App;

const AB = styled(Content.Text)`
  color: red;
`;

const Margin = (props) => {
  const { size } = props;
  return <div style={{
    display: 'inline-block',
    margin: `${size}px 0 0 0`,
    hegiht: '0',
    width: '100%',
  }}/>

}

const LoaddingWrapper = styled.div`
  width: 100%;
  height: 80px;
`;

const AsideMainMenu = styled(Aside.Menu)`
  height: 45px;
`;