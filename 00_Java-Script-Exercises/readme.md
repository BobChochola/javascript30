需要假圖可以去[https://picsum.photos/]
css.reset: [https://meyerweb.com/eric/tools/css/reset/]

2020.5.16
## **閱讀內容** `建議使用1.5倍速`
鐵人賽AMOS鐵人賽第五天(https://ithelp.ithome.com.tw/articles/10203330)
鐵人賽AMOS鐵人賽第六天(https://ithelp.ithome.com.tw/articles/10203919)


## **內容對照 Exercises_style_00**
1. 寫一個網頁 最一開始的動作 ! (tab) -> 會出現一開始所需要最簡單的架構
2. 可以使用<p>Lorem (tab)</p> -> 會出現一些假文
3. 教學 style : color, font-size, background setting value

## **內容對照 Exercises_style_folder01**
1. 建立 style.css
2. <html 查一下 lang="en">
3. <link rel="stylesheet" href="style.css"> -> style.css import Exercises_style_01
4. 使用不同的標籤來分層 nav, nav a, nav a:hover,
5. 最後會做出five page, 可以切換用 a href="", 分頁上會有特效
6. [**在CSS檔案中的CSS原始碼不需要使用<style>標籤標記**]

2020.5.17
## **閱讀內容** `建議使用1.25倍速`
鐵人賽AMOS鐵人賽第七天(https://ithelp.ithome.com.tw/articles/10204259)
1. width-邊匡, border-邊匡粗細(solid 邊匡樣式), padding-邊匡的距離, background-color-匡匡裡面的background
2. line-height - 行高, height - 區塊得高度,
3. `div a{}` 文字超連 ->結: text-decpration :超連結的裝飾, color, **需要在html內 <a href=""></a>**
4. 下載xmind zen 心智圖, [https://www.xmind.net/zen/]

2020.5.18
## **閱讀內容** '建議轉心看 介紹邊匡' 
**內容對照 Exercises_style_03**
鐵人賽AMOS鐵人賽第八天(https://ithelp.ithome.com.tw/articles/10204303)
1. background-color -> bgc快捷
2. padding - 內距
3. width不是整體的寬度 -> 整體是width + padding + border
4. `*{}`萬用選取器 -> margin:0, padding0 可以將div 貼邊靠左上角
5. `float :right, center, left`可以自己去試試看 （會造成第一個box的算法不同）
6. 快捷鍵 w960 -> width 960px, 

2020.5.19
## **閱讀內容** 'float 文繞圖 多覽版面' 
**內容對照 Exercises_style_04 p01.-12**
1. 去 fakeimg 假圖網 找假圖 [https://pjchender.blogspot.com/2016/10/fake-image-placeholder.html]
2. .float-img{
       float: left;
       margin: 20px **上下左右 一樣**
       margin: 20px 40px **上下一樣 左右一樣**
       margin: 20px 40px 60px **上右下 左不要**
       margin: 0px 20px 10px 0px ;  **給圖片的空間（上 右 下 左)**
       }
3. float會搭配clear :閃開所有float object

2020.5.22
## **閱讀內容** 'display : inline, block, inline-block' 
**內容對照 Exercises_style_04 p01.-12**
1. <h1> block的特性
2. <p> inline的特性 : 靠內容撐開，無法設定寬高
3. <div> block的特性: 區塊可設定寬高
4. **如果後面的那一欄 是`block` 即使設定inline 也不會inline**
5.  dispaly: In HTML, the default display property value is taken from the HTML specifications or from the browser/user default style sheet. The default value in XML is inline, including SVG elements.
6. what's do you think <li> (inline or block)?
7. why setting <a> width 10000px didn't change ?
8. **you can try display: inline-block**
9. just have block when I can seeting wigth and length
10. text-align -center, text-decoration拿掉裝飾

2020.5.26
## **閱讀內容** '建議轉心看 介紹邊匡整合' 
**內容對照 Exercises_style_06 p01**
鐵人賽AMOS鐵人賽第十一天(https://ithelp.ithome.com.tw/articles/10205268)
1. box-sizing: border-box 可以直接變成width的px
2. box-sizing: content-box 內文的px 會變成width
問了公司前端 跟我分享可以看這個bootstrap : 
[https://getbootstrap.com/docs/4.5/getting-started/introduction/]

2020.5.27
## **閱讀內容** '建議轉心看 介紹clc, 邊匡整合 flex-wrap' 
**內容對照 Exercises_style_07 p15, p16**
鐵人賽AMOS鐵人賽第十二天(https://ithelp.ithome.com.tw/articles/10205268)

1. 不支援 IE8 IE9 (很舊的瀏覽器)
2. display: flex 可以自動排版不用理會數學計算
3. flex-wrap: wrap可以折行 但要去子層margin 設定
4. display: flex: 元素就會變成彈性容器，而它的子元素們就會變成彈性項目。flex 值會讓彈性容器變成塊級元素（block-level element）、inline-flex 則會讓彈性容器成為單一的行內元素
    link: [https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes]
5. vertical-align  [屬性的功能可以用來設計網頁中圖片在垂直方向的對齊方式]- link: [https://css-tricks.com/almanac/properties/v/vertical-align/]
6. 注意!!!!
```
   multiple column 模組的 column-* 屬性對彈性項目無效
   clear 對彈性項目無效
   float causes the display property of the element to compute to block.
   vertical-align 對已對齊的彈性項目無效
```
7. 今天意外發現 option + shift + f 可以自動排版程式碼

2020.5.29
## **閱讀內容** '可以製作蓋版廣告摟 position :fixed' 
**內容對照 Exercises_style_08 p017**
鐵人賽AMOS鐵人賽第十二天(https://ithelp.ithome.com.tw/articles/10205268)

1. class name 可以隨意取喔
2. position: fixed;
       opacity: 0.6;
       **top: 0;**
   設定目錄 他可以永遠在上方
3.   { top: 0;
       margin: auto;
       left: 0;
       right: 0; }
   設定目錄 他可以永遠在中央

4. p17-1 寫一個永遠在上方的link

2020.5.29
## **閱讀內容** '可以製作蓋版廣告摟 position :fixed' 
**內容對照 Exercises_style_08 p017**
鐵人賽AMOS鐵人賽第十四天(https://ithelp.ithome.com.tw/articles/10206321)

1. class name 可以隨意取喔
2. position: fixed;
       opacity: 0.6;
       **top: 0;**
   設定目錄 他可以永遠在上方
3.   { top: 0;
       margin: auto;
       left: 0;
       right: 0; }
   設定目錄 他可以永遠在中央

4. p17-1 寫一個永遠在上方的link

## **閱讀內容** '定位 relative' 
**內容對照 Exercises_style_08 p017**
鐵人賽AMOS鐵人賽第十五天(https://ithelp.ithome.com.tw/articles/10206508)

1. relative :在資料中的位子去做偏移
2. 快捷 ul>li.name{} tab
3. ul>li.name${$}*50 可以做出50個帶號碼的li
4. opacity 淡化
5. position: relative 會有先後順序
6. 可以用z-index: 1; 調整
7. 第一個設定 relative left: 120px;, 第二個設定 relative left: -120px; 可以對調位子

## **閱讀內容** '定位 Absolute' 
**內容對照 Exercises_style_10 p019**
鐵人賽AMOS鐵人賽第十六天(https://ithelp.ithome.com.tw/articles/10206530)

1. position: absolute 資料會在原本的位子
2. position 如果定在最內層 -> 他將會一直往上層找 EX: .c{position} -> b -> a -> window
3. 如果父層有做定位(.b)-> 子層會往父層去找(.c->.b)
4. 試試看給.b一個position >> 給.a一個position
5. 試試看給body and html position 看看變化
6. 可以試試看  border-radius: 999em; 調整如何變成圓形

## **閱讀內容** '基本網站版' 
**內容對照 Exercises_style_11 p20**
鐵人賽AMOS鐵人賽第十六天(https://ithelp.ithome.com.tw/articles/10206531)

1. `text-decoration` 文字部會有裝飾 ex href沒有底線
2. padding 0 10px; 快捷 -> p0-10(tab) 上下為0 左右為10
3. 如果覺得哪裡不對勁 可以加class 給他 幫他做修正 
4. lh52 -> line-height: 52px
5. 由於li 會有[·] 所以使用list-style-type: none; 修正
6. about > h2 :在about裡面的到一個h2做css
7. 先加好class 若一樣名字 之後再做區別 如 class="item" -> class="item pic"
8. &copy; copyright by bob chochola -> © copyright by bob chochola
9. `padding-bottom`: 下方的內距
10. `border-radius: 50%`: 變成圓角
11. `object-fit: cover` 跟img有關可以自己去研究看看

## **閱讀內容** 'transition' 
**內容對照 Exercises_style_12 p21**
鐵人賽AMOS鐵人賽第十八天(https://ithelp.ithome.com.tw/articles/10206532)

1. `transition`: 屬性 轉換時間 延遲持行時間 速度;
2. `transition`: all 0.3s 0s ease; `ease 預設`
3. `transition background-color`: 全部一起變
4.  `transition: padding 4s 0s ease, background-color 1s 1s;`: 要給 :hover 也加上pagging, 會變成全部一起慢慢變
5. 回到p20 去練習改改看 .about p, .about h3 -> 幫他們加上hover&transition

## **閱讀內容** 'Animation' 
**內容對照 Exercises_style_13 p22**
鐵人賽AMOS鐵人賽第十九天(https://ithelp.ithome.com.tw/articles/10206533)

1. 動畫的內容: @keygrames
2. keyframes 0s (圓形) 0%{做的事情}-> 10s(方形) 100%{做的事情}  中間的過程
3. animation: 動畫名稱 播放時間 延遲播放的時間 速度 次數 方向 填充模式 播放狀態;
4. animation: `alternate` 來回播放
5. animation: `infinite` 無限次數

## **閱讀內容** '媒體查詢' 
**內容對照 Exercises_style_14 p23**
鐵人賽AMOS鐵人賽第二十天(https://ithelp.ithome.com.tw/articles/10206534)
[csscoke.com/webq/]去學習    
1. @media: 用於媒體查詢，以便為不同的媒體類型/設備應用不同的樣式(CSS)
2. viewport: 裝置的螢幕尺寸(也關係到解析度)
3. 在桌機上模擬mobile 9px 以下的字就看不到
4. @media screen  and(condition) and (condition)
5. (min-width: 768px) 最小的 再小就不行！！！ >=768

## **閱讀內容** 'RWD入門' 
**內容對照 Exercises_style_15 p24**
鐵人賽AMOS鐵人賽第二十一天(https://ithelp.ithome.com.tw/articles/10206535)
1. 各種裝置的網頁寬度要怎麼設定
2. 製做RWD時會遇到的問題
3. 媒體查詢的設定
4. 區塊寬度的設定
5. 間距的設定
6. `故意把它弄壞`: 讓lorem的文字不對齊 -> 在設定width 讓他很大就可以解決

## **閱讀內容** 'RWD入門' 
**內容對照 Exercises_style_16 p25**
鐵人賽AMOS鐵人賽第二十二天(https://ithelp.ithome.com.tw/articles/10206537)
1. 為什麼手機會很耗電 -> 因為網站寫的不好
2. 先寫手機版型-> 再寫桌機 : 避免複寫
3. input:c#menu_control (tab) ->  <input type="checkbox" name="" id="menu_control"> checkbox 勾選欄
4. width, height 設定沒有效果 inline
5. opacity ?
6. overflow: hidden 超出就會藏起來
7. box-shadow: ?
8. z-index
9. justify-content: space-between: 分散在做又兩側
10. 最後可以去統整 手機 桌機相同的部分 在用@media 去設定 max-width:767px 最大767 以下都是手機

## **閱讀內容** 'boostrap寫 RWD' 
**內容對照 Exercises_style_17 p26**
鐵人賽AMOS鐵人賽第二十四天(https://ithelp.ithome.com.tw/articles/10206538)
使用boostrap:[https://getbootstrap.com/]

1. get started >> starter template >>copy code

2. {預設 .col-2
手機 直 .col -> .col-佔欄數
手機 橫 .col-sm  -> .col-sm-佔欄數

平板 直 .col-md -> .col-md-佔欄數
平板 橫 .col-lg -> .col-lg-佔欄數

桌機 .col-xl -> .col-xl-佔欄數}
3. 為什麼去mobile圖片沒有滿版 >> 去檢查css style >> 發現是 max-width: 100%
4. what's max-width:100%
5. 改成 width: 100% 解決

## **閱讀內容** 'boostrap寫 RWD' 
**內容對照 Exercises_style_18 p27**
鐵人賽AMOS鐵人賽第二十四天(https://ithelp.ithome.com.tw/articles/10206538)
使用boostrap:[https://getbootstrap.com/]
1. get started >> starter template >>copy code
2. get started >> left sidebar (components -> navbar) >> copy code
3. left sidebar (components -> Jumbotron) >> copy code 背景圖
4. background: url() `no-repeat` center center / cover; 可以去試試看repeat長怎樣
5. left sidebar (components -> Breadcrumb) >> copy third code
6. left sidebar (components -> pagination) >> copy code
7. 在class 後面加`justify-content-center` 在boostrap4 可以直接改動
8. Q: 為什麼加了 .container 之後會跑版 ?
9. 幻燈片 (components -> pagination) >> copy third code ->要加字的話 要在`carousel-item`後面加 [<div class="carousel-caption d-none d-md-block">]
10. 彈跳出來的視窗(components -> Modal) >> copy code -> 需要給他一個id去控制, 所以需要額外加`type="button" class="btn btn-primary" data-toggle="modal" data-target=""`
可以發現裡面有一個 data-target,必須先給跳出來的東西一個id之後, 用data-target 去定錨 放在href裡面加入id.

## **閱讀內容** 'JQuery入門' 
**內容對照 Exercises_style_19 p28**
鐵人賽AMOS鐵人賽第二十六天(https://ithelp.ithome.com.tw/articles/10206540)
使用jqurey:[https://jquery.com/]
使用google developer cdn [https://developers.google.com/speed/libraries#jquery]
1. `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>` 放在body 結束前
2. 存取 jquery.min.js 內容 通常用js folder 建立名字 -> import `<script src="js/jquery.min.js"></script>`
3. $(document).ready 要做的事情

## **閱讀內容** 'JQuery事件' 
**內容對照 Exercises_style_20 p29**
鐵人賽AMOS鐵人賽第二十七天(https://ithelp.ithome.com.tw/articles/10206541)
使用jqurey:[https://jquery.com/]

1. ```$(document).ready(function () {
            $(".box-a").click(function(){
                $(".box-b").hide();
            })
        })
    ```
    在點擊box-a 後 box-b收起來
2. .toggle() 就跟開關一樣 可以去判斷 開或關 收起來 彈出來
3. .dblclick() 點兩下 才動作
4. cursor: pointer 會變手指頭唷
5. background-color: rgba(0,0,0,.5); 透明
6. p29-1 用jqurey做 蓋版廣告


## **閱讀內容** 'JQuery事件' 
**內容對照 Exercises_style_21 p30練習 p30-1一顆按鈕開跟關**
網頁色彩: [http://csscoke.com/2015/01/01/rgb-hsl-hex/]
鐵人賽AMOS鐵人賽第二十七天(https://ithelp.ithome.com.tw/articles/10206541)
使用jqurey: [https://jquery.com/]

1. 接續p29 `$('.full-screen').addClass('close');` : addClass('不用 !.!')
2. 給addClass('__') 一個 css { display:none;}
3. 在點了 btn-open 之後會發現 `removerClass('close')` 所以又回到原點
------------------------------------------------------------
4. toggleClass() 自動檢查有沒有這格class 如果沒有就幫你補上 如果有就幫你拿掉
5. 如果有兩個需要控制的 建議還是使用變數去控制 還是可以用controller1 controller2 去做簡單的控制 