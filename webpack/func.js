'use strict';

exports.addHash = function (template, hash) {
  return `${template}?hash=[${hash}]`;
};
