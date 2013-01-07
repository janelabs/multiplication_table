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
            $('<th>'+ colCtr++ +'</td>').appendTo($('#ths'));
        });
    }
};