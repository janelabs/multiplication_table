var Sample = {

    initView: function(){
        //box click

        //add row
        var rowCtr = 1;
        $('#addRow').click(function(){
            var tds = "";
            $('#ths td').each(function(){
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
        var colCtr = 2;
        $('#addCol').click(function(){
            $('#tbl tr').each(function(){
                console.log($($(this).find('td:first')).text());
                var b = parseInt($($(this).find('td:first')).text());
                if(b){
                    $('<td>'+ colCtr * b +'</td>').appendTo($(this));
                }
                else{
                    $('<td>'+ colCtr +'</td>').appendTo($(this));
                }
            });
            colCtr++
        });
    }
};