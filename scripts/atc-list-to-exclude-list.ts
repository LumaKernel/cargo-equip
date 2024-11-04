#!/usr/bin/env deno run

// https://img.atcoder.jp/file/language-update/language-list.html
const list = `
ac-library-rs@=0.1.1
once_cell@=1.18.0
static_assertions@=1.1.0
varisat@=0.2.2
memoise@=0.3.2
argio@=0.2.0
bitvec@=1.0.1
counter@=0.5.7
hashbag@=0.1.11
pathfinding@=4.3.0
recur-fn@=2.2.0
indexing@=0.4.1
amplify@=3.14.2
amplify_derive@=2.11.3
amplify_num@=0.4.1
easy-ext@=1.0.1
multimap@=0.9.0
btreemultimap@=0.1.1
bstr@=1.6.0
az@=1.2.1
glidesort@=0.1.2
tap@=1.0.1
omniswap@=0.1.0
multiversion@=0.7.2
num@=0.4.1
num-bigint@=0.4.3
num-complex@=0.4.3
num-integer@=0.1.45
num-iter@=0.1.43
num-rational@=0.4.1
num-traits@=0.2.15
num-derive@=0.4.0
ndarray@=0.15.6
nalgebra@=0.32.3
alga@=0.9.3
libm@=0.2.7
rand@=0.8.5
getrandom@=0.2.10
rand_chacha@=0.3.1
rand_core@=0.6.4
rand_hc@=0.3.2
rand_pcg@=0.3.1
rand_distr@=0.4.3
petgraph@=0.6.3
indexmap@=2.0.0
regex@=1.9.1
lazy_static@=1.4.0
ordered-float@=3.7.0
ascii@=1.1.0
permutohedron@=0.2.4
superslice@=1.0.0
itertools@=0.11.0
itertools-num@=0.1.3
maplit@=1.0.2
either@=1.8.1
im-rc@=15.1.0
fixedbitset@=0.4.2
bitset-fixed@=0.1.0
proconio@=0.4.5
text_io@=0.1.12
rustc-hash@=1.1.0
smallvec@=1.11.0
`;

const parseLine = (line: string) => {
  const [name, version] = line.split("@=");
  return { name, version };
};

const cs = list.trim().split("\n").map(parseLine).map((e) =>
  `"https://github.com/rust-lang/crates.io-index#${e.name}:${e.version}"`
).join(",\n");
console.log(cs);
