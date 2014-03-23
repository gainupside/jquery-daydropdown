(function($) {

    $.fn.dayDropDown = function(monthSelector) {

        if(!monthSelector.length) {
            throw new Error("Not a month selector");
        }

        var daysInMonth = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        };

        var daySelector = this;

        monthSelector.on("change", function(){

            var prev = parseInt(daySelector.find("option:selected").val(), 10);

            var option = '';
            var month = monthSelector.val();

            $(daySelector).find('option').each(function() {
                $(this).remove();
            });

            for (var day =  1; day <= daysInMonth[month]; day++) {
                option += '<option value="' + day + '">' + day + '</option>';
            }
            daySelector.append(option);
            daySelector.val(Math.min(prev, daysInMonth[month]).toString());
        });

    };


})(jQuery);

