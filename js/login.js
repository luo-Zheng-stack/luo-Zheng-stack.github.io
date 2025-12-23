document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    // 获取输入框
    const usernameInput = document.querySelector('input[placeholder="手机号/用户名"]');
    const passwordInput = document.querySelector('input[placeholder="登录密码"]');

    loginBtn.addEventListener('click', function() {
        // 简单验证：输入框不为空
        if (!usernameInput.value.trim()) {
            alert('请输入手机号/用户名');
            return;
        }
        if (!passwordInput.value.trim()) {
            alert('请输入登录密码');
            return;
        }

        // 验证通过后跳转
        window.location.href = 'index.html';
    });
});