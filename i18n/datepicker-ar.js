/* Arabic Translation for jQuery UI date picker plugin. */
/* Used in most of Arab countries, primarily in Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the United Arab Emirates, Egypt, Sudan and Yemen. */
/* Written by Mohammed Alshehri -- m@dralshehri.com */

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('../datepicker')) || module.exports;;
}(function (datepicker) {
    datepicker.regional['ar'] = {
        closeText: '\u0625\u063A\u0644\u0627\u0642',
        prevText: '&#x3C;\u0627\u0644\u0633\u0627\u0628\u0642',
        nextText: '\u0627\u0644\u062A\u0627\u0644\u064A&#x3E;',
        currentText: '\u0627\u0644\u064A\u0648\u0645',
        monthNames: [
            '\u064A\u0646\u0627\u064A\u0631',
            '\u0641\u0628\u0631\u0627\u064A\u0631',
            '\u0645\u0627\u0631\u0633',
            '\u0623\u0628\u0631\u064A\u0644',
            '\u0645\u0627\u064A\u0648',
            '\u064A\u0648\u0646\u064A\u0648',
            '\u064A\u0648\u0644\u064A\u0648',
            '\u0623\u063A\u0633\u0637\u0633',
            '\u0633\u0628\u062A\u0645\u0628\u0631',
            '\u0623\u0643\u062A\u0648\u0628\u0631',
            '\u0646\u0648\u0641\u0645\u0628\u0631',
            '\u062F\u064A\u0633\u0645\u0628\u0631'
        ],
        monthNamesShort: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12'
        ],
        dayNames: [
            '\u0627\u0644\u0623\u062D\u062F',
            '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
            '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
            '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
            '\u0627\u0644\u062E\u0645\u064A\u0633',
            '\u0627\u0644\u062C\u0645\u0639\u0629',
            '\u0627\u0644\u0633\u0628\u062A'
        ],
        dayNamesShort: [
            '\u0623\u062D\u062F',
            '\u0627\u062B\u0646\u064A\u0646',
            '\u062B\u0644\u0627\u062B\u0627\u0621',
            '\u0623\u0631\u0628\u0639\u0627\u0621',
            '\u062E\u0645\u064A\u0633',
            '\u062C\u0645\u0639\u0629',
            '\u0633\u0628\u062A'
        ],
        dayNamesMin: [
            '\u062D',
            '\u0646',
            '\u062B',
            '\u0631',
            '\u062E',
            '\u062C',
            '\u0633'
        ],
        weekHeader: '\u0623\u0633\u0628\u0648\u0639',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: true,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    datepicker.setDefaults(datepicker.regional['ar']);
    return datepicker.regional['ar'];
}));