'use strict';

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
      this.dispatchEvent(elem);
      elem.classList.add('sending-metrics');
      return false;
    }
  },

  dispatchEvent: function(elem) {
    var self = this;
    var params = elem.getAttribute('data-metrics').split('|');
    
    window.ga('send', 'event', params[0], params[1], params[2], { 'hitCallback': function() {
      self.onEventIsDispatched.call(self, elem);
    }});
  },

  onEventIsDispatched: function (elem) {
    if (elem.getAttribute('href')) {
      window.location.href = elem.getAttribute('href');
    }

    if (elem.tagName === 'FORM') {
      elem.submit();
    }

    elem.classList.remove('sending-metrics');
  }
};

new DataMetrics().init();