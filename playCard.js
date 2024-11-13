function generateCard(n) {
    const arrCard = []
    do {
        arrCard.push ({
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/рубашка.png'
            }
        })
    } while (arrCard.length !== n);
    return arrCard
}

function generatePlayCard(n) {
    const arrCardAll = [
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/туз пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/6 пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/7 пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/9 пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/10 пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/10 черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/валет пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/валет черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/дама пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/дама черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/король пики.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/король черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/туз черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/6 бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/6 крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/6 черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/7 бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/7 крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/7 черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/8 бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/8 крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/8 черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/9 бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/9 крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/9 черви.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/10 бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/10 крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/валет бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/валет крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/дама бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/дама крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/король бубны.png'
            }.png
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/король крести.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/туз бубны.png'
            }
        },
        {
            tag:'img',
            cls:'card',
            attrs: {
                src: './assets/card/туз крести.png'
            }
        },
    ]
    arrCardAll.sort(() => 
        Math.random() - 0.5)
        console.log(arrCardAll);
        
        const arrCardPlay =[]

    arrCardAll.forEach(element => {
        if (arrCardPlay.length !== n) {
            arrCardPlay.push(element)
        } else {
            return
        }
    });
    const arrAll = arrCardPlay.concat(arrCardPlay)
    arrAll.sort(() => 
        Math.random() - 0.5)
    console.log(arrCardPlay);
    return arrAll
}