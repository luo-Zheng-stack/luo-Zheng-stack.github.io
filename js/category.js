// 等待DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
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
});
// 获取所有导航标签
const navItems = document.querySelectorAll('.nav-item');

// 给每个标签绑定点击事件
navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止a标签默认跳转（如果不需要跳转的话）
    
    // 移除所有left-item的active类
    document.querySelectorAll('.left-item').forEach(div => {
      div.classList.remove('active');
    });
    
    // 给当前点击标签的父级div添加active类
    this.parentElement.classList.add('active');
  });
});
// 统计勾选商品数量并控制按钮显示/隐藏
document.addEventListener('DOMContentLoaded', function() {
  // 获取元素
  const checkboxes = document.querySelectorAll('.goods-checkbox');
  const countElement = document.getElementById('goods-count');
  const confirmBtnContainer = document.querySelector('.submit-btn-container');
  const confirmBtn = document.querySelector('.confirm-btn');

  // 统计勾选数量并更新按钮状态的函数
  function updateCountAndBtnStatus() {
    let checkedCount = 0;
    // 遍历复选框统计勾选数量
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });
    // 更新件数显示
    countElement.textContent = checkedCount;
    // 控制按钮显示/隐藏：勾选数>0则显示，否则隐藏
    if (checkedCount > 0) {
      confirmBtnContainer.classList.add('show');
    } else {
      confirmBtnContainer.classList.remove('show');
    }
  }

  // 为每个复选框添加状态变化监听
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCountAndBtnStatus);
  });

  // 确定按钮点击事件（可根据需求扩展）
  confirmBtn.addEventListener('click', function() {
    const count = countElement.textContent;
    if (count == 0) {
      alert('请选择商品后再提交！');
    } else {
      alert(`你选择了 ${count} 件商品，提交成功！`);
      // 可添加跳转到购物车/结算页面的逻辑，或清空勾选状态
      // 示例：清空勾选并隐藏按钮
    }
  });
});

