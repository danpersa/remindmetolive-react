import isomorphicVars from '../../isomorphicVars';

const imageHost = isomorphicVars().imageHost;

const buildSrcResp = (dirPath, size, prefix, number) => {
  return `${imageHost}/images/${size}/${dirPath}/${prefix}-${number}.jpg`;
};

export default buildSrcResp;
