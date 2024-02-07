console.log("Welcom to Plant Care Taker")
$(function(){
    $.ajax({
        type: 'GET',
        url: 'http://wsl.localhost:5000/api/v1/status'
    })
})