let utils1;
import utils2 from './utils2';

(async () => {
  console.log('app3 start');
  utils1 = (await import(/* webpackChunkName: "common" */ './utils1')).default;
  utils1('app3');
  utils2('app3');
})();
