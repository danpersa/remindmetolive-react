import isomorphicVars from '../../isomorphicVars';

const buildSrcResp = (dirPath, size, prefix, number) => {
  const imageHost = isomorphicVars().imageHost;
  return `${imageHost}/images/${size}/${dirPath}/${prefix}-${number}.jpg`;
};

export default buildSrcResp;
