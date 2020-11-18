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
    if (matches.length === 2) {
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

    // let width = 600;
    // let height = 200;

    let width = window.innerWidth,
        height = window.innerHeight;

    let chart = function () {
        const links = data.links.map(d => Object.create(d));
        const nodes = data.nodes.map(d => Object.create(d));

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).distance(150).id(d => d.id))
            .force("charge", d3.forceManyBody())
            .force("x", d3.forceX())
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
            .attr("r", 5)
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
            .style('font-size', '14px')
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
function makeData(items) {
    // let data = [];

    data = {
        nodes: [
            {
                id: "test_id__01",
                group: "test_group__01",
                radius: 5,
                citing_patents_count: 2,
            },
            {
                id: "test_id__02",
                group: "test_group__01",
                radius: 10,
                citing_patents_count: 2,
            },
            {
                id: "test_id__03",
                group: "test_group__02",
                radius: 10,
                citing_patents_count: 2,
            },
            {
                id: "test_id__04",
                group: "test_group__03",
                radius: 10,
                citing_patents_count: 2,
            },
        ],
        links: [
            {
                source: "test_id__01",
                target: "test_id__02",
                value: 5,
            },
        ],
    };

    return data;
}

// TODO: ...???
function getQueryParam(item) {
    let regex = new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i');
    var value = window.location.search.match(regex);
    return value ? value[1] : null;
}

// ---

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
                console.log(items);

                items.forEach(function (item) {
                    let other = item[3];
                    if (typeof other === 'string') {
                        other = JSON.parse(item[3]);
                    }
                    console.log(other);
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

// let res = '[["туристский продукт",4],["туроператоры",2],["реализация",2],["продвижение",2],["смена статуса компаний",1],["российский союз туриндустрии",1],["правовое регулирование взаимоотношений",1],["федеральное агентство",1],["туроператорская деятельность",1],["туристский обслуживание",1],["туристские агентства",1],["туристская путёвка",1],["туристический бизнес",1],["туристические агентства",1],["турагентская деятельность",1],["страховые компании",1],["страховой случай",1],["страховой полисы",1],["страховой возмещение",1],["статус туроператора",1],["статус турагентства",1],["средства обслуживания",1],["российская федерация",1],["российская ассоциация",1],["реализующая турпродукт",1],["проданный туроператор",1],["приобретший турпродукт",1],["подобное турагент",1],["осуществляющие реализация",1],["конечный потребители",1],["закрепляющий деятельность",1],["законодательное запрет",1],["действующий законодательство",1],["бывший туроператор",1],["формирование",1],["туристы",1],["турист",1],["туризм",1],["турагенты",1],["турагент",1],["трудности",1],["сфера",1],["ситуация",1],["сила",1],["сайт",1],["россия",1],["рата",1],["проблемы",1],["предприятие",1],["практика",1],["потребитель",1],["посредники",1],["получение",1],["покупатель",1],["отсутствие",1],["ответственность",1],["наступление",1],["компания",1],["законодательство",1]]';

//