/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useMemo, ReactNode, SFC } from 'react';
import cs from 'classnames';

import styles from './index.less';
import { isEmptyArray } from './util';

export interface TreeFilterProps<T extends object = any> {
  /** 容器 className */
  wrapperCls?: string;
  /** 容器 样式 */
  wrapperStyle?: React.CSSProperties;
  /** 数据来源 */
  dataSource: T[];
  /** 是否展示搜索 */
  showSearch?: boolean;
  /** 热门 */
  hotData?: T[];
  hotOptions?: Omit<LabelContentProps, 'children'>;
}

export interface LabelContentProps {
  children?: ReactNode;
  label?: ReactNode;
  /** 是否展示 冒号 */
  colon?: boolean;
  labelWidth?: number;
}

const LabelContent: SFC<LabelContentProps> = (props) => {
  const labelKls = useMemo(
    () =>
      cs(styles.label, {
        [styles.colon]: props.colon,
      }),
    [props.colon],
  );

  return (
    <div className={styles.label_content}>
      {props.label && (
        <div className={labelKls} style={{ width: props.labelWidth }}>
          {props.label}
        </div>
      )}
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

LabelContent.defaultProps = {
  colon: true,
};

const TreeFilter: FC<TreeFilterProps> = (props) => {
  console.log(props.dataSource, '>>>>>>>>>>>>>>>>');
  const wrapperKls = useMemo(() => cs(styles.wrapper, props.wrapperCls), [props.wrapperCls]);
  const showHot = useMemo(() => isEmptyArray(props.hotData), [props.hotData]);

  return (
    <div className={wrapperKls} style={props.wrapperStyle}>
      <LabelContent labelWidth={200} label="选中占位">
        内如占位
      </LabelContent>
      {showHot && (
        <LabelContent labelWidth={props.hotOptions?.labelWidth} label={props.hotOptions?.label}>
          {props.hotData?.map((item) => (
            <div>{item}</div>
          ))}
        </LabelContent>
      )}
    </div>
  );
};

TreeFilter.defaultProps = {
  showSearch: false,
  hotData: [1],
  hotOptions: {
    label: '热门',
    colon: true,
    labelWidth: 200,
  },
};

export default TreeFilter;
