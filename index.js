console.log("Hello World");
/*
$(document.ready( function(){
    $("ul").on("click", input[type=checkbox], function(){
        $(this).closest("li").toggleClass("completed-todo")
    })
})
*/
var nameoftodo=$("#add-to-do-button");
$(document).ready(function(){
    console.log("the ship has landed")
    $("#add-to-do-button").click(function(){
        console.log("this Works")
            var NameOfTodo=$("#Add-todo-textbox").val()
            console.log*(nameoftodo)
              var lengthOfTodo=$("#add-length-textbox").val()
            $("ul").append("<li><input type='checkbox'/>"+NameOfTodo+"<span class= 'time-estimate'> "+lengthOfTodo+" minutes</span></li>")
  

            console.log*(lengthOfTodo)
        
    })

})