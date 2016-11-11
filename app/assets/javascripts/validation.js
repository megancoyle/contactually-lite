// removes disable attribute when file has been uploaded
$(document).ready(
    function(){
        $('input:file').change(
            function(){
                if ($(this).val()) {
                    $('input:submit').attr('disabled',false);
                }
            }
            );
});
