$(document).ready(function(){
    console.log("the ship has landed")
    $("#add-to-do-button").click(function(){
        console.log("this Works")
            var NameOfTodo=$("#Add-todo-textbox").val()
              var lengthOfTodo=$("#add-length-textbox").val()
            $("ul").append("<li><input type='checkbox'/>"+NameOfTodo+"<span class= 'time-estimate'> "+lengthOfTodo+" minutes</span></li>")
  

            console.log*(lengthOfTodo)
        
    })
   
    $("input[type='checkbox']").click(function(){
        $(this).closest("li").toggleClass("completed-todo")
    })
})