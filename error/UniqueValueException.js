const HttpError = require('./super/HttpError');

module.exports = class UniqueValueException extends HttpError {
  constructor(message) {
    super(
      400,
      'UNIQUE_VALUE_EXCEPTION',
      message || '중복되는 값을 입력 할 수 없습니다.',
    );

    return this;
  }
};
