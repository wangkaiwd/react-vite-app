import { Plugin } from 'rollup';

const myExample = (): Plugin => ({
  name: 'my-example', // this name will show up in warnings and errors
  // define a customer resolver
  resolveId (source) {
    if (source === 'virtual-module') {
      return source; // this signals that rollup should not ask other plugins or check the file system to find this id
    }
    return null; // other ids should be handled as usually
  },
  // define a custom loader
  load (id) {
    if (id === 'virtual-module') {
      return 'export default "This is virtual!"'; // the source code for "virtual-module"
    }
    return null; // other ids should be handled as usually
  }
});

export default myExample;
