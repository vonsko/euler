const [bin, path, count = 10, from = 1] = process.argv;
console.time('finished in');

const getArray = length => Array.from({length}).map((item, index) => index + 1);
const verify = (arr, num) => arr.forEach(item => console.log(`${num} / ${item} = `, num / item));
const arr = getArray(count);

const search = (i = from) => {
    while (i) {
        if(!arr.some(item => i % item)) {
            console.timeEnd('finished in');
            console.warn(`result for ${count} = ${i} \n`); 
            return i;
        } else i++;
    }
}

verify(arr, search());