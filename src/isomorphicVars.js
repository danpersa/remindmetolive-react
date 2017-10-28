const devVars = {
  imageHost: "http://localhost:9090",
};

export default function computeIsomorphicVars() {
  if(typeof(window) == 'undefined') {
    // Running on server.
    if (process.env.NODE_ENV === 'production') {
      return {
        imageHost: process.env.IMAGE_HOST,
      };
    } else {
      return devVars;
    }
  } else {
    if (process.env.NODE_ENV === 'production') {
      return window.isomorphicVars;
    } else {
      return devVars;
    }
  }
}

export const isomorphicVars = computeIsomorphicVars();
export const imageHost = isomorphicVars.imageHost;
