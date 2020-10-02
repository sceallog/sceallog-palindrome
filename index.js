module.exports = Phrase;

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
    return this.processor(this.content)
  }

  // Checks whether a string is a palindrome.
  this.palindrome = function palindrome() {
    if (this.processedContent() === this.processedContent().reverse()) {
      return `The word '${this.processedContent()}' is a palindrome.`
    } else {
      return `The word '${this.processedContent()}' is not a palindrome.`
    }
  }
