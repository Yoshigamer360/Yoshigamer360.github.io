const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const os = require('os');

function encode(message) {
  const mapping = {
    'a': 'y', 'b': 'o', 'c': 's', 'd': 'h', 'e': 'i',
    'f': 'g', 'g': 'a', 'h': 'm', 'i': 'e', 'j': 'r',
    'k': 't', 'l': 'x', 'm': 'z', 'n': 'w', 'o': 'v',
    'p': 'u', 'q': 'q', 'r': 'p', 's': 'n', 't': 'l',
    'u': 'k', 'v': 'j', 'w': 'f', 'x': 'd', 'y': 'c',
    'z': 'b'
  };
  let encodedMessage = '';
  for (let char of message) {
    if (mapping[char]) {
      encodedMessage += mapping[char];
    } else {
      encodedMessage += char;
    }
  }
  return encodedMessage;
}

function decode(message) {
  const mapping = {
    'y': 'a', 'o': 'b', 's': 'c', 'h': 'd', 'i': 'e',
    'g': 'f', 'a': 'g', 'm': 'h', 'e': 'i', 'r': 'j',
    't': 'k', 'x': 'l', 'z': 'm', 'w': 'n', 'v': 'o',
    'u': 'p', 'q': 'q', 'p': 'r', 'n': 's', 'l': 't',
    'k': 'u', 'j': 'v', 'f': 'w', 'd': 'x', 'c': 'y',
    'b': 'z'
  };
  let decodedMessage = '';
  for (let char of message) {
    if (mapping[char]) {
      decodedMessage += mapping[char];
    } else {
      decodedMessage += char;
    }
  }
  return decodedMessage;
}

function clearScreen() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}

function main() {
  rl.question('A) Encode or B) Decode: ', (answer) => {
    if (answer.toLowerCase() === 'a') {
      rl.question('How many times do you want to encode it? ', (totalCodedTimes) => {
        totalCodedTimes = parseInt(totalCodedTimes);
        rl.question('Enter message to encode: ', (message) => {
          let codedTimes = 0;
          while (codedTimes < totalCodedTimes) {
            message = encode(message.toLowerCase());
            codedTimes++;
          }
          clearScreen();
          console.log(`Encoded message: ${message}`);
          rl.question('\nPress enter to clear', () => {
            clearScreen();
            main();
          });
        });
      });
    } else {
      rl.question('How many times do you want to decode it? ', (totalCodedTimes) => {
        totalCodedTimes = parseInt(totalCodedTimes);
        rl.question('Enter message to decode: ', (message) => {
          let codedTimes = 0;
          while (codedTimes < totalCodedTimes) {
            message = decode(message.toLowerCase());
            codedTimes++;
          }
          clearScreen();
          console.log(`Decoded message: ${message}`);
          rl.question('\nPress enter to clear', () => {
            clearScreen();
            main();
          });
        });
      });
    }
  });
}

main();
