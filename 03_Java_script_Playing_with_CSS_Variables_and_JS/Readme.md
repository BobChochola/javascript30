# **03 - CSS Variables**
>首次上傳：2017/05/18  

![](https://guahsu.io/2017/05/JavaScript30-03-CSS-Variables/demo3.png)

## **主題**
用JS與CSS搭配製作一個即時的濾淨效果，
特效為調整內距、模糊、邊框色。  
[[BLOG]](https://guahsu.io/2017/05/JavaScript30-03-CSS-Variables/)  
[[DEMO]](https://guahsu.github.io/JavaScript30/03_CSS-Variables/index-GuaHsu.html)  

## **步驟**
#### Step1
利用CSS variable來定義CSS的變數(有點像sass的感覺)
#### Step2
利用addEventLinstener來綁HTML的控制桿，  
並更新值到CSS變數中來達到即時調整的效果。

## **Javascript語法&備註**
### **dataset**
用`dataset`可以取出對象的`data-*`屬性，也等同於`getAttribute`
````javascript
<div id="test" data-no="123"></div>
document.querySelector('#test').dataset.no // 輸出123
document.querySelector('#test ').getAttribute('data-no'); // 輸出123
````
### **style.setProperty()**
等同於style.cssPropertyName
````javascript
style.setProperty('padding', '15px');
/* 等同於 */
style.padding = '15px';
````
但在實際應用中，前者的做法會很方便帶參數進去。
>參照:[MDN-setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

## **CSS語法&備註**
### **filter:blur()**
CSS3的濾鏡功能，blur是高斯模糊，參數越高越模糊。
>參照:[MDN-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

## 探索
依樣畫葫蘆的新增了`grayscale()`的效果，  
在CSS中要使用兩個以上的濾鏡效果寫再一起就好，  
如果分開來的話會變成覆蓋：
````css
/* 這樣會變成覆蓋，剩下garyscale的效果 */
img {
    filter: blur(10px);
    filter: grayscale(10%);
}
/* 寫在同一處，才能吃到兩個效果 */
img {
    filter: blur(10px) grayscale(10%);
}
````


## 偽類的選取器

```javascript
document.querySelector(:root) === document.querySelector('html')
document.querySelector(:root) === document.queryElement()
```

## 關於 label html
遇到了就來查查資料吧
之前在jquery 有用過checkbox ('checked') 做出checkbox的標誌
這次來好好看看如何用label 建立出常見的UI
```html
<input type="checkbox"> :   <input type="checkbox" id="scales" name="scales"checked> //圓圓的複選框 讓他可以check->checked 使用allClass('ed') removeClass('ed') 做變化

<input type="color"> : <input type="color" id="head" name="head"value="#e66465"> //會出現色塊 可以用value控制

<input type="date"> :
<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">
//value 可以設定變數 const nowDate = new Date(); value=nowDate min, max 分別是最前面的日期與最後的日期

<input type="datetime-local">
<input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00">
//與 type="date" 相似只是更多了時間

<input type="email">
<input type="email" id="email"
       pattern=".+@globex.com" size="30" required>
//可以拿來驗證mail  使用pattern來控制
//EX: pattern="[A-Za-z]{3}" 只能輸入A-Z, a-z三位元 若超過的話 就會出現title內容"Three letter counyry code"
<input type="text" id="country_code" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code"><br><br>  

<input type="file">
<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">
//import file accept可以接受的副檔名 

<input type="month">
  <label for="bdaymonth">Birthday (month and year):</label>
  <input type="month" id="bdaymonth" name="bdaymonth">
  <input type="submit">
//與date相似 但選取的範圍只有到month

<input type="number">
<label for="tentacles">Number of tentacles (10-100):</label>
<input type="number" id="tentacles" name="tentacles"
       min="10" max="100">
//看到這裡應該可以發現 min, max都是拿來設定最低限度與最高上限, UI上就只是一個div

<input type="password">
<div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
</div>

<div>
    <label for="pass">Password (8 characters minimum):</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
</div>
//登入畫面組合包minlength至少要多長, maxlength最多多長, 可以去思考一下為什麼不用min, max來表示

<input type="radio">
<div>
  <input type="radio" id="huey" name="drone" value="huey"
         checked>
  <label for="huey">Huey</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey">
  <label for="dewey">Dewey</label>
</div>
//在radio只能單選, 若想要複選的話要使用checkbox
<input type="range">
<div>
  <input type="range" id="volume" name="volume"
         min="0" max="11">
  <label for="volume">Volume</label>
</div>

<div>
  <input type="range" id="cowbell" name="cowbell" 
         min="0" max="100" value="90" step="10">
  <label for="cowbell">Cowbell</label>
</div>
//這裡的min, max則是指range的刻度, 越多就可以分得越細 value,step 可以自己去玩玩看哦

<input type="search">
<label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q"
       aria-label="Search through site content">
//我想可以在這裡做一些filter的事件
<input type="tel">
<input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required>

<small>Format: 123-456-7890</small>
//同email, 使用pattern來做控制

<input type="text">
// [https://reurl.cc/3LLQmL] 非常重要的一個tag

<input type="time">
<input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required>
//同date, month 但變成只有時間可以選擇

<input type="url">
<input type="url" name="url" id="url"
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required>
//輸入URL吧 pattern要是'https://.'開頭的喔 而且size不能超過30

<input type="week">
<form action="/action_page.php">
  <label for="week">Select a week:</label>
  <input type="week" id="week" name="week">
  <input type="submit">
</form>
//可以一次選擇一週的時間
<meter>
<progress>
<select>
<textarea>

<p> <label for=tel>請輸入電話：</label>
<input id=tel type=text name=user_tel>
```
```
label 的用法很簡單， 注意這個例子中的 label 開始標籤，
它有一個「for」屬性： for=tel
然後再注意 input 標籤，
它有一個「id」屬性：id=tel

for 和 id 這兩個屬性的設定值依樣。
我們可以這樣子想：
「label 的 for，要對應到 input 的 id」。
因此，除了把要顯示的提示內容用 label 包住以外，label 標籤的 for 屬性設定成什麼，input 也要設定一個相同的 id 屬性。如此成雙成對，
這樣子你的網頁使用者不管 tab 到哪個文字輸入欄，
導盲鼠或其他螢幕閱讀器才都可以精確的唸出它的題是信息，
讓使用者能夠輕鬆地了解每個文字方塊到底要輸入的是什麼。
```
## 三元運算子 Ternary operators vs if-else statemanet
在範例裡我有試著用三運算子來做做看
`使用條件`讓語句簡單一點 其實什麼狀況都是可以使用的
只是使用起來真的會更好閱讀嗎
而在這裡不考慮使用的原因是因為
html裡面有data-sizing 這個變數
讓我覺得可以有更好的閱讀方式也更容易控制
