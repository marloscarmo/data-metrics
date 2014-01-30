function DataMetrics() {}

DataMetrics.prototype = {
  init: function() {
    this.getItems()
  },

  getItems: function() {
    var self = this;

    $('form[data-metrics]').submit(function(e) {
      if (!$(this).hasClass('sending-metrics')) {
        e.preventDefault();

        $(this).addClass('sending-metrics');
        self.dispatchEvent($(this));
      }
    });

    $('*[data-metrics]').click(function() {
      self.dispatchEvent($(this));
    });
  },

  dispatchEvent: function(elem) {
    var params = elem.attr('data-metrics').split('|');
    window.ga('send', 'event', params[0], params[1], params[2], { 'hitCallback': function() {
      if (elem.prop('tagName') === 'FORM') {
        elem.submit();
      }
    }});
  }
};

var dataMetrics = new DataMetrics().init();
