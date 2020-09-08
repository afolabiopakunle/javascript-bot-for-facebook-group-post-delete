setInterval(function () {
    let deleteButtons = document.querySelectorAll('.sx_1e2b64'); //selection of the delete button
    deleteButtons.forEach(btn => btn.click());
    setInterval(function () {
        let del = document.querySelectorAll('.layerConfirm');
        del.forEach(btn => btn.click());
    }, 5000)
    window.scrollBy(0, 10000)
}, 15000)