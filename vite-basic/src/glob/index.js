const globEagerModules = import.meta.globEager('./*-[0-9].js');
console.log('globEagerModules', globEagerModules);
// Object.entries(globEagerModules).forEach(([k, v]) => {
//     console.log(k + '-------' + v);
//     // v.default();
// });
// globEagerModules['./test-1.js'].default();

// const globModules = import.meta.glob('./*');
// console.log('globModules', globModules);
// Object.entries(globModules).forEach(([k, v]) => {
//     console.log(k + '-------' + v);
//     v().then((m) => {
//         console.log(m);
//     });
// });
