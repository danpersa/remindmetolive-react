import isomorphicVars from '../../isomorphicVars';

const imageHost = isomorphicVars().imageHost;

const buildSrc = (dirPath, prefix, number, sufix) => {
  return `${imageHost}${dirPath}${prefix}-${number}-${sufix}.jpg`;
};

export default buildSrc;
