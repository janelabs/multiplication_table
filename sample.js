var Sample = {

    initView: function(){
        //box click

        //add row
        var rowCtr = 1;
        $('#addRow').click(function(){
            var tds = "";
            $('#ths th').each(function(){
                if($(this).html() > 0){
                    tds += '<td>'+ rowCtr * $(this).html() +'</td>';
                }
                else{
                    tds += '<td>'+ rowCtr +'</td>';
                }
            });
            $('<tr>'+ tds +'</tr>').appendTo($('#tbl'));
            rowCtr++;
        });

        //add col
        var colCtr = 1;
        $('#addCol').click(function(){
            //$('<th>'+ colCtr++ +'</td>').appendTo($('#ths'));
            alert("Computation for column not yet done");
        });
    }
};