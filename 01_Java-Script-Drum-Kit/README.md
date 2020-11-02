# **01 - JavaScript Drum Kit**
>首次上傳：2017/08/15


## **主題**
透過JS使鍵盤按下後播放出對應按鍵的聲音，並同時產生一個特效，  
在按下其他鍵後會關閉該特效並於新按鍵中啟用。 


## **學習過程**
#### Step 1. add some basic code
參考 [[gau github]](https://guahsu.io/2017/05/JavaScript30-01-Java-Script-Drum-Kit/)
1. copy `style.cc`
2. copy `index-STARY`
3. copy `sounds file`
#### Step 2. start search question

```
###### why use data-* in html
The data-* attribute is used to store custom data private to the page or application.

The data-* attribute gives us the ability to embed custom data attributes on all HTML elements.

The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).
```

#### Step 3.try write css
#### Step 4.Q&A
1. vh,vw 可以去參考 introducing_Viewport.html
2. `window.addEventListener('keydown', playHandle)` 鍵盤放開做動作 回傳function
3. 
```
function removeTranstionend(e) {
                if (e.propertyName === 'transform') {
                    e.currentTarget.forEach(function(Item) {
                        Item.classList.remove('playing');
                    })
                    console.log(e.currentTarget)
                }
            }
```
會使用`forEach`是因為, document.querySelector出來的結果有可能是`多個的`,所以ClassList.remove會找不到要remove哪一個,會報錯
4.
`audio.currentTime = 0;` 加入後 可以將延遲時間設為0, 就可以連續call function
5.
```
使用這種方法會有bug 當連續click時, 因為e.propertyName沒有及時snyc會造成animation還留著, 要等到下一個事件發生一並清除
// function removeTranstionend(e) {
            //     const transitionend = document.querySelectorAll('.playing');
            //     if (e.propertyName === 'transform') {
            //         console.log(transitionend)
            //         transitionend.forEach((item) => item.classList.remove('playing'));
            //     }
            // }
````

