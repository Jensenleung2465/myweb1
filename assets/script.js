document.body.addEventListener("click", function (event) {
    const igDialog = document.querySelector(".ig-dialog");
    if (event.target.id === "ig-dialog-open") {
        if (igDialog) {
            igDialog.open = true; // 打开对话框
        } else {
            console.error("igDialog element not found!");
        }
    } else if (event.target.id === "ig-dialog-close") {
        if (igDialog) {
            igDialog.open = false; // 关闭对话框
        } else {
            console.error("igDialog element not found!");
        }
    }
});
const wechatDialog = document.querySelector(".wechat-dialog");
const openWechatDialog = document.getElementById("wechat-dialog-open");
const closeWechatDialog = document.getElementById("wechat-dialog-close");
openWechatDialog.addEventListener("click", () => wechatDialog.open = true);
closeWechatDialog.addEventListener("click", () => wechatDialog.open = false);

const logoutButton = document.getElementById('logout-button');
const logoutMessage = document.getElementById('logout-message');
logoutButton.addEventListener('click', () => {
    logoutButton.remove();
    setTimeout(() => {
        logoutMessage.innerHTML = 'Saving session...<br>...copying shared history...<br>...saving history...truncating history files...<br>...completed.';
        }, 1000);
    setTimeout(() => {
    logoutMessage.innerHTML += '<br><br>[Process completed]';
    }, 2000);
    setTimeout(() => {
        logoutMessage.innerHTML += '<br><br><span class="comment"># Really nice to meet you<br># 很高兴认识你</span>';
    }, 3000);
});