module.exports = Phrase

// Adds 'reverse' to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("")
}

// Defines a Phrase object.

function Phrase(content) {
  this.content = content

  // Returns content processed for palindrome testing.
  this.processor = function (string) {
    return string.toLowerCase()
  }

  this.processedContent = function processedContent() {
    return this.processor(this.letters())
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("")
  }

  // Checks whether a string is a palindrome.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse()
  }
}
