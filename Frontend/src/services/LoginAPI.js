import $ from 'jquery'; 

export const LoginAPI = (url, email, password) => {
    $.get(url, { email: email, password:password },
        function (data, textStatus, XMLHttpRequest) {
            console.log(data)
            console.log(textStatus)
            console.log(XMLHttpRequest)
        });
}