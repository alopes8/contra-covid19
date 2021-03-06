import http from './Http';

export default {
  save(controleLeito, unidadeId) {
    return http.post(`/unidades-saude/${unidadeId}/notifica-leitos`, controleLeito);
  },

  findAllControleLeitosByUnidadeSaude(unidadeId, page, itemsPerPage) {
    return http.get(`/unidades-saude/${unidadeId}/notifica-leitos?page=${page}&itemsPerPage=${itemsPerPage}`)
      .then(({ data }) => data);
  },

  findByControleLeitoId(unidadeId, controleLeitoId) {
    return http.get(`/unidades-saude/${unidadeId}/notifica-leitos/${controleLeitoId}`).then(({ data }) => data);
  },

  update(data, unidadeId, controleLeitoId) {
    return http.put(`unidades-saude/${unidadeId}/notifica-leitos/${controleLeitoId}`, data);
  },

  delete(unidadeId, controleLeitoId) {
    return http.delete(`/unidades-saude/${unidadeId}/notifica-leitos/${controleLeitoId}`);
  },
};
