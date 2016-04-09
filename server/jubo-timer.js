var timer = new Jubo.connect();

timer.whoami("KLjiumbR3ZkwcrkJJ","86227",function(error) {
  if(!error) {
    timer.subscribe('status', function(property,parameters) {
      if(property === 'start') {
        var triggers = 1;
        if(parameters.timerType === 'always') {
          var handle = Meteor.setInterval(function() {
            timer.adjust('trigger', triggers++, parameters);
          }, parameters.delay);
        } else if(parameters.timerType === 'once') {
          var handle = Meteor.setTimeout(function() {
            timer.adjust('trigger', triggers++, parameters);
          }, parameters.delay);
        }
      } else if(property === 'stop') {
      }
    });
  }
});

