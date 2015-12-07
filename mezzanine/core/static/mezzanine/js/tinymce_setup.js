
// Map Django language codes to valid TinyMCE language codes.
// There's an entry for every TinyMCE language that exists,
// so if a Django language code isn't here, we can default to en.

var language_codes = {
    'ar': 'ar',
    'ca': 'ca',
    'cs': 'cs',
    'da': 'da',
    'de': 'de',
    'es': 'es',
    'et': 'et',
    'fa': 'fa',
    'fa-ir': 'fa_IR',
    'fi': 'fi',
    'fr': 'fr_FR',
    'hr-hr': 'hr',
    'hu': 'hu_HU',
    'id-id': 'id',
    'is-is': 'is_IS',
    'it': 'it',
    'ja': 'ja',
    'ko': 'ko_KR',
    'lv': 'lv',
    'nb': 'nb_NO',
    'nl': 'nl',
    'pl': 'pl',
    'pt-br': 'pt_BR',
    'pt-pt': 'pt_PT',
    'ru': 'ru',
    'sk': 'sk',
    'sr': 'sr',
    'sv': 'sv_SE',
    'tr': 'tr',
    'uk': 'uk_UA',
    'vi': 'vi',
    'zh-cn': 'zh_CN',
    'zh-tw': 'zh_TW',
    'zh-hant': 'zh_TW',
    'zh-hans': 'zh_CN'
};

function custom_file_browser(field_name, url, type, win) {
    tinyMCE.activeEditor.windowManager.open({
        title: 'Select ' + type + ' to insert',
        file: window.__filebrowser_url + '?pop=5&type=' + type,
        width: 800,
        height: 500,
        resizable: 'yes',
        scrollbars: 'yes',
        inline: 'yes',
        close_previous: 'no'
    }, {
        window: win,
        input: field_name
    });
    return false;
}

jQuery(function($) {

    if (typeof tinyMCE != 'undefined') {

        tinyMCE.init({
        	    selector: "textarea.mceEditor",  
    			 language: "zh_TW",
             fontsize_formats: "8pt 10pt 12pt 26pt 36pt 48pt 62pt 70pt",
             theme: "modern",
             width: "100%",
             height: "600",
             plugins: [
               "advlist autolink link image  lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor"
             ],

             toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons | fontselect | fontsizeselect",
             setup: function(ed) {
               ed.on('init', function() {
                 this.getDoc().body.style.fontSize = '12px'; 
               });
             },
 
             file_browser_callback: function(field_name, url, type, win) {
               if(type=='image') {     	
                 $('#selectFile').click();
               }
             }
        });

    }

});
