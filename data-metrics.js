function DataMetrics() {}

DataMetrics.prototype = {
  init: function() {
    this.getItems();
  },

  getItems: function() {
    var self = this;

    $('*[data-metrics]').click(function() {
      if (!$(this).hasClass('sending-metrics')) {
        self.dispatchEvent($(this));
        $(this).addClass('sending-metrics');
        return false;
      }
    });

    $('form[data-metrics]').submit(function() {
      if (!$(this).hasClass('sending-metrics')) {
        self.dispatchEvent($(this));
        $(this).addClass('sending-metrics');
        return false;
      }
    });
  },

  dispatchEvent: function(elem) {
    var params = elem.attr('data-metrics').split('|');
    window.ga('send', 'event', params[0], params[1], params[2], { 'hitCallback': function() {
      if (elem.attr('href')) {
        window.location.href = elem.attr('href');
      }

      if (elem.prop('tagName') === 'FORM') {
        elem.submit();
      }

      elem.removeClass('sending-metrics');
    }});
  }
};

var dataMetrics = new DataMetrics().init();
