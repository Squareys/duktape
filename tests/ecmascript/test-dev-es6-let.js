/*
 *  Some ES6 let keyword tests
 *
 *  https://github.com/svaarala/duktape/pull/?
 */

/*---
{
    "custom": true
}
---*/

/*===
1
undefined
0
1
2
undefined
4
3
===*/

function test() {
    {
        let a = 1;
        print(a);
    }
    print(a);

    let size = 3;
    for(let i = 0; i < size; ++i) {
        print(i);
    }
    print(i);
    {
        let size = 4;
        print(size);
    }
    print(size);
}

try {
    test();
} catch (e) {
    print(e.stack || e);
}
