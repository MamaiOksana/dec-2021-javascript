//розпорядок дня з колбек холом

setTimeout(() => {
    let counter = 0;
    console.log('7:00 - прокинулася');
    setTimeout(() => {
        counter++;
        console.log('7:00-7:15 - застилила ліжко, вмилася', counter);
        setTimeout(() => {
            counter++;
            console.log('7:15-7:45 - сніданок з кавою', counter);
            setTimeout(() => {
                counter++;
                console.log('7:45-8:00 - одягаюся і виходжу на роботу', counter);
                setTimeout(() => {
                    counter++;
                    console.log('8:00-8:30 - дорога на роботу', counter);
                    setTimeout(() => {
                        counter++;
                        console.log('8:30-16:30 - робочий день + обід', counter);
                        setTimeout(() => {
                            counter++;
                            console.log('16:30-17:00 - дорога додому', counter);
                            setTimeout(() => {
                                counter++;
                                console.log('17:30-20:00 - активний відпочинок, навчання, приготування вечері', counter);
                                setTimeout(() => {
                                    counter++;
                                    console.log('20:00-23:00 - вечеря, читання, перегляд наукових відео', counter);
                                    setTimeout(() => {
                                        counter++;
                                        console.log('23:00-7:00 - сон', counter);

                                    }, 5000)
                                }, 4500)
                            }, 4000)
                        }, 3500)
                    }, 3000)
                }, 2500)
            }, 2000)
        }, 1500)
    }, 1000)
},500)

//розпорядок дня через проміс

// new Promise(resolve => {
//     let counter = 0;
//     setTimeout(() =>{
//         console.log('7:00 - прокинулася', counter);
//         counter++;
//         resolve(counter);
//     },500);
// })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('7:00-7:15 - застилила ліжко, вмилася',counter);
//                 counter++;
//                 resolve(counter);
//             }, 1000);
//         })
//     })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('7:15-7:45 - сніданок з кавою',counter);
//                 counter++;
//                 resolve(counter);
//             }, 1500);
//         })
//     })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('7:45-8:00 - одягаюся і виходжу на роботу',counter);
//                 counter++;
//                 resolve(counter);
//             }, 2000);
//         })
//     })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('8:00-8:30 - дорога на роботу',counter);
//                 counter++;
//                 resolve(counter);
//             }, 2500);
//         })
//     })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('8:30-16:30 - робочий день + обід',counter);
//                 counter++;
//                 resolve(counter);
//             }, 3000);
//         })
//     })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('16:30-17:00 - дорога додому',counter);
//                 counter++;
//                 resolve(counter);
//             }, 3500);
//         })
//     })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('17:30-20:00 - активний відпочинок, навчання, приготування вечері',counter);
//                 counter++;
//                 resolve(counter);
//             }, 4000);
//         })
//     })
//     .then((counter) =>{
//         console.log(counter);
//         return new Promise((resolve) =>{
//             setTimeout(() => {
//                 console.log('20:00-23:00 - вечеря, читання, перегляд наукових відео',counter);
//                 counter++;
//                 resolve(counter);
//             }, 4500);
//         })
//     })
//     .then((counter)  => {
//         console.log(counter);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log( '23:00-7:00 - сон',counter);
//                 counter++;
//                 resolve(counter);
//             },5000);
//         })
//     })
//
















