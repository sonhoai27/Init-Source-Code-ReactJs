import { GET_SOURCES } from './SourceTypes';
import apiWithoutToken from '@app/configs/api/instanceOfAxios';
import { API_NEWS } from '@app/shared/consts';

const actionGetSources = () => async (distpatch) => {
  return distpatch({
    type: GET_SOURCES,
    payload: apiWithoutToken().get(`sources?apiKey=${API_NEWS}`),
  })
}

export {
  actionGetSources,
}
