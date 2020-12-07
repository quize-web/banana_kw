// let test = "PRTF,perf,tran,past,pssv masc,sing,ablt";
// let speechPart = getSpeechParts(test);
// let wordCase = getCase(test);
// console.log('speechPart:', speechPart);
// console.log('wordCase:', wordCase);

// TODO: ...???
function findGrammeme(slugs, grammemes) {
    let result = null;
    let IN = Object.keys(grammemes).join('|');
    let regex = new RegExp(`\\b(${IN})\\b`, 'i');
    let matches = slugs.match(regex);
    if (matches && matches.length === 2) {
        result = grammemes[matches[1]];
    }
    return result;
}

// Часть речи
function getSpeechParts(slugs) {
    let speechParts = {
        'NOUN': 'имя существительное',
        // 'ADJF': 'имя прилагательное (полное)',
        'ADJF': 'имя прилагательное',
        // 'ADJS': 'имя прилагательное (краткое)',
        'ADJS': 'имя прилагательное',
        'COMP': 'компаратив',
        // 'VERB': 'глагол (личная форма)',
        'VERB': 'глагол',
        // 'INFN': 'глагол (инфинитив)',
        'INFN': 'глагол',
        // 'PRTF': 'причастие (полное)',
        'PRTF': 'причастие',
        // 'PRTS': 'причастие (краткое)',
        'PRTS': 'причастие',
        'GRND': 'деепричастие',
        'NUMR': 'числительное',
        'ADVB': 'наречие',
        'NPRO': 'местоимение-существительное',
        'PRED': 'предикатив',
        'PREP': 'предлог',
        'CONJ': 'союз',
        'PRCL': 'частица',
        'INTJ': 'междометие',
    };
    let grammeme = findGrammeme(slugs, speechParts);
    return grammeme ? grammeme : null;
}

// Падеж
function getCase(slugs) {
    let cases = {
        'nomn': 'именительный',
        'gent': 'родительный',
        'datv': 'дательный',
        'accs': 'винительный',
        'ablt': 'творительный',
        'loct': 'предложный',
        'voct': 'звательный',
        // 'gen2': 'второй родительный (частичный)',
        'gen2': 'родительный',
        // 'acc2': 'второй винительный',
        'acc2': 'винительный',
        // 'loc2': 'второй предложный (местный)',
        'loc2': 'предложный',
    };
    let grammeme = findGrammeme(slugs, cases);
    return grammeme ? grammeme : null;
}

// Число
function getCountType(slugs) {
    let countTypes = {
        'sing': 'единственное число',
        'Sgtm sing': 'единственное число',
        'Sgtm': 'единственное число',
        'plur': 'множественное число',
        'Pltm plur': 'множественное число',
        'Pltm': 'множественное число',
        'Fixd': null, // неизменяемое
    };
    let grammeme = findGrammeme(slugs, countTypes);
    return grammeme ? grammeme : null;
}

// Род
function getGender(slugs) {
    let genders = {
        'masc': 'мужской род',
        'femn': 'женский род',
        'neut': 'средний род',
        'Ms-f': null,
        'GNdr': null,
    };
    let grammeme = findGrammeme(slugs, genders);
    return grammeme ? grammeme : null;
}

// Вид
function getForm(slugs) {
    let forms = {
        'perf': 'совершенный вид',
        'impf': 'несовершенный вид',
    };
    let grammeme = findGrammeme(slugs, forms);
    return grammeme ? grammeme : null;
}

// Время
function getTime(slugs) {
    let genders = {
        'pres': 'настоящее время',
        'past': 'прошедшее время',
        'futr': 'будущее время',
    };
    let grammeme = findGrammeme(slugs, genders);
    return grammeme ? grammeme : null;
}

// TODO: ...???
function getCollateralCategory(slugs) {
    let collateralCategories = {
        'actv': 'действительный залог',
        'pssv': 'страдательный залог',
        // ...
    };
    let grammeme = findGrammeme(slugs, collateralCategories);
    return grammeme ? grammeme : null;
}

