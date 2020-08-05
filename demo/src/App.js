import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme, Content, Icon, Layout, IconButton, Switch, loadTheme } from 'notion-ui';

function App() {
  useTheme();
  loadTheme();
  useEffect(() => {
    console.log(window.parent.postMessage('abc'));
  }, [])
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
        />
        <IconButton
          icon="notification"
          size="Big"
          className="Notification"
        />
      </>
    }
    aside={
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>Dark Theme <Switch /></li>
      </ul>
    }
    >
      <div className="App">
        <h1>a ddd</h1>
        <AB>babbab</AB>
        <Icon icon="hambugMenu"/>
      </div>
    </Layout.App>
  );
}

export default App;

const AB = styled(Content.Text)`
  color: red;
`;

