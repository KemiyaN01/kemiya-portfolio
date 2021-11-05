let darkmode = 1;
var dark1 = document.getElementById("dark");
var moonbtn = document.getElementById("Mwhite");
//初めにサイトに入ってきた人がダークモードかどうかを確認してテーマを実行している。//
if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    console.log("it is dark");
    document.documentElement.setAttribute('theme', 'dark');
    darkmode = 1;
} else {
    console.log("it's not dark");
    document.documentElement.setAttribute('theme', 'light');
    darkmode = 0;
}

moonbtn.onclick = function() {
    ClickChangeDarkmode();
}

function ChangeDarakmode() {
    document.documentElement.setAttribute('theme', 'dark');
}

function ChangeLightmode() {
    document.documentElement.setAttribute('theme', 'light');
}

function ClickChangeDarkmode() {
    if (darkmode == 1) {
        window.setTimeout(ChangeDarakmode, 1400);
        darkmode = 0;
        dark1.style.animation = "darkwavestart 2s ease 0s 1 normal forwards running";
    } else {
        ChangeLightmode();
        darkmode = 1;
        dark1.style.animation = "darkwaveend 2s ease 0s 1 normal forwards running";
    }
}