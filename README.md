##Graylog2 with email


*To install*

`npm i graylog2-email`

*To use*

	
~~~~ 
const { Logger } = require('graylog2-email');

const logger = new Logger({
    host : '', 
    port, // optional parameter
    hostname : '', 
    facility, // optional parameter
    topic : '', 
    sns : new aws.SNS()
});

logger.email('This a test message', { data : 'example' });