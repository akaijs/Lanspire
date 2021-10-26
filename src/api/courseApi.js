import axiosClient from './axiosClient';

const url = '/courses/';

const courseApi = {
  getAll: async () => {
    const res = await axiosClient.get(url);
    return res.data;
  },

  getById: async id => {
    const res = await axiosClient.get(`${url}${id}`);
    return res.data;
  },

  create: async course => {
    const res = await axiosClient.post(url, course);
    return res.data;
  },

  update: async course => {
    const res = await axiosClient.patch(`${url}${course.id}`, course);
    return res.data;
  },

  delete: async id => {
    const res = await axiosClient.delete(`${url}${id}`);
    return res.data;
  },
};

export default courseApi;
