const runTimeOut = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    });

    console.log('Hay un timeout!');
};

runTimeOut();