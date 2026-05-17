/*const myHeading = document.querySelector("h1");//相当于通过一个变量来控制h1标题
//const 锁住的是对象本身，不是它所指向的内部，因此可以修改
myHeading.textContent = "Hello world";//设置h1的文本内容

//myHeading = document.querySelector("h2");这句会报错


let iceCream = "chocolate";
if (iceCream === "chocolate") {//注意js 里面 === 三个等号
  alert("我最喜欢巧克力冰淇淋了！");
  //alert() 是浏览器内置函数，调用它会在页面上弹出一个提示框，显示一段文字，用户点"确定"才能关掉。
} else {
  alert("但是巧克力才是我的最爱呀……");
}

function add(num1, num2)
{
  return num1 + num2;
}

add(1, 2);//js返回值用着不用都行


//监听到整个html网页，一旦有鼠标点击，触发函数
document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼");
});
*/

/*实现点击一下图片 就切换为另一张图片的功能，我们只有2中图片*/

const myImage = document.querySelector("img");
//开始监听图片上是否有鼠标点击
myImage.onclick = () => {
  //获取当前图片的src属性值
  const mySrc = myImage.getAttribute("src");
  //这个图片位置是针对html文件而写的文件路径
  if (mySrc === "images/firefox.jpg") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox.jpg");
  } 
};

let myButton = document.querySelector("button");//获取这个button组件
let myHeading = document.querySelector("h1");

function setUserName(){
  const myName = prompt("Please enter your name :");//prompt获取用户输入
  if (!myName)
  {
    setUserName();//如果用户没输入，重新调用让其重新输入
  }
  localStorage.setItem("name", myName);//localStorage相当于浏览器的小数据库，你关机他还在，它允许我们将数据存储在浏览器中并供后续获取。
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
//设置按钮的 onclick 事件处理器。按钮点击时，运行 setUserName() 函数。
// 这样用户就可以通过点击按钮设置新名字了。
myButton.onclick = function () {
  setUserName();
}


if (!localStorage.getItem("name"))//测试用户是否设置过用户名
{
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool,${storedName}`;
}

