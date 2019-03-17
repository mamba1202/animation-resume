
var result = `
/* 面试官你好，我是XXX
* 只用文字作做我介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/
*{
transition: all 1s;
}
html{
background: #eee;
}
#code{
border: 1px solid #aaa;
padding: 16px;
}
/* 我需要一点代码高亮 */

.token.selector{ color: #690; }
.token.property{ color: #905; }
/* 加一个呼吸效果 */
#code{
    animation: breath 0.5s infinite alternate-reverse;
}
/* 现在正式开始 */
/* 我需要一张白纸 */
#code-wrapper{
width: 50%; left: 0; position: fixed; 
 height: 100%;
}
#paper > .content {
display: block;
}
/* 于是我就可以在白纸上写字了，请看右边 */
`

var n = 0
var id = setInterval(() => {
    n += 1

    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)  //将写入code innerHTML里的代码高亮
    styleTag.innerHTML = result.substring(0, n)
    console.log('一轮')
    if (n >= result.length) {
        window.clearInterval(id)
        f2()
        f3(result)
    }
}, 10)

function f2(){
    var paper = document.createElement('pre')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function f3(preResult){   //之前的result
   var result= `
   #paper{
       width: 100px;
       height: 100px;
       background: red;
   }
   `
    var n = 0
    var id = setInterval(() => {
        n += 1
    
        code.innerHTML = preResult + result.substring(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)  //将写入code innerHTML里的代码高亮
        styleTag.innerHTML = preResult + result.substring(0, n)
        console.log('一轮')
        if (n >= result.length) {
            window.clearInterval(id)
        }
},50)
}