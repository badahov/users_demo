import appConfig from '../../../../config';

class Filters {
  constructor(options) {
    this.params = (options.params !== undefined) ? options.params : [];
    this.query = (options.query !== undefined) ? options.query : null;
    this.nextHeader = (options.nextHeader !== undefined) ? options.nextHeader : null;
    this.header = (options.header !== undefined) ? options.header : null;
    this.page = (options.page !== undefined) ? options.page : null;
    this.callback = (options.callback !== undefined) ? options.callback : null;
    this.action = (options.action !== undefined) ? options.action : null;
    this.model = (options.model !== undefined) ? options.model : null;
  }

  isUpdate() {
    let isUpdate = false;

    for (let i = 0; i < this.params.length; i += 1) {
      const param = this.params[i];

      if (this.header[param] !== this.nextHeader[param]) {
        this.query[param] = this.nextHeader[param];
        this.query.page = 1;

        delete this.query.sort;

        appConfig.history.push({ pathname: this.page, query: this.query });

        if (this.callback) {
          this.callback();
        }

        if (this.action) {
          this.action();
        }

        if (this.model) {
          this.model(this.query);
        }

        isUpdate = true;
      } else if (this.query[param] === '') {
        delete this.query[param];
        appConfig.history.push({ pathname: this.page, query: this.query });
      }
    }

    return isUpdate;
  }
}

export default Filters;
