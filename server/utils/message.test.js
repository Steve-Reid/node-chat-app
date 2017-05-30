/* eslint prefer-arrow-callback: "off", no-undef: "off" */
const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Bob';
    const text = 'This is a test';

    const newMessage = generateMessage(from, text);

    expect(newMessage.from).toBe(from);
    expect(newMessage.text).toBe(text);
    expect(newMessage.createdAt).toBeA('number');
  });

});
