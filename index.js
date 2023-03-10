function addingEventListener() {
    const input = document.getElementById('button');
    function clickHandle() {
        alert("I was clicked");
    }
input.addEventListener('click', clickHandle);
}
