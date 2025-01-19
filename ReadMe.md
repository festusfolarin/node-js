# NODE JS CHECKPOINT - GMC

This project contains 5 js files, each of which serves a specific purpose

## 1. hello-world.js

This file simply prints "hello world" to the console

## 2. server.js

This file starts a server listening on port 3000. It responds with "Hello World" when the page is visited

## 3. fileSystem.js

The script has 2 functions: writeToFile and readFromFile

### 3a. writeToFile()

This function uses the writeFileSync Method of the node fs module to create a welcome.txt file and inserts a data into it.

### 3b. readFromFile()

This function uses the readFile method from node fs module to read the content of Hello.txt and prints it to the console.

## 4. password-generator.js

This script generates a random password using the generate-password module

## 5. email-sender.js

This script uses the nodemailer module to send a mail.
