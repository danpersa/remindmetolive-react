const buildSrcResp = (dirPath, size, prefix, number) => {
  return `/images/${size}/${dirPath}/${prefix}-${number}.jpg`;
};

export default buildSrcResp;
