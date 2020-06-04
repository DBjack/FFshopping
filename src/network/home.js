import instance from "./index";
export const getHomeDate = function(params) {
  return instance({
    url: "/home/data",
    methods: "get",
    params: params,
  });
};

export const getHomeMultidata = function(params) {
  return instance({
    url: "home/multidata",
    methods: "get",
    params: params,
  });
};
