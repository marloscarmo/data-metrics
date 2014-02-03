'use strict';

(function(root) {
  function DataMetrics() {}

  DataMetrics.prototype = {
    init: function() {
      this.addEventListeners();
    },

    addEventListeners: function() {
      var self = this;
      var elements = document.querySelectorAll('*[data-metrics]');
      
      for (var i = 0; i < elements.length; i++) {
        if ( elements[i].tagName !== 'FORM' ) {
          elements[i].onclick = function(e) {
            self.appendEvent.call(self, e);
          };
        } else {
          elements[i].onsubmit = function(e) {
            self.appendEvent.call(self, e);
          };
        }
      }
    },

    appendEvent: function (e) {
      var elem = e.currentTarget;
      
      if (!elem.classList.contains('sending-metrics')) {
        var params = elem.getAttribute('data-metrics').split('|');

        if (params[1] === undefined) params[1] = null;
        if (params[2] === undefined) params[2] = null;

        this.sendToGA(params[0], params[1], params[2], elem);
        elem.classList.add('sending-metrics');

        if (!elem.getAttribute('target')) {
          e.preventDefault();
          return false;
        }
      }
    },

    sendToGA: function(category, action, label, elem) {
      var self = this;

      window.ga('send', 'event', category, action, label, { 'hitCallback': function() {
        if (elem) {
          self.onEventIsDispatched.call(self, elem);
        }
      }});
    },

    onEventIsDispatched: function (elem) {
      if ( (elem.getAttribute('href')) && (!elem.getAttribute('target')) ) {
        window.location.href = elem.getAttribute('href');
      } else if (elem.tagName === 'FORM') {
        elem.submit();
      }

      elem.classList.remove('sending-metrics');
    }
  };

  root.dataMetrics = new DataMetrics();
  root.dataMetrics.init();

})(this);

