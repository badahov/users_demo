


(function($) {
    const FilterData = function(element, options)
    {
        const settings = $.extend({}, $.fn.filter_data.defaults, options);

        const input = $(element).parent().find('input');

        //console.log('input', input);

        let val = input.val();

        if (val) {
            let placeholder = input.attr('placeholder');
            let is_placeholder = input.parent().children('.placeholder').hasClass('placeholder');

            if (!is_placeholder) {
                input.parent().append('<div class="placeholder">' + placeholder + '</div>');
                input.attr({'placeholder' : ''});

                input.parent().children('.fa-search').css('color', settings.color_search.focus);
                input.css('border-bottom','1px solid ' + settings.color_search.focus);
            }
        }

        $(element).click(function(e) {
            let sort_arr = [];

            this.sort_class = $(this).attr('class');
            this.sort_id    = $(this).attr('id');

            if (typeof(this.sort_id) !== 'undefined') {
                const sort_e = $("div.cell-2");

                $.each(sort_e, function(i, val) {
                    $(val).attr( 'class', 'cell-2 sorting' );
                });

                switch(this.sort_class) {
                    case settings.class_element + ' sorting':
                        $(element).attr('class', settings.class_element + ' sorting_desc');
                        this.sort_status = 'desc';

                        sort_arr.push({name : this.sort_id, status : this.sort_status});
                        break;
                    case settings.class_element + ' sorting_asc':
                        $(element).attr( 'class', settings.class_element + ' sorting_desc');
                        this.sort_status = 'desc';

                        sort_arr.push({name : this.sort_id, status : this.sort_status});
                        break;
                    case settings.class_element + ' sorting_desc':
                        $(element).attr('class', settings.class_element + ' sorting_asc');
                        this.sort_status = 'asc';

                        sort_arr.push({name : this.sort_id, status : this.sort_status});
                        break;
                }

                const salf = this;
                $.each(settings.sort_arr_element, function(i, val) {
                    if (salf.sort_id !== val) {
                        $('#'+val).attr('class', settings.class_element + ' sorting');
                    }
                });

                settings.fsort(sort_arr);
            }
        });

        input.focus(function(e) {
            let placeholder = $(this).attr('placeholder');

            let is_placeholder = $(this).parent().children('.placeholder').hasClass('placeholder');

            if (!is_placeholder) {
                $(this).parent().append('<div class="placeholder">' + placeholder + '</div>');
                $(this).attr({'placeholder' : ''});
            }

            $(this).parent().children('.fa-search').css('color', settings.color_search.focus);
            $(this).css('border-bottom','1px solid ' + settings.color_search.focus); // border-bottom: 1px solid #e5e6e7;
        });

        input.blur(function() {
            let val = $(this).val();

            if (val.length === 0) {
                let is_placeholder = $(this).parent().children('.placeholder').hasClass('placeholder');

                if (is_placeholder) {
                    let placeholder = $(this).parent().children('.placeholder').text();
                    $(this).attr({'placeholder' : placeholder});
                    $(this).parent().children('.placeholder').remove();
                }

                $(this).parent().children('.fa-search').css('color', settings.color_search.blur);
                $(this).css('border-bottom','1px solid #e5e6e7');
            }
        });
    };

    $.fn.filter_data = function(options) {
        return this.each(function(key, value) {
            const element = $(this);
            // Return early if this element already has a plugin instance
            if(element.data('filter_data'))
                return element.data('filter_data');
            // Pass options to plugin constructor
            const filter_data = new FilterData(this, options);
            // Store plugin object in this element's data
            element.data('filter_data', filter_data);
        });
    };

    //Default settings
    $.fn.filter_data.defaults = {
        color_search: {blur: "#999", focus: "#ac2925"},
        object: null,
        fsort: null,
        class_element: 'cell-2',
        sort_arr_element: ["sort-id", "sort-clien", "sort-project", "sort-user-add"],
        test: "#000"
    };
})(jQuery);