// TODO: ...???
function getTransitivity(slugs) {
    let transitivity = {
        'tran': 'переходный',
        'intr': 'непереходный',
    };
    let grammeme = findGrammeme(slugs, transitivities);
    return grammeme ? grammeme : null;
}

// Одушевленность
function getLifeStatus(slugs) {
    let lifeStatuses = {
        'inan': 'неодушевлённое',
        'anim': 'одушевлённое',
    };
    let grammeme = findGrammeme(slugs, lifeStatuses);
    return grammeme ? grammeme : null;
}

// TODO: ...???
function getOtherGrammemes(slugs) {
    let other = {
        'LATN': null, // Токен состоит из латинских букв (например, “foo-bar” или “Maßstab”)
        'PNCT': null, // Пунктуация (например, , или !? или …)
        'NUMB': null, // Число (например, “204” или “3.14”)
        'intg': null, // целое число (например, “204”)
        'real': null, // вещественное число (например, “3.14”)
        'ROMN': null, // Римское число (например, XI)
        'UNKN': null, // Токен не удалось разобрать
    };
    let grammeme = findGrammeme(slugs, other);
    return grammeme ? grammeme : null;
}

// TODO: ...???
function draw(data) {

    let drag = function (simulation) {

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    let color = function () {
        const scale = d3.scaleOrdinal(d3.schemeCategory10);
        return function (item) {
            return scale(item.group)
        };
    }

    let domain = function () {

    }

    let range = function () {

    }

    // let x = d3.scaleOrdinal()
    //     .domain(data.groups)
    //     .range([-100, 400, 500, 800, 1100, 1400, 770])

    // let width = 600;
    // let height = 200;

    let width = window.innerWidth,
        height = window.innerHeight;

    let chart = function () {
        const links = data.links.map(d => Object.create(d));
        const nodes = data.nodes.map(d => Object.create(d));

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links)
                // .distance(50)
                .distance(100)
                // .distance(150)
                // .distance(250)
                // .distance(400)
                // .distance(500)
                .id(d => d.id))
            .force("charge", d3.forceManyBody()
                    // .strength(-100)
                    // .strength(-150)
                    // .strength(-200)
                    .strength(-250)
                // .strength(-300)
                // .strength(-500)
            )
            // .force("x", d3.forceX())
            .force("x", d3.forceX()
                // .x(function (d) {
                //     return x(d.linkGroup)
                // })
            )
            .force("y", d3.forceY());

        const svg = d3.create("svg")
            .attr("viewBox", [-width / 2, -height / 2, width, height - 5]);

        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            // .attr("r", 5)
            .attr("r", d => d.radius)
            .attr("fill", color());

        // const labels = node
        //     .append('text')
        //     .text(d => d.id)
        //     .style('fill', '#000')
        //     .style('font-size', '12px')
        //     // .attr('x', 8)
        //     // .attr('y', '0.31em')
        //     .attr('x', 6)
        //     .attr('y', 3);
        // // .clone(true).lower()
        // // .attr("fill", "none")
        // // .attr("stroke", "white")
        // // .attr("stroke-width", 3);

        const labels = svg.append("g")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .style('fill', '#000')
            // .style('font-size', '14px')
            .style('font-size', d => d.fontSize)
            // .style('font-weight', 'bold')
            .text(d => d.id);

        node.call(drag(simulation));

        node.append("title")
            .text(d => d.id);

        // const node = svg.append("g")
        //     .selectAll(".node")
        //     .data(nodes)
        //     .join("g")
        //     .attr('class', 'node')
        //     .call(drag(simulation));
        //
        // node.append('circle')
        //     .attr("r", 5)
        //     .attr("fill", color());
        //
        // node.append("text")
        //     .text(function(d) {
        //         return d.id;
        //     })
        //     .style('fill', '#000')
        //     .style('font-size', '12px')
        //     .attr('x', 6)
        //     .attr('y', 3);

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);

            labels
                .attr("x", d => d.x + 10)
                .attr("y", d => d.y - 5)
            // .attr("cx", d => d.x)
            // .attr("cy", d => d.y);
        });

        // invalidation.then(() => simulation.stop());

        return svg.node();
    }

    let svgNode = chart();
    // console.log(svgNode);

    let network = document.getElementById('network');
    network.appendChild(svgNode);

}

