$(document).ready(function() {
$('.submitForm').click(function(event){
    event.preventDefault();
    console.log('clicked');

    var name = $('.name').val();
    var email = $('.email').val();
    var tel = $('.tel').val();
    var message = $('.message').val();
    var isValid = $('.valid')


    if(email.length > 5 && email.includes('@') && email.includes('.')){
       email.append('Please Enter a Vaild Email'); 
    }else{
        
    }
    if (name.length  >= 8  ){
    }
})
})