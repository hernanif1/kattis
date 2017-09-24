# Kattis Phone List Problem

About
The problem [see here](https://open.kattis.com/problems/phonelist)
* Javascript
* Attention to Memory Limit
* Attention to time Limit
* To resolve performance I could not use new commands like map, reduce or sort (they are too slow) 
* Use massive of console.time to inspect performance


## Requirements
- [Node](https://nodejs.org) `6.x` or newer
- [Chrome](https://www.google.com.br/chrome/browser/desktop/index.html) to dev environment
- [Git](https://git-scm.com/downloads) to download this project
- Using NodeJs [Kattis.Runner](https://github.com/csvn/kattis.runner)


## The code
- Click [here](https://github.com/hernanif1/kattis/blob/master/solution/solution.js) to see the code 


----------------------


### Environment
1. Clone repo with git

    ```
    git clone https://github.com/hernanif1/kattis.git
    ```

2. Install npm packages

    ```
    npm install
    ```

3. Run node, optionally with gulp

    ```
    gulp
    ```

4. Profit! (but probably not...)


### Gulp
There are 3 gulp tasks:

* **default** - The other tasks will be executed
* **run** - Will run solution once
* **watch** - Watches files and calls **run** on changes


## Solution

#### `solution.js`
Here I Wrote my solution code in `solution/solution.js`. When you have your gulp task up and running, a file that can be submitted directly to kattis will be generated and placed in `solution/submission.js`.

#### `io-sets.js`
`solution/io-sets.js` contains groups of inputs, and groups of expected output to check your solution against. Set output to a non-string to not compare the result with the expected output.

### Tips
* Use default gulp task, and submit `submission.js` when you're satisfied
