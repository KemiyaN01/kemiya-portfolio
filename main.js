//ダークモード切り替え用変数。
let darkmode = 1;
var dark1 = document.getElementById("i_dark");
var moonbtn = document.getElementById("Mwhite");
//初めにサイトに入ってきた人がダークモードかどうかを確認してテーマを実行している。//
if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    document.documentElement.setAttribute('theme', 'dark');
    darkmode = 1;
} else {
    document.documentElement.setAttribute('theme', 'light');
    darkmode = 0;
}
console.log(darkmode);
//月のクリック
moonbtn.onclick = function() {
        ClickChangeDarkmode();
    }
    //ダークモード
function ChangeDarakmode() {
    document.documentElement.setAttribute('theme', 'dark');
}
//ライトモード
function ChangeLightmode() {
    document.documentElement.setAttribute('theme', 'light');
}
//ダークモード・ライトモードのアニメーションを開始している
function ClickChangeDarkmode() {
    if (darkmode == 0) {
        window.setTimeout(ChangeDarakmode, 700);
        darkmode = 1;
        dark1.style.animation = "darkwavestart 1s ease 0s 1 normal forwards running";
    } else {
        ChangeLightmode();
        darkmode = 0;
        dark1.style.animation = "darkwaveend 1s ease 0s 1 normal forwards running";
    }
}