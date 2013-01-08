var Sample = {

    initView: function(){
        //add row
        var rowCtr = 2;
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

        //tooltip show
        $(document).tooltip({
            tooltipClass: "tooltip-class",
            position: { my: "left+15 center", at: "right center" }
        });

        //button style
        $('button').button({
            icons: { primary: "ui-icon-plus" }
        });
    }
};