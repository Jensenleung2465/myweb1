document.querySelector('#expand-intl').addEventListener('click', function () {
    const content = `
        <span class="comment"># 国际平台<br>--------</span><br>
        <i class="fa-brands fa-telegram fa-sm"></i>Telegram: <a href="https://t.me/winmemzqwq" target="_blank" class="link">@winmemzqwq</a><br>
        <span class="comment">--------</span><br>
        <i class="fa-brands fa-discord"></i>Discord: <a href="https://discord.com/users/742704239410675725" target="_blank" class="link">winmemzqwq</a><br>
        <span class="comment">--------</span><br>
        <i class="fa-brands fa-twitter"></i>Twitter: <span class="comment"># (现在的 <i class="fa-brands fa-x-twitter"></i>)</span><br>
        <a href="https://twitter.com/winmemzqwq" target="_blank" class="link">@winmemzqwq</a><br>
        <span class="comment">--------</span><br>
        <i class="fa-brands fa-github"></i>GitHub: <a href="https://github.com/maoawa" target="_blank" class="link">maoawa</a><br>
        <span class="comment">--------</span><br>
        <i class="fa-brands fa-instagram"></i>Instagram: <a href="https://www.instagram.com/winmemzqwq" target="_blank" class="link">@winmemzqwq</a><br>
        <span class="comment"># 目前不可用, <a id="ig-dialog-open" class="link">点这里了解详情</a></span><br>
        <mdui-dialog close-on-esc close-on-overlay-click class="ig-dialog">
            <mdui-button id="ig-dialog-close">关闭</mdui-button><br>
            Meta 因为我<strong>无法接收发给大陆手机号的验证码</strong>而<strong>禁止了我</strong>访问我的账户 (悲)<br>
            我正在尝试解决，<strong>这可能需要一些时间</strong><br>
            但是我还是很开心，因为你仍然能欣赏我以前发布的照片!
        </mdui-dialog>
        <span class="comment">--------</span><br>
        <i class="fa-brands fa-steam"></i>Steam: <a href="https://web.archive.org/web/20240717162027/https://steamcommunity.com/id/WinMEMZ" target="_blank" class="link">@winmemzqwq</a><br>
        <span class="comment">--------</span><br>
        <i class="fa-solid fa-envelope"></i>邮箱: <a href="https://maao.cc/anti-spam-robots?method=mailto&contact=gmail&are-you-robot=im-not-a-robot" target="_blank" class="link"><i class="fa fa-w fa-xs"></i><i class="fa fa-i fa-xs"></i><i class="fa fa-n fa-xs"></i><i class="fa fa-m fa-xs"></i><i class="fa fa-e fa-xs"></i><i class="fa fa-m fa-xs"></i><i class="fa fa-z fa-xs"></i><i class="fa fa-q fa-xs"></i><i class="fa fa-w fa-xs"></i><i class="fa fa-q fa-xs"></i><i class="fa fa-at fa-xs"></i><i class="fa fa-g fa-xs"></i><i class="fa fa-m fa-xs"></i><i class="fa fa-a fa-xs"></i><i class="fa fa-i fa-xs"></i><i class="fa fa-l fa-xs"></i>.<i class="fa fa-c fa-xs"></i><i class="fa fa-o fa-xs"></i><i class="fa fa-m fa-xs"></i></a><br>
        <span class="comment">--------</span><br>
        <i class="fa-solid fa-mobile"></i>电话:<br>
        <a href="https://maao.cc/anti-spam-robots?method=tel&contact=us-num-la&are-you-robot=im-not-a-robot" target="_blank" class="link"><i class="fa fa-plus"></i><i class="fa fa-1"></i> (<i class="fa fa-2"></i><i class="fa fa-1"></i><i class="fa fa-3"></i>)<i class="fa fa-3"></i><i class="fa fa-2"></i><i class="fa fa-0"></i>-<i class="fa fa-6"></i><i class="fa fa-8"></i><i class="fa fa-8"></i><i class="fa fa-8"></i></a> <span class="comment"># 北美洲</span><br>
        <a href="https://maao.cc/anti-spam-robots?method=tel&contact=eu-num-uk&are-you-robot=im-not-a-robot" target="_blank" class="link"><i class="fa fa-plus"></i><i class="fa fa-4"></i><i class="fa fa-4"></i> <i class="fa fa-7"></i><i class="fa fa-7"></i><i class="fa fa-1"></i><i class="fa fa-9"></i> <i class="fa fa-7"></i><i class="fa fa-7"></i><i class="fa fa-4"></i><i class="fa fa-8"></i><i class="fa fa-5"></i><i class="fa fa-4"></i></a> <span class="comment"># 欧洲</span><br>
    `;
    document.querySelector('#intl').innerHTML = content;
    this.remove();
});