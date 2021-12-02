/* eslint-disable strict */
'use strict';

export const postData = (URL, token) => fetch(`${URL}fsh/rest/Manage/adminUsers`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'FSH-AUTH-TOKEN': token
  }
});
//POST /rest/Manage/users
export const postDataUsers = (URL, token, userType = '',
  pageSize = 10, pageNumber = 0, returnTotalCount = false, userState = '') => fetch(`
  ${URL}fsh/rest/Manage/users?userType=${userType}&pageSize=${pageSize}&pageNumber=${pageNumber}
  &returnTotalCount=${returnTotalCount}&userState=${userState}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'FSH-AUTH-TOKEN': token
    }
  });
//`https://testfsh.friendly-tech.com:10356/fsh/rest/System/generateRandom`
export const generateRandom = () => fetch(`https://testfsh.friendly-tech.com:10356/fsh/rest/System/generateRandom`, {
  method: 'POST'
});

export const authData = (URL, data, topic) => fetch(`
${URL}fsh/rest/Auth/loginSync?username=${data.Login}&password=${data.Password}&gcmIdentifier=ws://topic/notifications/${topic}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(data)
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

export const deleteUserData = (URL, token, id) => fetch(`
${URL}fsh/rest/Admin/users?userId=${id}&unbindOnly=false&checkGatewayLinks=true`, {
  method: 'DELETE',
  headers: {
    "Accept": "*/*",
    'FSH-AUTH-TOKEN': token
  }
});
//DELETE /rest/Resource/deletePhotoDELETE /rest/Resource/deletePhoto
export const serverDeletePhoto = (URL, token, id) => fetch(`
${URL}fsh/rest/Resource/deletePhoto?userId=${id}&type=AVATAR`, {
  method: 'DELETE',
  headers: {
    "Accept": "*/*",
    'FSH-AUTH-TOKEN': token
  }
});
//
export const loadPhotoMultipart = (URL, token, data, id) => fetch(`
${URL}fsh/rest/Resource/loadPhotoMultipart?type=AVATAR&userId=${id}`, {
  method: 'PUT',
  headers: {
    "Accept": "*/*",
    'FSH-AUTH-TOKEN': token
  },
  body: data
});

export const photoIdentifier = (URL, token, id, photoIdentifier) => fetch(`
${URL}fsh/rest/Resource/photo/${photoIdentifier}?FSH-AUTH-TOKEN=${token}&userId=${id}`, {
  method: 'POST',
  headers: {
    "Accept": "*/*",
    'Content-Type': 'application/octet-stream',
    'FSH-AUTH-TOKEN': token
  }
});

export const rawPhotoContent = (URL, token, id) => fetch(`
${URL}fsh/rest/Resource/rawPhotoContent?type=AVATAR&userId=${id}`, {
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

//POST /rest/Manage/devices
export const manageDevices = (URL, token) => fetch(`${URL}fsh/rest/Manage/devices`, {
  method: 'POST',
  headers: {
    "Accept": "*/*",
    'Content-Type': 'application/octet-stream',
    'FSH-AUTH-TOKEN': token
  }
});
///rest/Manage/hubDetails

