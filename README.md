# ts-node-template
Template for TypeScript web projects

## Quickstart

```sh
# download template
git clone https://github.com/alikhil/ts-node-template
# install dependencies
npm install

# run tests
npm test

# run gulp tasks
gulp
```

## Template

1. Implement `db.connect` function in src/db.ts
2. Configure middlewares and routes in app.ts

## To do

* Add linter's configs
* Add documentation tutorial

## VS Code Congifuration

### tasks.json
Task will watch for changes and compile ts code to js.

```json
{
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-w", "-p", "."],
    "showOutput": "silent",
    "isBackground": true,
    "problemMatcher": "$tsc-watch"
}
```
### launch.json

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Mocha Tests",
            "cwd": "${workspaceRoot}",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/mocha",
            "windows": {
                "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/mocha.cmd"
            },
            "runtimeArgs": [
                "--reporter", "spec", "--compilers", "ts:ts-node/register",
                "-u",
                "tdd",
                "--timeout",
                "999999",
                "--colors",
                "${workspaceRoot}/src/test"
            ],
            "internalConsoleOptions": "openOnSessionStart"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceRoot}\\src\\index.ts",
            "cwd": "${workspaceRoot}",
            "outFiles": ["${workspaceRoot}\\out\\*.js"],
            "sourceMaps": true
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Process",
            "port": 5858,
            "outFiles": []
        }
    ]
}
```