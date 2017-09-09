const HttpError = require('./super/HttpError');

module.exports = class NotFoundException extends HttpError {
  constructor(message) {
    super(
      404,
      'NOT_FOUND_EXCEPTION',
      message || '뭔가를 찾았지만 나와야할 것이 나오지 않았다..',
    );

    return this;
  }
};
