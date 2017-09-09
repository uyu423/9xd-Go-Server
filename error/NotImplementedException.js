const HttpError = require('./super/HttpError');

module.exports = class NotImplementedException extends HttpError {
  constructor(message) {
    super(
      501,
      'NOT_IMPLEMENTED',
      message || '유효한 라우트가 아닙니다',
    );

    return this;
  }
};
