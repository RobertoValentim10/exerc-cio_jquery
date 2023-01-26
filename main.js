$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefaDigitada = $('#texto-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<a href="#">${tarefaDigitada}</a>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ol')
        $('li').click(function(){
            $(this).addClass('item-risco')
        })
    })
})