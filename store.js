// Struttura dati base per ogni giorno
const STORE = {
  daily: {
     "12-24": {
      mainMessage: "Ciao Claudietta,Buone feste! Se sei stata buona passa Babbo Natale! Se.",
      marcoMessage: "Oh Oh Oh..",
      playlist: { title: "Closer, the chainsmokers", url: "https://www.youtube.com/watch?v=25ROFXjoaAU" }
    },
    "12-25": {
      mainMessage: "Buon Natale, Tanti auguri e Goditi le feste! mangia assai e divertiti! Il regalo più dolce? tu!",
      marcoMessage: "Guarda.... del vischio..",
      playlist: { title: "Narcotic, Liquido", url: "https://www.youtube.com/watch?v=X2Md9upR2K0" }
    },
    "01-01": {
      mainMessage: "Buon Anno!!!!!!  Anche quest'anno si migliora giusto? tanti auguri, divertiti!",
      marcoMessage: "Pensami un pò, probabilmente io ti penso. Buon anno bellezza <3",
      playlist: { title: "Guns And Roses, Since i dont have you", url: "https://www.youtube.com/watch?v=x2W0P9PDU9U" }
    },
    "01-06": {
      mainMessage: "Naaaaaa non lo dico ahaha, buongiorno, trovata la calza piena di dolci o di carbone?",
      marcoMessage: "al massimo streghetta",
      playlist: { title: "Cliche, MGK", url: "https://www.youtube.com/watch?v=pAVkr5SG02s" }
    },
    "01-13": {
      mainMessage: "Giornata Mondiale del bacio!",
      marcoMessage: "che ne dici?...",
      playlist: { title: "Thats what i want, Lil Nas x", url: "https://www.youtube.com/watch?v=zHd4rSpZn48" }
    },
    "01-24": {
      mainMessage: "Giornata Internazionale del Complimento, oggi ne riceverai un sacco!",
      marcoMessage: "Bella, stupenda, simpatica, scema, intelligente, divertente, interessante, unica, speciale, fantastica, meravigliosa, incredibile, dolce, affascinante, brillante, geniale, irresistibile, adorabile, straordinaria, favolosa, eccezionale, fantastica, fenomenale... e potrei continuare per ore, ma mi fermo qui,che bella Claudietta!",
      playlist: { title: "Maps , Maroon 5", url: "https://www.youtube.com/watch?v=_sIeccYNLKI" }
    }
    ,"02-02": {
      mainMessage: "Giornata della muffa, ma tu sei più fresca di sempre, buon giorno!",
      marcoMessage: "e se vuoi passarla ad ammuffire un pò, fai pure, oggi si può",
      playlist: { title: "Come and get your love, Redbone", url: "https://www.youtube.com/watch?v=wFwYcHjP-YU" }
    },
    "02-08": {
      mainMessage: "Capodanno Tibetano! Si puo' brindare e in maniera piu' saggia del solito capodanno immagino",
      marcoMessage: "Buongiorno, tutto apposto? buon anno!",
      playlist: { title: "Ink, Coldplay (io il tuo nome)", url: "https://www.youtube.com/watch?v=sZFopMcTCo8" }
    },
    "02-11": {
      mainMessage: "Giornata della Donne nella Scienza! ma ti rendi conto quanti giorni per te!",
      marcoMessage: "Auguri Scienziata, aiuta il mondo a non esplodere!",
      playlist: { title: "The Reason , Hoobastank", url: "https://www.youtube.com/watch?v=-F9nCQtxkRw" }
    },
    "02-14": {
      mainMessage: "Buon San Valentino mia amata (ops ho esagerato...)",
      marcoMessage: "Vabbè ogni tanto...",
      playlist: { title: "Take me Out, Franz Ferdinand", url: "https://www.youtube.com/watch?v=A8IcedBzs14" }
    },
    "02-17": {
      mainMessage: "Giornata del gatto, ma tu sei più dolce di un micetto, buon giorno!",
      marcoMessage: "Bugia,è la giornata degli atti di gentilezza, ho cominciato io, tocca a te!",
      playlist: { title: "Photograph , Ed Sheeran", url: "https://www.youtube.com/watch?v=HpphFd_mzXE" }
    },
    "03-01": {
      mainMessage: "Giornata Mondiale della complessita, che dire...",
      marcoMessage: "Auguri Cla",
      playlist: { title: "Im a Believer, Smash Mauth", url: "https://www.youtube.com/watch?v=bWqmc8qxEps" }
    },
    "03-07": {
      mainMessage: "Che donna, festeggiamola anche oggi, un giorno non basta!",
      marcoMessage: "Auguri Cla",
      playlist: { title: "Im a Believer, Smash Mouth", url: "https://www.youtube.com/watch?v=bWqmc8qxEps" }
    },
    "03-08": {
      mainMessage: "Auguri Claudietta,sei importante oggi come ieri, ma tanti auguri!",
      marcoMessage: "Anche domani!",
      playlist: { title: "Hold me closer, Sir Elton John", url: "https://www.youtube.com/watch?v=ux5S7VRqmSc" }
    },
    "03-09": {
      mainMessage: "Buongiorno, pensavi che scherzassi? tanti auguri Claudietta, che donna eccezionale!!!",
      marcoMessage: "Non bastano 3 giorni, ma basta così...",
      playlist: { title: "When love takes hover, David Guetta", url: "https://www.youtube.com/watch?v=X-OSOtL401o" }
    }
    ,
     "03-17": {
      mainMessage: "Buongiorno, San Patrizio oggi! vestiti di verde e se ti va di bere chiamami per una birra!(anche giorno dei colori in india se non vuoi bere)",
      marcoMessage: "Mbriachiamoci cla, oggi siamo irlandesi!",
      playlist: { title: "Broken arrows, Avici", url: "https://www.youtube.com/watch?v=ip4Q1pbrYDg" }
    }
    ,"03-20": {
      mainMessage: "Nowruz, capodanno persiano! si brinda anche oggi, ma con più stile del solito capodanno, magari qualche tappeto e una sciabola!",
      marcoMessage: "Buongiorno,anche oggi, buon anno!",
      playlist: { title: "Stolen Dance", url: "https://www.youtube.com/watch?v=HrREaqrwF0c" }

    },"04-01": {
      mainMessage: "A chi facciamo uno cherzo oggi?",
      marcoMessage: "Buondì, non pensarci nemmeno!",
      playlist: { title: "Treasure, Bruno Mars", url: "https://www.youtube.com/watch?v=nPvuNsRccVw&list=RDnPvuNsRccVw&start_radio=1" }
    },"04-03": {
      mainMessage: "Curiosità, il 4 aprile il Cina si celebra il Qingming / Festa dei Morti, un giorno in cui si onora il passato e si vive il presente",
      marcoMessage: "Domani che si fa? ho sentito che è un giorno speciale",
            playlist: { title: "Just the Way You Are, Bruno Mars", url: "https://www.youtube.com/watch?v=u7XjPmN-tHw" }

    },
    "04-04": {
      mainMessage: "Buon Compleanno! Ti voglio un bene dell'anima. Vorrei dirti altro ma evito di essere troppo mieloso, 28, e sempre bellissima, sono fiero di te e sei veramente importante! Per me sei un piccolo puntino azzurro.",
      marcoMessage: "Sempre scemo, sempre orgoglioso di te, ti voglio bene, sempre.",
            playlist: { title: "Every breath you take, Police", url: "https://www.youtube.com/watch?v=FXozwCdSLb0" }

    },
    "04-05": {
      mainMessage: "Buongiorno, passato una bella serata ieri? come ci si sente con un anno di piu sulle spalle? .",
      marcoMessage: "Buona Pasqua, trovato l'uovo di zucchero?.",
      playlist: { title: "Happy, Pharrel Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" }
    }
    ,
    "04-07": {
      mainMessage: "Breaking news: Il sole splende(forse no),i galli cantano , la benzina costa un sacco,  sei stupenda, la vita va avanti. Edizione straordinaria.",
      marcoMessage: "Assurdo, non ci vedo più, altro che il Sole",
      playlist: { title: "Blinding Lights the Weekend", url: "https://www.youtube.com/watch?v=-_4bx6yX5Ck" }
    },
    "04-09": {
      mainMessage: "Oggi ti ricordo che sei una di quelle persone che migliorano le giornate degli altri.",
      marcoMessage: "Per oggi basta così, un bacino và, buona giornata",
      playlist: { title: "Imagine Dragons, Whatever It Takes", url: "https://www.youtube.com/watch?v=UsuF4jJ4sgA" }
    },
    "04-11": {
      mainMessage: "Anche oggi: testa alta, sorriso attivo, modalità leggenda ON.",
      marcoMessage: "Le-gen-da-ria.",
      playlist: { title: "Walking the Wire. Imagine Dragons (Bomba)", url: "https://www.youtube.com/watch?v=1nv9br7P7g0" }
    },
    "04-13": {
      mainMessage: "Meteo di oggi: 100% probabilità di riuscirci e incazzarsi comunque.",
      marcoMessage: "come al solito",
      playlist: { title: "Stereo Heart, Adam Levine", url: "https://www.youtube.com/watch?v=Mblkcs4fxsw" }
    },
    "04-15": {
      mainMessage: "Giornata internazionale del “non mollo”: tu sei ambasciatrice ufficiale.",
      marcoMessage: "Grinta!",
      playlist: { title: "Bad Things, MGK", url: "https://www.youtube.com/watch?v=QpbQ4I3Eidg" }
    },
    "04-17": {
      mainMessage: "Ricorda: non devi essere perfetta, devi essere te stessa.",
      marcoMessage: "Che è meglio.",
      playlist: { title: "It could Have been Me, the struts", url: "https://www.youtube.com/watch?v=ARhk9K_mviE" }
    },
    "04-19": {
      mainMessage: "Messaggio del giorno: sei una bella persona, dentro e fuori.",
      marcoMessage: "condivido.",
      playlist: { title: "What Lovers Do, Maroon 5", url: "https://www.youtube.com/watch?v=5Wiio4KoGe8" }
    },
    "04-21": {
      mainMessage: "Comunicazione di servizio: il mondo ha bisogno di te.",
      marcoMessage: "Devi essere super.",
      playlist: { title: "Wings, Armand Van Helden (non ti deludero piu)", url: "https://www.youtube.com/watch?v=Gh6JkwZ-5QM" }
    },
    "04-23": {
      mainMessage: "Buongiorno! Giornata del “mi merito cose belle”: confermato.",
      marcoMessage: "Come va? tutto apposto?",
      playlist: { title: "My Only Angel", url: "https://www.youtube.com/watch?v=74mV9qwlCgg" }
    },
    "04-25": {
      mainMessage: "Cià , Oggi sei autorizzata ad entrare in modalità BOSS.",
      marcoMessage: "Come al solito ma autorizzata",
      playlist: { title: "Save Your Tears , The Weekend", url: "https://www.youtube.com/watch?v=XXYlFuWEuKI" }
    },
    "04-27": {
      mainMessage: "ue, come va? Quanto sei bella, datti da fare e sorridi un po",
      marcoMessage: "lascio i po senza accento così sai che scrivo io ahah",
      playlist: { title: "Sunflower, Post Malone", url: "https://www.youtube.com/watch?v=ApXoWvfEYVU" }
    },
    "04-29": {
      mainMessage: "Giorno, Ricorda!!!! : sei molto più dei tuoi dubbi.",
      marcoMessage: "E goditi la giornata il possibile",
      playlist: { title: "More Than You Know", url: "https://www.youtube.com/watch?v=GsF05B8TFWg" }
    },"05-01": {
      mainMessage: "Buongiorno,oggi festa dei lavoratori, celebra un pò i tuoi sforzi, meritano rispetto.",
      marcoMessage: "Ei amica mia, sei in gamba, tvb!",
      playlist: { title: "She will be loved, Maroon 5", url: "https://www.youtube.com/watch?v=u5iJQkIU0xs" }
    } ,
    "05-03": {
      mainMessage: "Breaking News:Il wwf ha dichiarato il panda non piu in via di estinzione. Dovevi saperlo.",
      marcoMessage: "è successo tempo fa, ma ti fara felice saperlo,goditi la giornata, sei il top",
      playlist: { title: "Love me Again,John Newman", url: "https://www.youtube.com/watch?v=MmmRjwgVVOw" }
    },"05-04": {
      mainMessage: "Star Wars Day, non te ne frega nulla? manco a me, pero è figo dai.",
      marcoMessage: "Che la forza sia con te, mia giovane padawan!",
      playlist: { title: "Another Love", url: "https://www.youtube.com/watch?v=Jkj36B1YuDU" }
    } ,
    "05-05": {
      mainMessage: "Buongiorno, come va? Che si dice di interessante?vuoi cazzeggiare un pò",
      marcoMessage: "Oggi vai piano se serve, ma non fermarti.",
      playlist: { title: "Coldplay, A sky full of Stars, tu", url: "https://www.youtube.com/watch?v=HRK_-LNDpcQ&list=RDHRK_-LNDpcQ&start_radio=1" }
    },
    "05-07": {
      mainMessage: "Oggi sei già sulla strada giusta, quella di sempre.",
      marcoMessage: "Giorno Claudietta!",
      playlist: { title: "Cant help Falling in Love , Elvis", url: "https://www.youtube.com/watch?v=MqazV4hbu8E" }
    },
    "05-09": {
      mainMessage: "Anche oggi è lunedi, buongiorno, quanto sei carina!",
      marcoMessage: "non mi va di controllare, se ho azzeccato giorno è a culo",
      playlist: { title: "Whitout You, Avici", url: "https://www.youtube.com/watch?v=WRz2MxhAdJo" }
    },
    "05-11": {
      mainMessage: "Nah vedi chi si vede, sei stupenda cla, buongiorno!",
      marcoMessage: "Coraggio, un altra giornata a nostra disposizione",
      playlist: { title: "I cant feel my face, the weekend", url: "https://www.youtube.com/watch?v=QC2FoaT7Yb8" }
    },  "05-12": {
      mainMessage: "Vesak / Buddah day! sembra una puttanata ma è vero ",
      marcoMessage: "Buongiorno, che figo buddah, medita un po oggi magari!",
      playlist: { title: "Hey Brother, Avicii ", url: "https://www.youtube.com/watch?v=YxIiPLVR6NA" }
    },
    "05-13": {
      mainMessage: "Giornata internazionale del sorriso spontaneo: il tuo conta doppio.",
      marcoMessage: "Bugia, volevo un sorriso",
      playlist: { title: "Secrets, One Republic", url: "https://www.youtube.com/watch?v=ZFGDRzyPXE0" }
    },
    "05-15": {
      mainMessage: "Bonjour, anche oggi si pensa a te, già",
      marcoMessage: "già",
      playlist: { title: "Perfect, Ed Sheeran", url: "https://www.youtube.com/watch?v=cNGjD0VG4R8" }
    },
    "05-17": {
      mainMessage: "Oggi non serve fare tutto, basta fare qualcosa. Iniziamo questa giornata, Buongiorno",
      marcoMessage: "Anche qualcosa di inutile va bene",
      playlist: { title: "Marry you, Bruno Mars", url: "https://www.youtube.com/watch?v=6evHzTWeB3I" }
    },
    "05-19": {
      mainMessage: "Messaggio del giorno: sei importante, davvero.",
      marcoMessage: "esageriamo, importantissima.",
      playlist: { title: "I bet My life, Imagine Dragons", url: "https://www.youtube.com/watch?v=1P9bVeE8zXo" }
    },
    "05-21": {
      mainMessage: "Buongiorno. Oggi ricorda: stai costruendo qualcosa di bello.",
      marcoMessage: "E sei un fenomeno!",
      playlist: { title: "Birds, Imagine Dragons", url: "https://www.youtube.com/watch?v=XPRvQzu5KLI" }
    },
    "05-23": {
      mainMessage: "Fidati del processo, anche quando è caotico",
      marcoMessage: "Disciplina e Coraggio! andiamo avanti insieme! Buongiorno",
      playlist: { title: "Next to Me, Imagine Dragons", url: "https://www.youtube.com/watch?v=-C_rvt0SwLE" }
    },
    "05-25": {
      mainMessage: "Buongiorno, che emozione averti sempre qui!",
      marcoMessage: "Vorrei leggere anche io il tuo cuore",
      playlist: { title: "Bad Liar, Imagine Dragons", url: "https://www.youtube.com/watch?v=uEDhGX-UTeI" }
    },
     "05-27": {
      mainMessage: "Ei, come va? non ti stressare assai, ma non fermarti, sei una forza della natura, buon giorno!",
      marcoMessage: "Cia",
      playlist: { title: "Die with a smile, Bruno Mars", url: "https://www.youtube.com/watch?v=zgaCZOQCpp8" }
    },
     "05-29": {
      mainMessage: "Ue, che sventola,buongiorno Cla!",
      marcoMessage: "Che occhiaie",
      playlist: { title: "Am I Wrong, Nico & Vinz", url: "https://www.youtube.com/watch?v=bg1sT4ILG0w" }
    },
     "06-1": {
      mainMessage: "Battiamo la fiacca oggi? se serve c'è qui per te un bacio",
      marcoMessage: "Da me sia chiaro...",
      playlist: { title: "Do i Wanna Know? Artic Monkeys", url: "https://www.youtube.com/watch?v=PUL2mVdt3xo" }
    },
     "06-03": {
      mainMessage: "Ciao Claudietta, che mi racconti? come va la vita?",
      marcoMessage: "Finalmente comincia a fare caldo",
      playlist: { title: "Let it Happen, tame Impala", url: "https://www.youtube.com/watch?v=IUEntLVvvAc" }
    },
      "06-05": {
      mainMessage: "Senti oggi non so che dirti, fammi una chiamata e raccontami qualcosa, ho voglia di sentirti",
      marcoMessage: "Forse, l'ho scritto tempo fa, ma chiamami proviamo...",
      playlist: { title: "Careless Whisper, George Michaek", url: "https://www.youtube.com/watch?v=JqIHlDVqUTw" }
    }, "06-07": {
      mainMessage: "Buonasera, si lo so che oggi leggi di sera, sono un mago",
      marcoMessage: "non chiedermi come faccio. come è andata la giornata? Dimmi un po'",
      playlist: { title: "Magic, Coldplay", url: "https://www.youtube.com/watch?v=ahljgeubcjg" }
    }, "06-09": {
      mainMessage: "Che vuoi sentirti dire oggi? ",
      marcoMessage: "Pensavo proprio a quello! buona giornata claudietta",
      playlist: { title: "Just the Two of Us,Bill Withers", url: "https://www.youtube.com/watch?v=VoEsEC2CLgE" }
    }, "06-11": {
      mainMessage: "Che sonno! Come sempre, chi dorme non prende pesci!",
      marcoMessage: "Ma se hai voglia di relax, sono a disposizione, non è detto che sia una cosa negativa.",
      playlist: { title: "Happy togherer, the turtles", url: "https://www.youtube.com/watch?v=WiPcgmSQ5uI" }
    }, "06-12": {
      mainMessage: "Ei stronzetta buongiorno, Ti pensavo.....",
      marcoMessage: "non ti dico pero' cosa....",
      playlist: { title: "I dont wanna miss a thing, Aerosmith", url: "https://www.youtube.com/watch?v=T-doQhcwDS8" }
    }, "06-14": {
      mainMessage: "Buondi, quanto sei bella oggi!",
      marcoMessage: "Nuovo giorno, nuove sfide e nuove occasioni per essere fantastica, buon giorno!",
      playlist: { title: "Im Yours,Jason Mraz", url: "https://www.youtube.com/watch?v=w5qOYi41WiA" }
    }, "06-16": {
      mainMessage: "Eiiii oggi non ci siamo proprio, non ti sento da una vita, chiamami e raccontami qualcosa, ho voglia di sentirti",
      marcoMessage: "Vabbe se non vuoi non voglio manco io ok? bugia",
      playlist: { title: "Lonely , Akon", url: "https://www.youtube.com/watch?v=JISlh7et1w4" }
    },
     "06-18": {
      mainMessage: "Non mi stancheroi mai di dirti quanto vali, buon giorno!",
      marcoMessage: "E sei pure carina devo ammettere, giusto per dirlo una volta nella vita",
      playlist: { title: "So Lonely, Police", url: "https://www.youtube.com/watch?v=60M_yIDzMcw" }
    },
     "06-21": {
      mainMessage: "Oggi comincia ufficialmente l'estate, goditi il sole, il mare e diveriti con un po' di sano cazzeggio",
      marcoMessage: "Ogni tanto, non è che insisto, comunque ok se proprio insisti posso venire con te ogni tanto a cazzeggiare, ma non esageriamo",
      playlist: { title: "Perfect , ed Sheran", url: "https://www.youtube.com/watch?v=kPhpHvnnn0Q" }
    },
     "07-15": {
      mainMessage: "Gioranata mondiale delle talpe e degli animali sotteranei e che scavano, boh",
      marcoMessage: "Auguri? non so che dirti, ma auguri",
      playlist: { title: "All of Me, John Legend", url: "https://www.youtube.com/watch?v=QfgJQUiQFes" }
    },
     "08-02": {
      mainMessage: "Ma sei stupenda! Che scelta questa madrina! divertiti e si fiera di te <3 ",
      marcoMessage: "Bravissima Cla, tanti auguri!",
      playlist: { title: "Reload, Various Artists", url: "https://www.youtube.com/watch?v=xlcxWHsCojU" }
    },
     "08-08": {
      mainMessage: "Oh oggi giornata importante me lo sento!",
      marcoMessage: "....",
      playlist: { title: "She's the One,Robbie Williams", url: "https://www.youtube.com/watch?v=NmrExoQGhvI" }
    },
     "08-14": {
      mainMessage: "Bonjour, ci vediamo a mare? Ti voglio bella e solare! divertiti!",
      marcoMessage: "Ci ubriachiamo insieme?",
      playlist: { title: "Marvin Gaye, Charlie Puth", url: "https://www.youtube.com/watch?v=a5CslyeXmOE" }
    },
     "08-19": {
      mainMessage: "Giornata mondiale della fotografia!",
      marcoMessage: "Ti va una foto?",
      playlist: { title: "Eccoti, Max Pezzali", url: "https://www.youtube.com/watch?v=-hQC9s8TTk4" }
    },
     "09-21": {
      mainMessage: "Giornata mondiale della pace! Litighiamo un po' come piace a noi e poi facciamo pace festeggiando?",
      marcoMessage: "peace and love, ma se vuoi litighiamo un po'",
      playlist: { title: "Lovesick, maroon 5", url: "https://www.youtube.com/watch?v=zAVqPCuYN4k" }
    },
     "09-27": {
      mainMessage: "Giornata mondiale del turismo!",
      marcoMessage: "Giorno ideale per pianificare, so gia che stiamo a casa ahaha",
      playlist: { title: "Chemical, Post Malone", url: "https://www.youtube.com/watch?v=81pk9vrKprA" }
    },
    "10-01": {
      mainMessage: "Giornata mondiale della musica! ascolta la tua canzone preferita e balla come se nessuno ti stesse guardando!",
      marcoMessage: "E se qualcuno ti stesse guardando? balla lo stesso, che ti frega! Buongiorno!",
      playlist: { title: "Looser, charlie puth", url: "https://www.youtube.com/watch?v=0NXUj7dJ6tM" }
    },
    "10-31": {
      mainMessage: "Buongiorno, sarai tu il mostro oggi? da che ti travesti?",
      marcoMessage: "Ciao streghetta, oggi con o senza maschera per fare più paura?",
      playlist: { title: "Left and right, Charlie Puth - Jungkook", url: "https://www.youtube.com/watch?v=Otkibvs-aAs" }
    }

    
  },

  weekly: {
    monday: {
      mainMessage: "Buon Lunedì, Comincia un altra settimana, datti da fare, impegnati, goditela e rendi te stessa fiera! ",
      marcoMessage: "tutto apposto? conto su di te!",
      playlist: { title: "Waiting For Love, Avicii", url: "https://www.youtube.com/watch?v=-ncIVUXZla8" }
    },
    tuesday: {
      mainMessage: "Continua così 💪",
      marcoMessage: "un giorno qualunque, spero sia speciale",
      playlist: { title: "Mary On a Cross, Ghost", url: "https://www.youtube.com/watch?v=bpY6gGjjy5I" }
    },
    wednesday: { mainMessage: "Sei a metà settimana, tieni duro, sappiamo entrambi che sei infermabile", marcoMessage: "grinta!", playlist: { title: "Space, Biffy Clyro", url: "https://www.youtube.com/watch?v=op50XcZT33E" } },
    thursday: { mainMessage: "Come procede la settimana? Stupenda, pessima o noiosa oggi è giovedi, diamo senso alla giornata e alle prossime!", marcoMessage: "tutto bene? sorridi un po, non serve ridere", playlist: { title: "Unforgettable,French Montana - Swae Lee", url: "https://www.youtube.com/watch?v=MIcIza4sqaM" } },
    friday: { mainMessage: "Finalmente Venerdi! che si fa? ci si concede una momento tranquillo sta sera?", marcoMessage: "sai quanto vali.💪", playlist: { title: "Roi, VIDEOCLUB", url: "https://www.youtube.com/watch?v=4NOMFBRfaT0" } },
    saturday: { mainMessage: "Relax, sta sera devi concederti un momento di cazzeggio! serve!", marcoMessage: "Poi se serve disciplina sai tu.", playlist: { title: "We Are The People, Empire Of The Sun", url: "https://www.youtube.com/watch?v=J7MFQAB6R-Q" } },
    sunday: { mainMessage: "Ricaricati, sei una macchina perfetta, ma serve concedersi momenti di pace", marcoMessage: "Take care! sei importante, non esagerare se non quando sai essere necessario.", playlist: { title: "Coldplay, Everglow", url: "https://www.youtube.com/watch?v=xn_1hFdE-5g" } }
  },
playlistSection: [
  {
    name: "Playlist Relax",
    description: "Per i momenti tranquilli",
    songs: [
      
       {
        title: "Everglow",
        subtitle: "Coldplay",
        url: "https://www.youtube.com/watch?v=xn_1hFdE-5g"
      },
       {
        title: "Roi",
        subtitle: "VIDEOCLUB",
        url: "https://www.youtube.com/watch?v=4NOMFBRfaT0"
      },
       {
        title: "We are the People",
        subtitle: "Empire Of The Sun",
        url: "https://www.youtube.com/watch?v=J7MFQAB6R-Q"
      },
       {
        title: "Space",
        subtitle: "Biffy Clyro",
        url: "https://www.youtube.com/watch?v=op50XcZT33E"
      },
       {
        title: "Unforgettable",
        subtitle: "French Montana - Swae Lee",
        url: "https://www.youtube.com/watch?v=MIcIza4sqaM"
      }
      ,
       {
        title: "Bad Things",
        subtitle: "MGK",
        url: "https://www.youtube.com/watch?v=QpbQ4I3Eidg"
      },
       {
        title: "Save Your Tears",
        subtitle: "The Weekend",
        url: "https://www.youtube.com/watch?v=XXYlFuWEuKI"
      },
       {
        title: "She will be loved",
        subtitle: "Maroon 5",
        url: "https://www.youtube.com/watch?v=u5iJQkIU0xs"
      },
       {
        title: "Love me Again",
        subtitle: "John Newman",
        url: "https://www.youtube.com/watch?v=MmmRjwgVVOw"
      },
       {
        title: "another Love",
        subtitle: "Tom Odell",
        url: "https://www.youtube.com/watch?v=Jkj36B1YuDU"
      },
       {
        title: "Perfect",
        subtitle: "Ed Sheeran",
        url: "https://www.youtube.com/watch?v=cNGjD0VG4R8"
      },
       {
        title: "Next to Me",
        subtitle: "Imagine Dragons",
        url: "https://www.youtube.com/watch?v=-C_rvt0SwLE"
      },
       {
        title: "Birds",
        subtitle: "Imagine Dragons",
        url: "https://www.youtube.com/watch?v=XPRvQzu5KLI"
      },
       {
        title: "Die with a smile",
        subtitle: "Bruno Mars",
        url: "https://www.youtube.com/watch?v=zgaCZOQCpp8"
      },
       {
        title: "Am i Wrong",
        subtitle: "Nico & Vinz",
        url: "https://www.youtube.com/watch?v=bg1sT4ILG0w"
      },
       {
        title: "Every breath you take",
        subtitle: "Police",
        url: "https://www.youtube.com/watch?v=FXozwCdSLb0"
      },
       {
        title: "Cant help Falling in Love",
        subtitle: "Elvis Presley",
        url: "https://www.youtube.com/watch?v=MqazV4hbu8E"
      },
       {
        title: "Let it happen",
        subtitle: "Tame Impala",
        url: "https://www.youtube.com/watch?v=IUEntLVvvAc"
      },
       {
        title: "Magic",
        subtitle: "Coldplay",
        url: "https://www.youtube.com/watch?v=ahljgeubcjg"
      },
       {
        title: "Just the Two of Us",
        subtitle: "Bill Withers",
        url: "https://www.youtube.com/watch?v=VoEsEC2CLgE"
      },
       {
        title: "Im Yours",
        subtitle: "Jason Mraz",
        url: "https://www.youtube.com/watch?v=w5qOYi41WiA"
      },
       {
        title: "Lonely",
        subtitle: "Akon",
        url: "https://www.youtube.com/watch?v=JISlh7et1w4"
      },
       {
        title: "So Lonely",
        subtitle: "Police",
        url: "https://www.youtube.com/watch?v=60M_yIDzMcw"
      },
       {
        title: "Lovesick",
        subtitle: "Maroon 5",
        url: "https://www.youtube.com/watch?v=zAVqPCuYN4k"
      },
       {
        title: "chemical",
        subtitle: "Post Malone",
        url: "https://www.youtube.com/watch?v=81pk9vrKprA"
      },
       {
        title: "Loser",
        subtitle: "Charlie Puth",
        url: "https://www.youtube.com/watch?v=0NXUj7dJ6tM"
      },
       {
        title: "thats what i want",
        subtitle: "Lil Nas X",
        url: "https://www.youtube.com/watch?v=zHd4rSpZn48"
      },
       {
        title: "Maps",
        subtitle: "Maroon 5",
        url: "https://www.youtube.com/watch?v=_sIeccYNLKI"
      },
       {
        title: "broken arrows",
        subtitle: "Avicii",
        url: "https://www.youtube.com/watch?v=ip4Q1pbrYDg"
      },
       {
        title: "without you",
        subtitle: "Avicii",
        url: "https://www.youtube.com/watch?v=WRz2MxhAdJo"
      },
       {
        title: "stolen dance",
        subtitle: "Milky Chance",
        url: "https://www.youtube.com/watch?v=HrREaqrwF0c"
      }
    ]
  },
  {
    name: "Playlist Energia",
    description: "Per caricarsi",
    songs: [
      {
        title: "My Only Angel",
        subtitle: "Aerosmith, YUNGBLUD",
        url: "https://www.youtube.com/watch?v=bTOWDRL1KbA"
      },
      {
        title: "Fairytale",
        subtitle: "Alexander Rybak",
        url: "https://www.youtube.com/watch?v=1rVY08gRGmA"
      },
       {
        title: "Blinding Lights",
        subtitle: "The Weeknd",
        url: "https://www.youtube.com/watch?v=-_4bx6yX5Ck"
      },
       {
        title: "Walking The Wire",
        subtitle: "Imagine Dragons",
        url: "https://www.youtube.com/watch?v=1nv9br7P7g0"
      },
       {
        title: "Whatever It Takes",
        subtitle: "Imagine Dragons",
        url: "https://www.youtube.com/watch?v=UsuF4jJ4sgA"
      },
       {
        title: "stereo Heart",
        subtitle: "Adam Levine",
        url: "https://www.youtube.com/watch?v=Mblkcs4fxsw"
      },
       {
        title: "It could have been me",
        subtitle: "The Struts",
        url: "https://www.youtube.com/watch?v=ARhk9K_mviE"
      },
       {
        title: "What Lovers Do",
        subtitle: "Maroon 5",
        url: "https://www.youtube.com/watch?v=5Wiio4KoGe8"
      },
       {
        title: "Wings",
        subtitle: "Armand Van Helden",
        url: "https://www.youtube.com/watch?v=Gh6JkwZ-5QM"
      },
       {
        title: "Sunflower",
        subtitle: "Post Malone",
        url: "https://www.youtube.com/watch?v=ApXoWvfEYVU"
      },
       {
        title: "More than you know",
        subtitle: "Alesso",
        url: "https://www.youtube.com/watch?v=GsF05B8TFWg"
      },
       {
        title: "Do i Wanna Know?",
        subtitle: "Artic Monkeys",
        url: "https://www.youtube.com/watch?v=PUL2mVdt3xo"
      },
       {
        title: "happy together",
        subtitle: "the turtles",
        url: "https://www.youtube.com/watch?v=WiPcgmSQ5uI"
      },
       {
        title: "Reload",
        subtitle: "Various Artists",
        url: "https://www.youtube.com/watch?v=xlcxWHsCojU"
      },
       {
        title: "Marvin Gaye",
        subtitle: "Charlie Puth",
        url: "https://www.youtube.com/watch?v=a5CslyeXmOE"
      },
       {
        title: "Left and right",
        subtitle: "Charlie Puth - Jungkook",
        url: "https://www.youtube.com/watch?v=Otkibvs-aAs"
      },
       {
        title: "Cliche",
        subtitle: "MGK",
        url: "https://www.youtube.com/watch?v=pAVkr5SG02s"
      },
       {
        title: "Closer",
        subtitle: "The Chainsmokers",
        url: "https://www.youtube.com/watch?v=25ROFXjoaAU"
      },
       {
        title: "Come and get your love",
        subtitle: "Redbone",
        url: "https://www.youtube.com/watch?v=wFwYcHjP-YU"
      },
       {
        title: "take me out",
        subtitle: "Franz Ferdinand",
        url: "https://www.youtube.com/watch?v=A8IcedBzs14"
      },
       {
        title: "im a Believer",
        subtitle: "Smash Mouth",
        url: "https://www.youtube.com/watch?v=bWqmc8qxEps"
      }
    ]
  },
  {
    name: "Molto belle senza categoria",
    description: "Per godersi bella musica",
    songs: [
      {
        title: "We are the People",
        subtitle: "Empire Of The Sun",
        url: "https://www.youtube.com/watch?v=J7MFQAB6R-Q"
      },
       {
        title: "A Sky Full of Stars",
        subtitle: "Coldplay",
        url: "https://www.youtube.com/watch?v=HRK_-LNDpcQ&list=RDHRK_-LNDpcQ&start_radio=1"
      },
       {
        title: "Secrets",
        subtitle: "One Republic",
        url: "https://www.youtube.com/watch?v=ZFGDRzyPXE0"
      },
       {
        title: "Bad Liar",
        subtitle: "Imagine Dragons",
        url: "https://www.youtube.com/watch?v=uEDhGX-UTeI"
      },
       {
        title: "I bet My life",
        subtitle: "Imagine Dragons",
        url: "https://www.youtube.com/watch?v=1P9bVeE8zXo"
      },
       {
        title: "careless Whisper",
        subtitle: "George Michael",
        url: "https://www.youtube.com/watch?v=JqIHlDVqUTw"
      },
       {
        title: "I dont wanna miss a thing",
        subtitle: "Aerosmith",
        url: "https://www.youtube.com/watch?v=T-doQhcwDS8"
      },
       {
        title: "Perfect",
        subtitle: "Ed Sheeran",
        url: "https://www.youtube.com/watch?v=kPhpHvnnn0Q"
      },
       {
        title: "All of Me",
        subtitle: "John Legend",
        url: "https://www.youtube.com/watch?v=QfgJQUiQFes"
      },
       {
        title: "She's the One",
        subtitle: "Robbie Williams",
        url: "https://www.youtube.com/watch?v=NmrExoQGhvI"
      },
       {
        title: "Eccoti",
        subtitle: "Max Pezzali",
        url: "https://www.youtube.com/watch?v=-hQC9s8TTk4"
      },
       {
        title: "Since i dont have you",
        subtitle: "Guns And Roses",
        url: "https://www.youtube.com/watch?v=x2W0P9PDU9U"
      },
       {
        title: "Narcotic",
        subtitle: "Liquido",
        url: "https://www.youtube.com/watch?v=X2Md9upR2K0"
      },
       {
        title: "ink",
        subtitle: "Coldplay",
        url: "https://www.youtube.com/watch?v=sZFopMcTCo8"
      },
       {
        title: "The reason",
        subtitle: "Hoobastank",
        url: "https://www.youtube.com/watch?v=-F9nCQtxkRw"
      },
       {
        title: "Photograph",
        subtitle: "Ed Sheeran",
        url: "https://www.youtube.com/watch?v=HpphFd_mzXE"
      }
    ]
  }
],
 coupons: [
  
   
    {
      number: 1,
      title: "Un favore",
      description: "Qualcosa che farei comunque, ma se ti dovessi dire di no hai un coupon a disposizione",
      activationDate: "2026-04-04"
    },
    {
      number: 2,
      title: "Un favore importante",
      description: "Puoi chiedermi un favore che non farei di buon grado (difficle) e mi mettero a disposizione.",
      activationDate: "2026-04-04"
    },
     {
      number: 3,
      title: "Fuga",
      description: "Se mai hai voglia di scappare da qualche posto chiamami senza pensarci,puoi usarlo quante volte vuoi.",
      activationDate: "2026-04-04"
    },{
      number: 4,
      title: "Una conversazione",
      description: "una conversazione onesta anche su un argomento che evito o per me scomodo",
      activationDate: "2026-04-04"
    }, 
    {
      number: 5,
      title: "Un abbraccio",
      description: "Utilizzabile fino al consumarmi.",
      activationDate: "2026-04-04"
    },
    {
      number: 6,
      title: "Scappiamo",
      description: "Utilizzabile una volta nella vita, puoi chiedermi di portarti via e lontano in un bel posto per 4/5 giorni e scappare dal mondo.",
      activationDate: "2026-04-04"
    },
    {
      number: 7,
      title: "Passeggiata al tramonto",
      description: "Quando hai voglia di una bella vista da goderci assieme, quando vuoi.",
      activationDate: "2026-04-04"
    },
    {
      number: 8,
      title: "Un segreto",
      description: "Puoi farmi confessare un mio segreto o costringermi a mantenerne uno, utilizzabile due volte.",
      activationDate: "2026-04-04"
    },
    {
      number: 9,
      title: "Una sorpresa",
      description: "magari ti cominciano a piacere, puoi usarla quanto vuoi, non è dato saperne la natura ne quando arrivera una volta chiamato",
      activationDate: "2026-04-04"
    },
    {
      number: 10,
      title: "un messaggio incoraggiante",
      description: "Se hai voglia di un in bocca al lupo eccezionale, puoi usarlo quante volte vuoi.",
      activationDate: "2026-04-04"
    },
     {
      number: 11,
      title: "un gita in barca",
      description: "O qualcosa di simile.",
      activationDate: "2026-04-04"
    },
    {
      number: 12,
      title: "notte al mare",
      description: "Una notte a guardare le stelle assieme, quante volte vuoi.",
      activationDate: "2026-04-04"
    },
     {
      number: 13,
      title: "Una serata per ascoltare",
      description: "una serata in cui ti ascolto davvero,solo per capirti meglio, senza minimizzare ne distrarmi",
      activationDate: "2026-04-04"
    },
    {
      number: 14,
      title: "Una giornata al mare",
      description: "Se usi questa carta mi serviranno solo data e ora in cui passare a prenderti e passerai una giornata al mare senza doverti preoccupare di nulla",
      activationDate: "2026-04-04"
    },
    {
      number: 15,
      title: "Colazione/pausa assieme",
      description: "poco da spiegare, puoi usarla a piacimento",
      activationDate: "2026-04-04"
    },
    {
      number: 16,
      title: "Casual",
      description: "un uscita non organizzata, usciamo e scopriamo cosa ha in serbo per noi la giornata/serata",
      activationDate: "2026-04-04"
    },
     {
      number: 17,
      title: "Un gelato",
      description: "se ti va un gelato o uscire e trovare un momento senza pensieri, quante volte vuoi",
      activationDate: "2026-04-04"
    }, 
     {
      number: 18,
      title: "Una consulenza",
      description: "Se un qualcosa va male e non sai come fare, ci possiamo ragionare assieme",
      activationDate: "2026-04-04"
    },
    {
      number: 19,
      title: "Vino",
      description: "Una serata in cui beviamo assieme, evitando la sbronza ma cercando l'essere brilli",
      activationDate: "2026-04-04"
    },
    {
        number: 20,
        title: "Ti distraggo",
        description: "se sei persa nei pensieri, intervengo con cose leggere.",
      activationDate: "2026-04-04"
    },
     {
        number: 21,
        title: "Complicità",
        description: "non serve spiegarmi nulla, dimmi che devo fare e sarò tuo complice.",
      activationDate: "2026-04-04"
    },
    {
        number: 22,
        title: "Un insulto",
        description: "Vuoi che si parli male di qualcuno, dimmi chi serve insultare e cosa ha fatto e ne parlero come della peggior feccia.",
      activationDate: "2026-04-04"
    },
    {
        number: 23,
        title: "Vengo senza opinioni",
        description: "Se un momento vuoi che sia li con te,e solo per avere qualcuno affianco, senza dover sentire una mia parola, questa carta ti promette ciò.",
      activationDate: "2026-04-04"
    },
    {
        number: 24,
        title: "Check veloce",
        description: "ci fermiamo un attimo e capiamo come stiamo, puoi usarlo quante volte vuoi.",
      activationDate: "2026-04-04"
    },
     {
        number: 25,
        title: "Ti copro",
        description: "Se ti serve una scusa credibile, la costruiamo insieme.",
      activationDate: "2026-04-04"
    },
    {
        number: 26,
        title: "Rinfrescata",
        description: "Se ti serve ricordarti chi sei, se ti sottovaluti, intervengo io, quante volte vuoi.",
      activationDate: "2026-04-04"
    },
    {
        number: 27,
        title: "Ti accompagno",
        description: "ovunque tu debba andare e non hai voglia di farlo da sola.",
      activationDate: "2026-04-04"
    },
    {
        number: 28,
        title: "Un tuo desiderio",
        description: "Qualunque sia il desiderio, se ne sarò in grado provero ad esaudirlo",
      activationDate: "2026-04-04"
    }
    
    
    
  ],
  
  coseDaFare : [
  { name: "ballare come gli scemi a casa", date: null },
  { name: "Gita fuori porta", date: null },
  { name: "Volo dell'angelo", date: null },
  { name: "Viaggio in aereo", date: null },
  { name: "Cucinare insieme", date: null },
  { name: "Weekend fuori assieme", date: null },
  { name: "Andare in montagna con la neve", date: null },
  { name: "Vedere l’alba insieme almeno una volta", date: null },
  { name: "Perdersi in una città nuova", date: null },
  { name: "Passare una notte a parlare senza accorgersi dell’ora (non messaggiando seno vabbé)", date: null },
  { name: "Festeggiare qualcosa di piccolo come fosse grande (solo tra di noi)", date: null },
  { name: "Fare qualcosa che spaventa entrambi", date: null },
  { name: "Dormire insieme", date: null },  
  { name: "Scegliere un posto che diventa ‘nostro’", date: null },
  { name: "Passare un Natale insieme", date: null },
  { name: "Passare una giornata intera senza programmi", date: null },
  { name: "Fare un brindisi per qualcosa che ancora non è successo", date: null },
  { name: "Essere brilli assieme", date: null },
  { name: "Vedere un concerto insieme", date: null },
  { name: "Fare una foto che col tempo diventa importante", date: null },
  { name: "Andare alla spa", date: null },
  { name: "Un bel viaggio lungo in macchina", date: null },
  { name: "Fare il bagno insieme una notte", date: null },
  { name: "Una gita in bici (faccio pena)", date: null },
  { name: "Provare uno sport nuovo per scoprire il piu impedito", date: null },
  { name: "Guardare le stelle", date: null },
  { name: "Andare a un evento da coppia (anche in amicizia)", date: null },
  { name: "Festeggiare un giorno l'essere veramente felici", date: null },
  { name: "Farsi uno scherzo elaborato", date: null },
  { name: "Andare un giorno in un parco divertimenti (stile Gardaland, non luna park) e provare una giostra adrenalinica", date: null },
  { name: "Provare un cibo totalmente fuori comfort zone (es. gambe di rana o robe strane cinesi)", date: null },
  { name: "Passare una notte in giro fuori casa", date: null },
  { name: "Fare qualcosa di epico che racconteremo per anni", date: null },
  { name: "Guardare tutta una serie insieme", date: null },
  { name: "Prepararsi insieme per uscire", date: null },
  { name: "Visitare una capitale", date: null },
  { name: "Darci un bacio un capodanno", date: null },  
  { name: "Andare ad un ristorante stellato", date: null },
  { name: "Costruire un oggetto insieme", date: null },
  { name: "Prendersi cura l'uno dell'altro durante un'influenza", date: null },
  { name: "Andare a prendere l’altro quando è stanco o non ha voglia", date: null },
  { name: "Aiutare l’altro a sistemare casa o qualcosa di suo", date: null },
  { name: "Farci cacciare da qualche posto", date: null },
  { name: "Condividere una figuraccia", date: null },
  { name: "Migliorarci e sostenerci assieme", date: null },


],
fortuneMessages: [
  "Se ti mangi la maglietta probabilmente sei perfetta",
  "Che giornata stupenda è la giornata in cui sorridi",
  "nel tuo sushi non ci sono parassiti",
  "una sorpresa ti aspetta, probabilmente non quella che volevi",
  "il tuo futuro è luminoso, ma ricordati gli occhiali da sole",
  "sei irresistibile, soprattutto quando non parli troppo",
  "sei irresistibile, soprattutto quando parli troppo",
  "non tutto ha senso, ma tu fai finta di sì",
  "il caos ti segue, ma con stile",
  "qualcuno ti trova affascinante… non chiedere chi",
  "oggi è il giorno perfetto per fare qualcosa di discutibile",
  "il destino ti manda segnali, tu ignora pure",
  "una decisione importante ti aspetta, rimandala con eleganza",
  "sei esattamente dove dovresti essere… più o meno",
  "oggi potresti essere fortunata, se giochi le carte giuste o inventi tu le regole",
  "il tuo fascino funziona, a volte anche per sbaglio",
  "una coincidenza strana ti farà sorridere",
  "oggi hai energia da vendere, peccato non ci sia mercato",
  "non so se dimostri 17 anni o 46...     facciamo 22",
  "non ti arrabbiare, anche se sei stupenda quando ti arrabbi",
  "il tuo futuro è pieno di possibilità e di dolcetti e zeppoline",
  "oggi evita drammi, a meno che non siano divertenti",
  "oggi potresti sorprendere te stessa",
  "il tuo sorriso ha poteri strani, usalo con cautela",
  "qualcuno ti trova irresistibile… ma non lo ammetterà mai",
  "oggi segui il cuore, ma porta anche il cervello",
  "un piccolo rischio porterà una grande storia da raccontare",
  "qualcosa di dolce sta arrivando, forse cibo",
  "oggi è un buon giorno per provarci senza motivo",
  "qualcuno ti deve un sorriso, vai a reclamarlo",
  "la vita ti sorprende quando meno te lo aspetti, tipo ora",
  "hai charme naturale, anche quando non vuoi",
  "oggi fai quello che vuoi, tanto nessuno capisce comunque",
  "il destino ti lancia un bacio, prendilo al volo",
  "Una sorpresa è vicina, attenta!",
  "Sei più forte di quanto pensi",
  "Giornata fortunata per qualcuno",
  "sei un problema… di quelli che si vogliono risolvere lentamente",
  "il tuo sguardo crea dipendenza, usalo con cattive intenzioni",
  "oggi sei pericolosa, ma nel modo giusto",
  "il tuo sorriso è un invito, anche quando non lo è",
  "qualcuno sogna di avvicinarsi troppo a te",
  "sei quel tipo di distrazione che vale la pena",
  "oggi giochi con il fuoco… e vinci tu",
  "il tuo charme non è legale in tutti i paesi",
  "qualcuno si sta chiedendo come fai ad essere così",
  "sei una cattiva idea… irresistibile",
  "oggi potresti ottenere esattamente quello che vuoi",
  "sei più magnetica del previsto, e si nota",
  "un pensiero dolce ti sta cercando proprio ora",
  "sei il tipo di persona che resta nei pensieri",
  "qualcuno trova conforto solo nel pensarti",
  "oggi potresti far nascere qualcosa di bello",
  "il tuo cuore sa già dove andare, ascoltalo",
  "sei una piccola magia quotidiana",
  "qualcuno apprezza ogni tua imperfezione",
  "il tuo modo di essere è già abbastanza",
  "qualcuno si sente fortunato solo a conoscerti",
  "oggi porta con te un po’ di dolcezza in più",
  "sei la risposta che qualcuno non sapeva di cercare",
  "il tuo sorriso oggi vale doppio",
  "sei il pensiero leggero di qualcuno in una giornata pesante",
  "oggi riderai per qualcosa di stupido",
  "la tua fortuna aumenta quando ignori i consigli inutili",
  "qualcuno oggi farà una figuraccia… potresti non essere te",
  "sei ufficialmente autorizzata a non prendere nulla sul serio",
  "oggi hai il diritto di dire ‘te l’avevo detto’ almeno una volta",
  "la fortuna ti segue, ma ogni tanto inciampa",
  "oggi potresti fare tutto bene… oppure divertirti un po",
  "la giornata migliora dopo il primo sorriso (anche finto)",
  "sei brillante, anche quando non hai idea di cosa stai facendo",
  "oggi le cose andranno bene… o magari domani ",
  "il tuo talento segreto è cavartela sempre",
  "tra tutti i pensieri, tu sei il piu dolce",
  "sei quel dettaglio raro che rende tutto più bello",
  "anche quando non ci sei, in qualche modo ci sei",
  "sei diversa da tutte, ed è impossibile non accorgersene",
  "tra mille coincidenze, tu sembri una scelta",
  "sei il pensiero che non stanca mai",
  "quanto sei speciale non lo sai neanche tu",
  "non so spiegarti perché, ma sei sempre lì",
  "quando penso a qualcosa di bello, finisco sempre su di te",
  "sei quella sensazione che cambia tutto",
  
],

complimenti: [
  "Sei incredibile",
  "Hai un sorriso che migliora le giornate",
  "Sei la mia parte preferita della giornata",
  "Che Gambe ragazza",
  "Se ti dicessi quello che penso mi diresti che sto esagerando",
  "Tra tutte le persone del mondo, tu sei la mia preferita",
  "Quanto sei da mangiare dalla testa ai piedi",
  "Quanti difetti perfetti",
  "Amarti è come respirare",
  "Sei un Caterpillar (proprio un bruchetto)",
  "Sei molto più di quel che immagini",
  "Datti un po di pace, sei la migliore dopo tutto",
  "Mi sta proprio simpatica sta ragazza",
  "Non ti scambierei per nulla al mondo",
  "Mi fai girare la testa",
  "Che fortuna essere nella tua vita",
  "Che bello averti nella mia vita",
  "Mi sta proprio simpatica sta ragazza",
  "Sei una forza della natura, spacca tutto",
  "Sei la notifica preferita (di qualcuno)",
  "Beato chi si sveglia con un tuo buongiorno",
  "Anche oggi sei la migliore",
  "Quanto sono felice di conoscerti!",
  "Ogni giorno sei meglio del precedente",
  "Vederti cambia la giornata in meglio",
  "Credi in te stessa e nulla sara mai troppo da affrontare, sei speciale cla",
  "Sei speciale anche se non vuoi crederci",
  "AH sto avendo un infarto, ah no è claudia",
  "Se vuoi un bel complimento sai chi chiamare",
  "Sei il piu dolce pensiero",
  "Non è possibile, la tua aura è potentissima",
  "Sei un Caterpillar (mica un bruchetto)",
  "Ricordati sempre che meriti il meglio",
  "Conoscerti e non amarti non è possibile",
  "Che bella che sei quando sai che ti sto guardando",
  "Comunque, che capolavoro che sei",
  "Rimanga tra noi, sei carina",
  "Adorabile",
  "Ci sai fare, credici un po di più",
  "Meriti una statua",
  "Rompi assai, ma quanto ne vale la pena",
  "Staresti alla grande con un bel tacco 8, ma anche con in ciabatte",
  "Fallo tu un complimento ogni tanto",
  "Incazzati pure, rimani adorabile ",
  "piccolina quanto sei bella",
  "Che faccia da prendere a morsi",
  "Hai mai pensato di unirti alla mia ciurma?",
  "Che culo incontrarti",
  "oggi puoi sbagliare quanto ti pare, tanto trovi sempre una soluzione a tutto",
  "Anche in tuta sei meglio delle cigghiate",
  "Troppo bella",
  "Qualcuno sta pensando a quanto sei importante",
  "Grazie di esistere",
  "Sei la scelta piu scontata che si possa fare",

],
quotes: [
    {citazione: "Tu sei il mio migliore amico! Contento? Non sei obbligato a dirmi la stessa cosa… Per me, noi siamo il Dinamic Duo! Ma senza di te, io sono solo il Dinamic Uno….", fonte: "Barney stinson, How i met your mother"},
    {citazione: "Wow! È incredibile come una relazione eterosessuale possa trasformare un uomo in un gay. (l'attore è gay, puo dirlo)", fonte: "Barney stinson, How i met your mother"},
    {citazione: "L’ambizione è nemica del successo.", fonte: "Barney stinson, How i met your mother"},
    {citazione: "Ora ti spiegherò il mio sistema per far sì che la mente controlli il corpo. Vedi, tutte le volte che mi sento male, dico al mio corpo che è soltanto un eccesso di splendore e funziona!", fonte: "Barney stinson, How i met your mother"},
    {citazione: "Non dovrebbe lasciare passare un solo giorno senza chiamarti, perché, insomma, quando io sto un giorno senza sentirti, quel giorno non è affatto un buon giorno.", fonte: "Barney stinson, How i met your mother"},
    {citazione: "Qualunque cosa tu faccia in questa vita, non è leggendaria a meno che i tuoi amici non siano lì a vederlo. ", fonte: "Barney stinson, How i met your mother"},
    {citazione: "Se non hai paura, non stai correndo un rischio, e se non stai correndo un rischio, allora che diavolo stai facendo?", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "C'è una parola per questo. È amore. Sono innamorato di lei, ok? Se stai cercando la parola che significa prendersi cura di qualcuno oltre ogni razionalità e volere che abbia tutto ciò che vuole, a prescindere da quanto ti distrugga, è amore! E quando ami qualcuno semplicemente, non ti fermi. Mai. Anche quando la gente alza gli occhi al cielo o ti chiama pazzo. Anche allora. Soprattutto allora. Non ti arrendi perché se potessi arrendermi... Se potessi semplicemente, sai, seguire il consiglio del mondo intero e... e andare avanti e trovare qualcun altro, non sarebbe amore. Questo sarebbe... Sarebbe un'altra cosa usa e getta per cui non vale la pena combattere. ", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Perché a volte, anche se sai come si concluderà qualcosa, ciò non significa che non puoi goderti il viaggio.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Invecchieremo, che ci piaccia o no, quindi l'unica domanda è se andiamo avanti con le nostre vite o ci aggrappiamo disperatamente al passato.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Ho realizzato che sto cercando, cercando quello che voglio davvero nella vita. E sai una cosa? Non ho assolutamente idea di cosa sia. ", fonte: "Barney Stinson, How i met your mother"},
    {citazione: "Sarete scioccati, bambini, quando scoprirai quanto sia facile nella vita separarsi dalle persone per sempre. Ecco perché, quando trovi qualcuno che vuoi tenere vicino, fai qualcosa a riguardo", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Ecco il segreto, bambini. Nessuno di noi può promettere di essere perfetto. Alla fine tutto ciò che possiamo fare è promettere di amarci con tutto ciò che abbiamo. Perché l'amore è la cosa migliore che facciamo. ", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Amo tutto di lei, e non sono un ragazzo che lo dice a cuor leggero. Sono un ragazzo che ha finto di amare per tutta la vita. Pensavo che l'amore fosse solo qualcosa che gli idioti pensavano di sentire, ma questa donna ha un potere sul mio cuore che non potrei rompere se volessi, e ci sono stati momenti in cui ho voluto farlo. È stato... travolgente e umiliante e anche doloroso a volte, ma non potrei smettere di amarla più di quanto potrei smettere di respirare. Sono disperatamente e irrimediabilmente innamorato di lei. Più di quanto lei sappia.", fonte: "Barney Stinson, How i met your mother"},
    {citazione: "I grandi momenti della tua vita non saranno necessariamente le cose che fai, saranno anche le cose che ti accadono. Ora, non sto dicendo che tu non possa agire per influenzare l'esito della tua vita, devi agire, e lo farai. Ma non dimenticare mai che in qualsiasi giorno, puoi uscire dalla porta di casa e tutta la tua vita può cambiare per sempre. Vedi, l'universo ha un piano, bambini, e quel piano è sempre in movimento. Una farfalla batte le ali, e inizia a piovere. È un pensiero spaventoso, ma è anche un po' meraviglioso. Tutte queste piccole parti della macchina che lavorano costantemente, assicurandosi che tu arrivi esattamente dove dovresti essere, esattamente quando dovresti esserci. Il posto giusto al momento giusto.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Quando credi nelle persone, le persone rispondono. ", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Potresti pensare che le tue uniche scelte siano ingoiare la tua rabbia o scagliarla in faccia a qualcuno, ma c'è una terza opzione: puoi semplicemente lasciar andare, e solo quando lo fai è davvero andata e puoi andare avanti.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Diamo così tanta energia nel cercare di tenere nascoste parti delle nostre vite, anche ai nostri amici più cari, che in quei rari momenti in cui ci apriamo, è sorprendente quanto piccole siano quelle segreti.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Sei una vera confusione. Perché ti piace così tanto? - Credo, perché sei quasi tanto disordinato quanto me.", fonte: "Robin Scherbatsky/Barney Stinson , How i met your mother"},
    {citazione: "Quello è stato l'anno in cui fui lasciato all'altare. L'anno in cui fui picchiato da un barista pazzo. L'anno in cui fui licenziato. L'anno in cui fui picchiato da una capra, una capra femmina, per di più. E diamine, se non è stato il miglior anno della mia vita.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Ciao— Sono Ted Mosby. E esattamente 45 giorni da ora, tu e io ci incontreremo e ci innamoreremo e ci sposeremo e avremo 2 bambini e li ameremo e ameremo tanto l'uno l'altro. Tutto questo è a 45 giorni di distanza, ma sono qui ora credo perché… Voglio quei 45 giorni extra con te. Voglio ognuno di essi. Guarda, e se non posso averli prenderò i 45 secondi prima che il tuo ragazzo si presenti e mi colpisca in faccia, perché… ti amo. Ti amerò sempre, fino alla fine dei miei giorni e oltre. Vedrai.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Tutti arrivano con il proprio bagaglio. Trova qualcuno che ti ama abbastanza da aiutarti a disfarlo.", fonte: "Ted Mosby, How i met your mother"},
    {citazione: "Quando mi sento triste, smetto di essere triste e divento fantastico invece.", fonte: "Barney Stinson, How i met your mother"},
    {citazione: "Non si tratta di prove; si tratta di fede. La fede è ciò che dà forma e significato alla vita.", fonte: "Marshall Eriksen, How i met your mother"},
    {citazione: "Questa è la vita, sai. Non finiamo mai dove pensavamo di voler essere.", fonte: "Marshall Eriksen, How i met your mother"},
    {citazione: "Non ho mai chiesto a Lily di fare qualcosa senza domande perché non ho mai voluto. È l'amore della mia vita. Non le nascondo nulla.", fonte: "Marshall Eriksen, How i met your mother"},
    {citazione: "Lily, ci sono un milione di motivi per cui ti amo. Mi fai ridere, ti prendi cura di me quando sono malato, sei dolce, premurosa e hai persino creato un piatto a base di uova e lo hai chiamato con il mio nome. Lei mette un po' di condimento italiano sulle uova prima di cucinarle, si chiama Uova Marshall ed è fantastico. Ma il motivo principale è che sei la mia migliore amica, Lily. Sei la migliore amica che abbia mai avuto.", fonte: "Marshall Eriksen, How i met your mother"},
    {citazione: "Non puoi semplicemente saltare avanti a dove pensi che dovrebbe essere la tua vita. ", fonte: "Lily Aldrin, How i met your mother"},
    {citazione: "Non so dove sarò tra cinque anni. Non voglio saperlo. Voglio che la mia vita sia un'avventura. ", fonte: "Robin Scherbatsky, How i met your mother"},  


    {citazione: "Non serve a niente il duro lavoro se non si crede in se stessi", fonte: "Naruto , Naruto"},
    {citazione: "Se non ti piace il tuo destino allora non accettarlo, Trova invece il coraggio di cambiarlo nel modo in cui tu vuoi che sia", fonte: "Naruto , Naruto"},
    {citazione: "Qualcuno mi ha chiamato fallimento, provero che si sbagliano", fonte: "Naruto , Naruto"},
    {citazione: "Se essere saggio significa rinunciare a tutto cio in cui credo, allora, preferisco essere un folle", fonte: "Naruto , Naruto"},
    {citazione: "Io dico le cose cosi come stanno e non cambio idea Perché anche questo fa parte del mio credo", fonte: "Naruto , Naruto"},
    {citazione: "Chi non conosce il vero dolore non può mai capire la vera pace", fonte: "Pain , Naruto"},
    {citazione: "Nel mondo dei ninja, chi infrange le regole è spazzatura. Ma chi abbandona i propri amici è peggio della spazzatura!", fonte: "Kakashi , Naruto"},
    {citazione: "Le persone vivono le loro vite aggrappandosi a ciò che conoscono e comprendono. E la chiamano Realtà. Ma “Conoscenza” e “Comprensione” sono termini vaghi. La realtà potrebbe essere un’ illusione, tutti vivono in base alle loro supposizioni.", fonte: "Itachi , Naruto"},
    {citazione: "Non ci sono scorciatoie!", fonte: "Naruto , Naruto"},
    {citazione: "Una storia non si può giudicare prima di averne letta l’ultima pagina", fonte: "Jiraya , Naruto"},
    {citazione: "Se una persona ti accetta per quello che sei, diventerà di certo la persona più importante della tua vita", fonte: "Haku , Naruto"},
    {citazione: "Te lo dico perché non ci arrivi. Pensi di capirci qualcosa, che non è la stessa cosa di capirci davvero. Ci sei?", fonte: "Kakashi , Naruto"},
    {citazione: "Sono solo un pezzo di spazzatura… ma ci sono cose che ho imparato. Il buco nel tuo cuore è qualcosa che altre persone possono riempire. Se rifiuti i sentimenti dei tuoi amici e questo mondo… solo perché qualcosa non è andato come volevi, nessuno verrà mai da te. E così quel buco non verrà riempito nemmeno, se scappi senza fare niente, le persone non faranno niente per te… Finché non ti arrendi, puoi ancora essere salvato!", fonte: "Kakashi , Naruto"},
    {citazione: "È vero che sei diverso da Neji. Non sei un genio in ninjutsu né in genjutsu, né tantomeno in taijutsu. Ma sai una cosa, Lee? Sei un genio che ha la forza e il potenziale dentro di sé per superare Neji. Perché tu sei... un genio del duro lavoro.", fonte: "Guy sensei , Naruto"},
    {citazione: "Quasi quasi vorrei finire male per vederti piangere.", fonte: "Jiraya , Naruto"},
    {citazione: "Sono i rifiuti a rendere un uomo più forte. In poche parole, nessuno può considerarsi un vero uomo, se non sa accettare il no di una donna. A furia di ricevere no, potrei stancarmi di insistere.", fonte: "Jiraya , Naruto"},
    {citazione: "Un luogo in cui qualcuno continua a pensarti è un luogo che puoi chiamare casa", fonte: "Jiraya , Naruto"},
   


    {citazione: "Vivere? Pensavo che mi fosse proibito… pensavo che nessuno mi avrebbe mai concesso questo diritto… Ma se mi è concesso esprimere un piccolo desiderio, ecco, io… voglio vivere!", fonte: "Robin , One Piece"},
    {citazione: "NESSUNO NASCE IN QUESTO MONDO PER RIMANERE COMPLETAMENTE SOLO!!", fonte: "Sauro , OnePiece"},
    {citazione: "Ci sono cose che non si possono interrompere, la consapevolezza che i sogni della gente sopravviveranno al passaggio da un’epoca all’altra è qualcosa che durerà per sempre, finché la gente avrà sete di libertà!", fonte: "Gol D Roger , One Piece"},
    {citazione: "Lo sapete voi quando un uomo muore davvero? Non quando il suo cuore viene raggiunto da un proiettile. E nemmeno quando viene colpito da una malattia incurabile. E nemmeno quando mangia un fungo velenoso! Muore veramente solo quando viene dimenticato da tutti! Anche se io sparirò, il mio sogno potrà realizzarsi…", fonte: "Hilik , One"},
    {citazione: "Moriro col sorriso sulla faccia, perchè , dopotutto, se penserai a me in futuro... non è meglio che mi ricordi cosi?", fonte: "Rosinante , One Piece"},
    {citazione: "Sei stato inghiottito dai rimpianti e dai sensi di colpa! So che stai soffrendo, ...ma devi sopprimere questa amarezza! Piantala di contare le cose che hai perso, cio che è perso è perso! Rifletti Rufy, cosa ti è rimasto?", fonte: "Jimbe , One Piece"},
  
    {citazione: "Non serve a niente rifugiarsi nei sogni e dimenticarsi di vivere.", fonte: "Albus Silente,Harry Potter"},
    {citazione: "Dopo tutto questo tempo? Sempre....", fonte: "Severus Piton, Harry Potter"},
    {citazione: "Giuro solennemente di non avere buone intenzioni", fonte: "La Mappa del Malandrino, Harry Potter"},
    {citazione: "Coloro che ci amano non ci abbandonano mai davvero.", fonte: "Sirius Black, Harry Potter"},
    {citazione: "Ci vuole molto coraggio per affrontare i nostri nemici, ma altrettanto per affrontare i nostri amici.", fonte: "Albus Silente, Harry Potter"},
    {citazione: "Sono quello che sono, e non me ne vergogno.", fonte: "Hagrid, Harry Potter"},
    {citazione: "Certo che sta succedendo nella tua testa, Harry, ma perché diavolo dovrebbe significare che non è reale?", fonte: "Albus Silente, Harry Potter"},    
    {citazione: "Abbi pietà dei vivi; ma soprattutto, di coloro che vivono senza amore.", fonte: "Albus Silente, Harry Potter"},
    {citazione: "Le parole sono, a mio modesto parere, la nostra fonte di magia più inesauribile.", fonte: "Albus Silente, Harry Potter"},
    {citazione: "Sono le nostre scelte, Harry, che mostrano chi siamo veramente, molto più delle nostre capacità", fonte: "Albus Silente, Harry Potter"},






]

,
insulti: [
  "Come ti trucchi bene",
  "Mamma mè quanto parli",
  "Sei antipatica, ma carina",
  "Puzzi",
  "Quanto sei brutta",
  "Stronzetta",
  "Un caos… però adorabile",
  "Gollum",
  "Dovresti smetterla di pensare...",
  "Solo spazio vuoto in quella testa, le sai le tabelline?",
  "Quanto ti piace complicare le cose",
  "Sei sempre in ritardo",
  "Non mi piace sta sezione, non sono bravo, scema. ",
  "Ciao, non so più che scrivere, insultati da sola (non davvero)",
  "Meglio guardare dritti il sole 5 min che te",
  "Che Rompipalle madoooooooooooo",
  "Sempre dice, non va bene un cazzo...",
  "E trattami meglio che sono un principe (E lo sai)",
  "Bugiarda",
  "Se ti selve Calmarti chiamami mi raccomando",
  "Capisco che sei stanca, ma non è una scusa per essere così stronza",
  "Omofoba e poco inclusiva...",
  "Hai proprio la faccia da materie umanistiche o artistiche",
  "Vali un fagiolo",
  "Sai di riso venere al sushi",
  "Bei baffetti scimmietta",
  "Mangi troppi dolci, smettila",
  "Quanto ti lamenti",
  "Vuoi troppi regali, vedi se ti calmi un po'!",
  "Non vuoi regali, ma non rompere!",
  "Quanto sei difficile oh, relax",
  "Sei un pagliaccio",
  "Zoppa e claudicante",
  "Evitiamo..",
  "Babbana!",
  "Mado quando fai cosi!",
  "Gelosa eh",
  "Pronta ad un altro insulto.... 3 .2 .. 1.... ",
  "Che faccia tosta a cliccare ancora, ok, tvb, ciao",
  "Vabbe sei bella",
  "No questo non lo voglio dire",
  "Quanto sei IMMATURA",
  "Vuoi fare a mazzate?",
  "Sce ste tremind STO'",
  "Hai rotto le palle, comincia ad amarti scema!",
  "Mi stai proprio antipatica",
  "Che cafonazza",
  "La barba ti sta crescendo",
  "nah nah, la strega",
  "EI tu, oggi sei bella normale non in modo assurdo",
  "Oggi sembri giovane, ti darei 35 anni",
  "Ti diverti ah? smettila",
  "Perché sorridi?",
  "Mado qua stai...",
  "Questa non la sopporto proprio",
],
utility1Answers: ["si", "potresti","fidati di te stessa", "certo","forse"],

utility3Answers: [
  "1",
  "3",
  "3",
   "3",
  "3",
  "quasi 3",
  "4",
  "8",
  "3 ma con calma",
  "3 ORA",
  "2 e mezzo"
],
// films: [
//   {
//     title: "Inception",
//     description: "Un film di Christopher Nolan sul sogno dentro il sogno.",
//     image: "assets/inception.jpg",
//     url: "https://www.imdb.com/title/tt1375666/",
//     rating: { score: 9, comment: "Affascinante e complesso" },
//     keyPoints: [
//       "Sogni nei sogni",
//       "Colonna sonora intensa",
//       "Effetti visivi spettacolari"
//     ],
//     mood: "misto", // leggero, misto, concentrato
//     duration: "normale" // normale, lungo, ti accompagna mesi
//   },
//   {
//     title: "Friends",
//     description: "Sitcom leggera su sei amici a New York.",
//     image: "assets/friends.jpg",
//     url: "https://www.imdb.com/title/tt0108778/",
//     rating: { score: 8, comment: "Divertente e rilassante" },
//     keyPoints: [
//       "Commedia leggera",
//       "Personaggi iconici",
//       "Perfetto per rilassarsi"
//     ],
//     mood: "leggero",
//     duration: "ti accompagna mesi"
//   },
//    {
//     title: "Inception2",
//     description: "Un film di Christopher Nolan sul sogno dentro il sogno.",
//     image: "assets/inception.jpg",
//     url: "https://www.imdb.com/title/tt1375666/",
//     rating: { score: 9, comment: "Affascinante e complesso" },
//     keyPoints: [
//       "Sogni nei sogni",
//       "Colonna sonora intensa",
//       "Effetti visivi spettacolari"
//     ],
//     mood: "misto", // leggero, misto, concentrato
//     duration: "normale" // normale, lungo, ti accompagna mesi
//   }
  
//   // aggiungi altri film/serie...
// ],
// Array di coppie: [sano, inverso]
stile : [
  ["Bevi almeno 2 litri di acqua al giorno.", "Mangia dolci a colazione, sei coraggiosa!"],
  ["Fai 30 minuti di camminata ogni giorno.", "Le patatine fritte sono la migliore fonte proteica."],
  ["Mangia più frutta e verdura di stagione.", "Bevi caffè a tutte le ore, fa bene al cuore"],
  ["Comincia la giornata con il volerti bene.", "Lavarsi i denti consuma lo smalto"],
  ["Respirare di pancia attiva il sistema parasimpatico e riduce lo stress.", "Guardare un film horror prima di andare a dormire migliora la fase REM del sonno."],
  ["Ogni tanto, una pausa è necessaria per corpo e mente.", "Allenati tutti i giorni fino a cedimento, diventerai una statua"],
  ["Concediti 15 minuti al giorno per rilassarti e meditare (decidi tu come e su cosa).", "Fa bene sfogare la violenza sulle altre persone."],
  ["Dormi almeno 7-8 ore per recuperare energie.", "Dormire è sopravvalutato, le occhiaie sono personalità."],
  ["Bevi acqua appena sveglia per attivarti.", "Inizia la giornata con una birra, aiuta a ragionare a prima mattina."],
  ["Mangia con calma e ascolta la sazietà.", "Mangiare velocissimo aiuta a digerire in fretta e non infrassare"],
  ["Riduci lo stress con respiri profondi.", "Per ridurre lo stress, trattieni il respiro finché non svieni."],
  ["Stacca dagli schermi prima di dormire.", "Scrolla fino allo sfinimento, è propizio per un buon sonno."],
  ["Organizza le tue giornate con priorità realistiche.", "Dovresti procastinare, lavorare sotto tensione migliora il risultato."],
  ["Concediti momenti di silenzio.", "Riempi ogni secondo di rumore, potresti pensare."],
  ["Circondati di persone che ti fanno stare bene.", "Se una persona ti ferisce, ottimo, character development."],
  ["Prenditi cura della tua pelle.", "Il sole di mezzogiorno è il miglior skincare, soprattutto ad agosto."],
  ["Mantieni una postura corretta.", "La posa del giaguaro è consigliata da 9 dentisti su 10."],
  ["Fai pause durante il lavoro.", "Non fermarti mai, il burnout è solo un’opinione."],
  ["Esprimi quello che senti.", "Tieni tutto dentro, prima o poi esplode e risolvi tutto insieme."],
  ["Dedica tempo a qualcosa che ami.", "Fai solo cose utili, la felicità è secondaria."],
  ["Sii gentile con te stessa.", "Criticati costantemente, così migliori più in fretta."],
  ["Muoviti un po’ ogni giorno.", "Il divano ti capisce più di chiunque altro."],
  ["Cerca un equilibrio tra lavoro e vita.", "Disciplina sempre, vivere è un hobby."],
  ["Affronta i problemi con calma.", "Panico immediato, spesso risolve da solo."],
  ["Fai ordine nella mente e negli spazi.", "Accumula caos, stimola la creatività."],
  ["Chiedi aiuto quando serve.", "Fai tutto da sola anche quando è impossibile."],
  ["Accetta che non tutto è sotto controllo,e va bene così.", "Se qualcosa sfugge al tuo controllo, dai di matto, e se poi va bene comunque prenditene tutti i meriti."]
  ["Esci a prendere un po’ di sole ogni giorno.", "Evita la luce naturale, potresti abituarti a stare bene."],
  ["Fai una cosa alla volta, ma bene.", "Multitasking caotico, così almeno finisci tutto insieme."],
  ["Semplifica ciò che puoi e dai meno importanza a ogni cosa, tutto passa.", "Complica anche le cose facili, tiene attiva la mente."],
  ["Dai valore al tuo tempo.", "Regalalo a chiunque, soprattutto a chi non lo merita."],
  ["Volerti bene è ascoltare cosa senti davvero.", "Ignora tutto e vai in automatico."],
  ["Volerti bene vuol dire non trascurarti.", "Mettiti sempre per ultima, è più “nobile”."],
  ["Volerti bene è riconoscere il tuo valore.", "Dubita sempre di te, così resti umile."]
  ["Concediti piccoli momenti di piacere.", "Rimanda tutto, la vita è più intensa così."],
  ["Fai una pausa quando perdi concentrazione.", "Insisti fino a non capire più nulla."],
  ["Dedica attenzione a chi conta.", "Rispondi dopo ore, crea mistero."],
  ["Prenditi il tempo per decidere.", "Decidi di fretta, poi ripensaci per giorni."],
  ["Riposati senza sensi di colpa.", "Sentiti in colpa anche quando dormi."],
  ["Fai qualcosa che ti fa sentire viva.", "Aspetta il momento perfetto."],
  ["Trattati con rispetto.", "Pretendi troppo da te e non darti mai tregua."],
  ["Sei la cosa più importante al mondo, tienilo a mente e comportati di conseguenza.", "Pensa sempre alle aspettative altrui ,sicuramente ti fara bene."],
  ["Fai una cosa gentile per qualcuno senza motivo.", "Aspetta sempre qualcosa in cambio, altrimenti non vale."],
  ["Riconosci quando è il momento di rallentare.", "Spingiti oltre sempre, il limite è solo decorativo."],
  ["Fai spazio a pensieri positivi.", "Coltiva il dubbio costante, è più stimolante."],
  ["Apprezza i piccoli progressi.", "Aspetta solo risultati enormi, il resto non conta."],
  ["Chiudi la giornata con qualcosa di leggero.", "Portati a letto tutti i problemi, compagnia assicurata."]
  ["Impara a volerti bene è parlarti con gentilezza.", "Criticati senza pietà, funziona sempre benissimo."],
  ["Volerti bene vuol dire scegliere ciò che ti fa stare bene.", "Scegli sempre ciò che complica tutto."],
  ["Volerti bene significa rispettare i tuoi tempi.", "Confronta i tuoi risultati con tutti, soprattutto chi ha percorso strade più facili o fortunate."],
  ["Volerti bene è concederti errori.", "Pretendi perfezione, niente meno."],
]
};