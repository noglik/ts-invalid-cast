# Invalid cast error

Error:
```
/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:84774
                throw e;
                ^

Error: Debug Failure. Invalid cast. The supplied value [object Object] did not pass the test 'isLeftHandSideExpression'.
    at Object.cast (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:1296:25)
    at Object.parenthesizeLeftSideOfAccess (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:15171:73)
    at Object.createElementAccessExpression (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:16766:52)
    at getSyntheticElementAccess (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:40132:70)
    at getFlowTypeOfDestructuring (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:40123:29)
    at getTypeForBindingElement (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:40201:28)
    at getTypeForVariableLikeDeclaration (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:40261:24)
    at getWidenedTypeForVariableLikeDeclaration (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:40648:56)
    at getTypeOfVariableOrParameterOrPropertyWorker (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:40766:24)
    at getTypeOfVariableOrParameterOrProperty (/home/noglik/projects/js/ts-invalid-cast/node_modules/typescript/lib/tsc.js:40682:28)
```

Caused by:
```
const { constructor } = async () => {};
```

### To build
```
npm run build
```
