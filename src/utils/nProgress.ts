import nProgress from 'nprogress';
let number = 0;
export const done = (n = 1) => {
  number -= n;
  if (number <= 0) {
    nProgress.done();
    number = 0;
  } else {
    nProgress.set(number / (number + n));
  }
};

export const start = (n = 1) => {
  if (number <= 0) {
    nProgress.start();
    number = n;
  } else {
    number += n;
  }
};

export const set = (n: number) => {
  if (number > 0) {
    nProgress.set(n);
  }
};

export const remove = () => {
  number = 0;
  nProgress.remove();
};
