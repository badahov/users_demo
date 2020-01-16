'use strict';

import appConfig from '../../../../config';

export default class Filters
{
    params     = [];
    query      = null;
    nextHeader = null;
    header     = null;
    page       = null;
    callback   = null;
    action   = null;

    constructor(options) {
        if (options.params !== undefined) {
            this.params = options.params;
        }

        if (options.query !== undefined) {
            this.query = options.query;
        }

        if (options.nextHeader !== undefined) {
            this.nextHeader = options.nextHeader;
        }

        if (options.header !== undefined) {
            this.header = options.header;
        }

        if (options.page !== undefined) {
            this.page = options.page;
        }

        if (options.callback !== undefined) {
            this.callback = options.callback;
        }

        if (options.action !== undefined) {
            this.action = options.action;
        }
    }

    isUpdate = () => {
        let isUpdate = false;

        this.params.map(param => {
            if (this.header[param] !== this.nextHeader[param]) {
                this.query[param] = this.nextHeader[param];
                this.query.page = 1;

                delete this.query.sort;

                appConfig.history.push({pathname: this.page, query: this.query});

                if (this.callback) {
                    this.callback();
                }

                if (this.action) {
                    this.action();
                }

                isUpdate = true;
            } else if (this.query[param] === '') {
                delete this.query[param];
                appConfig.history.push({pathname: this.page, query: this.query});
            }
        });

        return isUpdate;
    };
}
