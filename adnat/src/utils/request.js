import React from 'react';

export default async function noAuthRequest(url, body, method) {
    console.log("[noAuthRequest] here");
    console.log(url);
    console.log(body);
    console.log(method);
    let result;
    let response = await fetch(url, {
    method: method,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(responseData => {
        result = responseData;
    })

    return result;
};

