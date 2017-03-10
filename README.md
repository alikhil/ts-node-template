# ts-node-template
Template for TypeScript web projects


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