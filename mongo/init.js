// let error = true

let res = [
    db.container.drop(),
    db.container.createIndex({link: 1}, {unique: true}),
    db.container.insert({
        link: "111-qwe",
        data: "[[\"туристский продукт\",4,2,[[\"туристский\",\"ADJF masc,sing,nomn\",\"туристский\",0.5,\"((DictionaryAnalyzer(), 'туристский', 16, 0),)\"],[\"продукт\",\"NOUN,inan,masc sing,nomn\",\"продукт\",0.629629,\"((DictionaryAnalyzer(), 'продукт', 34, 0),)\"]]],[\"туроператоры\",2,1,[[\"туроператоров\",\"NOUN,anim,masc plur,gent\",\"туроператор\",0.666666,\"((DictionaryAnalyzer(), 'туроператоров', 52, 7),)\"]]],[\"реализация\",2,1,[[\"реализации\",\"NOUN,inan,femn sing,gent\",\"реализация\",0.522935,\"((DictionaryAnalyzer(), 'реализации', 41, 1),)\"]]],[\"продвижение\",2,1,[[\"продвижению\",\"NOUN,inan,neut sing,datv\",\"продвижение\",1,\"((DictionaryAnalyzer(), 'продвижению', 77, 4),)\"]]],[\"смена статуса компаний\",1,3,[[\"смену\",\"NOUN,inan,femn sing,accs\",\"смена\",1,\"((DictionaryAnalyzer(), 'смену', 55, 3),)\"],[\"статуса\",\"NOUN,inan,masc sing,gent\",\"статус\",1,\"((DictionaryAnalyzer(), 'статуса', 34, 1),)\"],[\"компаний\",\"NOUN,inan,femn plur,gent\",\"компания\",1,\"((DictionaryAnalyzer(), 'компаний', 41, 8),)\"]]],[\"российский союз туриндустрии\",1,3,[[\"российский\",\"ADJF masc,sing,nomn\",\"российский\",0.85,\"((DictionaryAnalyzer(), 'российский', 16, 0),)\"],[\"союз\",\"NOUN,inan,masc sing,nomn\",\"союз\",0.767857,\"((DictionaryAnalyzer(), 'союз', 34, 0),)\"],[\"туриндустрии\",\"NOUN,inan,femn sing,gent\",\"туриндустрия\",0.2,\"((DictionaryAnalyzer(), 'туриндустрии', 41, 1),)\"]]],[\"правовое регулирование взаимоотношений\",1,3,[[\"правового\",\"ADJF neut,sing,gent\",\"правовой\",0.6,\"((DictionaryAnalyzer(), 'правового', 138, 15),)\"],[\"регулирования\",\"NOUN,inan,neut sing,gent\",\"регулирование\",0.947368,\"((DictionaryAnalyzer(), 'регулирования', 77, 2),)\"],[\"взаимоотношений\",\"NOUN,inan,neut plur,gent\",\"взаимоотношение\",1,\"((DictionaryAnalyzer(), 'взаимоотношений', 77, 15),)\"]]],[\"федеральное агентство\",1,2,[[\"федерального\",\"ADJF neut,sing,gent\",\"федеральный\",0.641304,\"((DictionaryAnalyzer(), 'федерального', 60, 15),)\"],[\"агентства\",\"NOUN,inan,neut sing,gent\",\"агентство\",0.880597,\"((DictionaryAnalyzer(), 'агентства', 54, 1),)\"]]],[\"туроператорская деятельность\",1,2,[[\"туроператорской\",\"ADJF femn,sing,gent\",\"туроператорский\",0.2480604,\"((DictionaryAnalyzer(), 'операторской', 16, 8), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'тур'))\"],[\"деятельности\",\"NOUN,inan,femn sing,gent\",\"деятельность\",0.752293,\"((DictionaryAnalyzer(), 'деятельности', 13, 1),)\"]]],[\"туристский обслуживание\",1,2,[[\"туристского\",\"ADJF masc,sing,gent\",\"туристский\",0.33333334,\"((DictionaryAnalyzer(), 'туристского', 16, 1),)\"],[\"обслуживания\",\"NOUN,inan,neut sing,gent\",\"обслуживание\",0.962962,\"((DictionaryAnalyzer(), 'обслуживания', 77, 2),)\"]]],[\"туристские агентства\",1,2,[[\"туристских\",\"ADJF plur,gent\",\"туристский\",0.33333334,\"((DictionaryAnalyzer(), 'туристских', 16, 21),)\"],[\"агентств\",\"NOUN,inan,neut plur,gent\",\"агентство\",1,\"((DictionaryAnalyzer(), 'агентств', 54, 7),)\"]]],[\"туристская путёвка\",1,2,[[\"туристской\",\"ADJF femn,sing,gent\",\"туристский\",0.444444,\"((DictionaryAnalyzer(), 'туристской', 16, 8),)\"],[\"путёвки\",\"NOUN,inan,femn sing,gent\",\"путёвка\",0.33333334,\"((DictionaryAnalyzer(), 'путёвки', 8, 1),)\"]]],[\"туристический бизнес\",1,2,[[\"туристический\",\"ADJF masc,sing,nomn\",\"туристический\",0.666666,\"((DictionaryAnalyzer(), 'туристический', 16, 0),)\"],[\"бизнес\",\"NOUN,inan,masc sing,nomn\",\"бизнес\",0.568181,\"((DictionaryAnalyzer(), 'бизнес', 34, 0),)\"]]],[\"туристические агентства\",1,2,[[\"туристических\",\"ADJF plur,gent\",\"туристический\",0.666666,\"((DictionaryAnalyzer(), 'туристических', 16, 21),)\"],[\"агентств\",\"NOUN,inan,neut plur,gent\",\"агентство\",1,\"((DictionaryAnalyzer(), 'агентств', 54, 7),)\"]]],[\"турагентская деятельность\",1,2,[[\"турагентскую\",\"ADJF femn,sing,accs\",\"турагентский\",0.9939099,\"((DictionaryAnalyzer(), 'агентскую', 16, 10), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'тур'))\"],[\"деятельность\",\"NOUN,inan,femn sing,accs\",\"деятельность\",0.576923,\"((DictionaryAnalyzer(), 'деятельность', 13, 3),)\"]]],[\"страховые компании\",1,2,[[\"страховыми\",\"ADJF plur,ablt\",\"страховой\",0.666666,\"((DictionaryAnalyzer(), 'страховыми', 138, 25),)\"],[\"компаниями\",\"NOUN,inan,femn plur,ablt\",\"компания\",1,\"((DictionaryAnalyzer(), 'компаниями', 41, 11),)\"]]],[\"страховой случай\",1,2,[[\"страхового\",\"ADJF masc,sing,gent\",\"страховой\",0.33333334,\"((DictionaryAnalyzer(), 'страхового', 138, 1),)\"],[\"случая\",\"NOUN,inan,masc sing,gent\",\"случай\",0.972222,\"((DictionaryAnalyzer(), 'случая', 180, 1),)\"]]],[\"страховой полисы\",1,2,[[\"страховым\",\"ADJF masc,sing,ablt\",\"страховой\",0.333333,\"((DictionaryAnalyzer(), 'страховым', 138, 5),)\"],[\"полисам\",\"NOUN,inan,masc plur,datv\",\"полис\",1,\"((DictionaryAnalyzer(), 'полисам', 34, 8),)\"]]],[\"страховой возмещение\",1,2,[[\"страхового\",\"ADJF masc,sing,gent\",\"страховой\",0.33333334,\"((DictionaryAnalyzer(), 'страхового', 138, 1),)\"],[\"возмещения\",\"NOUN,inan,neut sing,gent\",\"возмещение\",0.846153,\"((DictionaryAnalyzer(), 'возмещения', 77, 2),)\"]]],[\"статус туроператора\",1,2,[[\"статуса\",\"NOUN,inan,masc sing,gent\",\"статус\",1,\"((DictionaryAnalyzer(), 'статуса', 34, 1),)\"],[\"туроператора\",\"NOUN,anim,masc sing,gent\",\"туроператор\",0.75,\"((DictionaryAnalyzer(), 'туроператора', 52, 1),)\"]]],[\"статус турагентства\",1,2,[[\"статус\",\"NOUN,inan,masc sing,accs\",\"статус\",0.666666,\"((DictionaryAnalyzer(), 'статус', 34, 3),)\"],[\"турагентства\",\"NOUN,inan,neut sing,gent\",\"турагентство\",0.33333334,\"((DictionaryAnalyzer(), 'турагентства', 54, 1),)\"]]],[\"средства обслуживания\",1,2,[[\"средствами\",\"NOUN,inan,neut plur,ablt\",\"средство\",1,\"((DictionaryAnalyzer(), 'средствами', 54, 10),)\"],[\"обслуживания\",\"NOUN,inan,neut sing,gent\",\"обслуживание\",0.962962,\"((DictionaryAnalyzer(), 'обслуживания', 77, 2),)\"]]],[\"российская федерация\",1,2,[[\"российской\",\"ADJF femn,sing,gent\",\"российский\",0.866533,\"((DictionaryAnalyzer(), 'российской', 16, 8),)\"],[\"федерации\",\"NOUN,inan,femn sing,gent\",\"федерация\",0.927461,\"((DictionaryAnalyzer(), 'федерации', 41, 1),)\"]]],[\"российская ассоциация\",1,2,[[\"российская\",\"ADJF femn,sing,nomn\",\"российский\",1,\"((DictionaryAnalyzer(), 'российская', 16, 7),)\"],[\"ассоциация\",\"NOUN,inan,femn sing,nomn\",\"ассоциация\",1,\"((DictionaryAnalyzer(), 'ассоциация', 41, 0),)\"]]],[\"реализующая турпродукт\",1,2,[[\"реализующая\",\"PRTF,impf,tran,pres,actv femn,sing,nomn\",\"реализовать\",1,\"((DictionaryAnalyzer(), 'реализующая', 76, 91),)\"],[\"турпродукт\",\"NOUN,inan,masc sing,nomn\",\"турпродукт\",0.33382788,\"((DictionaryAnalyzer(), 'продукт', 34, 0), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'тур'))\"]]],[\"проданный туроператор\",1,2,[[\"проданным\",\"PRTF,perf,tran,past,pssv masc,sing,ablt\",\"продать\",0.33333334,\"((DictionaryAnalyzer(), 'проданным', 884, 47),)\"],[\"туроператором\",\"NOUN,anim,masc sing,ablt\",\"туроператор\",1,\"((DictionaryAnalyzer(), 'туроператором', 52, 4),)\"]]],[\"приобретший турпродукт\",1,2,[[\"приобретший\",\"PRTF,perf,tran,past,actv masc,sing,nomn\",\"приобрести\",0.5,\"((DictionaryAnalyzer(), 'приобретший', 2671, 15),)\"],[\"турпродукт\",\"NOUN,inan,masc sing,nomn\",\"турпродукт\",0.33382788,\"((DictionaryAnalyzer(), 'продукт', 34, 0), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'тур'))\"]]],[\"подобное турагент\",1,2,[[\"подобного\",\"ADJF,Subx,Qual neut,sing,gent\",\"подобный\",0.785714,\"((DictionaryAnalyzer(), 'подобного', 405, 15),)\"],[\"турагента\",\"NOUN,inan,masc sing,gent\",\"турагент\",0.2,\"((DictionaryAnalyzer(), 'агента', 34, 1), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'тур'))\"]]],[\"осуществляющие реализация\",1,2,[[\"осуществляющих\",\"PRTF,impf,tran,pres,actv plur,gent\",\"осуществлять\",0.6,\"((DictionaryAnalyzer(), 'осуществляющих', 215, 34),)\"],[\"реализацию\",\"NOUN,inan,femn sing,accs\",\"реализация\",1,\"((DictionaryAnalyzer(), 'реализацию', 41, 3),)\"]]],[\"конечный потребители\",1,2,[[\"конечным\",\"ADJF,Qual masc,sing,ablt\",\"конечный\",0.571428,\"((DictionaryAnalyzer(), 'конечным', 12, 5),)\"],[\"потребителям\",\"NOUN,anim,masc plur,datv\",\"потребитель\",1,\"((DictionaryAnalyzer(), 'потребителям', 123, 8),)\"]]],[\"закрепляющий деятельность\",1,2,[[\"закрепляющим\",\"PRTF,impf,tran,pres,actv masc,sing,ablt\",\"закреплять\",0.33333334,\"((DictionaryAnalyzer(), 'закрепляющим', 215, 18),)\"],[\"деятельность\",\"NOUN,inan,femn sing,accs\",\"деятельность\",0.576923,\"((DictionaryAnalyzer(), 'деятельность', 13, 3),)\"]]],[\"законодательное запрет\",1,2,[[\"законодательного\",\"ADJF neut,sing,gent\",\"законодательный\",0.6,\"((DictionaryAnalyzer(), 'законодательного', 60, 15),)\"],[\"запрета\",\"NOUN,inan,masc sing,gent\",\"запрет\",1,\"((DictionaryAnalyzer(), 'запрета', 34, 1),)\"]]],[\"действующий законодательство\",1,2,[[\"действующего\",\"PRTF,impf,intr,pres,actv masc,sing,gent\",\"действовать\",0.16666667,\"((DictionaryAnalyzer(), 'действующего', 177, 14),)\"],[\"законодательства\",\"NOUN,inan,neut sing,gent\",\"законодательство\",0.960526,\"((DictionaryAnalyzer(), 'законодательства', 54, 1),)\"]]],[\"бывший туроператор\",1,2,[[\"бывшего\",\"ADJF masc,sing,gent\",\"бывший\",0.16666667,\"((DictionaryAnalyzer(), 'бывшего', 617, 1),)\"],[\"туроператора\",\"NOUN,anim,masc sing,gent\",\"туроператор\",0.75,\"((DictionaryAnalyzer(), 'туроператора', 52, 1),)\"]]],[\"формирование\",1,1,[[\"формированию\",\"NOUN,inan,neut sing,datv\",\"формирование\",1,\"((DictionaryAnalyzer(), 'формированию', 77, 4),)\"]]],[\"туристы\",1,1,[[\"туристам\",\"NOUN,anim,masc plur,datv\",\"турист\",1,\"((DictionaryAnalyzer(), 'туристам', 52, 8),)\"]]],[\"турист\",1,1,[[\"турист\",\"NOUN,anim,masc sing,nomn\",\"турист\",1,\"((DictionaryAnalyzer(), 'турист', 52, 0),)\"]]],[\"туризм\",1,1,[[\"туризму\",\"NOUN,inan,masc sing,datv\",\"туризм\",1,\"((DictionaryAnalyzer(), 'туризму', 34, 2),)\"]]],[\"турагенты\",1,1,[[\"турагенты\",\"NOUN,inan,masc plur,nomn\",\"турагент\",0.14285715,\"((DictionaryAnalyzer(), 'агенты', 34, 6), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'тур'))\"]]],[\"турагент\",1,1,[[\"турагент\",\"NOUN,inan,masc sing,nomn\",\"турагент\",0.14285715,\"((DictionaryAnalyzer(), 'агент', 34, 0), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'тур'))\"]]],[\"трудности\",1,1,[[\"трудностями\",\"NOUN,inan,femn plur,ablt\",\"трудность\",1,\"((DictionaryAnalyzer(), 'трудностями', 13, 10),)\"]]],[\"сфера\",1,1,[[\"сфере\",\"NOUN,inan,femn sing,loct\",\"сфера\",0.903225,\"((DictionaryAnalyzer(), 'сфере', 55, 6),)\"]]],[\"ситуация\",1,1,[[\"ситуация\",\"NOUN,inan,femn sing,nomn\",\"ситуация\",1,\"((DictionaryAnalyzer(), 'ситуация', 41, 0),)\"]]],[\"сила\",1,1,[[\"силу\",\"NOUN,inan,femn sing,accs\",\"сила\",0.996138,\"((DictionaryAnalyzer(), 'силу', 55, 3),)\"]]],[\"сайт\",1,1,[[\"сайте\",\"NOUN,inan,masc sing,loct\",\"сайт\",1,\"((DictionaryAnalyzer(), 'сайте', 34, 5),)\"]]],[\"россия\",1,1,[[\"россии\",\"NOUN,inan,femn,Sgtm,Geox sing,gent\",\"россия\",0.539707,\"((DictionaryAnalyzer(), 'россии', 71, 1),)\"]]],[\"рата\",1,1,[[\"рата\",\"NOUN,anim,masc,Name sing,nomn\",\"рата\",0.5022625,\"((DictionaryAnalyzer(), 'ата', 32, 0), (UnknownPrefixAnalyzer(score_multiplier=0.5), 'р'))\"]]],[\"проблемы\",1,1,[[\"проблем\",\"NOUN,inan,femn plur,gent\",\"проблема\",1,\"((DictionaryAnalyzer(), 'проблем', 55, 8),)\"]]],[\"предприятие\",1,1,[[\"предприятием\",\"NOUN,inan,neut sing,ablt\",\"предприятие\",1,\"((DictionaryAnalyzer(), 'предприятием', 77, 8),)\"]]],[\"практика\",1,1,[[\"практике\",\"NOUN,inan,femn sing,loct\",\"практика\",0.917647,\"((DictionaryAnalyzer(), 'практике', 44, 6),)\"]]],[\"потребитель\",1,1,[[\"потребитель\",\"NOUN,anim,masc sing,nomn\",\"потребитель\",1,\"((DictionaryAnalyzer(), 'потребитель', 123, 0),)\"]]],[\"посредники\",1,1,[[\"посредниками\",\"NOUN,anim,masc plur,ablt\",\"посредник\",1,\"((DictionaryAnalyzer(), 'посредниками', 2, 10),)\"]]],[\"получение\",1,1,[[\"получении\",\"NOUN,inan,neut sing,loct\",\"получение\",1,\"((DictionaryAnalyzer(), 'получении', 77, 10),)\"]]],[\"покупатель\",1,1,[[\"покупателем\",\"NOUN,anim,masc sing,ablt\",\"покупатель\",1,\"((DictionaryAnalyzer(), 'покупателем', 123, 4),)\"]]],[\"отсутствие\",1,1,[[\"отсутствии\",\"NOUN,inan,neut sing,loct\",\"отсутствие\",1,\"((DictionaryAnalyzer(), 'отсутствии', 121, 5),)\"]]],[\"ответственность\",1,1,[[\"ответственности\",\"NOUN,inan,femn sing,gent\",\"ответственность\",0.473684,\"((DictionaryAnalyzer(), 'ответственности', 13, 1),)\"]]],[\"наступление\",1,1,[[\"наступлении\",\"NOUN,inan,neut sing,loct\",\"наступление\",1,\"((DictionaryAnalyzer(), 'наступлении', 77, 10),)\"]]],[\"компания\",1,1,[[\"компания\",\"NOUN,inan,femn sing,nomn\",\"компания\",1,\"((DictionaryAnalyzer(), 'компания', 41, 0),)\"]]],[\"законодательство\",1,1,[[\"законодательством\",\"NOUN,inan,neut sing,ablt\",\"законодательство\",1,\"((DictionaryAnalyzer(), 'законодательством', 54, 4),)\"]]]]"
    }),
]

// printjson(res)

// if (error) {
//     print('Error, exiting')
//     quit(1)
// }