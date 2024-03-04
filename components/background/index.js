function bg(selector, imgRoute) {
    const element = document.querySelector(selector);
    element.classList.add('bg-img');
    element.setAttribute('style',`background-image: url("${imgRoute}")`)

}