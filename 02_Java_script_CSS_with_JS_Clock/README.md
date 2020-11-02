# **02 - JS and CSS Clock**
>首次上傳：2020/08/23

![]()

## **主題**
用JS與CSS搭配製作一個實時的時鐘效果。  
[[BLOG]](https://github.com/BobChochola/javascript30)  
[[DEMO]](https://github.com/BobChochola/javascript30/blob/master/02_Java_script_CSS_with_JS_Clock/Demo_CSS_with_JS_Clock.png)


## **步驟**
#### Step1. 製作時針、分針、秒針  
利用class`hand`樣式來表現出時分秒針的樣式  
#### Step2. 設定定時器
利用` setInterval(setDate, 1000);`每秒取得當前時間
#### Step3. 利用當前時間來取得對應角度
將每秒取得的時間在`setData`裡面取出，並計算出對應角度  
再透過`element.style.tranform`來變更CSS效果，產生位移的感覺。

## **Javascript語法&備註**
### **let & const**
對於ES6新增的區域變數宣告與常數宣告  
我知道的是const需要的是一開始就指定值，且不可再被指定  
但在之前的經驗裡，function內我還是會放let來做變數的宣告，  
實際上若該值不會再被變動，應該是用const做宣告比較好的。

### **Date()**
取得時間的函數，一定要搭配new來使用`new Date()`  
`date.getSeconds()`：取得當前秒  
`date.getMinutes()`：取得當前分鐘  
`date.getHours()`：取得當前小時  
`setDate(date)`：設置當前時間對應的每個月的幾號（1-31），返回改變後時間(毫秒)。
`setFullYear(year)`：設置四位年份。
`setHours(hour)`：設置小時（0-23）。
`setMilliseconds()`：設置毫秒（0-999）。
`setMinutes(min)`：設置分鐘（0-59）。
`setMonth(month)`：設置月份（0-11）。
`setSeconds(sec)`：設置秒（0-59）。
`setTime(milliseconds)`：設置毫秒時間。
--------------------------------------
有了這些應該可以做出所有跟時間有關的功能了。

### **setInterval()**
定時器，有兩個參數`setInterval(callback, time)`  
第一個是要執行的function，第二個是時間(毫秒)

### **關於語法**
一開始我用IIFE來攥寫`setInterval(callback, time)` 但發現他只會執行一次
Ex:
```javascript
(function(){
function setClock(){
     const aaa = new Date()
}
setInterval(setClock(), 1000)
})
```javascript
發現這樣不行
所以將`setInterval(setClock(), 1000)` 改寫成一個function()
EX:
```javascript
function (setInterval(){
    setClock()}, 1000)
```
這樣就可以解決問題了
但還是覺得不用IIFE 程式碼看起來更漂亮直覺一點


## **CSS語法&備註**
### **transform-origin**
變形的軸心，預設為物件的中心點，  
在這個範例中，設定為100%(right)可以使其從時鐘面的中心點開始旋轉。

### **transform:rotate()**
旋轉物件，數值後方要加上角度`deg`，  
可超過360度，正值為順時針轉，負值為逆時針旋轉。

### **transition-timing-function: cubic-bezier()**
設定動畫轉場所依據的貝茲曲線，可以透過chrome的開發者工具來進行可視化調整。
由於原作有使用故補充[w3schools](https://www.w3schools.com/cssref/func_cubic-bezier.asp)

>參閱：[MDN-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform?v=control)

## 探索
### 轉了個角度，調了點指針
為了要讓指針從12點方向(0點)開始計算，  
作者將指針`.hand`都加上了rotate(90deg)來轉，  
並在計算時間的function內最終結果也都+90，  
我是改成將每一根只真額外寫`.hand-second`, `.hand-mintue`, `.hand-hour`
這樣在計算時就不用+90，可以用最大360來做計算了。

再用上述的transform-origin :bottom  將指針都定位在最上方
這樣就可以像一個正常的運轉的時鐘了 ～～


### transform:rotate的彈跳問題
作者最後有提到一個小問題，若指針在354度切到0度時，  
會使指針往前彈回去，這是因為有使用transtion，在角度做切換時會加上的動畫效果，  
354→0度會認為是往前，而非轉一圈回到起點，所以動畫先往前轉到0。  
為了避免這個反彈的怪現象，我加上了一個function來處理角度
````javascript
function setRotate(deg) {
if (deg === 0) {
     document.querySelector('.hand').style.transition = 'all 0s';
} else {
     document.querySelector('.hand').style.transition = 'all 0.05s';
}
return `rotate(${deg}deg)`;
}
````
當計算角度為0時，把動畫效果關閉，這樣就可以避免了！

因為整個東西都是自己想出來的所以沒有遇到這個問題QQ
附上原作的程式碼
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>JavaScript30 - 02 - JS and CSS Clock | Gua's Note</title>
    <script src="ga.js"></script>
</head>

<body>
    <style>
        .GuaHsu-header {
            background-color: #333;
            text-align: center;
            padding: 10px;
            color: #7ff3cb;
            font-size: 20px;
            font-weight: 100;
        }
        .GuaHsu-header span{
            margin: 0 5px;
        }
        .GuaHsu-header a{
            text-decoration: none;
            color: unset;
        }
    </style>
    <div class="GuaHsu-header">
        <span><a href="https://guahsu.io/categories/JavaScript30/" target="_blank">JavaScript30 心得</a></span>
        <span>|</span>
        <span><a href="https://github.com/guahsu/JavaScript30" target="_blank">GitHub</a></span>
    </div>

    <div class="clock">
        <div class="clock-face">
            <div class="hand hour-hand"></div>
            <div class="hand min-hand"></div>
            <div class="hand second-hand"></div>
        </div>
    </div>


    <style>
        html {
            background: #018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
            background-size: cover;
            font-family: 'helvetica neue';
            text-align: center;
            font-size: 10px;
        }
        
        body {
            margin: 0;
            font-size: 2rem;
            display: flex;
            flex: 1;
            min-height: 100vh;
            align-items: center;
        }
        
        .clock {
            width: 30rem;
            height: 30rem;
            border: 20px solid white;
            border-radius: 50%;
            margin: 50px auto;
            position: relative;
            padding: 2rem;
            box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #EFEFEF, inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .clock-face {
            position: relative;
            width: 100%;
            height: 100%;
            transform: translateY(-3px);
            /* account for the height of the clock hands */
            transform: rotate(90deg);
            /*add*/
        }
        
        .hand {
            width: 50%;
            background: black;
            position: absolute;
            top: 50%;
            transform-origin: 100%;
            transform: rotate(90deg);
            transition: all 0.05s;
            transition-timing-function: cubic-bezier(0.35, 2.65, 1, 1);
            border-radius: 50%;
            /*add*/
        }
        /*add*/
        
        .second-hand {
            height: 2px;
            background: #c11f1f;
        }
        
        .min-hand {
            height: 4px;
            width: 45%;
            margin-left: 5%;
            background: black;
        }
        
        .hour-hand {
            height: 6px;
            width: 35%;
            margin-left: 15%;
            background: black;
        }
    </style>

    <script>
        const secondHand = document.querySelector('.second-hand');
        const minHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');

        function setDate() {
            const now = new Date();
            const seconds = now.getSeconds();
            const mins = now.getMinutes();
            const hour = now.getHours();
            let secondsDegress = ((seconds / 60) * 360);
            secondHand.style.transform = setRotate(secondsDegress);

            let minsDegress = ((mins / 60) * 360);
            minHand.style.transform = setRotate(minsDegress);

            let hourDegress = ((hour / 12) * 360) + ((mins / 12 / 60) * 360);
            hourHand.style.transform = setRotate(hourDegress);
        }

        //GuaHsu 若傳入角度為0，則不顯示動畫效果避免354~0的rotate反彈跳
        function setRotate(deg) {
            if (deg === 0) {
                document.querySelector('.hand').style.transition = 'all 0s';
            } else {
                document.querySelector('.hand').style.transition = 'all 0.05s';
            }
            return `rotate(${deg}deg)`;
        }

        setInterval(setDate, 1000);

    </script>
</body>

</html>
```