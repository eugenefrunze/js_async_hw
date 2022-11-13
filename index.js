lotteryDraw = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() >= 0.5) resolve('JOPA');
        else reject(new Error('PARASHA'));

    }, 2000);
})

lotteryDraw
    .then(res => console.log(res))
    .catch(err => console.error(err.message))