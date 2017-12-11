import { imageHost } from '../../isomorphicVars';

const buildSrcResp = (dirPath, size, prefix, number) => {
  return `${imageHost}/images/${size}/${dirPath}/${prefix}-${number}.jpg`;
};

export default buildSrcResp;
