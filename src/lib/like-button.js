class LikeButton {
constructor(element,liked = false) {
    if(!(element instanceof HTMLElement)) {
        throw new Error ('Передан не HTML элемент')
    }
    this.element = element
    this.liked = liked // первоначально задаем отсутствие лайков
     
    this.render ()
    this.onCLick = this.onCLick.bind(this)
    this.onToogle = this.onToogle.bind (this)
    this.RequestFinish = this.RequestFinish.bind(this)
    this.element.addEventListener('click', this.onCLick)

}

render () {
    this.element.textContent = this.liked ? '💓' : '💔' // если лайк есть, то сердечко, если нет, то разбитое
}
onCLick() {
    this.element.setAttribute('disabled','disabled') // блокируем кнопку сразу после клика
    request({
        url: this.liked ? '/dislike.json' : '/like.json',
        onSuccess: this.onToogle, // в случае успешного выполнения запроса будем вызывать метод onToogle
        onError: this.RequestFinish // в случае неуспешного другой
    })
}
onToogle() {
    this.liked = !this.liked // меняем значение состояния лайка
    this.render () // переделываем кнопку
    this.element.removeAttribute('disabled')
}
RequestFinish () {
this.element.removeAttribute('disabled')
}
}