#!/usr/bin/env node

'use strict';

var argv = require('optimist')
    .usage('Crawl the web using the Flexible ' + 
           'module for Node.js.\nUsage: $0')

    .alias('url', 'uri')
    .string('url')
    .describe('url', 'URL of web page to ' + 
              'begin crawling on.')
    .demand('url')

    .alias('domains', 'd')
    .string('domains')
    .describe('domains', 'List of domains ' + 
              'to allow crawling of.')

    .alias('interval', 'i')
    .describe('interval', 'Request ' + 
              'interval of each crawler.')

    .alias('encoding', 'e')
    .string('encoding')
    .describe('encoding', 'Encoding of response ' + 
              'body for decoding.')

    .alias('max-concurrency', 'm')
    .describe('max-concurrency', 'Maximum ' + 
              'concurrency of each crawler.')

    .alias('max-crawl-queue-length', 'M')
    .describe('max-crawl-queue-length', 
              'Maximum length of the crawl queue.')

    .alias('user-agent', 'A')
    .string('user-agent')
    .describe('user-agent', 'User-agent to ' + 
              'identify each crawler as.')

    .alias('timeout', 't')
    .describe('timeout', 'Maximum seconds a ' + 
              'request can take.')

    .boolean('follow-redirect')
    .describe('follow-redirect', 'Follow HTTP ' + 
              'redirection responses.')

    .describe('max-redirects', 'Maximum ' + 
              'amount of redirects.')

    .alias('proxy', 'p')
    .string('proxy')
    .describe('proxy', 'An HTTP proxy ' + 
              'to use for requests.')

    .alias('controls', 'c')
    .boolean('controls')
    .describe('controls', 'Enable pause ' + 
              '(ctrl-p), resume (ctrl-r), ' + 
              'and abort (ctrl-a).')
    .default('controls', true)

    .alias('pg-uri', 'pg-url')
    .string('pg-uri')
    .describe('pg-uri', 'PostgreSQL URI ' + 
              'to connect to for queue.')

    .describe('pg-get-interval', 
              'PostgreSQL queue ' + 
              'get request interval.')

    .describe('pg-max-get-attempts', 
              'PostgresSQL queue ' + 
              'max get attempts.')

    .argv;

if (argv.domains) {
    var domains = argv.domains.split(',');
    argv.domains = [];
    for (var i = 0; i < domains.length; i++) {
        argv.domains[i] = domains[i].trim();
    }
}

var flexible = require('..');
var crawler = flexible({
    url: argv.url,
    domains: argv.domains || [],
    interval: argv.interval,
    encoding: argv.encoding,
    max_concurrency: argv['max-concurrency'],
    max_crawl_queue_length: 
    argv['max-crawl-queue-length'],
    user_agent: argv['user-agent'],
    timeout: argv.timeout,
    follow_redirect: argv['follow-redirect'],
    max_redirects: argv['max-redirects'],
    proxy: argv.proxy
}).route('*', function (req) {
    console.log('Crawled:', req.uri.href);
}).once('complete', function () {
    console.log('Crawling has been completed.');
    process.exit();
}).on('paused', function () {            
    console.log('Crawling has been paused.');
}).on('resumed', function () {            
    console.log('Crawling has been resumed.');
}).on('error', function (error) {
    console.error('Error:', error.message);
});

if (argv['pg-uri']) {
    crawler.use(flexible.pgQueue({
        uri: argv['pg-uri'],
        get_interval: argv['pg-get-interval'],
        max_get_attempts: argv['pg-max-get-attempts']
    }));
}

if (argv.controls) {
    process.stdin.on('data', function (s) {
        if (s = s.toString() > '\x1a') {return;}

        var char_code = s.charCodeAt(0) + 
            'a'.charCodeAt(0) - 1;
        switch (String.fromCharCode(char_code)) {
        case 'p': crawler.pause(); break;
        case 'r': crawler.resume(); break;
        case 'a': crawler.abort(); break;
        case 'c': process.exit(); break;
        default: break;
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
}