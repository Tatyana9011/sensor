/* eslint-disable strict */
'use strict';

export const postData = (URL, token) => fetch(`${URL}fsh/rest/Admin/adminUsers`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'FSH-AUTH-TOKEN': token
  }
});

export const authData = (URL, data) => fetch(`
${URL}fsh/rest/Auth/loginSync?username=${data.Login}&password=${data.Password}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(data)

  // body: 'username=' + encodeURIComponent(data.Login) +
  //   '&password=' + encodeURIComponent('qwerty')

  /* headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: 'username=bar&lorem=ipsum' */

  // body: JSON.stringify(data)
});
export const putUserData = (URL, data, token) => fetch(`${URL}fsh/rest/Admin/user`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'FSH-AUTH-TOKEN': token
  },
  body: JSON.stringify(data)
});

//http://192.168.99.244:9993/fsh/rest/Admin/users?userId=1&unbindOnly=false&checkGatewayLinks=true
export const deleteUserData = (URL, token, id) => fetch(`
${URL}fsh/rest/Admin/users?userId=${id}&unbindOnly=false&checkGatewayLinks=true`, {
  method: 'DELETE',
  headers: {
    "Accept": "*/*",
    'FSH-AUTH-TOKEN': token
  }
});

export const loadPhotoMultipart = (URL, token, data) => fetch(`
${URL}fsh/rest/User/loadPhotoMultipart?type=AVATAR`, {
  method: 'PUT',
  headers: {
    "Accept": "*/*",
    'FSH-AUTH-TOKEN': token
  },
  body: JSON.stringify(data)
});

export const rawPhotoContent = (URL, token, type, id) => fetch(`
${URL}fsh//rest/Admin/rawPhotoContent?type=${type}&userId=${id}`, {
  method: 'POST',
  headers: {
    "Accept": "*/*",
    'Content-Type': 'application/octet-stream',
    'FSH-AUTH-TOKEN': token
  }
});

export const timezonesPost = URL => fetch(`${URL}fsh/rest/System/timezones`, {
  method: 'POST',
  headers: {
    "Accept": "*/*",
    'Content-Type': 'application/octet-stream',
  }
});