// TODO: ...???
function getItemRadius(item) {
    // let usesKey = 1;
    let usesKey = 'uses';

    // let wordsCountKey = 2;
    let wordsCountKey = 'wordsCount';

    let radius = 4;

    // let a = 4; // коэф. для кол-ва употреблений
    // let b = 2; // коэф. для кол-ва слов
    let a = 3; // коэф. для кол-ва употреблений
    let b = 1; // коэф. для кол-ва употреблений
    let c = 1; // коэф. для кол-ва слов

    let x = Math.pow(item[usesKey], a) * b;
    // console.log(x);
    if (x > 22) {
        x = 22;
    }

    switch (sizeMode) {
        case 'default':
            // radius += item[usesKey] * a + item[wordsCountKey] * b;
            radius += x + Math.pow(item[wordsCountKey], c);
            break;
    }

    return radius;
}

// TODO: ...???
function getItemFontSize(item) {
    // let usesKey = 1;
    let usesKey = 'uses';

    // let wordsCountKey = 2;
    let wordsCountKey = 'wordsCount';

    let fontSize = 5;
    let a = 4; // коэф. для кол-ва употреблений
    let b = 2; // коэф. для кол-ва слов

    switch (sizeMode) {
        case 'default':
            fontSize += item[usesKey] * a + item[wordsCountKey] * b;
            break;
    }

    return `${fontSize}px`;
}

// TODO: ...???
function getWordColorGroup(word) {
    let colorGroup = 'null';
    switch (colorMode) {
        case 'gender':
            let gender = getGender(word[1]);
            if (gender) {
                colorGroup = gender;
            }
            break;
    }
    return colorGroup;
}

// TODO: ...???
function getItemColorGroup(item) {
    let colorGroup = 'null';
    if (item[2] === 1) { // кол-во слов
        colorGroup = getWordColorGroup(item[3][0]);
    }
    return colorGroup;
}

// TODO: ...???
function getWordLinkGroup(word) {
    let linkGroup = 'null';
    switch (linksMode) {
        // case 'ewe': // каждый с каждым
        //     //
        //     break;
        case 'case': // падеж
            linkGroup = getCase(word[1]);
            break;
        case 'gender': // род

            //

            break;
        case 'kinship': // родитель-потомок

            //

            break;
    }
    return linkGroup;
}

// TODO: ...???
function getItemLinkGroup(item) {
    let colorGroup = 'null';
    if (item[2] === 1) { // кол-во слов
        colorGroup = getWordLinkGroup(item[3][0]);
    }
    return colorGroup;
}

// TODO: ...???
function getFirstWord(item) {
    return item[3][0];
}

// TODO: ...???
function getId(item) {
    if (item[2] === 1) { // кол-во слов
        return getFirstWord(item)[2];
        // return item[0];
    } else {
        return item[0];
    }
}

