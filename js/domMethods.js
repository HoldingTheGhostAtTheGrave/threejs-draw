export function setText (){
    const text = document.querySelector('.text');
    let font = '欢迎来到有点画展..., 不负体验';
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