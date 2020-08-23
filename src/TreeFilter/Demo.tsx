import React from 'react';
import Editor from '@monaco-editor/react';

import data from './data';
import TreeFilter from '.';

const TreeFilterDemo = () => {
  return (
    <div style={{ height: 400, display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <Editor
          theme="dark"
          height="100%"
          width="100%"
          language="json"
          value={JSON.stringify(data, null, 2)}
        />
      </div>
      <div style={{ width: '50%' }}>
        <TreeFilter dataSource={data} />
      </div>
    </div>
  );
};

export default TreeFilterDemo;
