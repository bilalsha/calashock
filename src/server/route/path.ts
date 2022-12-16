import { Ipath, IPathRoute } from '../domain/IPath';

function path(url: string | null): IPathRoute {
  const reg = /products/;
  const path = url?.match(reg);
  if (!path) return { methods: [] };

  const allRoutes: Ipath = {
    products: {
      methods: ['GET'],
    },
  };
  return allRoutes[path[0]];
}

export default path;
