import React from 'react';

import { useBoolean } from 'ahooks';
import ExpandDropdown from '.';

const ExpandDropdownDemo = () => {
  const [visible, { setTrue, setFalse }] = useBoolean(false);

  return (
    <ExpandDropdown
      title="自定义"
      extra="右侧占位"
      visible={visible}
      onVisibleChange={v => {
        if (v) {
          setTrue();
        } else {
          setFalse();
        }
      }}
      triggerNode={<span>测试</span>}
    >
      <div style={{ margin: '0 auto' }}>测试</div>
    </ExpandDropdown>
  );
};

export default ExpandDropdownDemo;
