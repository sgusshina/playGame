const noop = ( )=> { // ничего не делать

}
function request({ // передаем в качестве аргумента объект параметров // 2
    method = 'GET', // по умолчанию передаем GET,
    url, // так как ключ и значение совпадают, можно написать один раз
    statusResponse = false,
    type = 'json',
    onSuccess = noop,// успешное обращение  серверу, по умолчанию задана функцию, которая ничего делать не будет
    onError = noop // неуспешное
}) {
    const req = new XMLHttpRequest(); // 3

    req.open(method, url); // 4
    req.responseType = type; // 5 

    req.onload = function (event) { // event - событи загрузки запроса // 8
        const target = event.target; // target - это новый созданный запрос

        if (target.status !== 200) {
            onError(target.statusText) // если появляется ошибка, то показываем статус ошибки
            return
        }
        if(statusResponse && target.response.status !== 'ok') { // добавляем условие со статусом из примера про лайк/дизлайк
            onError(target.statusText) // если появляется ошибка, то показываем статус ошибки
            return
        }
        onSuccess(target.response); // в качестве аргумента callback передаем функцию callback c аргументом, равным результату вызова функции // 9
    }
    req.onerror = function () { // 6
        onError() // вызываем ошибку, когда запрос вообще не сумел завершиться
    }
    req.send(); // 7
}