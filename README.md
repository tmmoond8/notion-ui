<p align="center">
  <a href="https://notion-ui.tammolo.com/" rel="noopener" target="_blank"><img width="150" src="https://user-images.githubusercontent.com/11402468/85220166-61073880-b3e4-11ea-9d15-405566a19757.png" alt="Notion-ui logo"></a></p>
</p>

<h1 align="center">Notion-UI</h1>

<div align="center">

[Notion UI](https://notion-ui.tammolo.com/) is a design system for faster and simpler react development. Build your webapp, or start with [Notion UI](https://notion-ui.tammolo.com/).  


[![npm package](https://img.shields.io/npm/v/notion-ui)](https://www.npmjs.com/package/notion-ui)
[![npm downloads](https://img.shields.io/npm/dm/notion-ui)](https://www.npmjs.com/package/notion-ui)
[![netlify](https://img.shields.io/netlify/af1f8765-dcc0-4661-b76c-12ec7db35342)](https://www.npmjs.com/package/notion-ui)![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)


</div>

## Installation

Notion-UI is available as an [npm package](https://www.npmjs.com/package/notion-ui).

```sh
// with yarn
yarn add notion-ui
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'notion-ui';

function App() {
  return (
    <Button 
      onClick={() => console.log('click')} 
      buttonType="Primary">
      Primary
    </Button>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started as you can see in this storybook:


<p align="center">
  <a href="https://notion-ui.tammolo.com" rel="noopener" target="_blank"><img width="250" src="https://s3.amazonaws.com/media-p.slid.es/uploads/436673/images/3997457/1-9BC0VVlPQpTgdmt6z8fIuQ.png" alt="Storybook logo"></a></p>
</p>

## Examples

[Noticon](https://noticon.tammolo.com/)
: a icon storage for notion [repository](https://github.com/tmmoond8/noticon)

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
