# zd-search-cli

## Getting Started

```
git clone git@github.com:vorks/zd-search-cli.git
cd zd-search-cli
npm install
node ./src/index.js
```

It is also hosted on npm:

```
npm i -g zd-search-cli
```

However, I was unable to get my machine to recognize the command "zd-search-cli". I think this is because in my attempts to install a local copy globally, I have messed up npm that I would have to spend some time rectifying. So others may enjoy better luck. Give it a go and let me know how it goes!

## Run Test Suite

```
npm install
npm test
```

The system tests (`(.*-search|welcome).test.js`) may fail as they rely on a timeout to ensure user input is received correctly. I have set a timeout that works for my machine, but it may not work for yours. If these tests fail for you, increase the `timeout` found in `cmd.js`.

## Test Coverage

![Test Coverage](https://i.imgur.com/IsKMB42.png)

## Performance Test

**19066 users queried in 7 seconds**

[Recording](https://www.useloom.com/share/b736e2253b224f25a59aba29cb3d447c)

## Dependencies

### Inquirer

Inquirer provides all the heavy lifting in printing questions and parsing answers. The critical reasons for use were the smooth implementation of hierarchical prompts and improved UX. Typing in answers for selection is not a pleasant experience; navigation through directions keys is far more natural.

## Potential improvements

- Intelligent search
- Take data source as environment variables
- Cross-functionality between json, csv, SQL, and NoSQL
- Improved output formatting
- Multiple search parameters at once
- Allow searching within ranges
- Allow multiple date formats to still match with differently formatted date values
- Configurable output style to allow integrations and useful copy+paste
- Configurable output fields
- Improved system tests implementation
- Implement in TypeScript

## Task

![Task 1/6](https://i.imgur.com/0CA4Sf5.png)
![Task 2/6](https://i.imgur.com/4rVFVUw.png)
![Task 3/6](https://i.imgur.com/K3eCD1e.png)
![Task 4/6](https://i.imgur.com/Ysi5dUk.jpg)
![Task 5/6](https://i.imgur.com/DMtFGzi.png)
![Task 6/6](https://i.imgur.com/HZtPqd1.jpg)
