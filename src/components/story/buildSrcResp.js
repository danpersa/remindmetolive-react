const buildSrcResp = (dirPath, size, prefix, number) => {
  const imageHost = process.env.NODE_ENV === 'production' ? "http://585911473.r.cdnsun.net" : "http://localhost:9090";
  return `${imageHost}/images/${size}/${dirPath}/${prefix}-${number}.jpg`;
};

export default buildSrcResp;
