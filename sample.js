var Sample = {

    initView: function(){
        //box click
        $('#the_box').click(function(){
            var pos = $(this).position();
            var leftPos = pos.left;

            $(this).css({ left: leftPos+1 });
        });

        //add row
        var rowCtr = 1;
        $('#addRow').click(function(){
            var tdsRow = "";
            $('#ths td').each(function(){
                if($(this).html() > 1){
                    tdsRow += '<td>'+ rowCtr * $(this).html() +'</td>';
                }
                else{
                    tdsRow += '<td>'+ rowCtr +'</td>';
                }
            });
            $('<tr>'+ tdsRow +'</tr>').appendTo($('#tbl'));
            rowCtr++;
        });

        //add col
        var colCtr = 2;
        $('#addCol').click(function(){
            $('#tbl tr').each(function(key, val){
                var a = $(val).text();
                var b = parseInt(a.charAt(0));
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