// TODO: ...???
function handleItems(items) {
    let handledItems = [];

    const tf_idf = true;
    // const tf_idf = false;

    const custom = true;
    // const custom = false;

    const divide = true;
    // const divide = false;

    // const singleNorm = true;
    const singleNorm = false;

    let documentTotal = 0;
    let wordDocumentsCount = {};

    const saveWord = function (item, word, newDocument) {
        if (newDocument && divide === false) {

        } else {
            if (handledItems.hasOwnProperty(word[2])) {
                handledItems[word[2]]['uses']++;
            } else {
                handledItems[word[2]] = {
                    'uses': item[1],
                    'wordsCount': 1,
                    'colorGroup': getWordColorGroup(word),
                    'linkGroup': getWordLinkGroup(word),
                };
            }
        }

        if (newDocument) {
            wordDocumentsCount[word[2]] = wordDocumentsCount[word[2]] || 0;
            wordDocumentsCount[word[2]]++;
        }
    }

    const saveItemSingleNorm = function (item) {
        if (custom && singleNorm) {
            let firstWord = getFirstWord(item);
            saveWord(item, firstWord);
        }
    }

    items.forEach(function (item) {
        // let norm = getId(item);
        let id = item[0];
        let wordsCount = item[2];
        if (handledItems.hasOwnProperty(id)) { // слово существует в мешке

            handledItems[id]['uses']++; // обновляем юзы
            if (custom) { // кастомная логика
                if (wordsCount === 1) { // 1 слово
                    saveItemSingleNorm(item);
                } else { // несколько слов
                    item[3].forEach(function (word) {
                        handledItems[word[2]]['uses']++;
                    });
                }
            }

        } else { // слово отсутствует в мешке
            documentTotal++;

            if (wordsCount === 1) { // 1 слово
                // пушим сам item и его norm
                handledItems[id] = {
                    'uses': item[1],
                    'wordsCount': wordsCount, // 1
                    'colorGroup': getItemColorGroup(item), // можем получить цвет
                    'linkGroup': getItemLinkGroup(item), // можем получить цвет
                };
                saveItemSingleNorm(item);
            } else { // несколько слов
                // documentTotal++;
                handledItems[id] = {
                    'uses': item[1],
                    'wordsCount': wordsCount,
                    'colorGroup': 'null', // НЕ можем получить цвет (несколько слов)
                    'linkGroup': 'null', // НЕ можем получить связь (несколько слов)
                };
                if (custom) {
                    item[3].forEach(function (word) {
                        saveWord(item, word, true);
                    });
                }
            }
        }
    });

    console.log(111, documentTotal, wordDocumentsCount);
    if (tf_idf) {
        let max = 0
        let min = 0;
        console.log(222, handledItems);
        for (let id in handledItems) {
            if (handledItems.hasOwnProperty(id)) {
                if (wordDocumentsCount.hasOwnProperty(id)) {
                    let tf = handledItems[id].uses / documentTotal;
                    let idf = documentTotal / (wordDocumentsCount[id] + 1);
                    handledItems[id].uses = tf * idf;
                    console.log(333, '!!!ALERT!!!', id, tf, idf, handledItems[id].uses);
                } else {
                    let tf = handledItems[id].uses / documentTotal;
                    handledItems[id].uses = tf * documentTotal;
                }
                // min and max
                if (handledItems[id].uses > max) {
                    max = handledItems[id].uses;
                }
                if (handledItems[id].uses < min) {
                    min = handledItems[id].uses;
                }
                //
            }
        }
        console.log(444, min, max);
        // нормализация
        for (let id in handledItems) {
            if (handledItems.hasOwnProperty(id)) {
                handledItems[id].uses = (handledItems[id].uses - min) / (max - min);
                handledItems[id].uses *= 3;
            }
        }
        //
    }

    console.log(555, handledItems);
    return handledItems;
}

// TODO: ...???
function makeLinks(handledItems) {
    let links = [];
    let groups = [];

    let saveGroup = function (name) {
        if (groups.includes(name) === false) {
            groups.push(name);
        }
    }

    switch (linksMode) {
        case 'ewe': // каждый с каждым

            for (let parentId in handledItems) {
                if (handledItems.hasOwnProperty(parentId)) {
                    for (let childId in handledItems) {
                        if (handledItems.hasOwnProperty(childId)) {
                            if (parentId !== childId) {
                                links.push({
                                    source: parentId,
                                    target: childId,
                                    value: 5,
                                });
                            }
                        }
                    }
                }
            }

            break;
        case 'case': // падеж

            for (let parentId in handledItems) {
                if (handledItems.hasOwnProperty(parentId)) {
                    saveGroup(handledItems[parentId]['linkGroup']);
                    for (let childId in handledItems) {
                        if (handledItems.hasOwnProperty(childId)) {
                            if (
                                parentId !== childId
                                && handledItems[parentId]['linkGroup'] === handledItems[childId]['linkGroup']
                                && handledItems[parentId]['linkGroup'] !== 'null'
                            ) {
                                links.push({
                                    source: parentId,
                                    target: childId,
                                    value: 5,
                                });
                            }
                        }
                    }
                }
            }

            break;
        case 'gender': // род

            //

            break;
        case 'kinship': // родитель-потомок

            //

            break;
    }
    return [links, groups];
}

