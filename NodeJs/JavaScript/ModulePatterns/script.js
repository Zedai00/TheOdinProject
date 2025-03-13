const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null
  })
}))
const Formatter = (function (doc) {

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUpperCase = (text) => {
    log("Making Uppercase")
    return text.toUpperCase()
  }

  const writeToDOM = (selector, message) => {
    if (!!doc && "querySelector" in doc) {
      doc.querySelector(selector).innerHTML = message;
    }
  }

  return {
    makeUpperCase,
    writeToDOM
  }
})(document || documentMock)

Formatter.writeToDOM("body", "Hi there")
