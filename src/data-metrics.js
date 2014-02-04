'use strict';

(function (ga) {
    function DataMetrics() {
        this.init();
    }

    DataMetrics.prototype = {
        init: function () {
            this.addEventListeners();
        },

        addEventListeners: function () {
            var elements = document.querySelectorAll('*[data-metrics]');
            for (var i = 0; i < elements.length; i++) {
                if (!this.isForm(elements[i])) {
                    elements[i].addEventListener('click', this.appendEvent.bind(this), false);
                } else {
                    elements[i].onsubmit = this.appendEvent.bind(this);
                }
            }
        },

        isForm: function (elem) {
            if (elem.tagName === 'FORM') {
                return true;
            } else {
                return false;
            }
        },

        appendEvent: function (e) {
            var elem = e.currentTarget;

            if (!elem.classList.contains('sending-metrics')) {
                var params = elem.getAttribute('data-metrics').split('|');

                if (params[1] === undefined) {
                    params[1] = null;
                }
                if (params[2] === undefined) {
                    params[2] = null;
                }
                this.sendToGA(params[0], params[1], params[2], elem);
                elem.classList.add('sending-metrics');

                if (!this.isForm(elem) && !elem.getAttribute('target')) {
                    e.preventDefault();
                    return false;
                }
            }
        },

        sendToGA: function (category, action, label, elem) {
            var self = this;
            window.ga('send', 'event', category, action, label, { 'hitCallback': function () {
                self.onHitCallback(elem);
            }});
        },

        onHitCallback: function (elem) {
            if (elem) {
                this.onEventIsDispatched(elem);
            }
        },

        onEventIsDispatched: function (elem) {
            if (elem.getAttribute('href') && !elem.getAttribute('target')) {
                window.location.href = elem.getAttribute('href');
            } else if (this.isForm(elem)) {
                elem.submit();
            }

            elem.classList.remove('sending-metrics');
        }
    };

    window.dataMetrics = new DataMetrics();

})(window.ga);

