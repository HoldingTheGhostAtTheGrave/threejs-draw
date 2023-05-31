export function setText (){
    const text = document.querySelector('.text');
    let font = '欢迎来到恐怖画展,关灯看更好看哦...';
    let index = 0;
    let tme = setInterval(() => {
        if(index === font.length ){
            clearInterval(tme);
            return
        }
        text.innerHTML = text.innerHTML + font[index];
        index += 1;
    },200);
}