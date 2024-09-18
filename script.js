let isBright = true; // 记录当前亮度状态，默认为亮

// 切换图片亮度
document.getElementById('切换亮度').onclick = function() {
    const mainImage = document.getElementById('mainImage'); // 获取大图元素
    isBright = !isBright; // 切换亮度状态
    // 根据亮度状态设置图片的亮度，isBright为true时不调整亮度，为false时降低亮度
    mainImage.style.filter = isBright ? 'none' : 'brightness(0.5)'; 
    // 更新按钮文本，指示当前状态
    this.innerText = isBright ? '亮' : '暗'; 
};

// 切换大图
function changeImage(imageSrc) {
    // 更新大图的src属性，切换显示的新图片
    document.getElementById('mainImage').src = imageSrc; 
}
