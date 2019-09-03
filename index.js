const graylog2 = require("graylog2");

class Logger extends graylog2.graylog{
  constructor({ host, port, hostname, facility, topic, sns }){
    super({
      servers: [ { host: host, port: port || 12201 } ],
      hostname: hostname,
      facility: facility || 'Node.js',
      bufferSize: 1350
    });
    this.topic = topic;
    if(!topic || !host || !hostname || !sns) throw new Error('Missing required parameter!');
  }
  email(message, data){
    return this.sns.publish({ Message: message, TopicArn: this.topic }, () => this.log(message, data));
  }
}

module.exports = { Logger };
