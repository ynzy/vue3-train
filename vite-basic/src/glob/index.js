const globEagerModules = import.meta.globEager('./*-[0-9].js');
// console.log('globEagerModules', globEagerModules);
const globModules = import.meta.glob('./*');
// console.log('globModules', globModules);
