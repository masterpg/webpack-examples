let utils1;

(async () => {
  console.log('app2 start');
  utils1 = (await import(/* webpackChunkName: "common" */ './utils1')).default;
  utils1('app2');
})();
