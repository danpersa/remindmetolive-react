import { imageHost } from '../../isomorphicVars';

const buildSrc = (dirPath, prefix, number, sufix) => {
  return `${imageHost}${dirPath}${prefix}-${number}-${sufix}.jpg`;
};

export default buildSrc;
