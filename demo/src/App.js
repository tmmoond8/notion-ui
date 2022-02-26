import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { 
  useTheme, 
  Content, 
  Icon, 
  Layout, 
  IconButton, 
  Switch, 
  loadTheme, 
  Aside, 
  toggleTheme, 
  Modal, 
  Loader,
  colors,
  ContextMenu,
  Reponsive,
} from 'notion-ui';

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
  const contextMenu = ContextMenu.useContextMenu();

  const handleOpenContextMenu = (event) => {
    contextMenu.open({
      event,
      contents: (
        <>
        <ContextMenu.Item 
          left={<Icon icon="copy" />}
          center="copy"
          right="copy"
        />
        <ContextMenu.Item 
          left={<Icon icon="smile" />}
          center="smile"
        />
      </>
      )
    })
  }
  

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
      <Main className="App">
        <ContextMenuArea onContextMenu={handleOpenContextMenu}>
          <h2 >Open Context Menu</h2>
        </ContextMenuArea>
        <Content.Text as="P" color="red" fontSize={17}>addds</Content.Text>
        <AB>babbab</AB>
        <Reponsive 
          mobileComponent={<Content.Text>Mobile</Content.Text>}
          desktopComponent={<Content.Text>Desktop</Content.Text>}
        />
        <Content.Text>{`<Content.Spacing size={20} />`}</Content.Text>
        <Content.Spacing size={20} />
        <Content.Text>{`<Content.SpaceBetween />`}</Content.Text>
        <Content.SpaceBetween width="200px" height="100px">
          <Content.Text>a</Content.Text>
          <Content.Text>b</Content.Text>
        </Content.SpaceBetween>
        <Icon icon="hambugMenu"/>
        {new Array(100).fill(null).map((_, index) => <Content.Text key={index}>test</Content.Text>)}
      </Main>
    </Layout.App>
  );
}

export default App;

const Main = styled.main`
  background: ${colors.background};
  padding: 20px;
`;

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

const ContextMenuArea = styled.div`
  width: 200px;
  height: 120px;
  padding: 16px;
  border-radius: 4px;
  border: 1px dashed ${colors.grey};
  color: ${colors.grey};
  text-align: center;
`;