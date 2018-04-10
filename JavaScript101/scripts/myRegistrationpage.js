(function(){
    $('#login').submit(function(e){
        e.preventDefault();
        var $name = $('#name').val();
        var $lastname =$('#lastName').val()
        alert('Hello' + ' ' + $name + ' ' + $lastname)
    })

    })();