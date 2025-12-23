// 等待DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 初始化：将所有商品数量设为1（默认0不合理，改为初始1）
    initItemNum();

    // 2. 绑定数量加按钮事件
    bindAddBtnEvent();

    // 3. 绑定数量减按钮事件
    bindMinusBtnEvent();

    // 4. 绑定复选框变化事件
    bindCheckboxEvent();

    // 5. 初始化时计算一次总价
    calculateTotalPrice();
});


    // 获取返回按钮元素
    const backBtn = document.querySelector('.back-btn');
    
    // 为返回按钮绑定点击事件
    backBtn.addEventListener('click', function(e) {
        // 阻止a标签默认的跳转行为（避免跳转到#锚点）
        e.preventDefault();
        
        // 调用浏览器的返回功能，回到上一页
        window.history.back();
        
        // 可选：如果没有上一页记录，跳转到首页（可根据需求修改目标页面）
        if (window.history.length === 1) {
            window.location.href = 'index.html';
        }
    });

/**
 * 初始化商品数量为1
 */
function initItemNum() {
    const numElements = document.querySelectorAll('.item-num a:nth-child(2)');
    numElements.forEach(el => {
        el.textContent = '1';
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // 给父级.cart-tabs绑定事件，委托给内部的.cart-state
    document.querySelector('.cart-tabs').addEventListener('click', function(e) {
        // 找到点击的a标签（.cart-state）
        const link = e.target.closest('.cart-state');
        if (!link) return; // 不是点击a标签，直接返回

        e.preventDefault();
        const currentParentTab = link.closest('.cart-tab');
        const allCartTabs = document.querySelectorAll('.cart-tab');

        // 移除所有active类
        allCartTabs.forEach(tab => tab.classList.remove('active'));
        // 添加当前active类
        currentParentTab.classList.add('active');

        // 可选：筛选/跳转逻辑
    });
});
/**
 * 绑定数量加按钮事件
 */
function bindAddBtnEvent() {
    const addBtns = document.querySelectorAll('.add-btn');
    addBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 阻止a标签默认跳转行为
            e.preventDefault();
            // 获取数量显示的元素（加号按钮的下一个兄弟元素）
            const numEl = this.nextElementSibling;
            let currentNum = parseInt(numEl.textContent);
            // 数量加1
            numEl.textContent = currentNum + 1;
            // 重新计算总价
            calculateTotalPrice();
        });
    });
}

// 获取所有导航标签
const cart = document.querySelectorAll('.cart-state');

// 给每个标签绑定点击事件
navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止a标签默认跳转（如果不需要跳转的话）
    
    // 移除所有left-item的active类
    document.querySelectorAll('.cart-tab').forEach(div => {
      div.classList.remove('active');
    });
    
    // 给当前点击标签的父级div添加active类
    this.parentElement.classList.add('active');
  });
});
/**
 * 绑定数量减按钮事件（数量不能小于0）
 */
function bindMinusBtnEvent() {
    const minusBtns = document.querySelectorAll('.minus-btn');
    minusBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // 获取数量显示的元素（减号按钮的上一个兄弟元素）
            const numEl = this.previousElementSibling;
            let currentNum = parseInt(numEl.textContent);
            // 边界处理：数量不能小于0
            if (currentNum > 1) {
                numEl.textContent = currentNum - 1;
                // 重新计算总价
                calculateTotalPrice();
            }
        });
    });
}

/**
 * 绑定复选框变化事件
 */
function bindCheckboxEvent() {
    const checkboxes = document.querySelectorAll('.check-box');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // 复选框状态变化时重新计算总价
            calculateTotalPrice();
        });
    });
}

/**
 * 计算选中商品的总价
 */
function calculateTotalPrice() {
    let totalPrice = 0;
    // 获取所有商品项
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        // 获取当前商品的复选框状态
        const isChecked = item.querySelector('.check-box').checked;
        if (isChecked) {
            // 获取商品单价（截取¥后的数字，转为浮点数）
            const priceText = item.querySelector('.item-price').textContent;
            const price = parseFloat(priceText.slice(1));
            // 获取商品数量（转为整数）
            const num = parseInt(item.querySelector('.item-num a:nth-child(2)').textContent);
            // 累加总价（单价 * 数量）
            totalPrice += price * num;
        }
    });

    // 将总价显示到页面（保留2位小数）
    const priceElement = document.querySelector('.total-price .price');
    priceElement.textContent = `¥${totalPrice.toFixed(2)}`;

    // 控制结算按钮的启用/禁用：总价>0则启用，否则禁用
    const payBtn = document.querySelector('.pay-btn');
    payBtn.disabled = totalPrice <= 0;
}