function filterMenu(category) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = Array.from(btns).find(btn => btn.getAttribute('onclick').includes(category));
    if(activeBtn) activeBtn.classList.add('active');

    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}