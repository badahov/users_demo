import appConfig from '../../../../config';
import config from '../../config';

export default function apiAuthLogin(data) {
  const url = appConfig.domain.auth + appConfig.server.setPoint + config.api.auth;

  const formData = new FormData();

  formData.append('login', data.login);
  formData.append('password', data.password);

  const xhr = new XMLHttpRequest();

  xhr.open('POST', url, true);
  xhr.withCredentials = true;

  xhr.send(formData);

  return xhr;
}