// TODO: ...???
function makeData(items) {
    console.log('items:', items, items.length);
    console.log('modes:', [sizeMode, colorMode, linksMode].join(' | '));

    let handledItems = handleItems(items);
    console.log('handled items:', handledItems, Object.keys(handledItems).length);

    const removeWeak = false;
    // const removeWeak = true;

    if (
        removeWeak
        // && Object.keys(handledItems).length > 30
        && Object.keys(handledItems).length > 60
    ) {
        for (let id in handledItems) {
            if (handledItems.hasOwnProperty(id)) {
                if (
                    handledItems[id]['uses'] < 2
                    && handledItems[id]['wordsCount'] === 1
                ) {
                    delete handledItems[id];
                }
            }
        }
    }

    let nodes = [];
    // items.forEach(function (item) {
    //     nodes.push({
    //         id: getId(item),
    //         radius: getItemRadius(item),
    //         group: getItemColorGroup(item),
    //         fontSize: getItemFontSize(item),
    //     });
    // });
    for (let id in handledItems) {
        if (handledItems.hasOwnProperty(id)) {
            nodes.push({
                id: id,
                group: handledItems[id]['colorGroup'],
                radius: getItemRadius(handledItems[id]),
                fontSize: getItemFontSize(handledItems[id]),
            });
        }
    }
    console.log('nodes:', nodes, nodes.length);

    // let links = [];
    let linksAndGroups = makeLinks(handledItems);
    console.log('links:', linksAndGroups[0]);
    console.log('groups:', linksAndGroups[1]);

    // dummy
    // let data = {
    //     nodes: [
    //         {
    //             id: "test_id__01",
    //             group: "test_group__01",
    //             radius: 5,
    //             citing_patents_count: 2,
    //         },
    //         {
    //             id: "test_id__02",
    //             group: "test_group__01",
    //             radius: 10,
    //             citing_patents_count: 2,
    //         },
    //         {
    //             id: "test_id__03",
    //             group: "test_group__02",
    //             radius: 10,
    //             citing_patents_count: 2,
    //         },
    //         {
    //             id: "test_id__04",
    //             group: "test_group__03",
    //             radius: 10,
    //             citing_patents_count: 2,
    //         },
    //     ],
    //     links: [
    //         {
    //             source: "test_id__01",
    //             target: "test_id__02",
    //             value: 5,
    //         },
    //     ],
    // };

    return {nodes: nodes, links: linksAndGroups[0], groups: linksAndGroups[1]};
}

// TODO: ...???
function getQueryParam(item) {
    let regex = new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i');
    var value = window.location.search.match(regex);
    return value ? value[1] : null;
}

// ---

let sizeMode = 'default'; // важность слов и количество слов

let colorMode = 'gender'; // цвет по роду

// let linksMode = 'ewe'; // каждый с каждым
let linksMode = 'case'; // по падежу
// let linksMode = 'gender'; // по роду
// let linksMode = 'kinship'; // родитель-потомок

let link = getQueryParam('link') || null;
// console.log('link:', link);
if (link) {
    axios.get('/api/container', {
        params: {
            where: `{"link":"${link}"}`
        }
    })
        .then(function (resp) {
            // console.log(resp);
            if (resp) {

                let itemsJSON = resp['data']['_items'][0]['data'];
                // console.log(itemsJSON);

                let items = JSON.parse(itemsJSON);
                // console.log(items);

                items.forEach(function (item) {
                    if (typeof item[3] === 'string') {
                        item[3] = JSON.parse(item[3]);
                    }
                    // console.log(item);
                });

                draw(makeData(items));
            }
        })
        .catch(function (err) {
            console.log(err);
        })
        .then(function () {
            //
        });
}