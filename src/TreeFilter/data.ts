import { convertToPinyin } from 'tiny-pinyin';
import baseData from './mock.json';

import { isEmptyArray } from './util';

const formatData = (data: any) => ({
  value: convertToPinyin(data.name),
  label: data.name,
  children: data.children,
});

const transformData = (data: any[]) => {
  return data.reduce((prev, next) => {
    if (!isEmptyArray(next.children)) {
      next.children = next.children.map((item: any) => formatData(item));
      return prev.concat(formatData(next));
    }

    return prev.concat(formatData(next));
  }, [] as any[]);
};

export default transformData(baseData);
