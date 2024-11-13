const noop = () => { }; // ничего не делать
const NO_PARAMS = {}

function request({ // передаем в качестве аргумента объект параметров // 2
    method = 'GET', // по умолчанию передаем GET,
    url, //  так как ключ и значение совпадают, можно написать один раз
    params = NO_PARAMS,
    type = 'json',
    checkStatusInResponse = false,
    onSuccess = noop, // успешное обращение  серверу, по умолчанию задана функцию, которая ничего делать не будет
    onError = noop // неуспешное
}) {
    const req = new XMLHttpRequest(); // 3

    const urlParams = new URLSearchParams(params); // cоздаем функцию, которая будет переделывать переданный объект параметров в параметры
    const queryString = urlParams.toString(); // результат вызова функции создания параметро, преобразованное к строке

    req.open(method, url + (queryString ? `?${queryString}` : '')); // 4 // добавляем к действующему url параметр, если он есть, а если нет, то ничего не добавляем
    req.responseType = type;

    req.onload = function (event) { // event - событи загрузки запроса // 8
        const target = event.target; // target - это новый созданный запрос

        if (target.status !== 200) {
            onError(target.statusText); // если появляется ошибка, то показываем статус ошибки

            return;
        }

        if (checkStatusInResponse && target.response.status !== 'ok') { // добавляем условие со статусом из примера про лайк/дизлайк
            onError(target.statusText); // если появляется ошибка, то показываем статус ошибки

            return;
        }

        onSuccess(target.response); // в качестве аргумента callback передаем функцию callback c аргументом, равным результату вызова функции // 9
    }

    req.onerror = function () { // 6
        onError(); 
    }

    req.send();
}