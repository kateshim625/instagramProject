const ids = document.querySelectorAll(".story p");
ids.forEach(id => {
    if(id.innerHTML.length > 10) {
        const longId = id.innerHTML;
        id.innerHTML = longId.slice(0, 8)+'...';
    }
})