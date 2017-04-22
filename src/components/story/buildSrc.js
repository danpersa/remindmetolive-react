const buildSrc = (dirPath, prefix, number, sufix) => {
  return `${dirPath}${prefix}-${number}-${sufix}.jpg`;
};

export default buildSrc;
