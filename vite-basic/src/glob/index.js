const globalModules = import.meta.globEager('./*-[0-9].js');
console.log('global', globalModules);
