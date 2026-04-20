// Struttura dati base per ogni giorno
const STORE = {
  daily: {
     
     "12-01": {
      mainMessage: "Finalmente Dicembre, so che ami il freddo",
      marcoMessage: "E io ho una scusa per abbracciarti",
       playlist: { title: "Closer, the chainsmokers", url: "https://www.youtube.com/watch?v=25ROFXjoaAU" }
    },
     "12-03": {
      mainMessage: "Brrrrrrrrr, vedi di coprirti che si gela.",
      marcoMessage: "Però con naso e guance arrosate saresti adorabile",
      playlist: { title: "Bitter Sweet Symphony, The Verve", url: "https://www.youtube.com/watch?v=DGC0a4cby5c" }
    },
     "12-05": {
      mainMessage: "Ma che interessante sta ragazza, vorrei scoprirne tutti i segreti...",
      marcoMessage: "E dai vieni da me e raccontami tutto...",
      playlist: { title: "", url: "" }
    },
     "12-07": {
      mainMessage: "Buongiorno, oggi la vita ti dovrebbe trattare bene",
      marcoMessage: "Conosco un tipo in cielo che mi deve dei favori, ho chiesto per te, fammi sapere come si comporta",
      playlist: { title: "", url: "" }
    },
     "12-09": {
      mainMessage: "Ei, indovina un numero tra 1 e 100, se azzecchi ti faccio un regalo",
      marcoMessage: "Non è difficile",
      playlist: { title: "", url: "" }
    },
     "12-11": {
      mainMessage: "Nah guarda, la persona che mi da più fastidio al mondo",
      marcoMessage: "Sempre nella mia testa, e vattene un pò",
      playlist: { title: "", url: "" }
    },
     "12-13": {
      mainMessage: "Signorina... ma quanto sei bella",
      marcoMessage: "Non ci posso fare nulla, inutile che mi dici che esagero",
      playlist: { title: "", url: "" }
    },
     "12-15": {
      mainMessage: "Hei. Oggi messaggio serio, devo darmi un po di tono:",
      marcoMessage: "Forse non dovremmo cercare un obiettivo, ma solo goderci la storia",
      playlist: { title: "", url: "" }
    },
     "12-16": {
      mainMessage: "Buongiorno, Vuoi sapere il mio segreto per vivere bene?",
      marcoMessage: "Mai buttarsi giù, si sbaglia per imparare e fare meglio la prossima volta",
      playlist: { title: "", url: "" }
    },
     "12-18": {
      mainMessage: "Buona sera, Come è andata la giornata? Stai facendo la brava?",
      marcoMessage: "Avvisami se non lo sei stata che provo a cancellarti dalla lista dei cattivi (conosco qualche elfo)",
      playlist: { title: "", url: "" }
    },
     "12-20": {
      mainMessage: "Andiamo a un mercatino a fare i turisti?",
      marcoMessage: "Cioccolata calda o castagne?",
      playlist: { title: "", url: "" }
    },
     "12-22": {
      mainMessage: "Lo sai vero che ti farò un regalo?",
      marcoMessage: "ti avviso ora così hai tutto il tempo di farne uno tu a me, ti sto dando preavviso ahah",
      playlist: { title: "", url: "" }
    },"12-24": {
      mainMessage: "Ciao Claudietta,Buone feste! Se sei stata buona passa Babbo Natale! Se.",
      marcoMessage: "Oh Oh Oh.. nel caso c'è il mio regalo se con babbo va male",
      playlist: { title: "", url: "" }

    },
    "12-25": {
      mainMessage: "Buon Natale, Tanti auguri e Goditi le feste! mangia assai e divertiti! Il regalo più dolce? tu!",
      marcoMessage: "Guarda.... del vischio..",
      playlist: { title: "Narcotic, Liquido", url: "https://www.youtube.com/watch?v=X2Md9upR2K0" }
    },
     "12-26": {
      mainMessage: "Beh? serviva qualche giorno rilassante con i parenti giusto?",
      marcoMessage: "Se hai voglia chiamami e godiamoci un altro po' di famiglia",
      playlist: { title: "", url: "" }
    },
     "12-28": {
      mainMessage: "Bonjour, Pensavo....",
      marcoMessage: "non lo pensavi anche tu?",
      playlist: { title: "", url: "" }
    },
     "12-31": {
      mainMessage: "Concludiamo un altro anno, direi tutto come doveva andare giusto?",
      marcoMessage: "Vuoi aggiustare qualcosa all'ultimo? ci sono eh",
      playlist: { title: "", url: "" }
    },
    "01-01": {
      mainMessage: "Buon Anno!!!!!!  Anche quest'anno si migliora giusto? tanti auguri, divertiti!",
      marcoMessage: "Pensami un pò, probabilmente io ti penso. Buon anno bellezza <3",
      playlist: { title: "Guns And Roses, Since i dont have you", url: "https://www.youtube.com/watch?v=x2W0P9PDU9U" }
    }
    
    ,
     "01-04": {
      mainMessage: "Eppure lo sapevo che non mi dovevo fidare...",
      marcoMessage: "Ridammi il cuore Occhi di gatto.",
      playlist: { title: "", url: "" }
    }
    
    ,
    "01-06": {
      mainMessage: "Naaaaaa non lo dico ahaha, buongiorno, trovata la calza piena di dolci o di carbone?",
      marcoMessage: "al massimo streghetta",
      playlist: { title: "Cliche, MGK", url: "https://www.youtube.com/watch?v=pAVkr5SG02s" }
    }
    
    ,
     "01-08": {
      mainMessage: "Buongiorno, ti pongo un quesito:",
      marcoMessage: "Meglio una vita agiata o una vita fieri di se?",
      playlist: { title: "", url: "" }
    },
     "01-10": {
      mainMessage: "Che sonno che ho, mi dai un 3?",
      marcoMessage: "Visto che me lo hai dato te lo dico: 'Love You', 'Je t'aime'",
      playlist: { title: "", url: "" }
    },
     "01-11": {
      mainMessage: "Oggi non mi serve un 3",
      marcoMessage: "Mi sono sbagliato ieri, volevo dire 'Ti amo' ",
      playlist: { title: "", url: "" }
    },
     "01-12": {
      mainMessage: "Buongiorno, Oggi a taranto è la festa della cozza, lo sapevi?",
      marcoMessage: "A chi devo fare gli auguri? dammi un nome da infastidire",
      playlist: { title: "", url: "" }
    }
    
    ,
    "01-13": {
      mainMessage: "Giornata Mondiale del bacio!",
      marcoMessage: "che ne dici?...",
      playlist: { title: "Thats what i want, Lil Nas x", url: "https://www.youtube.com/watch?v=zHd4rSpZn48" }
    }
    
    ,
     "01-15": {
      mainMessage: "Buonasera, metà mese, è il momento di cominciare con i buoni propositi",
      marcoMessage: "Perchè che bello",
      playlist: { title: "", url: "" }
    },
     "01-17": {
      mainMessage: "Ti va una cosa strana oggi? potremmo visitare una casa abbandonata",
      marcoMessage: "E giocare a nascondino.... ahahah",
      playlist: { title: "", url: "" }
    },
     "01-19": {
      mainMessage: "Ma vedi un po', un anno di contenuti e manco un rebus, risolviamo subito",
      marcoMessage: "Non si vede, non si tocca, ma quando arriva cambia tutto",
      playlist: { title: "", url: "" }
    },
     "01-21": {
      mainMessage: "Il sole è sorto, manca solo il tuo buongiorno",
      marcoMessage: "Se iniziassi le giornate con un tuo sorriso, non sarebbe scocciante svegliarsi alle 6",
      playlist: { title: "", url: "" }
    },
     "01-22": {
      mainMessage: "Buongiorno, piani?",
      marcoMessage: "Il mio è trovare una scusa per scriverti",
      playlist: { title: "", url: "" }
    }
    
    
    ,
    "01-24": {
      mainMessage: "Giornata Internazionale del Complimento, oggi ne riceverai un sacco!",
      marcoMessage: "Bella, stupenda, simpatica, scema, intelligente, divertente, interessante, unica, speciale, fantastica, meravigliosa, incredibile, dolce, affascinante, brillante, geniale, irresistibile, adorabile, straordinaria, favolosa, eccezionale, fantastica, fenomenale... e potrei continuare per ore, ma mi fermo qui,che bella Claudietta!",
      playlist: { title: "Maps , Maroon 5", url: "https://www.youtube.com/watch?v=_sIeccYNLKI" }
    }

    ,
     "01-26": {
      mainMessage: "Buonasera, ti va un film assieme? di quelli lunghi e pallosi che possiamo non guardare",
      marcoMessage: "Va bene anche una serie tv se preferisci",
      playlist: { title: "", url: "" }
    },
     "01-28": {
      mainMessage: "Buongiorno, pronta a ciò che sta per succedere?",
      marcoMessage: "EH eh eh. Ora devi stare attenta",
      playlist: { title: "", url: "" }
    },
     "01-30": {
      mainMessage: "Buonasera, Meno 1. Ne mancano 11",
      marcoMessage: "Poco male, ci sarà da divertirsi",
      playlist: { title: "", url: "" }
    },
     "02-01": {
      mainMessage: "Bonjour, ti avviso, Febbraio mese degli indovinelli",
      marcoMessage: "Oggi ti chiedo, conosci il mio punto debole?",
      playlist: { title: "", url: "" }
    }


    ,"02-02": {
      mainMessage: "Giornata della muffa, ma tu sei più fresca di sempre, buon giorno!",
      marcoMessage: "e se vuoi passarla ad ammuffire un pò, fai pure, oggi si può",
      playlist: { title: "Come and get your love, Redbone", url: "https://www.youtube.com/watch?v=wFwYcHjP-YU" }
    }
    ,
     "02-04": {
      mainMessage: "Buonasera, Ricordati ogni giorno che sei fantastica e che nulla nella vita può cambiare ciò",
      marcoMessage: "Ogni tanto fa bene ricordarlo, anche se volevo fare un indovinello",
      playlist: { title: "", url: "" }
    },
     "02-06": {
      mainMessage: "Buongiorno... Indovinello: Torna quando meno te l'aspetti, anche se provi a ignorarlo",
      marcoMessage: "Non sono io...",
      playlist: { title: "", url: "" }
    },
     "02-07": {
      mainMessage: "Buongiorno, La domanda di oggi è:",
      marcoMessage: "Non è vicino, ma mai lontano.",
      playlist: { title: "", url: "" }
    }
    
    ,
    "02-08": {
      mainMessage: "Capodanno Tibetano! Si puo' brindare e in maniera più' saggia del solito capodanno immagino",
      marcoMessage: "Buongiorno, tutto apposto? buon anno!",
      playlist: { title: "Ink, Coldplay (io il tuo nome)", url: "https://www.youtube.com/watch?v=sZFopMcTCo8" }
    }
    
    ,
    "02-11": {
      mainMessage: "Giornata della Donne nella Scienza! ma ti rendi conto quanti giorni per te!",
      marcoMessage: "Auguri Scienziata, aiuta il mondo a non esplodere!",
      playlist: { title: "The Reason , Hoobastank", url: "https://www.youtube.com/watch?v=-F9nCQtxkRw" }
    }
    ,
     "02-13": {
      mainMessage: "E oggi ti chiedo: cosa è adorabile ma ti da fastidio?",
      marcoMessage: "Buongiorno Claudietta",
      playlist: { title: "Without you, Avici", url: "https://www.youtube.com/watch?v=WRz2MxhAdJo" }
    }
    ,
    "02-14": {
      mainMessage: "Buon San Valentino mia amata (ops ho esagerato...)",
      marcoMessage: "Vabbè ogni tanto...", 
      playlist: { title: "Take me Out, Franz Ferdinand", url: "https://www.youtube.com/watch?v=A8IcedBzs14" }
    }
    ,
     "02-16": {
      mainMessage: "Buongiorno .Il quesito del giorno è, Rischio o Verita?",
      marcoMessage: "Scegli rischio e chiamami, sapendo che è un rischio",
      playlist: { title: "", url: "" }
    }
    ,
    "02-17": {
      mainMessage: "Giornata del gatto, ma tu sei più dolce di un micetto, buon giorno!",
      marcoMessage: "Bugia,è la giornata degli atti di gentilezza, ho cominciato io, tocca a te!",
      playlist: { title: "Photograph , Ed Sheeran", url: "https://www.youtube.com/watch?v=HpphFd_mzXE" }
    }
    
    ,
     "02-19": {
      mainMessage: "Come va? Che giornata vorresti vivere oggi? e domani?",
      marcoMessage: "Fammi sapere che vedo di farle andare come vuoi tu",
      playlist: { title: "", url: "" }
    },
     "02-21": {
      mainMessage: "Che meraviglia sei?",
      marcoMessage: "Buongiorno cla, sei bellissima.",
      playlist: { title: "", url: "" }
    },
     "02-22": {
      mainMessage: "Ei cla, mi ricordi cosa mi piace di te?",
      marcoMessage: "Bon soir, vediamo se hai azzeccato",
      playlist: { title: "", url: "" }
    },
     "02-24": {
      mainMessage: "Buonasera, Un bacio volante in arrivo",
      marcoMessage: "Prendilo, è da parte mia...",
      playlist: { title: "", url: "" }
    },
     "02-26": {
      mainMessage: "Ei claudietta Buongiorno, lo so che ti piace quando ti chiamo cosi...",
      marcoMessage: "La mia claudietta, il tuo Colin",
      playlist: { title: "", url: "" }
    },
     "02-28": {
      mainMessage: "Buongiorno, se serve una mano o rovinare la giornata, sai chi chiamare",
      marcoMessage: "Totalmente randomico, io proverò a dare una mano ma sai come sono...",
      playlist: { title: "", url: "" }
    }
    ,
    "03-01": {
      mainMessage: "Giornata Mondiale della complessita, che dire...",
      marcoMessage: "Auguri Cla",
      playlist: { title: "Im a Believer, Smash Mauth", url: "https://www.youtube.com/watch?v=bWqmc8qxEps" }
    }
    ,
     "03-03": {
      mainMessage: "Buonasera, che ne dici di sentirti meravigliosa oggi?",
      marcoMessage: "E che meraviglia che sei",
      playlist: { title: "", url: "" }
    },
     "03-05": {
      mainMessage: "Ei buonasera, trova a un desiderio e fallo entrare nella mia mente",
      marcoMessage: "Tutto ciò che posso darti sarà tuo",
      playlist: { title: "", url: "" }
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
    },
     "03-11": {
      mainMessage: "Oggi svendita di amore, ti va di fare shopping?",
      marcoMessage: "Ho un centro commerciale prenotato per te.",
      playlist: { title: "", url: "" }
    },
     "03-13": {
      mainMessage: "Vorrei ricordarti che siamo a Marzo, copriti bene che non ti devi ammalare",
      marcoMessage: "Ma spogliati di tutti i tuoi dubbi e apriti alla vita",
      playlist: { title: "", url: "" }
    },
     "03-15": {
      mainMessage: "Buonasera, ti porto a mangiare fuori oggi, scrivimi",
      marcoMessage: "Ti faccio assaggiare tante cose buone...",
      playlist: { title: "", url: "" }
    }
    ,
     "03-17": {
      mainMessage: "Buongiorno, San Patrizio oggi! vestiti di verde e se ti va di bere chiamami per una birra!(anche giorno dei colori in india se non vuoi bere)",
      marcoMessage: "Mbriachiamoci cla, oggi siamo irlandesi!",
      playlist: { title: "Broken arrows, Avici", url: "https://www.youtube.com/watch?v=ip4Q1pbrYDg" }
    },
     "03-18": {
      mainMessage: "Ei my love, ho bisogno anche io di un bel messaggio dolce ogni tanto",
      marcoMessage: "Non farmi aspettare troppo",
      playlist: { title: "", url: "" }
    }
    ,"03-20": {
      mainMessage: "Nowruz, capodanno persiano! si brinda anche oggi, ma con più stile del solito capodanno, magari qualche tappeto e una sciabola!",
      marcoMessage: "Buongiorno,anche oggi, buon anno!",
      playlist: { title: "Stolen Dance", url: "https://www.youtube.com/watch?v=HrREaqrwF0c" }

    },
     "03-22": {
      mainMessage: "Buonasera, sei la mia persona preferita",
      marcoMessage: "Per ora... non perdere il posto, è il migliore, ed è riservato a tuo nome.",
      playlist: { title: "", url: "" }
    },
     "03-24": {
      mainMessage: "Buongiorno, Come si fa a far uscire un pensiero dalla testa?",
      marcoMessage: "Direi che io non so proprio farlo",
      playlist: { title: "", url: "" }
    },
     "03-26": {
      mainMessage: "Un bel massaggio ti aspetta, lasciati sciogliere, ti prometto ore di relax",
      marcoMessage: "Io direi che è un ottima proposta",
      playlist: { title: "", url: "" }
    },
     "03-28": {
      mainMessage: "Nah vedi chi si vede, sei stupenda cla, buongiorno!",
      marcoMessage: "Coraggio, un'altra giornata a nostra disposizione",
      playlist: { title: "", url: "" }
    },
     "03-30": {
      mainMessage: "Buongiorno, la canzone di oggi è il rickroll, pero leggi il testo oh",
      marcoMessage: "E gia, non ti deluderò mai, non ti abbandonerò mai, non ti lascerò mai, non ti tradirò mai",
      playlist: { title: "Never  Give You Up, Rick Asley", url: "https://www.youtube.com/watch?v=7FwDP17XPlk" }
    }
    ,"04-01": {
      mainMessage: "A chi facciamo uno cherzo oggi?",
      marcoMessage: "Buondì, non pensarci nemmeno!",
      playlist: { title: "", url: "" }
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
      mainMessage: "Buongiorno, passato una bella serata ieri? come ci si sente con un anno di più sulle spalle? .",
      marcoMessage: "Buona Pasqua, trovato l'uovo di zucchero?.",
      playlist: { title: "Happy, Pharrel Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" }
    }
    ,
    "04-07": {
      mainMessage: "Breaking news: Il sole splende(forse no),i galli cantano , la benzina costa un sacco,  sei stupenda, la vita va avanti. Edizione straordinaria.",
      marcoMessage: "Assurdo, non ci vedo più, altro che il Sole",
      playlist: { title: "Blinding Lights the Weekend", url: "https://www.youtube.com/watch?v=-_4bx6yX5Ck" }
    },
     "04-08": {
      mainMessage: "Se il peso del fallimento dovesse mai farti visita, portalo con orgoglio come prova che ci hai provato.",
      marcoMessage: "Forza cla, non c'è sconfitta se non si molla ",
      playlist: { title: "Treasure, Bruno Mars", url: "https://www.youtube.com/watch?v=nPvuNsRccVw&list=RDnPvuNsRccVw&start_radio=1" }
    },
    
    
    "04-09": {
      mainMessage: "Oggi ti ricordo che sei una di quelle persone che migliorano le giornate degli altri.",
      marcoMessage: "Per oggi basta così, un bacino và, buona giornata",
      playlist: { title: "Imagine Dragons, Whatever It Takes", url: "https://www.youtube.com/watch?v=UsuF4jJ4sgA" }
    },
    
     "04-10": {
       mainMessage: "Comunicazione di servizio: il mondo ha bisogno di te.",
      marcoMessage: "Devi essere super.",
      playlist: { title: "You are Beautiful , James Blunt", url: "https://www.youtube.com/watch?v=M_q82PPHduI" }
    },
    "04-11": {
      mainMessage: "Anche oggi: testa alta, sorriso attivo, modalità leggenda ON.",
      marcoMessage: "Le-gen-da-ria.",
      playlist: { title: "Walking the Wire. Imagine Dragons (Bomba)", url: "https://www.youtube.com/watch?v=1nv9br7P7g0" }
    },

     "04-12": {
      mainMessage: "Ciao Bellissima, Sii gentile, non lasciare che il mondo ti renda dubbiosa",
      marcoMessage: "C'è amarezza in questo mondo, ma sei dolce abbastanza da contrastarla",
      playlist: { title: "Passengers, Let her go", url: "https://www.youtube.com/watch?v=4KTJ5qy8XWs" }
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
    "04-16": {
      mainMessage: "Buonasera, ti svelo un segreto",
      marcoMessage: "La vita mi piace, mi ha dato tante belle cose di cui essere grato, ma quanto sono felice della fortuna di aver incrociato te",
      playlist: { title: "Someone you loved, Luis Capaldi", url: "https://www.youtube.com/watch?v=u1yVCeXYya4" }
    },
    "04-17": {
      mainMessage: "Ricorda: non devi essere perfetta, devi essere te stessa.",
      marcoMessage: "Che è meglio.",
      playlist: { title: "It could Have been Me, the struts", url: "https://www.youtube.com/watch?v=ARhk9K_mviE" }
    },
    "04-18": {
      mainMessage: "So che non ti piace sentirlo (chi ti crede), anche oggi penso a te e il cuore mi batte più forte",
      marcoMessage: "Che soggetto che sono madò, cosa mi hai fatto diventare...    Un Looser..",
      playlist: { title: "Looser, charlie puth", url: "https://www.youtube.com/watch?v=0NXUj7dJ6tM" }
    },
    "04-19": {
      mainMessage: "Messaggio del giorno: sei una bella persona, dentro e fuori.",
      marcoMessage: "condivido.",
      playlist: { title: "What Lovers Do, Maroon 5", url: "https://www.youtube.com/watch?v=5Wiio4KoGe8" }
    },
    "04-21": {
         mainMessage: "Buongiorno, stai diventando qualcuno più forte di chi eri ieri, non avere fretta!",
      marcoMessage: "I fiori più belli sbocciano al momento giusto, e io so che tu sei in fioritura",
     
      playlist: { title: "Wings, Armand Van Helden (non ti deludero più)", url: "https://www.youtube.com/watch?v=Gh6JkwZ-5QM" }
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
      marcoMessage: "lascio i po senza apostrofo così sai che scrivo io ahah",
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
      mainMessage: "Breaking News:Il wwf ha dichiarato il panda non più in via di estinzione. Dovevi saperlo.",
      marcoMessage: "è successo tempo fa, ma ti fara felice saperlo,goditi la giornata, sei il top",
      playlist: { title: "Love me Again,John Newman", url: "https://www.youtube.com/watch?v=MmmRjwgVVOw" }
    },"05-04": {
      mainMessage: "La canzone di oggi la canto io praticamente. Ti voglio bene cla.",
      marcoMessage: "Star Wars Day, non te ne frega nulla? manco a me,però è figo dai. Che la forza sia con te, mia giovane padawan!",
      playlist: { title: "Another Love", url: "https://www.youtube.com/watch?v=Jkj36B1YuDU" }
    } ,
    "05-05": {
      mainMessage: "Buongiorno, come va? Che si dice di interessante?vuoi cazzeggiare un pò",
      marcoMessage: "Oggi vai piano se serve, ma non fermarti.",
      playlist: { title: "Coldplay, A sky full of Stars, tu", url: "https://www.youtube.com/watch?v=HRK_-LNDpcQ&list=RDHRK_-LNDpcQ&start_radio=1" }
    },
    "05-07": {
      mainMessage: "Oggi sei già sulla strada giusta, quella di sempre.",
      marcoMessage: "Giorno my love!",
      playlist: { title: "Cant help Falling in Love , Elvis", url: "https://www.youtube.com/watch?v=MqazV4hbu8E" }
    },
    "05-09": {
      mainMessage: "Anche oggi è lunedi, buongiorno, quanto sei carina!",
      marcoMessage: "non mi va di controllare, se ho azzeccato giorno è a culo",
      playlist: { title: "Whitout You, Avici", url: "https://www.youtube.com/watch?v=WRz2MxhAdJo" }
    },
    "05-11": {
      mainMessage: "Un bel massaggio ti aspetta, lasciati sciogliere, ti prometto ore di relax",
      marcoMessage: "Io direi che è un ottima proposta",
      playlist: { title: "I cant feel my face, the weekend", url: "https://www.youtube.com/watch?v=QC2FoaT7Yb8" }
    },  "05-12": {
      mainMessage: "Vesak / Buddah day! sembra una puttanata ma è vero ",
      marcoMessage: "Buongiorno, che figo buddah, medita un po'oggi magari!",
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
     "06-01": {
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
      marcoMessage: "non chiedermi come faccio. come è andata la giornata? Dimmi un pò",
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
      marcoMessage: "non ti dicoperò' cosa....",
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
      mainMessage: "Oggi comincia ufficialmente l'estate, goditi il sole, il mare e diveriti con un pò di sano cazzeggio",
      marcoMessage: "Ogni tanto, non è che insisto, comunque ok se proprio insisti posso venire con te ogni tanto a cazzeggiare, ma non esageriamo",
      playlist: { title: "Perfect , ed Sheran", url: "https://www.youtube.com/watch?v=kPhpHvnnn0Q" }
    },
     "06-22": {
      mainMessage: "Ciao Cla, buongiorno, oggi è la giornata mondiale dello yoga, se vuoi rilassarti un pò, magari con qualche posizione strana, è il giorno giusto",
      marcoMessage: "E un pensiero aiuta",
      playlist: { title: "This is What it Feels Like, Armin Van Buuren", url: "https://www.youtube.com/watch?v=f8ZmYjPzPUE" }
    },
     "06-23": {
      mainMessage: "Ti voglio bene Claudietta, in bocca al lupo se serve e goditi una grande giornata se non serve!",
      marcoMessage: "Un bacione, buona giornata",
      playlist: { title: "Halo , Beyoncé", url: "https://www.youtube.com/watch?v=pCSL48AI_Ms" }
    },
     "06-25": {
      mainMessage: "Oggi ho voglia di un segreto, raccontami qualcosa, sono curioso",
      marcoMessage: "Buonasera, la sera i segreti vengono meglio, chiamami se vuoi",
      playlist: { title: "Secrets , Tiesto", url: "https://www.youtube.com/watch?v=Dr1nN__-2Po" }
    },
     "06-27": {
      mainMessage: "Buongiorno, come ci svegliamo oggi? un sorriso o una faccia da schiaffi? comunque vada, a me ogni tanto fai sentire cosi...",
      marcoMessage: "Parla la canzone, buona giornata Cla",
      playlist: { title: "Best Day of My Life, American Authors", url: "https://www.youtube.com/watch?v=vJ9KFEJVISo" }
    },
     "06-29": {
      mainMessage: "Mi Piace parlare tramite canzoni, Ascoltale tutte mi raccomando, sono tutte per te",
      marcoMessage: "Le ho scelte bene, non solo per la musica anche se ho gran gusto, ma proprio parlavano di te!",
      playlist: { title: "Addicted to you", url: "https://www.youtube.com/watch?v=X6xokv_0cyQ" }
    },
     "06-30": {
      mainMessage: "Bonjour, mi manchi, anche se ci siamo visti ieri!",
      marcoMessage: "Ma io che ne so, parlo nel passato, ma ti voglio abbracciare oggi lo so!",
      playlist: { title: "Memories, Maroon 5", url: "https://www.youtube.com/watch?v=o2DXt11SMNI" }
    },
     "07-01": {
      mainMessage: "Buonasera, forse, Come va? pronta per domani? sento che succede qualcosa",
      marcoMessage: "Festeggiamo? Si litiga? Si Ride un po? Nulla? boh basta che mi fai sapere.",
      playlist: { title: "Glad you Came, The Wanted", url: "https://www.youtube.com/watch?v=I5GjALNHzPQ" }
    },
     "07-03": {
      mainMessage: "Tutto sotto controllo? Oggi ho voglia di farti un complimento, chiamami se vuoi sentirlo.",
      marcoMessage: "Quello dal vivo sarebbe meglio: Sei una bomba, prendi in mano la giornata e spacca tutto, tvb ,sei bella!",
      playlist: { title: "Under Control, Calvin Harris & Alesso", url: "https://www.youtube.com/watch?v=K0fYK-Bwc0g" }
    },
     "07-05": {
      mainMessage: "Ciao Cla, buongiorno, Dopomani è la giornata mondiale della Torta di mele. Se mi avvisi ora, dopodomnani sai che succede",
      marcoMessage: "Scegli bene, mi impegno se mi chiami!",
      playlist: { title: "Midnight City, M83", url: "https://www.youtube.com/watch?v=iSC4P1i9zmE" }
    },
     "07-07": {
      mainMessage: "Ei sorella, come va? sei piuttosto carina lo sai?",
      marcoMessage: "e direi anche in gamba, un pò antipatica ogni tanto, ma sono preparato a sopportarti, buon giorno!",
      playlist: { title: "Hey soul sister. Train", url: "https://www.youtube.com/watch?v=Iurs-gVL48Y" }
    },
     "07-09": {
      mainMessage: "Buongiorno, ti va di darmi un morso?",
      marcoMessage: "Oggi mi sento particolarmente buono, assaggiami",
      playlist: { title: "I could be the one, Avicii", url: "https://www.youtube.com/watch?v=fZcScHIS7Sg" }
    },
     "07-11": {
      mainMessage: "Buongiorno, ti senti un po'a casa con me?",
      marcoMessage: "Io con te mi sento sempre a casa, dove volevo essere",
      playlist: { title: "Clock, Coldplay", url: "https://www.youtube.com/watch?v=3A3hgfstCxE" }
    },
     "07-13": {
      mainMessage: "Ciao Cla, come va? la vita va bene oggi?",
      marcoMessage: "Non ti va di stare un po'con me? dai fatti sentire, ti canto una canzone se vuoi",
      playlist: { title: "Stand by Me, Ben E. King", url: "https://www.youtube.com/watch?v=7rZyI7kPZMI" }
    },
     "07-14": {
      mainMessage: "Ei cara. ma lo sai che ti penso proprio tanto? Oggi è la giornata dei dolci, tu il mio preferito.",
      marcoMessage: "Dopo la torta di mele spero di essere il tuo!",
      playlist: { title: "Sugar, Maroon 5", url: "https://www.youtube.com/watch?v=Y-pEoGvuWKk" }
    },





     "07-15": {
      mainMessage: "Gioranata mondiale delle talpe e degli animali sotteranei e che scavano, boh",
      marcoMessage: "Auguri? non so che dirti, ma auguri",
      playlist: { title: "All of Me, John Legend", url: "https://www.youtube.com/watch?v=QfgJQUiQFes" }
    },




    
     "07-17": {
      mainMessage: "Baby io voglio solo essere tuo, e tu vuoi essere mia? Buongiorno, sei bellissima oggi!",
      marcoMessage: "Buongiorno, sempre tuo, Marco",
      playlist: { title: "I Wanna be yours, Artic Monkeys", url: "https://www.youtube.com/watch?v=fukGbiPuBjU" }
    },
     "07-19": {
      mainMessage: "Buongiorno, certe giornate hanno un'anergia speciale, oggi sentitela così",
      marcoMessage: "Realizziamo un sogno, ti va?",
      playlist: { title: "You make my dreams, Daryl hall & john Othes", url: "https://www.youtube.com/watch?v=49BQKU5wflk" }
    },
     "07-21": {
      mainMessage: "Everything that i want, I want from youuuu, but i just can't have youuu, buongiorno Claudietta!",
      marcoMessage: "You're not aloneeeee, oh and im where i belooong (con te?)",
      playlist: { title: "Stray Hearts, Green Day", url: "https://www.youtube.com/watch?v=P2GFl6bM4Wo" }
    },
     "07-23": {
      mainMessage: "Buongiorno, ma lo sai che mi hai cambiato la vita?",
      marcoMessage: "Mi hai fottuto il sistema nervoso ahahah, non soffro più il solletico!",
      playlist: { title: "You shook me all night long, ACDC", url: "https://www.youtube.com/watch?v=PAvZ__zwiyM" }
    },
     "07-25": {
      mainMessage: "Ei, raccontami un po'qualcosa, voglio risvegliare qualche emozione oggi!",
      marcoMessage: "Facciamolo, siamo bravi a farlo",
      playlist: { title: "More than a feeling, Boston", url: "https://www.youtube.com/watch?v=gwIQpmXc_ZA" }
    },
     "07-27": {
      mainMessage: "Facciamo una cosa divertente oggi? ",
      marcoMessage: "Dai si ho voglia di cazzeggio con te,Fatti sentire",
      playlist: { title: "Feel So Close, Calvin Harris", url: "https://www.youtube.com/watch?v=Tt7KcLSvjBU" }
    },
     "07-29": {
      mainMessage: "Buongiorno, ma non ti capita mai di sentirti in una canzone?",
      marcoMessage: "Sempre allegra cla, sei fortissima!",
      playlist: { title: "This Love, Maroon 5", url: "https://www.youtube.com/watch?v=Tt7KcLSvjBU" }
    },
     "07-31": {
      mainMessage: "Mi ricordi perché ci allontaniamo ogni tanto? Uffa mi manchi, Buongiorno!",
      marcoMessage: "secondo me colpa tua...",
      playlist: { title: "Wish you were here, Pink Floyd", url: "https://www.youtube.com/watch?v=ZVcU9m488e4" }
    }
    
    ,
     "08-02": {
      mainMessage: "Ma sei stupenda! Che scelta questa madrina! divertiti e si fiera di te <3 ",
      marcoMessage: "Bravissima Cla, tanti auguri!",
      playlist: { title: "Reload, Various Artists", url: "https://www.youtube.com/watch?v=xlcxWHsCojU" }
    }
    
    ,
     "08-03": {
      mainMessage: "Acolta un pò me, la vita andra sempre meglio, goditi quello che succede oggi e non preoccuparti di quello che succederà domani",
      marcoMessage: "E se dovesse esserci da prooccuparsi, sai che ci sono io, non sei sola, buon giorno!",
      playlist: { title: "Hear me now, Alok", url: "https://www.youtube.com/watch?v=YKCr1bdwy0c" }
    },
     "08-05": {
      mainMessage: "Che Caldo insopportabile oggi, andiamo a farci un bagno?",
      marcoMessage: "Ho voglia di stendermi a sudare affianco a te, dai accontentami un pò",
      playlist: { title: "Boys dont cry, The Cure", url: "https://www.youtube.com/watch?v=QRtZq39aMas" }
    },
     "08-07": {
      mainMessage: "Ogni tanto penso a quante parole abbiamo sprecato a vicenda, e ne sono abbastanza contento!",
      marcoMessage: "Buongiorno Cla, avrei voluto sprecarne mille di più, ti voglio bene",
      playlist: { title: "We don't talk anymore, Charlie Puth", url: "https://www.youtube.com/watch?v=MO6kDZckv5s" }
    }
    
    
    ,
     "08-08": {
      mainMessage: "Oh oggi giornata importante me lo sento!",
      marcoMessage: "....",
      playlist: { title: "She's the One,Robbie Williams", url: "https://www.youtube.com/watch?v=NmrExoQGhvI" }
    }
    ,
     "08-09": {
      mainMessage: "Oggi sono di buono umore, approfittane.",
      marcoMessage: "Oppure goditi una giornata tutta tua, come preferisci, ma goditela",
      playlist: { title: "The Scientist , Coldplay", url: "https://www.youtube.com/watch?v=QSVfXaFNFho" }
    },
     "08-10": {
      mainMessage: "E se provassimo a fare una cosa stana oggi? per esempio amarci un po?",
      marcoMessage: "Si, ci vuole coraggio, ma potremmo vivere un sogno",
      playlist: { title: "Living on a Prayer, Bon Jovi", url: "https://www.youtube.com/watch?v=2ognf_oRQWM" }
    },
     "08-11": {
      mainMessage: "Oggi guardiamo le stelle ok? non vedo l'ora di stendermi affianco a te",
      marcoMessage: "Buongiorno, sei emozionata? chissa se si avvererà un nostro desiderio",
      playlist: { title: "Counting Stars, OneRepublic", url: "https://www.youtube.com/watch?v=yY3wc58yo2A" }
    }
    
    ,
     "08-14": {
      mainMessage: "Bonjour, ci vediamo a mare? Ti voglio bella e solare! divertiti!",
      marcoMessage: "Ci ubriachiamo insieme?",
      playlist: { title: "Marvin Gaye, Charlie Puth", url: "https://www.youtube.com/watch?v=a5CslyeXmOE" }
    }
    
    
    ,
     "08-15": {
      mainMessage: "Buongiorno, Ricordati di rimanere idratata e riposata, tutto il resto è gia risolto",
      marcoMessage: "E se serve altro nella vita chiamami e ci penso io!",
      playlist: { title: "The less i know the better, Time Impala", url: "https://www.youtube.com/watch?v=HYGUQglULoA" }
    },
     "08-17": {
      mainMessage: "Giornata Pugliese delle bruschette, direi che potremmo organizzarci per ripspettare la tradizione",
      marcoMessage: "Tu da me?",
      playlist: { title: "I Feel it Coming, The Weekend", url: "https://www.youtube.com/watch?v=pP6xCDbFM1Q" }
    }
    
    
    ,
     "08-19": {
      mainMessage: "Giornata mondiale della fotografia!",
      marcoMessage: "Ti va una foto?",
      playlist: { title: "Eccoti, Max Pezzali", url: "https://www.youtube.com/watch?v=-hQC9s8TTk4" }
    }
    
    ,
     "08-21": {
      mainMessage: "Buongiorno, Ma quanto ho voglia di un po'di anguria!",
      marcoMessage: "Mi fai dare un morso cla?",
      playlist: { title: "Watermelon sugar, Harry Styles", url: "https://www.youtube.com/watch?v=dZwffaluIgg" }
    },
     "08-22": {
      mainMessage: "Ho voglia di perdermi nei tuoi occhi oggi, ti va di perderti nei miei?",
      marcoMessage: "Ci incontriamo in uno sguardo? buongiorno!",
      playlist: { title: "In Your Eyes. the Weekend", url: "https://www.youtube.com/watch?v=UzZj2ide0x8" }
    },
     "08-24": {
      mainMessage: "Buongiorno raggio di sole,Sei grandiosa, anche oggi è il momento di splendere, e se serve sciogliere qualcosa!",
      marcoMessage: "Ogni tanto mi fai sentire proprio come la canzone di oggi!",
      playlist: { title: "Walking on a Dream, Empire of the Sun", url: "https://www.youtube.com/watch?v=kYJeot8wsWY" }
    },
     "08-26": {
      mainMessage: "Buondì, fai una bella colazione e mettiamocela tutta, è il momento di darsi da fare!",
      marcoMessage: "Mi fai un po'compagnia oggi?",
      playlist: { title: "Someone you loved, Luis Capaldi", url: "https://www.youtube.com/watch?v=u1yVCeXYya4" }
    },
     "08-27": {
      mainMessage: "Buon Pomeriggio, Hai qualche idea strana oggi? Potrei sorprenderti e darti corda",
      marcoMessage: "Oggi casino!",
      playlist: { title: "Your Love, The Outfield", url: "https://www.youtube.com/watch?v=Z0OXRP-B200" }
    },
     "08-29": {
      mainMessage: "Grinta ragazza, oggi il mondo è per te, e quanto vorrei essere io a dartelo",
      marcoMessage: "I can't get enought of you baby, can you get enought of me?",
      playlist: { title: "I Was Made For Lovin you", url: "https://www.youtube.com/watch?v=_mIiR7ATeF4" }
    },
     "09-01": {
      mainMessage: "Buonasera, come va la vita? comincia Settembre di nuovo...",
      marcoMessage: "Oggi sto appizzato, cerca di svegliarmi tu un pò per una volta",
      playlist: { title: "Somebody that i Used to know", url: "https://www.youtube.com/watch?v=t_dLoOXy8PA" }
    },
     "09-02": {
      mainMessage: "Ogni scemo può sapere, il punto è capire.    Albert Einstein",
      marcoMessage: "E tu che vuoi fare? ti basta sapere o vuoi comprenderne il significato? buongiorno",
      playlist: { title: "Follow You, Imagine Dragons", url: "https://www.youtube.com/watch?v=1DoI5WTjd3w" }
    },
     "09-04": {
      mainMessage: "Buongiorno, ricordati che solo perché ci vuole tempo non vuol dire che non stia funzionando",
      marcoMessage: "Continua cosi, sei grande!",
      playlist: { title: "In Your Arms, Nico & Vinz", url: "https://www.youtube.com/watch?v=361YTYs0mI0" }
    },
     "09-06": {
      mainMessage: "Buongiorno a te, che non ti arrenidi mai!",
      marcoMessage: "lo sai che la vita ti deve ancora un sogno",
      playlist: { title: "Hymn for the Weekend, Coldplay", url: "https://www.youtube.com/watch?v=DzlfEih1NCM" }
    },
     "09-08": {
      mainMessage: "Hei ragazza, buonasera, oggi sei veramente splendida",
      marcoMessage: "Motivati da sola, non ascoltare chi nota solo i tuoi errori!",
      playlist: { title: "We are Beautiful now, Zedd", url: "https://www.youtube.com/watch?v=kpwVAz0yekQ" }
    },
     "09-09": {
      mainMessage: "Spero la vita ti tratti bene, e se non lo fa spero che sia tu stessa a trattarti con il rispetto che meriti",
      marcoMessage: "E male male ti tratterò bene io se proprio non riesci da sola",
      playlist: { title: "Adventure of a lifetime, Coldplay", url: "https://www.youtube.com/watch?v=-5IXuIvDWu0" }
    },
     "09-11": {
      mainMessage: "Bonjour, oggi una massima: La pace arrivera quando realizzerai che tutto ciò che è al di fuori del tuo controllo dovrebbe restare fuori dalla tua mente",
      marcoMessage: "Sembra banale, ma è tutto lì",
      playlist: { title: "Lovers on the sun, David Guetta", url: "https://www.youtube.com/watch?v=RM4TfzprAwg" }
    },
     "09-12": {
      mainMessage: "Buonasera, migliora i tuoi pensieri e ti sentirai decisamente meglio!",
      marcoMessage: "Migliora le tue azioni, e tutto nella vita migliorerà",
      playlist: { title: "With or Without you, U2", url: "https://www.youtube.com/watch?v=RM4TfzprAwg" }
    },
     "09-14": {
      mainMessage: "Hei ,leggi attentamente: non sarai mai troppo pesante per qualcuno che non può mai averne abbastanza di te",
      marcoMessage: "Leggilo di nuovo",
      playlist: { title: "Stole the show, Kygo", url: "https://www.youtube.com/watch?v=Vs3LXhqm5h4" }
    },
     "09-16": {
      mainMessage: "Buongiorno, come va? stai bene? fatti sentire un pò, manca un po'di casino qui",
      marcoMessage: "Renditi conto che mi manchi oh (bugia, manco un pò)",
      playlist: { title: "Postcards, James Blunt", url: "https://www.youtube.com/watch?v=VU5chvW2wi4" }
    },
     "09-18": {
      mainMessage: "Ei cla, forse lo vuoi sentire oggi: Non puoi tornare indietro e cambiare un inizio",
      marcoMessage: "Ma puoi iniziare ora, dove sei, e cambiarne il finale.",
      playlist: { title: "I wanna know, Alesso, Nico & Vinz", url: "https://www.youtube.com/watch?v=Z_BBnI_fmdQ" }
    },
     "09-20": {
      mainMessage: "Oggi frasona (buongiorno claudia), senti un pò:",
      marcoMessage: "L'imbarazzo è il prezzo da pagare, se non sei disposta a sembrare una principiante inesperta, non potrai mai diventrare la migliore degli esperti",
      playlist: { title: "Circles, Post Malone", url: "https://www.youtube.com/watch?v=WnLIGgTaBM0" }
    }
    
    
    ,
     "09-21": {
      mainMessage: "Giornata mondiale della pace! Litighiamo un pò come piace a noi e poi facciamo pace festeggiando?",
      marcoMessage: "peace and love, ma se vuoi litighiamo un pò",
      playlist: { title: "Lovesick, maroon 5", url: "https://www.youtube.com/watch?v=zAVqPCuYN4k" }
    }
    
    
    ,
     "09-23": {
      mainMessage: "Buonasera, oggi un po'pesante ahaha",
      marcoMessage: "Mi piace stare solo, ma con te ,per la prima volta, ho voluto la compagnia di qualcuno più della mia",
      playlist: { title: "Thinking out loud, Ed Sheeran", url: "https://www.youtube.com/watch?v=XMPgVZtADtQ" }
    },
     "09-25": {
      mainMessage: "Buongiorno signorina. Spero ti accadano un sacco di cose belle",
      marcoMessage: "E quando arrivano, voglio che tu sappia che te le meriti tutte",
      playlist: { title: "Everybody Wants to rule the world, Tears for Fears", url: "https://www.youtube.com/watch?v=SRAq0CUM6-Y" }
    },
     "09-26": {
      mainMessage: "Ei cla buonasera, Non opprimerti troppo, sei una bomba!",
      marcoMessage: "Fai il tuo meglio senza sfinirti, è più che abbastanza",
      playlist: { title: "Jump, Van Hallen", url: "https://www.youtube.com/watch?v=NUTjBxSnkAs" }
    }
    
    
    ,
     "09-27": {
      mainMessage: "Giornata mondiale del turismo!",
      marcoMessage: "Giorno ideale per pianificare, so gia che stiamo a casa ahaha",
      playlist: { title: "Chemical, Post Malone", url: "https://www.youtube.com/watch?v=81pk9vrKprA" }
    }
    
    ,
     "09-29": {
      mainMessage: "Oggi canzone importante, ascoltala, è per te",
      marcoMessage: "Non piangere, ti amo ancora, Buongiorno Claudietta",
      playlist: { title: "Dont Cry, Guns And Roses", url: "https://www.youtube.com/watch?v=gwIQpmXc_ZA" }
    }
    
    ,
    "10-01": {
      mainMessage: "Giornata mondiale della musica! ascolta la tua canzone preferita e balla come se nessuno ti stesse guardando!",
      marcoMessage: "E se qualcuno ti stesse guardando? balla lo stesso, che ti frega! Buongiorno!",
      playlist: { title: "AKA... What a life, Noel Gallagher", url: "https://www.youtube.com/watch?v=FWbbqzY8g0s" }
    }
    
    ,
     "10-03": {
      mainMessage: "Ogni tanto mi sveglio scocciato, poi penso a qualche giornata cominciata cosi e diventatà leggendaria, e la mia giornata migliora immediatamente. Sara uno di quei giorni?",
      marcoMessage: "Il paradiso qualche giornata...",
      playlist: { title: "Paradise, Coldplay", url: "https://www.youtube.com/watch?v=ymMvDs15htc" }
    },
     "10-04": {
      mainMessage: "Oggi un pensiero carino: Anni fa avrai sicuramente avuto dei problemi che ora neanche ricorderai che sembravano insormontabili ",
      marcoMessage: "Eppure siamo sempre qua, anche i prossimi li supereremo",
      playlist: { title: "Humans, The killers", url: "https://www.youtube.com/watch?v=1irwugJ8W8A" }
    },
     "10-06": {
      mainMessage: "Buongiorno, e se oggi....?",
      marcoMessage: "Non troverai mai la stessa persona due volte, neanche nella stessa persona  - Mahmoud Darwish",
      playlist: { title: "Dream on, Aerosmith", url: "https://www.youtube.com/watch?v=JojwHc1MKag" }
    },
     "10-07": {
      mainMessage: "Buongiorno, oggi ho sentito che si parla male di Marco, nulla da aggiungere? ",
      marcoMessage: "Quanti problemi che mi causa..., un pensierino fossi in te lo farei comunque, è carino il ragazzo, si impegna e so che ti ama da impazzire",
      playlist: { title: "Bitter Sweet Symphony, The Verve", url: "https://www.youtube.com/watch?v=tvx_W4UFVDc" }
    },
     "10-09": {
      mainMessage: "Hei cla, se ti capita di sentirti giù ogni tanto ricordati questo:",
      marcoMessage: "L'uomo che è stato distrutto mille volte, conosce mille modi per ricorsturire se stesso meglio di prima.",
      playlist: { title: "Dont Look back in Anger, Oasis", url: "https://www.youtube.com/watch?v=639wzt3LYEw" }
    },
     "10-10": {
      mainMessage: "Giusto per rafforzare il discorso di ieri: abbi fiducia in chi stai diventando, e permetti a te stessa di evolvere, sei magica cla, non hai limiti! ",
      marcoMessage: "e comunque buongiorno bellissima!",
      playlist: { title: "Viva La Vida, Coldplay", url: "https://www.youtube.com/watch?v=y4zdDXPYo0I" }
    },
     "10-12": {
      mainMessage: "Un giorno, forse, avrai tutte le risposte. Per ora concentrati sul goderti il presente, abbi fiducia nelle scelte che prendi e circondati di chi supporta i tuoi obiettivi e crede in te ",
      marcoMessage: "Sei gia dove devi essere!",
      playlist: { title: "Wanderwall, Oasis", url: "https://www.youtube.com/watch?v=NbSzTi0d6pQ" }
    },
     "10-14": {
      mainMessage: "Buongiorno, Fatti un enorme favore e comincia a credere che nulla è troppo buono per te",
      marcoMessage: "Meriti tutto cio che c'è di buono in questa vita",
      playlist: { title: "Im still standing, Elton John", url: "https://www.youtube.com/watch?v=MJ_aPtt4U8M" }
    },
     "10-16": {
      mainMessage: "Ei ma chi è questa sventola al computer?",
      marcoMessage: "mado mi dovevate avvisare, non posso farmi vedere cosi da una come lei...",
      playlist: { title: "Otherside, Red Hot Chilly Peppers", url: "https://www.youtube.com/watch?v=NHH8ENlkMC0" }
    },
     "10-18": {
      mainMessage: "Bonjour, oggi una bella frase: L'amore è un atto infinito di perdono",
      marcoMessage: "Il perdonare è un atto di amore infinito",
      playlist: { title: "Can't Stop, Red Hot Chilly Peppers", url: "https://www.youtube.com/watch?v=8a-9Sd35HNI" }
    },
     "10-20": {
      mainMessage: "Eiiiii sveglia, oggi è la giornata mondiale del disturba i tuoi parenti, è il giorno adatto a rompere motorini e vantarsi con cugine rosicone",
      marcoMessage: "Se serve puoi anche inventare, l'importante è dare fastidio",
      playlist: { title: "Beautiful Day, U2", url: "https://www.youtube.com/watch?v=hJ_burYdegk" }
    },
     "10-22": {
      mainMessage: "Oggi ti dico una cosa bella e seria, dopo un solito Buongiorno ",
      marcoMessage: "Ricordati sempre, non succedera mai nella vita che tu mi trovi sordo a una tua chiamata in un momento di bisogno, mai...",
      playlist: { title: "I Ain't worried, One Republic", url: "https://www.youtube.com/watch?v=mNEUkkoUoIA" }
    },
     "10-24": {
      mainMessage: "Ciao Bellissima, che si racconta?",
      marcoMessage: "Non dubitare mai di te, chi vede quello che fai si chiede come tu possa essere cosi grandiosa.",
      playlist: { title: "Come as you are, Nirvana", url: "https://www.youtube.com/watch?v=9I9c20LHmzY" }
    },
     "10-26": {
      mainMessage: "Buonasera, novità? nulla di interessante da condividere?",
      marcoMessage: "Sei nata per controllare le tempeste, smettila di fare finta che la pioggia possa danneggiarti",
      playlist: { title: "Fly Away, Lenny Krevitz", url: "https://www.youtube.com/watch?v=BQZzwnQ5PBk" }
    },
     "10-28": {
      mainMessage: "Madò sta finendo un altro mese, qualche momento speciale da incorniciare?",
      marcoMessage: "Nel caso ci sono un altro paio di giorni fino alla fine",
      playlist: { title: "Dancin in the Moonlight, Toploader", url: "https://www.youtube.com/watch?v=5Sx7xqv_oYk" }
    },
     "10-30": {
      mainMessage: "Bonsoir, Domani attenta che ci sono i matti in giro, non accettare caramelle dagli sconosciuti",
      marcoMessage: "Una buona frase motivazionale random: E' comunque una vittoria quando un esperienza dolorosa alimenta la nostra crescita.",
      playlist: { title: "I Was Made for Lovin' you, Kiss", url: "https://www.youtube.com/watch?v=_mIiR7ATeF4" }
    },
    "10-31": {
      mainMessage: "Buongiorno, sarai tu il mostro oggi? da che ti travesti?",
      marcoMessage: "Ciao streghetta, oggi con o senza maschera per fare più paura?",
      playlist: { title: "Left and right, Charlie Puth - Jungkook", url: "https://www.youtube.com/watch?v=Otkibvs-aAs" }
    },
     "11-02": {
      mainMessage: "Ei Babbana, cerca di vivere una vista soddisfacente ancor più che di successo!",
      marcoMessage: "Dobbiamo rendere fieri e felici noi stessi, non gli altri.",
      playlist: { title: "Vampire Diaries, MGK", url: "https://www.youtube.com/watch?v=_WdVeebvhEA" }
    },
     "11-04": {
      mainMessage: "Che donna coraggiosa che sei, Buongiorno!",
      marcoMessage: "Il coraggio non è avere la forza di andare avanti, ma andare avanti anche quando non ne hai la forza.  Teddy Roosvelt ",
      playlist: { title: "In the Air Tonight, Phil Collins", url: "https://www.youtube.com/watch?v=CFDFX4Ao-UY" }
    },
     "11-06": {
      mainMessage: "Ei, ti va un caffe? vorrei un pò di caffeina",
      marcoMessage: "Bugia vuole solo vederti, puoi lasciar stare",
      playlist: { title: "Ain't no sunshine, Bill WHiters", url: "https://www.youtube.com/watch?v=C_lX7RoY3k8" }
    },
     "11-08": {
      mainMessage: "Buongiorno, adoro la tua voce appena sveglia sai?",
      marcoMessage: "Dai fammi un bel audio",
      playlist: { title: "Layla (Claudia), Eric Clapton", url: "https://www.youtube.com/watch?v=cs-sks4dtww" }
    },
     "11-10": {
      mainMessage: "Ogni tanto bisogna ricordarsi di ringraziare chi migliora la nostra vita, grazie!",
      marcoMessage: "Ogni tanto bisogna anche ricordarsi di altro... chiedimi cosa.",
      playlist: { title: "You make my Dreams", url: "https://www.youtube.com/watch?v=49BQKU5wflk" }
    },
     "11-12": {
      mainMessage: "Buongiorno, lo sai che cosa ho visto una volta nei tuoi occhi?",
      marcoMessage: "Secondo me no, spero di ricordarmene",
      playlist: { title: "Sweet child of mine, Nirvana", url: "https://www.youtube.com/watch?v=qoflJn7zkFM" }
    },
     "11-14": {
      mainMessage: "Hei scema, anche oggi un'altra giornata magnifica da vivere!",
      marcoMessage: "Indossa il tuo sorriso più bello, la giornata sarà magnifica anche per me!",
      playlist: { title: "Lady, hear me tonight, Modjo", url: "https://www.youtube.com/watch?v=-EmfweH9xVw" }
    },
     "11-16": {
      mainMessage: "Buonasera, oggi la sfida è decidere nel mondo chi è il più intelligente, chi il più affascinante , chi il più scemo e chi il più soggetto , che suggerisci?",
      marcoMessage: "Io direi scontato Marco e Claudia per un paio di cose",
      playlist: { title: "I Just Died in your Arms, Cutting Crew", url: "https://www.youtube.com/watch?v=8ZIOkbrX_uU" }
    },
     "11-18": {
      mainMessage: "Ei, oggi volevo dirti che sei perfetta esattamente come sei, onesta, bella e garbata",
      marcoMessage: "Un pò rompi ogni tanto, ma sarà colpa degli altri sicuramente",
      playlist: { title: "Would you still love me the same, Adam Levine", url: "https://www.youtube.com/watch?v=0m6O7vzjVro" }
    },
     "11-20": {
      mainMessage: "Se ti dico che mi piaci un sacco la giornata un po'migliora? sei un sogno!",
      marcoMessage: "A me non è che piaccia poi così tanto, il giusto...",
      playlist: { title: "Looked out of Heaven", url: "Bruno Mars" }
    },
     "11-22": {
      mainMessage: "Buongiorno, stringi i denti e anche oggi affronta la vita con grinta e coraggio, c'è tanto che ci aspetta ",
      marcoMessage: "E se vuoi un pò di caos sai come mischiare le carte",
      playlist: { title: "Drive by, Train", url: "https://www.youtube.com/watch?v=maklLfjCO90" }
    },
     "11-24": {
      mainMessage: "Allora ti piace venire qui a leggere buongiorno? Ti voglio bene, sei una stella",
      marcoMessage: "La più lontana e luminosa",
      playlist: { title: "Should i stay or should i go?, The Clash", url: "https://www.youtube.com/watch?v=KPeT0jTcWGU" }
    },
     "11-26": {
      mainMessage: "Buongiorno forza della natura, pronta a scatenare un uragano?",
      marcoMessage: "Fammi volare",
      playlist: { title: "Take on me, A-ha", url: "https://www.youtube.com/watch?v=kmDBDn8Ju6w" }
    },
     "11-28": {
      mainMessage: "Hei bellissima, come va la vita? ci divertiamo un po' assieme?",
      marcoMessage: "daiiii divertiamoci",
      playlist: { title: "Angelo, Francesco Renga", url: "https://www.youtube.com/watch?v=q3FrlmPExGE" }
    },
     "11-30": {
      mainMessage: "Cia', ne ho scritti abbastanza di messaggi, sto perdendo l'interesse",
      marcoMessage: "Ma quando mai, torna domani!",
      playlist: { title: "Vorrei, Lunapop", url: "https://www.youtube.com/watch?v=4od-RmkKyD8" }
    },
     "11-31": {
      mainMessage: "E sta sera ti va una pazzia? chiudiamo un altro mese...",
      marcoMessage: "Voglio un bacio",
      playlist: { title: "Io Amo, Fausto Leali", url: "https://www.youtube.com/watch?v=Q6S3_vdPW1s" }
    }

    
  },

  weekly: {
    monday: {
      mainMessage: "Buon Lunedì, Comincia un'altra settimana, datti da fare, impegnati, goditela e rendi te stessa fiera! ",
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
    name: "Il mio Cuore",
    description: "Direttamente dal mio cuore, i miei sentimenti sono qui",
    songs: [
      {
        title: "Amo",
        subtitle: "Fausto Leali",
        description:["Ma dove va a finire il cielo?",
                      "Magari dove dormi tuuuuu,",
                      "E respiraaaare sul tuo seno,",
                      "Amoooo, Amooooo.",
                      "Sbadiglia piano una finestra,",
                      "Tra le persiane un po' di blu,",
                      "Mi sveglio e già mi batti in testa,",
                      "Amooooo (amo), io Aaaaaamooooo (amo)",
                      "Tuuuu, solamente tuuu,",
                      "Non aver pauraaaa,",
                      "Non sarai più solaaaaa,",
                      "Amooooo (amo), io Aaaaaamooooo (amo)",
                      "Tu, tu sempre più suuu,",
                      "Noi fra queste mura,",
                      "Noooooon sei un'avventura,",
                      "Amooooo (amo), io Aaaaaamooooo (amo)",
                      "Ma dove va a dormire il cielo?",
                      "Se gli rubiamo tutto il bluuuu (lo rubi tu)",
                      "Se le mie braccia han preso il volo,",
                      "Amooooo (amo), io Aaaaaamooooo (amo)",
                      "Tuuuu, solamente tu,",
                      "Nooooon aver paura,",
                      "Non sarai più sola,",
                      "Amooooo (amo), io Aaaaaamooooo (amo)",
                      "Tu, tu sempre più suuuu,",
                      "Noi fra queste mura,",
                      "Noooon sei un'avventura,",
                      "Amo (amo), io amo (amo)",
                      "Io amo",
                      "Io amo",
                      "Io Amo Claudia"],
        url: "https://www.youtube.com/watch?v=UqUem019iDM"
      },{
        title: "Lovesick",
        subtitle: "Maroon 5",
        description:["Lovesick, you know I can't fight it anymore","'Cause I love it, the way my heart drops to the floor","I've been searchin' high and low","Baby, baby, where'd you go?","My starlight, my firefly","Like all night, my whole life","For someone like you to really take my breath away","And I can't be lonely, no","You gon' be the death of me","You got me lovesick, But I love it ","Lovesick, I'm falling, I can't be trusted","If that's what you want, then rush in, Trust me when I say, I want this, want this","'Cause I love it, the way my heart drops to the floor, You got me lovesick, lovesick (but I love it)"],
        url: "https://www.youtube.com/watch?v=zAVqPCuYN4k"
      },
       {
        title: "chemical",
        subtitle: "Post Malone",
        description:["When I come back down, it doesn't feel the same","Now I'm sittin' 'round, waitin' for the world to end all day,'Cause I couldn't leave you if I tried","You break me, then I break my rules","Last time was the last time too","It's fucked up, I know, but I'm still","Tell you that I'm sorry, tell me what I gotta do","'Cause I can't let go, it's chemical","Every time I'm ready to make a change","I can't get away, maybe there's no mistakes","It's fucked up, I know, but I'm still...No, I can't let go, it's chemical"],
        url: "https://www.youtube.com/watch?v=81pk9vrKprA"
      },
       {
        title: "Loser",
        subtitle: "Charlie Puth",
        description:["Oh, I'm such a loser, How'd I ever lose her?","Oh baby, I must have been out of my mind","Now I'm a loser, why'd I have to lose her?","I'll never recover, I'll never be fine,cause i...","I just might get a little too drunk, so I won't think about us, I don't think about what we could have been","And I stay up like three or four nights, so I won't dream about us","Wake up with no luck, I just can't win","I should have seen it all along, She was a one in a million","It hurts whenever someone says her name","When we were going off and on, I guess I really played it wrong","I should have never let her slip away","Yeah, and now I keep lying to myself, She'll probably call me and we'll be us again","Oh, I'm such a loser,How'd I ever lose her? Oh baby, I must have been out of my mind"],
        url: "https://www.youtube.com/watch?v=0NXUj7dJ6tM"
      },
       {
        title: "Left and right",
        subtitle: "Charlie Puth - Jungkook",
        description:["Memories follow me left and right","I can feel you over here, I can feel you over here","You take up every corner of my mind, What you gon' do now?","Ever since the day you went away, No, I don't know how","How to erase your body from out my brain","Maybe I should just focus on me instead","Are the nights we were tangled up in your bed","Oh, no (oh, no) You're goin' 'round in circles, Got you stuck up in my head, yeah","Did you know you're the one that got away?","And even now, baby, I'm still not okay","Did you know that my dreams, they're all the same","Every time I close my eyes....","Memories follow me left and right","I can feel you over here, I can feel you over here","You take up every corner of my mind"],
        url: "https://www.youtube.com/watch?v=Otkibvs-aAs"
      },{
        title: "Follow you",
        subtitle: "Imagine Dragons",
        description:["You know I got your number, number all night","I'm always on your team","I got your back alright","taking those losses if it treats you right","I want to put you into the spotlight","If the world would only know","what you've been holding back","Heart attacks every night","Oh, you know it's not right","I will follow you way down wherever you may go","I'll follow you way down to your deepest low","I'll always be around wherever life takes you","You know I'll follow you","Call you up, you've been cryin', cryin' all night","You're only disappointed in yourself, alright","I wanna take you into the sunlight","You're not the type to give yourself enough love","I wish that I could fix it, I could fix it for you","But instead I'll be right here comin' through","I will follow you way down wherever you may go","I'll follow you way down to your deepest low","I'll always be around wherever life takes you","You know I'll follow you"],
        url: "https://www.youtube.com/watch?v=1DoI5WTjd3w"
      },
      {
        title: "A Sky Full of Stars",
        subtitle: "Coldplay",
        description:["cause you're a sky full of stars","I'm gonna give you my heart","'Cause you light up the path","I don't care, go on and tear me apart","I don't care if you do","'Cause in a sky, 'cause in a sky full of stars","I think I saw you","I wanna die in your arms","'Cause you get lighter the more it gets dark","I'm gonna give you my heart, oh","I don't care, go on and tear me apart","I don't care if you do","'Cause in a sky, 'cause in a sky full of stars","I think I saw you","you're such a hevavenly viewwwwww"],
        url: "https://www.youtube.com/watch?v=HRK_-LNDpcQ&list=RDHRK_-LNDpcQ&start_radio=1"
      },
       {
        title: "Secrets",
        subtitle: "One Republic",
        description:["I need another story, Something to get off my chest","My life gets kinda boring, Need something that I can confess","Come by it honestly, I swear","Thought you saw me wink, no, I've been on the brink","So tell me what you want to hear","Something that will light those ears","I'm sick of all the insincere","So I'm gonna give all my secrets away","My God, amazing how we got this far","It's like we're chasing all those stars","And every day I see the news, All the problems that we could solve","This time, Don't need another perfect lie","Got no reason, got no shame","Got no family I can blame","Just don't let me disappear","I'ma tell you everything","So tell me what you want to hear","Something that will light those ears","I'm sick of all the insincere","So I'm gonna give all my secrets away"],
        url: "https://www.youtube.com/watch?v=ZFGDRzyPXE0"
      },
       {
        title: "Waiting for Love",
        subtitle: "Avicii",
        description:["Where there's a will, there's a way", "kind of beautiful",
                      "And every night has its day", "so magical",
                      "And if there's love in this life, there's no obstacle",
                      "That can't be defeated",
                      "For every tyrant, a tear for the vulnerable",
                      "In every lost soul, the bones of a miracle",
                      "For every dreamer", "a dream, we're unstoppable",
                      "With somethin' to believe in",
                      "Monday left me broken",
                      "Tuesday, I was through with hoping",
                      "Wednesday, my empty arms were open",
                      "Thursday, waiting for love", "waiting for love",
                      "Thank the stars it's Friday",
                      "I'm burning like a fire gone wild on Saturday",
                      "Guess I won't be coming to church on Sunday",
                      "I'll be waiting for love", "waiting for love", "to come around",
                      "We are one of a kind, irreplaceable",
                      "How did I get so blind and so cynical?",
                      "If there's love in this life, we're unstoppable",
                      "No, we can't be defeated",
                      "Monday left me broken",
                      "Tuesday, I was through with hoping",
                      "Wednesday, my empty arms were open",
                      "Thursday, waiting for love"," waiting for love",
                      "Thank the stars it's Friday",
                      "I'm burning like a fire gone wild on Saturday",
                      "Guess I won't be coming to church on Sunday",
                      "I'll be waiting for love","waiting for love to come around"],
        url: "https://www.youtube.com/watch?v=-ncIVUXZla8"
      },
       {
        title: "Everglow",
        subtitle: "Coldplay",
        description:["Oh, they say people come","Say people go","This particular Diamond was extra special.","And though you might be gone","and the world may not know","Still I see you, celestial","There's a light that you give me when I'm in shadow"," There's a feelin' within me, an everglow","Like brothers in blood or sisters who ride","When we swore, on that night, we'd be friends 'til we die","So if you love someone, you should let them know","Oh the light that you left me will everglooooow"],
        url: "https://www.youtube.com/watch?v=xn_1hFdE-5g"
      },
       {
        title: "Vorrei",
        subtitle: "Lunapop",
        description:["Vorrei, vorrei",
                    "Esaudire tutti i sogni tuoi",
                    "Vorrei, vorrei",
                    "Cancellare ciò che tu non vuoi",
                    "Però, lo sai" ,
                    "che io vivo attraverso gli occhi tuoi",
                    "Vorrei, vorrei",
                    "Che tu fossi felice in ogni istante",
                    "Vorrei, vorrei",
                    "Stare insieme a te", "così, per sempre",
                    "Però, lo sai che io vivo attraverso gli occhi tuoi",
                    "E vorrei poterti amare",
                    "Fino a quando tu ci sarai",
                    "Sono nato per regalarti quel che ancora tu non hai","(sono io cla)",
                    "Così se vuoi portarmi dentro al cuore tuo con te",
                    "Io ti prego, e sai perché",
                    "Vorrei, vorrei",
                    "Esaudire tutti i sogni tuoi",
                    "Vorrei, vorrei",
                    "Cancellare ciò che tu non vuoi",
                    "Però, lo sai che io vivo attraverso gli occhi tuoi",
                    "Gli occhi tuoi"],
        url: "https://www.youtube.com/watch?v=4od-RmkKyD8"
      }
      
       ,
       {
        title: "Roi",
        subtitle: "VIDEOCLUB",
        description:["T’en trouveras d’autres des mecs comme moi","Y’en aura plein des gars pour toi","Je te cherche dans mes songes","je te traque dans mes rêves","Tu n’es que le point fixe de mes songes disparates","Tu es ma femme iconique, tu es mon rubis saphir","Aime-moi dans la neige"," aime-moi sous l’soleil"," Je t’aime quand il pleut tu es la nymphe de mes vœux"," je t’embrasse dans mes, rêves et je t’aime au bout des lèvres","Avec toi je suis roi"],
        url: "https://www.youtube.com/watch?v=4NOMFBRfaT0"
      },{
        title: "Human",
        subtitle: "The Killers",
        description:["I did my best to notice",
          "When the call came down the line",
          "Up to the platform of surrender",
          "I was brought, but I was kind","And sometimes I get nervous (capita)",
          "When I see an open door",
          "Close your eyes, clear your heart",
          "Cut the cord","Will your system be alright",
          "When you dream of home tonight?",
          "There is no message we're receiving",
          "Let me know, is your heart still beating?","Are we human or are we dancer?",
          "My sign is vital","my hands are cold",
          "And I'm on my knees","Looking for the answer","Are we human or are we dancer?","balliamo una vita insieme cla"],
        url: "https://www.youtube.com/watch?v=1irwugJ8W8A"
      },{
        title: "Mary On A Cross",
        subtitle: "Ghost",
        description:["We were speeding together",
"Down the dark avenues",
"But besides of the stardom",
"All we got was blues",
"But through all of that sorrow",
"We were riding high",
"And the truth of the matter is",
"I never let you go, let you go","(mai via dal mio cuore)","You go down just like Holy Mary",
"Mary on a, Mary on a cross",
"Not just another Bloody Mary",
"Mary on a, Mary on a cross","If you choose to run away with me",
"I will tickle you internally",
"And I see nothing wrong with that","Now through all of this sorrow",
"We'll be riding high",
"And the truth of the matter is",
"I never let you go, let you gooooooo","You go down just like Holy Mary","Your beauty never ever scared me","If you choose to run away with me",
"I will tickle you internally","Nothing wrong with that","sempre"
],
        url: "https://www.youtube.com/watch?v=8JMMjCyyznI"
      },
       {
        title: "Space",
        subtitle: "Biffy Clyro",
        description:["When we were young and still in love","We didn't care what we were made of","Our eyes were set on a distant Sun","It was shimmering gold","We carried our past and cradled the storm","We tried to conceal the scars we wore","'Cause we couldn't show","I get lost sometimes","With you, I am fine","I get lost so I'll follow the light to your heaaaaart","Will you wait, will you wait for me?","There's always a space in my heart","I'm still caught in your gravity ","No matter the distance between us","Love sure is meaningless when you're not theeeeeere","Will you wait, will you wait for me?","There's always a space in my heart for you"],
        url: "https://www.youtube.com/watch?v=op50XcZT33E"
      },
       {
        title: "Unforgettable",
        subtitle: "French Montana - Swae Lee",
        description:["It's not good enough for me","Since I've been with you, i know","It's not gonna work for you","nobody can equal me,you know","I should know how to pick up","I′m gonna catch the rhythm","I had enough convo for 24","Pretty little body dancin' like GoGo, hey","And you are unforgettable","I need to get you alone","A fuckin' good time, never hurt nobody","If you loved the girl then I'm so, so sorry","I got to give it to her like we in a marriage","Oh, like we in a hurry","No, I won't tell nobody","You're on your level too","Tryna do what lovers do","You are Unforgettable"],
        url: "https://www.youtube.com/watch?v=MIcIza4sqaM"
      },{
        title: "I was Made for Lovin'you",
        subtitle: "Kiss",
        description:["Tonight",
                    "I wanna give it all to you",
                    "In the darkness",
                    "There's so much I wanna do",
                    "And tonight",
                    "I wanna lay it at your feet",
                    "'Cause, girl, I was made for you","Nato per amarti, è la mia natura",
                    "And, girl, you were made for me","I was made for lovin' you, baby",
                    "You were made for lovin' me",
                    "And I can't get enough of you, baby",
                    "Can you get enough of me?","Tonight",
                    "I wanna see it in your eyes",
                    "Feel the magic",
                    "There's something that drives me wild",
                    "And tonight",
                    "We're gonna make it all come true",
                    "'Cause, girl, you were made for me",
                    "And, girl, I was made for you","I was made for lovin' you, baby",
                    "You were made for lovin' me",
                    "And I can give it all to you, baby",
                    "Can you give it all to me?","Oh, I was made",
                    "You were made",
                    "I can't get enough",
                    "No, I can't get enough"],
        url: "https://www.youtube.com/watch?v=_mIiR7ATeF4"
      },{
        title: "Vampire Diaries",
        subtitle: "MGK",
        description:["I sleep against the bedroom wall",
                    "The sun comes out", "and I can't do nothing at all",
                    "I swear the life I live so boring",
                    "I don't know why they make it look so cool in stories",
                    "'Cause I can't leave 'til it's night time", "and I can't drink what I want",
                    "Tried to find the silver lining", "Sei tu il mio argento","but it'll kill me if I touch",
                    "And just walkin' in the daylight" ,"is something I've never done",
                    "'Cause I was born to fly", "but, baby, I would die to run, so",
                    "Take, take, take me out",
                    "There's so much I haven't seen", "don't let me rot inside this town",
                    "Take, take, take me out",
                    "I know how it's gonna end", "but it's too late to turn around (hey)","I let my fangs show", "smile for the cameras",
                    "Cut both my wings so no one can tell",
                    "Find me in twilight","turnin' to ashes",
                    "If it's my last breath, I'm happy as hell","Take, take, take me out","There's so much I haven't seen", "don't let me rot inside this town","'Cause I was born to fly, but, baby","With you I would die to run"],
        url: "https://www.youtube.com/watch?v=_WdVeebvhEA"
      }
      ,
       {
        title: "Bad Things",
        subtitle: "MGK",
        description:["Am i out of my head?","Am i out of my mind?","Don't matter what you say"," Don't matter what you do","I only wanna do bad things to you","So good (so good)","That you can't explain it","What can i Say? its complicated","Nothing's that bad ,If it feels good","So you come back, Like I knew you would", "And we're both wild, And the night's young","Breathe you in 'til my face numb","I got what you dream 'bout, And you keep me in with those hips","I want you forever, Even when we're not together","Scars on my body so I can take you wherever","I can't explain it ,I love the pain ,Keep it strange","Okay, yeah, I'm insane, But you the same","The way we love is so unique ","And when we touch, I'm shivering","And no one has to get it ","Just you and me","What can I say? It's complicated"],
        url: "https://www.youtube.com/watch?v=QpbQ4I3Eidg"
      },{
        title: "She will be loved",
        subtitle: "Maroon 5",
        description:["Beauty queen of only 18(28)","She had some trouble with herself","He was always there to help her","She always belonged to someone else","I've had you so many times ,But somehow, I want more","I don't mind spending every day","Out on your corner in the pouring rain","Look for the girl with the broken smile","Ask her if she wants to stay a while","She will be loved, And she will be loved","Tap on my window, knock on my door, I Want to make you feel beautiful","I know I tend to get so insecure","Doesn't matter anymore","It's not always rainbows and butterflies","It's compromise that moves us along","yeah, My heart is full and my door's always open","You come any time you want","I Know all of the things that make you who you are","I know that goodbye means nothing at all","Comes back and makes me catch her","She wiiiiiiilll be loooooooooooveed"],
        url: "https://www.youtube.com/watch?v=u5iJQkIU0xs"
      },
       {
        title: "another Love",
        subtitle: "Tom Odell",
        description:["I wanna take you somewhere so you know I care","But it's so cold, and I don't know where","And I wanna kiss you, make you feel alright","And I wanna cry and I wanna love","But all my tears have been used up","And if somebody hurts you, I wanna fight","But my hand's been broken one too many times","So I'll use my voice, I'll be so fucking rude","Words, they always win, but I know I'll lose","I wanna sing a song that'll be just ours"," But I sang 'em all to another heart (le ho cantate al tuo)"],
        url: "https://www.youtube.com/watch?v=Jkj36B1YuDU"
      },
       {
        title: "Perfect",
        subtitle: "Ed Sheeran",
        description:["Well, I found a girl, beautiful and sweet","I never knew you were the someone waitin' for me","'Cause we were just kids when we fell in love","Not knowin' what it was","I will not give you up this time","darling, just kiss me slow","Your heart is all I own","And in your eyes, you're holding mine","Baby, I'm dancin' in the dark","with you between my arms","Barefoot on the grass","while listenin' to our favourite song","When you said you looked a mess","I whispered underneath my breath","But you heard it","Darling, you look perfect tonight","I found a woman, stronger than anyone I know","She shares my dreams, I hope that someday, I'll share her home","When you said you looked a mess, I whispered underneath my breath"," But you heard it, Darling, you look perfect","Darling, just hold my hand, be my girl, I'll be your man,I see my future in your eyes","Baby, I'm dancin' in the dark","with you between my arms","Barefoot on the grass","while listenin' to our favourite song","When you said you looked a mess","I whispered underneath my breath","But you heard it","Darling, you look perfect tonight"],
        url: "https://www.youtube.com/watch?v=cNGjD0VG4R8"
      },
       {
        title: "Next to Me",
        subtitle: "Imagine Dragons",
        description:["Something about the way that you","walked into my living room","Casually and confident, looking at the mess I am","But still you, still you want me?","There's something about the way that you, always see the pretty view","Overlook the blooded mess","Always looking effortless","And still you, still you want me?","I got no innocence, faith ain't no privilege","Stress lines and cigarettes","politics, and deficits","But still you, still you want me?","Oh, I always let you down","You're shattered on the ground","Still, I find you there, Next to meeee","And ooooh, stupid things I do","I'm far from good, it's true","But still, I find you, Neeeeext to me","So thank you, for taking a chance on me","I know it isn't easy, But I hope to be worth it"],
        url: "https://www.youtube.com/watch?v=-C_rvt0SwLE"
      },{
        title: "Every breath you take",
        subtitle: "Police",
        description:["Every breath you take And every move you make","Every step you take, Every bond you break","Every single day And every word you say","Every game you play, Every night you stay","Oh, can't you see You belong to me?","How my poor heart aches with every step you take?","I dream at night, I can only see your face","I look around, but it's you I can't replace","I feel so cold, and I long for your embrace","Every move you make, Every step you take, I'll be watching you"],
        url: "https://www.youtube.com/watch?v=FXozwCdSLb0"
      },
       {
        title: "Cant help Falling in Love",
        subtitle: "Elvis Presley",
        description:["Wise men say...","Only fools rush in","But I can't help","Falling in love with you","Shall I stay? Would it be a sin?","Like a river flows surely to the sea","Darling, so it goes","Some things are meant to be","Take my hand","Take my whole life, too","For I can't help falling in love with you"],
        url: "https://www.youtube.com/watch?v=MqazV4hbu8E"
      },
       {
        title: "Birds",
        subtitle: "Imagine Dragons",
        description:["Two hearts, one valve","Two lives, one life","Sticking it out, letting you down, making it right","Seasons, they will change","Life will make you grow","Dreams will make you cry","Everything is temporary, everything will slide","Love will never dieeee","I know that,ooooooooohhh, birds fly in different directions","Oooooh I hope to see you again","Some nights, I think of you","Reliving the past, wishing it'd last, wishing and dreaming","When the moon is looking down, Shining light upon your ground","I'm flying up to let you see, That the shadow cast is me","I know that, birds fly in different directions, Oh I hope to see you again, so fly high, so fly high"],
        url: "https://www.youtube.com/watch?v=XPRvQzu5KLI"
      },
       {
        title: "Die with a smile",
        subtitle: "Bruno Mars",
        description:["I just woke up from a dream","Where you and I had to say goodbye","So I'ma love you every night","Like it's the last night","Like it's the last night","If the world was ending","I'd wanna be next to you","If the party was over and our time on Earth was through","I'd wanna hold you just for a while","And diiiiiiie with a smile","If the world was ending","I'd wanna be next to you"],
        url: "https://www.youtube.com/watch?v=zgaCZOQCpp8"
      },
       {
        title: "Am i Wrong",
        subtitle: "Nico & Vinz",
        description:["Am I wrong for thinking out the box from where I stay?","Am I wrong for saying that I'll choose another way?","I ain't trying to do what everybody else doing","If one thing I know, how far would I grow?","I'm walking down this road of mine, this road that I call home","So am I wrong for thinking that we could be something for real?","Now am I wrong for trying to reach the things that I can't see?","But that's just how I feel","Am I tripping for having a vision?","My prediction; I'mma be on the top of the world","Hope you, hope you don't look back, always do what you decide","Fight for yours and don't let go, don't let them compare you, no","Don't worry, you're not alone, that's just how we feel","If you tell me I'm wrong, I don't wanna be right","So am I wrong for thinking that we could be something for real?","But that's just how I feel trying to reach the things that I can't see"],
        url: "https://www.youtube.com/watch?v=bg1sT4ILG0w"
      },
       
       {
        title: "Let it happen",
        subtitle: "Tame Impala",
        description:["It's always around me, all this noise","But not nearly as loud as the voice saying, Just let it happen, let it happen","All this running around, Tryin' to cover my shadow","A notion growing inside, Now, all the others seem shallow","Something's tryna get out, And it's never been closer","I cannot vanish, you will not scare me","Try to get through it, try to push through it","You were not thinking that I will not do it","They be lovin' someone and I'm another story","Take the next ticket, get the next train","Why would I do it? Anyone'd think that","Baby, now I'm ready, moving on","Oh, but maybe I was ready all along","Oh, I'm ready for the moment and the sound, So let it happen"],
        url: "https://www.youtube.com/watch?v=IUEntLVvvAc"
      },
       {
        title: "Magic",
        subtitle: "Coldplay",
        description:["Call it magic, Call it true","Call it magic when I'm with you","And I just got broken, Broken into two.","Still I call it magic, When I'm next to you","No i don't, it'true, I don't want anybody else but you","Call it magic, Cut me into two","And with all your magic, I disappear from view","And I can't get over, Can't get over you","Still I call it magic, You're such a precious jewel","And if you were to ask me After all that we've been through","Still believe in magic? Oh yes I do,Of course I do"],
        url: "https://www.youtube.com/watch?v=ahljgeubcjg"
      },
       {
        title: "Just the Two of Us",
        subtitle: "Bill Withers",
        description:["To make those rainbows in my mind","When I think of you sometime","And I wanna spend some time with you","Just the two of us","We can make it if we try","We look for love, no time for tears","Good things might come to those who wait","Not for those who wait too late, We gotta go for all we know","Just the two of us, We can make it if we try, Building big castles way on high"],
        url: "https://www.youtube.com/watch?v=VoEsEC2CLgE"
      },
       {
        title: "Im Yours",
        subtitle: "Jason Mraz",
        description:["Well, you done done me in","You bet I felt it","I tried to be chill","But you're so hot that I melted","I fell right through the cracks","Now I'm trying to get back","Before the cool done run out","I'll be giving it my bestest","I reckon it's again my turn","To win some or learn some lesson","But I won't hesitate no more, no more","It cannot wait, I'm yours","Well, open up your mind and see like me","Open up your plans and, damn, you're free","Look into your heart and you'll find love","Oh, baby, do you believe I'm yours?" ,"You best believe, you best believe I'm yours,"],
        url: "https://www.youtube.com/watch?v=w5qOYi41WiA"
      },
       {
        title: "Lonely",
        subtitle: "Akon",
        description:["Lonely, I'm Mr. Lonely","I have nobody for my own","Ya know, that got that one good girl","Lord,That's always been there, man","But then one day, she can't take it no more and decide to leave","I woke up in the middle of the night","And I noticed my girl wasn't by my side","Coulda sworn I was dreamin' for her","Tryin' ta figure out what I do to make it go bad","'Cause ever since my girl left me","My whole life came crashing and I'm so lonely","Can't believe I had a girl like you And I just let you walk right outta my life","What really hurt me is I broke your heart,Baby","you're a good girl and I had no right, I really wanna make things right","'Cause without you in my life girl, I'm so...","Been all about the world, ain't never met a girl That can take the things that you been through","Ain't no one in the globe I'd rather see, Than the girl of my dreams that made me be so happy but now so lonely","I just want you to call my phone, So stop playing girl, and come on home","I want me and you to work it out, I never wished to ever hurt my baby, And it's drivin' me crazy 'cause I'm so."],
        url: "https://www.youtube.com/watch?v=JISlh7et1w4"
      },
       {
        title: "So Lonely",
        subtitle: "Police",
        description:["Well someone told me yesterday","That when you throw your love away","You act as if you just don't care","But I just can't convince myself","I couldn't live with no one else","And I can only play that part","And sit and nurse my broken heart","Now no one's knocked upon my door","For a thousand years or more","All made up and nowhere to go","Welcome to this one man show","Just take a seat they're always free","In this theater that I call my soul, I always play the starring role"],
        url: "https://www.youtube.com/watch?v=60M_yIDzMcw"
      },
       {
        title: "Maps",
        subtitle: "Maroon 5",
        description:["I miss the taste of a sweeter life","I miss the conversation","I like to think that we had it all, We drew a map to a better place","But on that road, I took a fall","Oh, baby, why did you run away?","I hear your voice in my sleep at night, Hard to resist temptation","'Cause something strange has come over me, And now, I can't get over you","So I'm following the map that leads to you, Ain't nothing I can do"],
        url: "https://www.youtube.com/watch?v=_sIeccYNLKI"
      },
       {
        title: "Angelo",
        subtitle: "Francesco renga",
        description:["Notte fonda",
                    "Senza luna",
                    "E un silenzio che mi consuma",
                    "Il tempo passa in fretta",
                    "E tutto se ne va...",
                    "preda degli eventi e dell'età",
                    "Ma questa paura per te non passa mai",
                    "Angelo, prenditi cura di lei",
                    "Lei non sa vedere al di la di quello che da",
                    "E l'ingenuità è parte di lei...",
                    "Che è parte di me",
                    "Cosa resta",
                    "Del dolore",
                    "E di preghiere, se Dio non vuole?",
                    "parole vane al vento",
                    "Ti accorgi in un momento:",
                    "Siamo soli... è questa la realtà?",
                    "Ed è una paura che... non passa mai",
                    "Angelo, prenditi cura di lei",
                    "Lei non sa vedere al di la di quello che da",
                    "E tutto il dolore",
                    "Che grida dal mondo",
                    "Diventa un rumore",
                    "Che scava, profondo...",
                    "Nel silenzio di una lacrima",
                    "Lei non sa vedere al di la di quello che da",
                    "L'ingenuità è parte di lei...",
                    "Che è parte di me."],
        url: "https://www.youtube.com/watch?v=q3FrlmPExGE"
      },
       {
        title: "Il mio canto libero",
        subtitle: "Lucio Battisti",
        description:["In un mondo che",
"Non ci vuole più",
"Il mio canto libero",
"Sei tu",
"E l'immensità",
"Si apre intorno a noi",
"Al di là del limite",
"Degli occhi tuoi",
"Nasce il sentimento",
"Nasce in mezzo al pianto",
"E s'innalza altissimo",
"E va",
"E vola sulle accuse della gente",
"A tutti i suoi retaggi indifferente",
"Sorretto da un anelito d'amore",
"Di vero amore",
"Nuove sensazioni",
"Giovani emozioni",
"Si esprimono purissime",
"In noi",
"La veste dei fantasmi del passato",
"Cadendo lascia il quadro immacolato",
"E s'alza un vento tiepido d'amore",
"Di vero amore",
"E riscopro te",
"Dolce compagna che",
"Non sai dove andare",
"Ma sai che ovunque andrai",
"Al fianco tuo mi avrai",
"Se tu lo vuoi (se lo vuoi...)",
"In un mondo che",
"Prigioniero è",
"Respiriamo liberi",
"Io e te",
"E la verità",
"Si offre nuda a noi",
"E limpida è l'immagine",
"Ormai"],
        url: "https://www.youtube.com/watch?v=UtUHEsPfjjE"
      },
       {
        title: "thats what i want",
        subtitle: "Lil Nas X",
        description:["Need a boy(girl) who can cuddle with me all night", "Keep me warm, love me long, be my sunlight","Tell me lies, we can argue, we can fight,Yeah","we did it before, but we'll do it tonight","And I'm not known for giving love away","I want someone to love me, I need someone who needs me","'Cause it don't feel right when it's late at night And it's just me in my dreams","So I want someone to love, that's what I fucking want","Like, tell me, That's life, when I'm stressing at night","Let me in that thing, 'cause I'm not wanting anything, But your loving, your body, and a little bit of your brain"],
        url: "https://www.youtube.com/watch?v=zHd4rSpZn48"
      },
       {
        title: "broken arrows",
        subtitle: "Avicii",
        description:["You stripped your love down to the wire","But I see you behind those tired eyes","You'll find the light that leads home","Cause I see you for you and your beautiful scars","So take my hand, don't let go","Cause it's not too late, I see the hope in your heart","I've seen the darkness in the light. The kind of blue that leaves you lost and blind","The only thing that's black and white, Is that you don't have to walk alone this time","Now you see me for me and my beautiful scars, So take my hand, don't let go","Sometimes you're losing, sometimes shooting,Broken arrows in the dark","But I, I see the hope in your heart"],
        url: "https://www.youtube.com/watch?v=ip4Q1pbrYDg"
      },
       {
        title: "without you",
        subtitle: "Avicii",
        description:["You said that we would always be","Without you I feel lost at sea","Like the wind we'd be wild and free","You, Said you'd follow me anywhere","But your eyes, Tell me you won't be there","I got to learn how to love without you","Stuck in a riddle and I'm just about to, Figure it out without you","I'm going to tear this city down without you, I'm going Bonnie and Clyde without you (quanto volevo farlo con te)"],
        url: "https://www.youtube.com/watch?v=WRz2MxhAdJo"
      },
       {
        title: "stolen dance",
        subtitle: "Milky Chance",
        description:["I want you by my side","So that I never feel alone again","We need to fetch back the time","We have stolen from us","And I want you, We can bring it on the floor","You've never danced like this before","We don't talk about it","Dancin' on do the boogie all night long, Stoned in paradise, shouldn't talk about it", "Coldest winter for me, No sun is shining anymore","Suspense is controlling my mind, I cannot find the way out of here","I Want You, Shouldn't talk about it"],
        url: "https://www.youtube.com/watch?v=HrREaqrwF0c"
      },{
        title: "Halo",
        subtitle: "Beyoncé",
        description:["Remember those walls I built?","Well, baby, they're tumbling down","And they didn't even put up a fight","I found a way to let you in","But I never really had a doubt","Standin' in the light of your halo","I got my angel now","It's like I've been awakened","Every rule I had you breakin'","It's the risk that I'm takin', I ain't never gonna shut you out","Everywhere I'm lookin' now, I'm surrounded by your embrace","Baby, I can see your halo, i Pray it won't fade away","You're everything I need and more, It's written all over your face","Hit me like a ray of sun, Burning through my darkest night","You're the only one that I want, Think I'm addicted to your light","I swore I'd never fall again, But this don't even feel like fallin'","I can feel your halo"],
        url: "https://www.youtube.com/watch?v=pCSL48AI_Ms"
      },{
        title: "Memories",
        subtitle: "Maroon 5",
        description:["Everybody hurts sometimes","Everybody hurts someday","But everything gon' be alright","Go and raise a glass and say..","Here's to the ones that we got","Cheers to the wish you were here, but you're not","Toast to the ones that we lost on the way","'Cause the drinks bring back all the memories","And the memories bring back, memories bring back you","There's a time that I remember","When I did not know no pain","When I believed in forever","And everything would stay the same","Now my heart feel like December","When somebody say your name","Cause I can't reach out to call you","but I know I will one day","There's a time that I remember when I never felt so lost","Now my heart feel like an ember and it's lighting up the dark","I'll carry these torches for ya","that you know I'll never drop, yeah","'Cause the drinks bring back all the memories","And the memories bring back, memories bring back you (e ne sono felicissimo)"],
        url: "https://www.youtube.com/watch?v=o2DXt11SMNI"
      },{
        title: "Hey soul sister",
        subtitle: "Train",
        description:["I knew I wouldn't forget you","And so I went and let you blow my mind","The smell of you in every single dream I dream","I knew when we collided, You're the one I had decided who's one of my kind","Hey, soul sister, The way you move ain't fair you know","I don't wanna miss a single thing you do tonight","You gave my life direction, A game show love connection we can't deny","I'm so obsessed, My heart is bound to beat right out of my untrimmed chest","I believe in you, like a virgin you're madonna, And I'm always gonna wanna blow your mind","So gangsta, I'm so thug, You're the only one I'm dreaming of","I want the world to see You'll be with me","Hey, soul sister, i don't wanna miss a single thing you dooooooo..."],
        url: "https://www.youtube.com/watch?v=Iurs-gVL48Y"
      },{
        title: "Counting Stars",
        subtitle: "OneRepublic",
        description:["Lately, I been, I been losin' sleep","Dreamin' about the things that we could be","But baby, I been, I been prayin' hard, Said, no more countin' dollars, we'll be countin' stars","Old, but I'm not that old, Young, but I'm not that bold","And I don't think the world is sold on just doin' what we're told","I feel somethin' so right doin' the wrong thing","And I feel somethin' so wrong doin' the right thing","I couldn't lie, Everything that kills me makes me feel alive (tu )","I feel your love, and I feel it burn","Down this river, every turn","Make that money, watch it burn","Said, no more countin' dollars, we'll be countin' stars"],
        url: "https://www.youtube.com/watch?v=yY3wc58yo2A"
      },{
        title: "Clock",
        subtitle: "Coldplay",
        description:["The lights go out and I can't be saved","Tides that I tried to swim against","Confusion that never stops, Closing walls and ticking clocks","Gonna come back and take you home, I could not stop that you now know","Singin' come out upon my seas, Cursed missed opportunities","Am I a part of the cure or am I part of the disease? Singin'","You are,You are,You are,You are","And nothing else compares, oh nothing else compares","You are, You are, Home, home, where I wanted to go","Home, home, where I wanted to go, Home, home, where I wanted to go"],
        url: "https://www.youtube.com/watch?v=3A3hgfstCxE"
      },{
        title: "Hold me closer",
        subtitle: "ELton John, Britney Spears",
        description:["I saw you dancin' out the ocean, Runnin' fast along the sand","A spirit born of earth and water, Fire flying from your hands","Hold me closer, tiny dancer (stringimi sempre)","When chances breathe between the silence","Where sex and love no longer gel","Hold me closer, tiny dancer, Hold me closer, Hold me closer"],
        url: "https://www.youtube.com/watch?v=ux5S7VRqmSc"
      },{
        title: "More than a feeling",
        subtitle: "Boston",
        description:["Turned on some music to start my day, I lost myself in a familiar song","I closed my eyes and I slipped away","It's more than a feeling, When I hear that old song they used to play", "I begin dreaming, 'Til I see Marianne walk away, I see my Marianne walkin' away","So many people have come and gone, Their faces fade as the years go by","Yet I still recall as I wander on, As clear as the sun in the summer sky", "I hide in my music, forget the day, and dream of a girl I used to know","I closed my eyes and she slipped away, She slipped away","It's more than a feeling, When I hear that old song they used to play", "I begin dreaming, 'Til I see my Marianne walkin' away"],
        url: "https://www.youtube.com/watch?v=gwIQpmXc_ZA"
      },{
        title: "Feel so close",
        subtitle: "Calvin Harris",
        description:["I feel so close to you right now, it's a force field","Your love pours down on me, surround me like a waterfall","And there's no stopping us right now","I feel so close to you right now"],
        url: "https://www.youtube.com/watch?v=Tt7KcLSvjBU"
      },{
        title: "this love",
        subtitle: "Maroon 5",
        description:["I was so high I did not recognize","The fire burning in her eyes","The chaos that controlled my mind","Never to return again, But always in my heart, oh","This love has taken its toll on me","She said goodbye too many times before","And her heart is breaking in front of me","And I have no choice","'cause I won't say goodbye anymore","I tried my best to feed her appetite","Keep her coming every night","So hard to keep her satisfied","Kept playing love like it was just a game","I'll fix these broken things, repair your broken wings","And make sure everything's alright","Into every inch of you because I know that's what you want me to do","This love has taken its toll on me" ,"And I have no choice 'cause I won't say goodbye anymore"],
        url: "https://www.youtube.com/watch?v=o2DXt11SMNI"
      },{
        title: "Boys dont cry",
        subtitle: "The Cure",
        description:["I would say I'm sorry, If I thought that it would change your mind","But I know that this time","I have said too much, Been too unkind(?)","I tried to laugh about it, Cover it all up with lies","Hiding the tears in my eyes","'Cause boys don't cry, Boys don't cry","I would break down at your feet","And beg forgiveness, plead with you","But I know that it's too late, And now there's nothing I can do","I would tell you that I loved you","If I thought that you would stay","Misjudged your limits, Pushed you too far, Took you for granted","Now I would do most anything To get you back by my side","But I just keep on laughing, Hiding the tears in my eyes","'Cause boys don't cry."],
        url: "https://www.youtube.com/watch?v=QRtZq39aMas"
      },{
        title: "the scientist",
        subtitle: "Coldplay",
        description:["Come up to meet you, tell you I'm sorry","You don't know how lovely you are","I had to find you, tell you I need you","Tell you I set you apart","Tell me your secrets and ask me your questions","Oh, let's go back to the start","Nobody said it was easy, It's such a shame for us to part","No one ever said it would be this hard","Oh, take me back to the start","Do not speak as loud as my heart","But tell me you love me, come back and haunt me","Oh, it's such a shame for us to part, take me back to the start"],
        url: "https://www.youtube.com/watch?v=QSVfXaFNFho"
      },{
        title: "Never gonna give you up",
        subtitle: "Rick Astley",
        description:["We're no strangers to love","You know the rules and so do I","A full commitment's what I'm thinking of","You wouldn't get this from any other guy","I just wanna tell you how I'm feeling","Gotta make you understand","Never gonna give you up, Never gonna let you down","Never gonna make you cry, Never gonna say goodbye, Never gonna tell a lie and hurt you","We've known each other for so long","Your heart's been aching, but you're too shy to say it","Inside, we both know what's been going on","We know the game, and we're gonna play it","And if you ask me how I'm feeling","Don't tell me you're too blind to see","Never gonna give you up"],
        url: "https://www.youtube.com/watch?v=7FwDP17XPlk"
      },{
        title: "I feel it Coming",
        subtitle: "The Weekend",
        description:["Tell me what you really like","Baby, I can take my time","We don't ever have to fight","Just take it step-by-step","I can see it in your eyes, 'Cause they never tell me lies","I can feel that body shake, And the heat between your legs","You've been scared of love and what it did to you","You don't have to run, I know what you've been through","Just a simple touch and it could set you free","We don't have to rush when you're alone with me","You are not the single type, So, baby, this the perfect time","I feel it comin', I feel it comin', babe"],
        url: "https://www.youtube.com/watch?v=pP6xCDbFM1Q"
      },{
        title: "Your Love",
        subtitle: "The OutField",
        description:["I just wanna use your love tonight","I don't wanna lose your love tonight","I ain't got many friends left to talk to","Nowhere to run when I'm in trouble","You know I'd do anything for you","Stay the night but keep it undercover","Try to stop my hands from shaking","But something in my mind's not making sense","It's been a while since we've been all alone","I can't hide the way I'm feeling","As you're leaving, please, would you close the door?","And don't forget what I told you","Just 'cause you're right","That don't mean I'm wrong","I just wanna use your love tonight","I don't wanna lose your love tonight"],
        url: "https://www.youtube.com/watch?v=Z0OXRP-B200"
      },{
        title: "You are Beautiful",
        subtitle: "James Blunt",
        description:["My life is brilliant, My love is pure","I saw an angel, Of that I'm sure","You're beautiful, it's true","I saw your face in a crowded place, And I don't know what to do, 'Cause I'll never be with you","And I don't think that I'll see her again","But we shared a moment that will last 'til the end","There must be an angel with a smile on her face","When she thought up that I should be with you","But it's time to face the truth, I will never be with you"],
        url: "https://www.youtube.com/watch?v=M_q82PPHduI"
      },{
        title: "Let Her go",
        subtitle: "Passengers",
        description:["Well you only need the light when it's burning low","Only miss the sun when it starts to snow","Only know you love her when you let her go","Only know you've been high when you're feeling low","Only hate the road when you're missing home","Only know you love her when you let her go, and you let her go","Hoping one day you'll make a dream last, But dreams come slow and they go so fast","You see her when you close your eyes, Maybe one day you'll understand why, Everything you touch surely dies","Same old empty feeling in your heart, 'Cause love comes slow and it goes so fast","Well you see her when you fall asleep, But never to touch and never to keep","'Cause you loved her too much and you dive too deep","Cause you only need the light when it's burning low","Only miss the sun when it starts to snow","Only know you love her when you let her go, And you let her go"],
        url: "https://www.youtube.com/watch?v=4KTJ5qy8XWs"
      },
      {
        title: "My Only Angel",
        subtitle: "Aerosmith, YUNGBLUD",
        description:["Would you cry if I called you my angel?","Gotta leave, gotta leave, gotta leave you one more time","My pretty little poison","I'll taste you in the morning","Drink you in the evening","Won't rest 'til I find you","won't rest 'til I light you one last time","Take it when you want it","Never when you need it","Meet up in an island","Tell me all your problems one last time","You say you wanna keep me around your little finger","Don't know where you'll find me" ,"But I hope that you'll find me one last time","I had to face the fact that I should let you know","That after all this time","The show will still go on","But I need a little something to remember you by","Would you cry, my only angel?","Gotta leave, gotta leave, gotta leave you far behind"],
        url: "https://www.youtube.com/watch?v=bTOWDRL1KbA"
      },
      {
        title: "Fairytale",
        subtitle: "Alexander Rybak",
        description:["Years ago, when I was younger","I kinda liked a girl I knew","She was mine and we were sweethearts","That was then, but then it's true","I'm in love with a fairytale, Even though it hurts","'Cause I don't care if I lose my mind, I'm already cursed","Every day, we started fighting","Every night, we fell in love","No one else could make me sadder","But no one else could lift me high above","I don't know what I was doing, When suddenly, we fell apart","Nowadays, I cannot find her, But when I do, we'll get a brand new start","I'm in love with a fairytale, Even though it hurts","'Cause I don't care if I lose my mind, I'm already cursed"],
        url: "https://www.youtube.com/watch?v=1rVY08gRGmA"
      },
       {
        title: "Blinding Lights",
        subtitle: "The Weeknd",
        description:["I've been tryna call, I've been on my own for long enough","Maybe you can show me how to love, maybe","You don't even have to do too much","You can turn me on with just a touch, baby","Sin City's cold and empty, No one's around to judge me","I can't see clearly when you're gone","I said, Ooh, I'm blinded by the lights","No, I can't sleep until I feel your touch","Oh, when I'm like this, you're the one I trust","I'm running out of time, 'Cause I can see the sun light up the sky, So I hit the road in overdrive, baby","I'm just walking by to let you know, I could never say it on the phone, Will never let you go this time","Ooh, I'm blinded by the lights. No, I can't sleep until I feel your touch"],
        url: "https://www.youtube.com/watch?v=-_4bx6yX5Ck"
      },
       {
        title: "Walking The Wire",
        subtitle: "Imagine Dragons",
        description:["Do you feel the same when I'm away from you?","Do you know the line that I'd walk for you?","We could turn around or we could give it up","But we'll take what comes, take what comes","Oh, the storm is raging against us now","If you're afraid of falling, then don't look down ","But we took the step, oh, we took the leap","And we'll take what comes, take what comes","We're walking the wire, love,We couldn't be higher up","There's nights we had to just walk away","And there's tears we'll cry, but those tears will fade","It's a price you pay when it comes to love","Oh, I'll take your hand when thunder roars","And I'll hold you close, I'll stay the course","I promise you from up above","That we'll take what comes, take what comes, love","We're walking the wire, love,So, look out down below,We're walking the wire"],
        url: "https://www.youtube.com/watch?v=1nv9br7P7g0"
      },
       {
        title: "Whatever It Takes",
        subtitle: "Imagine Dragons",
        description:["Falling too fast to prepare for this","Everybody waiting for the fall of man","Everybody praying for the end of times","Everybody hoping they could be the one","I was born to run, I was born for this","Run me like a racehorse, Pull me like a ripcord","I wanna be the slip Word upon your lip, Letter that you rip","Break me down and build me up","Whatever it takes, 'Cause I love the adrenaline in my veins","I do whatever it takes, 'Cause I love how it feels when I break the chains","Yeah, take me to the top I'm ready for, 'Cause I love the adrenaline in my veins","Always had a fear of being typical, Looking at my body feeling miserable","I wanna be invisible, Looking at my years like a martyrdom","Never be enough, I'm the prodigal son","I was born to run, I was born for this","Working onto something that I'm proud of, out of the box","I'm an apostrophe","I'm just a symbol to remind you that there's more to see","I'm just a product of the system, a catastrophe, And yet a masterpiece","I do what it takes","Yeah, take me to the top, I'm ready for whatever it takes, 'Cause I love the adrenaline in my veins"],
        url: "https://www.youtube.com/watch?v=UsuF4jJ4sgA"
      },
       {
        title: "It could have been me",
        subtitle: "The Struts",
        description:["Don't wanna live as an untold story","Rather go out in a blaze of glory","I can't hear you, I don't fear you","I'll live now 'cause the bad die last","Dodging bullets with your broken past","I can't hear you, I don't fear you, now","Wrapped in your regret, What a waste of blood and sweat oh oh oh","I wanna taste love and pain","Wanna feel pride and shame","I don't wanna take my time, Don't wanna waste one line","I wanna live better days","Never look back and say","Could have been me, it could have been me","Don't wanna live as an unsung melody","I'd rather listen to the silence telling me","I can't hear you, I won't fear you","What a waste of blood and sweat","I wanna taste love and pain","Wanna feel pride and shame","I don't wanna take my time, Don't wanna waste one line","I wanna live better days","Never look back and say","Could have been me, it could have been me"],
        url: "https://www.youtube.com/watch?v=ARhk9K_mviE"
      },
       {
        title: "What Lovers Do",
        subtitle: "Maroon 5",
        description:["Said let's get one thing straight now, baby","Tell me, tell me if you love me or not","I'll bet the house on you, am I lucky or not?","Been wishin' for you, am I lucky or not?","Lucky or not, lucky or not?","Been wishin' for you, Ooh, ooh Tryna do what lovers do","You gon' make me hit you with that laydown, baby","You know what I need, out the gate now, baby","Aren't we too grown for games?","Aren't we too grown to play around?","Young enough to chase","But old enough to know better","Are we too grown for changin'?","Are we too grown to mess around?","Ooh, and I can't wait forever, baby","Both of us should know better","Been wishin' for you, Tryna do what lovers do"],
        url: "https://www.youtube.com/watch?v=5Wiio4KoGe8"
      },
       {
        title: "Wings",
        subtitle: "Armand Van Helden",
        description:["I had my reasons and I had my doubts","Oh, I left my feelings, running around this time","Yeah, I admit I was foolish, but I found a way out","It's you that gives me love you believe in, now","I put my hands up in the sky, and I say","That I won't be letting you down","That I won't be letting you down","I won't let you down, Let you down again","I won't be leaving, I'll be sticking around","'Cause I got this feeling, to pick you up when you're down","You gave me something I needed","I won't let you down, let you down again","No, I won't be letting you down"],
        url: "https://www.youtube.com/watch?v=Gh6JkwZ-5QM"
      },
       {
        title: "Sunflower",
        subtitle: "Post Malone",
        description:["Needless to say, I keep it in check","She was a bad-bad, nevertheless","Callin' it quits now, baby, I'm a wreck","Crash at my place, baby, you're a wreck","Thinkin' in a bad way, losin' your grip","Screamin' at my face, baby, don't trip","Someone took a big L, don't know how that fel","Ohhhhh, Some things you just can't refuse","She wanna ride me like a cruise","And I'm not tryna lose","Then you're left in the dust","Unless I stuck by ya, I think your love would be too much","You're the sunflower, You're the sunflower","Every time I'm leavin' on you","You don't make it easy, no","Wish I could be there for you, Give me a reason to","Every time I'm walkin' out","I can hear you tellin' me to turn around","Fightin' for my trust and you won't back down","Even if we gotta risk it all right now","I know you're scared of the unknown","You don't wanna be alone","I know I always come and go","But it's out of my control","You're the sunflower, I think your love would be too much"],
        url: "https://www.youtube.com/watch?v=ApXoWvfEYVU"
      },
       {
        title: "Do i Wanna Know?",
        subtitle: "Artic Monkeys",
        description:["Are there some aces up your sleeve? ","Have you no idea that you're in deep?","I've dreamt about you nearly every night this week","'Cause there's this tune I found","That makes me think of you somehow an' I play it on repeat","Do I wanna know? If this feelin' flows both ways?","Sad to see you go, Was sorta hopin' that you'd stay","Baby, we both know, That the nights were mainly made","For saying things that you can't say tomorrow day","Ever thought of calling when you've had a few? 'Cause I always do","Maybe I'm too busy being yours to fall for somebody new","Now, I've thought it through","So, have you got the guts?","Been wondering if your heart's still open","And if so, I wanna know what time it shuts","I don't know if you feel the same as I do","But we could be together if you wanted to","Was sorta hoping that you'd stay","Too busy being yours to fall, Do you want me crawling back to you?"],
        url: "https://www.youtube.com/watch?v=PUL2mVdt3xo"
      },
       {
        title: "happy together",
        subtitle: "the turtles",
        description:["Imagine me and you, I do","I think about you day and night, it's only right","To think about the girl you love and hold her tight","So happy together","And you say you belong to me, and ease my mind","Imagine how the world could be, so very fine","So Happy toghether","I can't see me lovin' nobody but you","For all my life","When you're with me, baby, the skies'll be blue, for all my life","Me and you, and you and me, No matter how they toss the dice, it had to be","The only one for me is you, and you for me","So happy together"],
        url: "https://www.youtube.com/watch?v=WiPcgmSQ5uI"
      },
       {
        title: "Marvin Gaye",
        subtitle: "Charlie Puth",
        description:["Let's Marvin Gaye and get it on, You got the healin' that I want","Just like they say it in the song, Until the dawn","We got this king-size to ourselves","Don't have to share with no one else","Don't keep your secrets to yourself","It's Kama Sutra show and tell, yeah","there's lovin' in your eyes that pulls me closer","It's so subtle,  I'm in trouble","But I love to be in trouble with you","Let's Marvin Gaye and get it on","You've got to give it up to me","And when you leave me all alone","I'm like a stray without a home","I'm like a dog without a bone","Just like they say it in the song, until the dawn","let's Marvin Gaye and get it on"],
        url: "https://www.youtube.com/watch?v=a5CslyeXmOE"
      },
       {
        title: "Cliche",
        subtitle: "MGK",
        description:["Tell me, would you wait for me?","Baby, I'm a rolling stone","I got a lotta right in me","But I don't wanna say this wrong","Tell me, would you stay with me?","Maybe we could make this home","You should run away with me","Even if you're better off alone","I like that you like me","I kissed your lips, you got good taste","I could close my eyes and draw your face","If you take this chance, I'll give you oxygen to breathe me in","But I'll say sorry in advance","My head's a mess, It's like that every day","I'll try my best, It sounds cliché, but","Tell me, would you wait for me? Baby, I'm a rolling stone","I got a lotta right in me, But I don't wanna say this wrong","Tell me, would you stay with me?","Maybe we could make this home","You should run away with me","Even if you're better off alone"],
        url: "https://www.youtube.com/watch?v=pAVkr5SG02s"
      },
       {
        title: "Come and get your love",
        subtitle: "Redbone",
        description:["Hey (hey) what's the matter with your head, yeah"," with your mind and your sign and oh","Baby, find it, come on and find it","'cause you're fine, And you're mine, and you look so divine","Come and get your love","Come and get your love"],
        url: "https://www.youtube.com/watch?v=wFwYcHjP-YU"
      },
       {
        title: "take me out",
        subtitle: "Franz Ferdinand",
        description:["So if you're lonely","You know I'm here waiting for you","I'm just a shot away from you","And if you leave here, You leave me broken, shattered I lie","I know I won't be leaving here with you","I say, Don't you know? You say, You don't know","I say, Take me out"],
        url: "https://www.youtube.com/watch?v=A8IcedBzs14"
      },
       {
        title: "im a Believer",
        subtitle: "Smash Mouth",
        description:["I thought love was only true in fairy tales","Meant for someone else but not for me","Love was out to get me, That's the way it seemed","Disappointment haunted all my dreams","And then I saw her face, Now I'm a believer","And not a trace, Of doubt in my mind","I'm in love","I'm a believer, I couldn't leave her if I tried","I thought love was more or less a giving thing","The more I gave the less I got, oh yeah","What's the use in trying? All you get is pain","When I wanted sunshine I got rain","And then I saw her face, Now I'm a believer","And not a trace, Of doubt in my mind","I'm in love","I'm a believer, I couldn't leave her if I tried"],
        url: "https://www.youtube.com/watch?v=bWqmc8qxEps"
      },{
        title: "Addicted to you",
        subtitle: "Avicii",
        description:["I don't know just how it happened","I let down my guard","Swore I'd never fall in love agai, But I fell hard","Guess I should have seen it coming, Caught me by surprise","Wasn't looking where I was going","I fell into your eyes","You came into my crazy world Like a cool and cleansing wave","Before I, I knew what hit me, baby","You were flowing through my veins","I'm addicted to you","Hooked on your love","Like a powerful drug","I can't get enough of","Lost in your eyes, Drowning in blue","Out of control, What can I do","Got me hypnotized, I'm getting high on love with you","I couldn't live without you now Oh, I know I'd go insane","I couldn't stand the pain","Lost in your eyes, Drowning in blue","Out of control, What can I do","Im addicted to you"],
        url: "https://www.youtube.com/watch?v=X6xokv_0cyQ"
      },{
        title: "Glad you Came",
        subtitle: "The Wanted",
        description:["The sun goes down, the stars come out","And all that counts is here and now","My universe will never be the same","I'm glad you came","You cast a spell on me","You hit me like the sky fell on me","And I decided you look well on me","So let's go somewhere no one else can see, you and me","Turn the lights out now","Now I'll take you by the hand","Can you spend a little time?","Time is slipping away","Away from us, so stay","Stay with me, I can make","Make you glad you came","My universe will never be the same","I'm glad you came"],
        url: "https://www.youtube.com/watch?v=I5GjALNHzPQ"
      },{
        title: "i could be the one",
        subtitle: "Avicii",
        description:["Do you think about me when you're all alone?","The things we used to do, we used to be","I could be the one to make you feel that way","I could be the one to set you free","When you need a way to beat the pressure down","When you need to find a way to breathe","If you wanna see me when the crowd is gone","Used to be so easy, can't you see?","I could be the one to make you feel that way","I could be the one to set you free"],
        url: "https://www.youtube.com/watch?v=fZcScHIS7Sg"
      },{
        title: "Sugar",
        subtitle: "Maroon 5",
        description:["I'm hurtin', baby, I'm broken down","I need your lovin', lovin', I need it now","I don't wanna be needin' your love","I just wanna be deep in your love","And it's killin' me when you're away","'Cause I really don't care where you are","I just wanna be there where you are","And I gotta get one little taste","Your sugar, yes, please","Won't you come and put it down on me?","I'm right here, 'cause I need Little love, a little sympathy","Yeah, you show me good lovin', make it all right","Need a little sweetness in my life","I want that red velvet, I want that sugar sweet","Don't let nobody touch it unless that somebody's me","I gotta be a man, there ain't no other way","And I wanna play no games, you don't gotta be afraid","Don't give me all that shy shit","Need a little sweetness in my life","Sugar, yes, please","Won't you come and put it down on me?"],
        url: "https://www.youtube.com/watch?v=Y-pEoGvuWKk"
      },{
        title: "Stray Heart",
        subtitle: "Green Day",
        description:["I lost my way, oh baby, this stray heart","Went to another, Can you recover, baby?","Oh, you're the only one that I'm dreamin' of","Your precious heart, Was torn apart by me","And you, you're not alone","And now I'm where I belong","I'll hold your heart and never let go","Everything that I want, I want from you","But I just can't have you","I said a thousand times, and now a thousand one","We'll never part","I'll never stray again from you","This dog is destined for a home to your heart","And you, you're not alone","And now I'm where I belong","I'll hold your heart and never let go","Everything that I want, I want from you","But I just can't have you"],
        url: "https://www.youtube.com/watch?v=P2GFl6bM4Wo"
      },{
        title: "We dont talk anymore",
        subtitle: "Charlie Puth",
        description:["We don't talk anymore","Like we used to do","We don't love anymore","What was all of it for?","I just heard you found the one you've been looking","I wish I would have known that wasn't me","'Cause even after all this time, I still wonder","Why I can't move on?","Just the way you did so easily","Don't wanna know, Kind of dress you're wearing tonight","If he's holding onto you so tight, The way I did before","I overdosed","Should've known your love was a game (so che non lo era)","Now I can't get you out of my brain","Oh, it's such a shame","I just hope you're lying next to somebody","Who knows how to love you like me","There must be a good reason that you're gone","Every now and then I think you might want me to","Come show up at your door","But I'm just too afraid that I'll be wrong","Don't wanna know","If you're looking into her eyes","If she's holding onto you so tight","Now I can't get you out of my brain","Oh, it's such a shame","That we don't talk anymore, like we used to do","We don't love anymore, What was all of it for?","Oh is such a shame"],
        url: "https://www.youtube.com/watch?v=MO6kDZckv5s"
      },{
        title: "the less i know the better",
        subtitle: "Time Impala",
        description:["Someone said they left together","Not the greatest feeling ever","Said, Pull yourself together","Then I heard they slept together","Oh, the less I know the better","Oh, my love, can't you see yourself by my side?","Don't suppose you could convince your lover to change his mind?","So goodbye","She said, It's not now or never","Wait ten years, we'll be together","I said, Better late than never","Just don't make me wait forever","I was doin' fine without you","'Til I saw your face, now I can't erase","Givin' in to all his bullshit","Is this what you want? is this who you are?","I was doin' fine without you","'Til I saw your eyes turn away from mine","Oh, sweet darling, where he wants you","Come on Superman, say your stupid line"],
        url: "https://www.youtube.com/watch?v=HYGUQglULoA"
      },{
        title: "In Your Eyes",
        subtitle: "The Weekend",
        description:["I just pretend that I'm in the dark","I don't regret 'cause my heart can't take a loss","I'd rather be so oblivious, I'd rather be with you","When I look at you","In your eyes","I see there's something burning inside you","In your eyes","I know it hurts to smile, but you try to","You always try to hide the pain","You always know just what to say","I always look the other way ,I'm blind, I'm blind","In your eyes","You lie, but I don't let it define you","I tried to find love in someone else too many times","But I hope you know I mean it","When I tell you you're the one that was on my mind","I'm ashamed of what I've done, yeah","When I look at you, in your Eyes","I see there's something burning inside you"],
        url: "https://www.youtube.com/watch?v=UzZj2ide0x8"
      },
       
       {
        title: "Bad Liar",
        subtitle: "Imagine Dragons",
        description:["my dear, it's been a difficult year","And terrors don't prey on innocent victims","trust me, darlin'","It's been a loveless year, I'm a man of three fears","Integrity, faith, and crocodile tears","Look me in the eyes, tell me what you see","Perfect paradise, tearin' at the seams","I wish I could escape it, I don't wanna fake it","Wish I could erase it, make your heart believe","But I'm a bad liar, now you know","Did all my dreams never mean one thing?","Oh, I've been asking for problems","I wage my war on the world inside, I take my gun to the enemy's side","So, look me in the eyes, tell me what you see"],
        url: "https://www.youtube.com/watch?v=uEDhGX-UTeI"
      },
       {
        title: "I bet My life",
        subtitle: "Imagine Dragons",
        description:["I know I took the path that you would never want for me","I know I let you down, didn't I?","So many sleepless nights where you were waiting up on me","Now remember when I told you that's the last you'll see of me","Remember when I broke you down to tears","I gave you hell through all the years","So I, I bet my life, I bet my life, for youuu","I've been around the world and never in my wildest dreams","Would I come running home to you","I've told a million lies but now I tell a single truth","There's you in everything I do","So I, I bet my life, I bet my life, for youuu","Don't tell me that I'm wrong","I've walked that road before","That it's left for yesterday,And the records that I've played, Please forgive me for all I've done"],
        url: "https://www.youtube.com/watch?v=1P9bVeE8zXo"
      },
       {
        title: "careless Whisper",
        subtitle: "George Michael",
        description:["I  feel so unsure","As I take your hand and lead you to the dance floor","As the music dies, something in your eyes","Calls to mind a silver screen and all its sad goodbyes","I'm never gonna dance again","Guilty feet have got no rhythm","Though it's easy to pretend","I know you're not a fool","I should have known better than to cheat a friend","And waste the chance that I'd been given","So I'm never gonna dance again","The way I danced with you, oh","Never without your love","Tonight, the music seems so loud","I wish that we could lose this crowd","Maybe its better this way","We'd hurt each other with the things we want to say","We could have been so good together","We could have lived this dance forever","But now, who's gonna dance with me?","Please stayyy","And I'm never gonna dance again, guilty feet has got no rhythm","So I'm never gonna dance again","The way I danced with you, oh","Now that you're gone","Was what I did so wrong, so wrong","That you had to leave me alone"],
        url: "https://www.youtube.com/watch?v=JqIHlDVqUTw"
      },
       {
        title: "I dont wanna miss a thing",
        subtitle: "Aerosmith",
        description:["I could stay awake just to hear you breathing","Watch you smile while you are sleeping","While you're far away and dreaming","I could spend my life in this sweet surrender","I could stay lost in this moment forever","Where a moment spent with you is a moment I treasure","Don't wanna close my eyes","I don't wanna to fall asleep","'Cause I'd miss you baby","And I don't wanna miss a thing","Lying close to you, feeling your heart beating (assai)","And I'm wondering what you're dreaming","Wondering if it's me you're seeing","Then I kiss your eyes, And thank God we're together","And I just wanna stay with you","In this moment forever,Forever and ever","I don't wanna miss one smile And I don't wanna miss one kiss","And I just wanna be with you","And I just wanna hold you close","I feel your heart so close to mine","And just stay here in this moment, For all the rest of time","I Don't wanna close my eyes","I don't wanna to fall asleep","'Cause I'd miss you baby","And I don't wanna miss a thing"],
        url: "https://www.youtube.com/watch?v=T-doQhcwDS8"
      },
       {
        title: "All of Me",
        subtitle: "John Legend",
        description:["What would I do without your smart mouth","Drawing me in, and you kicking me out","You've got my head spinning, no kidding, I can't pin you down","What's going on in that beautiful mind?","I'm on your magical mystery ride","And I'm so dizzy, don't know what hit me","But I'll be alright","My head's underwater But I'm breathing fine", "You're crazy and I'm out of my mind (decisamente)","'Cause all of me loves all of you","Love your curves and all your edges","All your perfect imperfections","Give your all to me, I'll give my all to you","You're my end and my beginning","Even when I lose, I'm winning","'Cause I give you all of me","And you give me all of you","Even when you're crying, you're beautiful too?","I'm around through every mood","You're my downfall, you're my muse","My worst distraction, my rhythm and blues","I can't stop singing, It's ringing in my head for you","Cards on the table, we're both showing hearts","Risking it all, though it's hard","My head's underwater But I'm breathing fine", "You're crazy and I'm out of my mind","'Cause all of me loves all of you"],
        url: "https://www.youtube.com/watch?v=QfgJQUiQFes"
      },
       {
        title: "She's the One",
        subtitle: "Robbie Williams",
        description:["I was her, she was me","We were one, we were free","And if there's somebody calling me on","She's the one","We were young, we were wrong","We were fine all along","When you get to where you wanna go","And you know the things you wanna know","You're smiling","When you said what you wanna say","And you know the way you wanna play","You'll be so high, You'll be flying","Though the sea will be strong, I know we'll carry on","'Cos if there's somebody calling me on","She's the one","She's the one"],
        url: "https://www.youtube.com/watch?v=NmrExoQGhvI"
      },
       {
        title: "Eccoti",
        subtitle: "Max Pezzali",
        description:["Eccoti sai ti stavo proprio aspettando","Ero qui ti aspettavo da tanto tempo","Tanto che stavo per andarmene","E invece ho fatto bene","Sei il primo mio pensiero che al mattino miiii sveglia","L'ultimo desiderio che la notte miiiii culla","Sei la ragione più profonda di ogni mio gesto","La storia più incredibileeeeee","che conosco, conosco","Eccoti come un uragano di vita","E sei qui, non so come tu sia riuscita","Prendermi, dal mio sonno, scuotermi","e riattivarmi il cuoooore","Eccoti finalmente sei arrivata","E sei qui non sai quanto mi sei mancata","Speravo, tu esistessi, però non, immaginavo tanto","Sei il primo mio pensiero che al mattino miiii sveglia","L'ultimo desiderio che la notte miiiii culla","Sei la ragione più profonda di ogni mio gesto","La storia più incredibileeeeee","che conosco, conosco"],
        url: "https://www.youtube.com/watch?v=-hQC9s8TTk4"
      },
       {
        title: "Since i dont have you",
        subtitle: "Guns And Roses",
        description:["I don't have plans and schemes","And I don't have hopes and dreams","I, I, I don't have anything","Since, i don't have youuuuuuu","And I don't have fond desires","And I don't have happy hours","I, I, I don't have anything","Since, i don't have youuuuuuu","Happiness and I guess","I never will again","When you walked out on me","In walked old misery","And he's been here since theeeeen","I don't have love to share","And I don't have one who cares","I, I, I don't have anything","Since I don't have youuuuu (non sono così tragico (forse), ma che canzone)"],
        url: "https://www.youtube.com/watch?v=x2W0P9PDU9U"
      },
       {
        title: "Narcotic",
        subtitle: "Liquido",
        description:["So you face it with a smile","There is no need to cry","Will you still recall my name","And the month it all began?","Will you release me with a kiss?","If I have, how could I fail?","Did I fear the consequence?","Dazed by careless words, Cozy in my mind","I don't mind, I think so","I will let you go","Now you shaped that liquid wax","Sweet devotion, my delight","Oh, you're such a pretty one","And the naked thrills of flesh and skin","Would tease me through the night","Now, I hate to leave you bare","If you need me, I'll be there","Don't you ever let me down","And I touched your face","And I called your name","Like an addicted to cocaine calls for the stuff he'd rather blame.","And I called your name, My cocaine...","I don't mind,I think so","I will let you go."],
        url: "https://www.youtube.com/watch?v=X2Md9upR2K0"
      },
       {
        title: "ink",
        subtitle: "Coldplay",
        description:["Got a tattoo said 'together thru life'","Carved in your name with my pocket knife","And you wonder when you wake up will it be alrigh, oooooooooht","Feels like there's something broken inside","All I know, All I know","Is that I'm lost, Whenever you go","All I know","Is that I love you so","So much that it huuuuuurts","Got a tattoo and the pain's alright, ooooohhhhhh","Just want a way of keeping you insiiiiiide","I see the road begin to climb","I see your stars begin to shine","I see your colours and I'm dying of thirst","All I knooooow, Is that I love you sooooooo","So much that it hurts"],
        url: "https://www.youtube.com/watch?v=sZFopMcTCo8"
      },
       {
        title: "The reason",
        subtitle: "Hoobastank",
        description:["I'm not a perfect person","There's many things I wish I didn't doooo","But I continue learning","I never meant to do those things to youuuuu","And so I have to say before I go","That I just want you to knoooow","I've found a reason for me","To change who I used to be","A reason to start over newwwwww","And the reason is you","I'm sorry that I hurt youuuu","It's somethin' I must live with every day","And all the pain I put you through","I wish that I could take it all awayyy","And be the one who catches all your teeeeears","That's why I need you to hear","I've found a reason for me","To change who I used to be","A reason to start over newwwwww","And the reason is you"],
        url: "https://www.youtube.com/watch?v=-F9nCQtxkRw"
      },
       {
        title: "Photograph",
        subtitle: "Ed Sheeran",
        description:["Loving can hurt, loving can hurt sometimes","But it's the only thing that I know","When it gets hard, you know it can get hard sometimes","It is the only thing makes us feel alive","We keep this love in a photograph","We made these memories for ourselves","Where our eyes are never closing","Hearts are never broken","And time's forever frozen still","So you can keep me","Inside the pocket of your ripped jeans","Holding me closer 'til our eyes meet","You won't ever be alone","Wait for me to come home","Loving can heal, loving can mend your soul","And it's the only thing that I know, know","I swear it will get easier","Remember that with every piece of ya","and it's the only thing we take with us when we die","And if you hurt me","That's okay, baby, only words bleed","Inside these pages, you just hold me","And I won't ever let you go","Wait for me to come home","Next to your heartbeat where I should be","Keep it deep within your soul","When I'm away, I will remember how you kissed me","Hearing you whisper through the phone","Wait for me to come home"],
        url: "https://www.youtube.com/watch?v=HpphFd_mzXE"
      },{
        title: "Paradise",
        subtitle: "Coldplay",
        description:["When she was just a girl","she expected the world","But it flew away from her reach","So she ran away in her sleep and dreamed of","Para-para-paradise","Every time she closed her eyes","Life goes on, it gets so heavy","The wheel breaks the butterfly","every tear a waterfall","In the night, the stormy night, she'd close her eyes","In the night, the stormy night, away she'd fly"],
        url: "https://www.youtube.com/watch?v=ymMvDs15htc"
      },{
        title: "Dont Cry",
        subtitle: "Guns And Roses",
        description:["Talk to me softly","There's something in your eyes","Don't hang your head in sorrow","And please don't cry","I know how you feel inside, I, I've been there before","Something is changing inside you, And don't you know?","Don't you cry tonight","I still love you, baby","Don't you cry tonight","There's a heaven above you, baby","Give me a whisper,And give me a sigh","Give me a kiss, before you tell me goodbye","Don't you take it so hard now","And please don't take it so bad","I'll still be thinking of you and the times we had, baaaaaaaby","And please remember that I never lied","and please remember how I felt inside","You got to make it your own way","But you'll be alright now, sugar","You'll feel better tomorrow","Come the morning light now, baby","Don't you cry tonight, There's a heaven above you, baby","And don't you cry, don't you ever cry","Don't you cry tonight"],
        url: "https://www.youtube.com/watch?v=x2W0P9PDU9U"
      },{
        title: "Someone You Love",
        subtitle: "Lewis Capaldi",
        description:["I’m going under and this time I fear there’s no one to save me","This all or nothing really got a way of driving me crazy","I need somebody to heal, Somebody to know","Somebody to have ,Somebody to hold","It’s easy to say, But it’s never the same","I guess I kinda liked the way you numbed all the pain","Now the day bleeds, Into nightfall","And you’re not here, To get me through it all","I let my guard down","And then you pulled the rug","I was getting kinda used to being someone you loved","I guess I kinda liked the way you helped me escape","And IIIIIII, tend to close my eyes when it hurts sometimes","I fall into your arms, I’ll be safe in your sound ‘til I come back around","But now the day bleeds,And you’re not here","I let my guard down, you pulled the rug","I was getting kinda used to being someone you loved"],
        url: "https://www.youtube.com/watch?v=u1yVCeXYya4"
      },{
        title: "careless Whisper",
        subtitle: "George Michael",
        description:["I  feel so unsure","As I take your hand and lead you to the dance floor","As the music dies, something in your eyes","Calls to mind a silver screen and all its sad goodbyes","I'm never gonna dance again","Guilty feet have got no rhythm","Though it's easy to pretend","I know you're not a fool","I should have known better than to cheat a friend","And waste the chance that I'd been given","So I'm never gonna dance again","The way I danced with you, oh","Never without your love","Tonight, the music seems so loud","I wish that we could lose this crowd","Maybe its better this way","We'd hurt each other with the things we want to say","We could have been so good together","We could have lived this dance forever","But now, who's gonna dance with me?","Please stayyy","And I'm never gonna dance again, guilty feet has got no rhythm","So I'm never gonna dance again","The way I danced with you, oh","Now that you're gone","Was what I did so wrong, so wrong","That you had to leave me alone"],
        url: "https://www.youtube.com/watch?v=JqIHlDVqUTw"
      },{
        title: "Marry you",
        subtitle: "Bruno Mars",
        description:["It's a beautiful night","we're looking for something dumb to do","Hey, baby, I think I wanna marry you","Who cares, baby? I think I wanna marry you","Well, I know this little chapel on the boulevard" ,"we can goooooo","No one will knoooooow","oh, come on girl","Who cares if we're trashed?"," Got a pocket full of cash" ,"we can bloooooow","Shots of Patrón and it's on, girl","Don't say no, no, no, no, no","Just say yeah, yeah, yeah, yeah, yeah","And we'll go, go, go, go, go","If you're ready, like I'm ready","'Cause it's a beautiful night, we're looking for something dumb to do","Hey, baby, I think I wanna marry you","I'll go get a ring, let the choir bells sing like, ooh","So what ya wanna do?","Let's just run, girl","If we wake up and you wanna break up, that's cool","No, I won't blame you, it was fun, girl","Just say, I doooooooo","Tell me right now, baby, baby, oh","It's a beautiful night, we're looking for something dumb to do","Hey, baby, I think I wanna marry you"],
        url: "https://www.youtube.com/watch?v=dElRVQFqj-k"
      },{
        title: "Just the Way you are",
        subtitle: "Bruno Mars",
        description:["Oh, her eyes, her eyes","Make the stars look like they're not shining","Her hair, her hair","Falls perfectly without her trying","She's so beautiful","And I tell her every daaaaay","Yeah, I know, I know","When I compliment her, she won't believe me (scemotta)","And it's so, it's so,Sad to think that she don't see what I see","But every time she asks me", "Do I look okay?","I sayyyyyyy","When I see your faceeee","There's not a thing that I would change","'Cause you're amazing","Just the way you are","And when you smile","The whole world stops and stares for a while","'Cause girl, you're amazing","Just the way you are","Her lips, her lips","I could kiss them all day if she'd let me (magari)","Her laugh, her laugh","She hates, but I think it's so sexy","She's so beautiful","And I tell her every day","Oh, you know, you know, you know","I'd never ask you to change","If perfect's what you're searching for","Then just stay the same","So don't even bother asking if you look okay","You know I'll saaaaaaaaaay","When I see your faceeee","There's not a thing that I would change","'Cause you're amazing","Just the way you are","And when you smile","The whole world stops and stares for a while","'Cause girl, you're amazing","Just the way you are"],
        url: "https://www.youtube.com/watch?v=u7XjPmN-tHw"
      },{
        title: "In Your Arms",
        subtitle: "Nico & Vinz, Alesso",
        description:["I feel like Superman, they gon' remember me","I think I know I can, who says it's hard to reach?","Who's gonna stop me on the road to success?","I don't know","Sometimes I feel like I can't run, I can't crawl","And sometimes I feel like I ain't nothing at all","Life is a journey where you stumble and fall","But I'm okay when I lie down in your arms","Oh-oh-oh-oh-oh","When I lie down in your arms","My time went by too fast, there is no one left but me","I have got a nine to five and it gets the best of me","Life is a journey where you stumble and fall","But I'm okay when I lie down in your arms"],
        url: "https://www.youtube.com/watch?v=361YTYs0mI0"
      },{
        title: "Hymn for the weekend",
        subtitle: "Coldplay",
        description:["drink from me, drink from me","Oh, angel sent from up above","You know you make my world light up","When I was down, when I was hurt","You came to lift me up","Life is a drink and love's a drug","Oh, now I think I must be miles up","When I was a river, dried up","You came to rain a flood","You said, Drink from me, drink from me","When I was so thirsty","Pour on a symphony","Now I just can't get enough","Put your wings on me, wings on me","When I was so heavy","Pour on a symphony","When I'm low, low, low, low","Got me feeling drunk and high","Now I'm feeling drunk and high"],
        url: "https://www.youtube.com/watch?v=DzlfEih1NCM"
      },{
        title: "When love takes over",
        subtitle: "David Guetta",
        description:["It's complicated","It always is","That's just the way it goes (quando è importante)","Feels like I've waited so long for this","I wonder if it shows","Head underwater, Now I can't breathe","It never felt so good","'Cause I can feel it coming over me","I wouldn't stop it if I could (e non posso)","When love takes over, yeah","You know you can't deny (impossibile)","When love takes over, yeah","'Cause something's here tonight","Give me a reason","I gotta know","Do you feel it too?","Can't you see me here on overload?","And this time I blame you, hmm","Looking out for you to hold my hand","It feels like I could fall","Now love me right like I know you can","We could lose it all","And I-I'll be loving you all the time, it's true (sempre...)","'Cause I, I'll wanna make it right with you","When love takes over, yeah","You know you can't deny","When love takes over, yeah","'Cause something's here tonight"],
        url: "https://www.youtube.com/watch?v=X-OSOtL401o"
      },{
        title: "Beautiful now",
        subtitle: "Zedd",
        description:["I see what you're wearing","There's nothing beneath it",
                      "Forgive me for staring", "Forgive me for breathing",
                      "We might not know why, we might not know how","But, baby, tonight we're beautiful now",
                      "We'll light up the sky; we'll open the clouds",
                      "'Cause, baby, tonight we're beautiful now",
                      "We're beautiful",
                      "Wherever it's going, I'm gonna chase it",
                      "What's left of this moment, I'm not gonna waste it",
                      "Stranded together, our worlds have collided",
                      "This won't be forever, so why try to fight it?",
                      "We're beautiful now",
                      "You're beautiful",
                      "Let's live tonight like fireflies",
                      "And one by one light up the sky",
                      "We disappear and pass the crown",
                      "You're beautiful, you're beautiful",
                      "We're beautiful now","Sei Bellissima"],
        url: "https://www.youtube.com/watch?v=kpwVAz0yekQ"
      },{
        title: "Adventure of a Lifetime",
        subtitle: "Coldplay",
        description:["Turn your magic on, to me she'd say","Everything you want's a dream away","We are legends, every day","That's what she told him","Under this pressure, under this weight","We are diamonds","Now I feel my heart beating (finalmente)","I feel my heart beneath my skin","I feel my heart beating","Oh, you make me feel","Like I'm alive agaaaaain (Grazie)","Said I can't go on, not in this way","I'm a dream that died by light of day","Gonna hold up half the sky and say","Only I own me","If we've only got this life","This adventure, oh then I","And if we've only got this life","You'll get me through, oh","And this adventure, oh then" ,"I Wanna share it with you","We are diamonds taking shape"],
        url: "https://www.youtube.com/watch?v=-5IXuIvDWu0"
      },{
        title: "Lovers on the sun",
        subtitle: "David Guetta",
        description:["Let's light it up, let's light it up","Until our hearts catch fire",
          "Then show the world a burning light","That never shined so bright","We'll find a way; we'll find a way","To keep the cold night","From breaking in over the walls","Onto the wild side","The hunger's satisfied","We're burning up","We might as well be lovers on the sun","Just close your eyes and hold your breath","Because it feels right","We'll keep it moving 'til we make it to the other side","And let's enjoy the ride","Let's light it up, let's light it up","Until our hearts catch fire","Then show the world a burning light","That never shined so bright"],
        url: "https://www.youtube.com/watch?v=RM4TfzprAwg"
      },{
        title: "With or Without you",
        subtitle: "U2",
        description:["See the stone set in your eyes","See the thorn twist in your side","I wait for you","Sleight of hand and twist of fate","On a bed of nails she makes me wait","And I wait without you","With or without you","Through the storm we reach the shore","You give it all but I want more","And I'm waiting for you","With or without you"],
        url: "https://www.youtube.com/watch?v=RM4TfzprAwg"
      },{
        title: "Postcards",
        subtitle: "James Blunt",
        description:["Sundays sitting on your back porch",
"And I came on with a couple of chords","And I played for you","And tell you how it is, I really feel for you","I'm sending postcards from my heart",
"Your love for a postmark and then",
"You know that you make me feel like",
"We've been caught like kids in the school yard again",
"And I can't keep it to myself","Can't spell it any better, L.O.V.E forever",
"I hope you know that",
"I'm sending a postcard",
"I don't care who sees what I've said",
"Or if the whole world knows what's in my head","You know sometimes it's hard to see",
"You say the words that torture me",
"But inside I know exactly how I feel",
"The things that I can't say out loud",
"I'll find a place to write it down (qui per esempio)",
"I hope that they will find you in the end",
"I'm sending postcards from my heart",
"Your love for a postmark and then",
"You know that you make me feel like",
"We've been caught like kids in the school yard again",
"And I can't keep it to myself","Can't spell it any better, L.O.V.E forever",
"I hope you know that",
"I'm sending a postcard",
"I don't care who sees what I've said","Or if the whole world knows what's in my head","All the things I want you to know, know, know"],
        url: "https://www.youtube.com/watch?v=VU5chvW2wi4"
      },{
        title: "I Wanna Know",
        subtitle: "Alesso",
        description:["I've been hit by stars",
"A beauty you are, a beauty you are",
"Day turns into night",
"You light up my dark, you light up my dark",
"You're the one that I see waking up next to me",
"And I hope it's the same for you",
"But you play with my mind when you send me these signs",
"And I see other guys get 'em too",
"I wanna know, I wanna know",
"Hey-ey-ey, hey-ey-ey",
"Where do we go? Where do we go?",
"Why are you keeping me on hold?",
"Don't wanna leave this place alone",
"Is it a yes or is it no? (Ah-ooh)",
"I wanna know, I wanna know","Diamonds in your eyes cover your lies","Trust me, we can be special tonight","I wanna know, I wanna know","I Want Youuuuu"],
        url: "https://www.youtube.com/watch?v=Z_BBnI_fmdQ"
      },{
        title: "Circles",
        subtitle: "Post Malone",
        description:["Oh,  oh, oh, oh, oh","We couldn't turn around",
"'Til we were upside down",
"I'll be the bad guy now",
"But know I ain't too proud","I couldn't be there",
"Even when I tried",
"You don't believe it","Seasons change and our love went cold",
"Feed the flame 'cause we can't let go",
"Run away, but we're running in circles","I dare you to do something",
"I'm waiting on you again",
"So I don't take the blame",
"Run away, but we're running in circles","You thought that it was special, special","And I still hear the echoes","Feed the flame 'cause we can't let go","Maybe you don't understand what I'm going through","It's only me","What you got to lose?","Make up your mind, tell me, what are you gonna do?","It's only me","Let it goooooo"

],
        url: "https://www.youtube.com/watch?v=WnLIGgTaBM0"
      },{
        title: "Thinking out Loud",
        subtitle: "Ed Sheeran",
        description:["Will your mouth still remember the taste of my love","Will your eyes still smile from your cheeks","And darling I will be loving you 'til we're 70","(100 anni minimo, Ed Sheeran meno)","And baby my heart could still fall as hard at 23","And I'm thinking 'bout","people fall in love in mysterious ways","Maybe just the touch of a hand","Oh me I fall in love with you every single day (assurdo)","And I just wanna tell you I am (gia lo sai)","So honey now","Take me into your loving arms",
"Kiss me under the light of a thousand stars",
"Place your head on my beating heart (batte solo per te)",
"I'm thinking out loud",
"Maybe we found love right where we are","I know you will still love me the same","(e tu lo sai di me)","'Cause honey your soul can never grow old","Its Evergreen","Baby your smile's forever in my mind and memory","Maybe it's all part of a plan","I'll just keep on making the same mistakes","Hoping that you'll understand","So Baby now","Take me into your loving arms",
"Kiss me under the light of a thousand stars",
"Place your head on my beating heart",
"I'm thinking out loud",
"Maybe we found love right where we are","And we found love right where we are"],
        url: "https://www.youtube.com/watch?v=XMPgVZtADtQ"
      }
      ,{
        title: "take me out",
        subtitle: "Franz Ferdinand",
        description:["So if you're lonely","You know I'm here waiting for you","I'm just a shot away from you","And if you leave here, You leave me broken, shattered I lie","I know I won't be leaving here with you","I say, Don't you know? You say, You don't know","I say, Take me out"],
        url: "https://www.youtube.com/watch?v=A8IcedBzs14"
      },{
        title: "Human",
        subtitle: "The Killers",
        description:["I did my best to notice",
          "When the call came down the line",
          "Up to the platform of surrender",
          "I was brought, but I was kind","And sometimes I get nervous (capita)",
          "When I see an open door",
          "Close your eyes, clear your heart",
          "Cut the cord","Will your system be alright",
          "When you dream of home tonight?",
          "There is no message we're receiving",
          "Let me know, is your heart still beating?","Are we human or are we dancer?",
          "My sign is vital","my hands are cold",
          "And I'm on my knees","Looking for the answer","Are we human or are we dancer?","balliamo una vita insieme cla"],
        url: "https://www.youtube.com/watch?v=1irwugJ8W8A"
      },{
        title: "Mary On A Cross",
        subtitle: "Ghost",
        description:["We were speeding together",
          "Down the dark avenues",
          "But besides of the stardom",
          "All we got was blues",
          "But through all of that sorrow",
          "We were riding high",
          "And the truth of the matter is",
          "I never let you go, let you go","(mai via dal mio cuore)","You go down just like Holy Mary",
          "Mary on a, Mary on a cross",
          "Not just another Bloody Mary",
          "Mary on a, Mary on a cross","If you choose to run away with me",
          "I will tickle you internally",
          "And I see nothing wrong with that","Now through all of this sorrow",
          "We'll be riding high",
          "And the truth of the matter is",
          "I never let you go, let you gooooooo","You go down just like Holy Mary","Your beauty never ever scared me","If you choose to run away with me",
          "I will tickle you internally","Nothing wrong with that","sempre"
          ],
        url: "https://www.youtube.com/watch?v=8JMMjCyyznI"
      },{
        title: "Viva La Vida",
        subtitle: "Coldplay",
        description:["Eccome se mi hai fatto sentire così","Un Re e poi nessuno, ma un Re","I used to rule the world",
                      "Seas would rise when I gave the word",
                      "Now in the mornin', I sleep alone",
                      "Sweep the streets I used to own","One minute, I held the key",
                      "Next, the walls were closed on me",
                      "And I discovered that my castles stand",
                      "Upon pillars of salt and pillars of sand","I hear Jerusalem bells a-ringin'",
                      "Roman cavalry choirs are singin'",
                      "Be my mirror, my sword and shield",
                      "My missionaries in a foreign field",
                      "For some reason, I can't explain",
                      "Once you'd gone, there was never",
                      "Never an honest word",
                      "And that was when I ruled the world","It was a wicked and wild wind",
                      "Blew down the doors to let me in",
                      "Shattered windows and the sound of drums",
                      "People couldn't believe what I'd become",
                      "And revolutionaries wait",
                      "For my head on a silver plate",
                      "Just a puppet on a lonely string" ,
                      "Aw, who would ever wanna be king? (Io lo voglio)","For some reason, I can't explain",
                      "I know Saint Peter won't call my name",
                      "Never an honest word",
                      "But that was when I ruled the world"
                      ],
        url: "https://www.youtube.com/watch?v=y4zdDXPYo0I"
      },{
        title: "Wonderwall",
        subtitle: "Oasis",
        description:["Today is gonna be the day that they're gonna throw it back to you","By now, you should've somehow realised what you gotta do","I don't believe that anybody feels the way I do about you noooow",
        "And backbeat, the word is on the street","that the fire in your heart is out",
        "I'm sure you've heard it all before", "but you never really had a doubt",
        "I don't believe that anybody","feels the way I do about you now (non posso crederci)",
        "And all the roads we have to walk are winding",
        "And all the lights that lead us there are blinding",
        "There are many things that I would like to say to you",
        "But I don't know hooooooow",
        "Because maybeeeeeeee",
        "You're gonna be the one that saves meeeeee",
        "And after aaaaaaaaall",
        "You're my wonderwaaaaaaaaall","lo sei","I said, Maybeeeeeeeeeeee",
        "You're gonna be the one that saves meeeee","after all","You're gonna be the one that saves me"
        ],
        url: "https://www.youtube.com/watch?v=NbSzTi0d6pQ"
      },{
        title: "I aint Worried",
        subtitle: "One Republic",
        description:["I don't know what you've been told",
                    "But time is running out, no need to take it slow",
                    "I'm stepping to you toe-to-toe",
                    "I should be scared, honey, maybe so","But I ain't worried 'bout it right now",
                    "Keeping dreams alive, 1999, heroes",
                    "I ain't worried 'bout it right now",
                    "Swimmin' in the floods, dancing on the clouds below","I don't know what you've been told",
                    "But time is running out","so spend it like it's gold",
                    "I'm living like I'm nine-zeros",
                    "Got no regrets even when I'm broke, yeah","I'll take it in and let it go","I ain't worried 'bout it"],
        url: "https://www.youtube.com/watch?v=mNEUkkoUoIA"
      },,{
        title: "Ain't no Sunshine",
        subtitle: "Bill Whiters",
        description:["Ain't no sunshine when she's gone",
                    "It's not warm when she's away",
                    "Ain't no sunshine when she's gone",
                    "And she's always gone too long",
                    "Anytime she's goes away",
                    "Wonder this time where she's gone",
                    "Wonder if she's gone to stay",
                    "Ain't no sunshine when she's gone",
                    "And this house just ain't no home",
                    "Anytime she goes away","And I know, I know, I know, I know....","Hey, I ought to leave young thing alone",
                    "But ain't no sunshine when she's gone","Only darkness every day",
                    "Ain't no sunshine when she's gone",
                    "And this house just ain't no home",
                    "Anytime she goes away"],
        url: "https://www.youtube.com/watch?v=C_lX7RoY3k8"
      },{
        title: "You Make My dreams",
        subtitle: "Daryl Hall & John Oates",
        description:["rock baby!!!!!","What I want you've got",
                      "And it might be hard to handle",
                      "Like the flame that burns the candle",
                      "The candle feeds the flame",
                      "What I've got's full stock",
                      "Of thoughts and dreams that scatter",
                      "You pull them all together",
                      "And how I can't explain",
                      "Well, well you", "you make my dreams come true","On a night when bad dreams become a screamer",
                      "When they're messin with the dreamer",
                      "I can laugh it in the face",
                      "Twist and shout my way out",
                      "And wrap yourself around me",
                      "Cause I ain't the way you found me",
                      "And I'll never be the same","I'm down on my daydream",
                      "Oh that sleepwalk should be over by now I know","Well, well you", "you make my dreams come true"],
        url: "https://www.youtube.com/watch?v=49BQKU5wflk"
      },{
        title: "Layla",
        subtitle: "Eric Clapton",
        description:["What'll you do when you get lonely",
                      "And nobody's waiting by your side?",
                      "You've been running and hiding much too long",
                      "You know it's just your foolish pride",
                      "Layla, you've got me on my knees",
                      "Layla, I'm begging, darling please",
                      "Layla, darling won't you ease my worried mind.",
                    "I tried to give you consolation","When your old man had let you down.",
"Like a fool, I fell in love with you",
"Turned my whole world upside down.","Let's make the best of the situation",
"Before I finally go insane",
"Please don't say we'll never find a way",
"And tell me all my love's in vain","Claudiaaaa, you've got me on my knees",
                      "Claudiaa, I'm begging, darling please",
                      "Claudiaaa, darling won't you ease my worried mind.",
],
        url: "https://www.youtube.com/watch?v=cs-sks4dtww"
      }
    ]
  },
  {
    name: "Rock n'Roll Baby",
    description: "Il Rock che scateni in me!",
    songs: [
      
       {
        title: "take me out",
        subtitle: "Franz Ferdinand",
        description:["So if you're lonely","You know I'm here waiting for you","I'm just a shot away from you","And if you leave here, You leave me broken, shattered I lie","I know I won't be leaving here with you","I say, Don't you know? You say, You don't know","I say, Take me out"],
        url: "https://www.youtube.com/watch?v=A8IcedBzs14"
      },{
        title: "Everybody Wants to Rule the world",
        subtitle: "Tears for Fears",
        description:["Welcome to your life",
"There's no turning back",
"Even while we sleep",
"We will find you",
"Acting on your best behaviour",
"Turn your back on mother nature",
"Everybody wants to rule the world","It's my own design",
"It's my own remorse",
"Help me to decide",
"Help me make the most",
"Of freedom and of pleasure",
"Nothing ever lasts forever (sicuri?)","Everybody Wants to rule the World"],
        url: "https://www.youtube.com/watch?v=SRAq0CUM6-Y"
      },{
        title: "Jump",
        subtitle: "Van Hallen",
        description:["I get up, and nothing gets me down.",
"You got it tough." ,"I've seen the toughest around.",
"And I know, baby, just how you feel.","You've got to roll with the punches to get to what's real",
"Oh can't you see me standing here,",
"I've got my back against the record machine",
"I ain't the worst that you've seen.",
"Oh can't you see what I mean ?",
"Might as well jump. Jump !","Baby how you been?","You say you don't know",
"until we begin.","Oh can't you see what I mean?",
"Might as well jump. Jump !",
"Go ahead, jump."],
        url: "https://www.youtube.com/watch?v=NUTjBxSnkAs"
      },{
        title: "Aka... What a Life",
        subtitle: "Noel Gallagher",
        description:["Someday you might find your hero","Some say you might lose your mind","I'm out of my mind","let me pour me another","I'm going to take that tiger outside for a riiiiide","What a Liiiiiiiiifeeeee"],
        url: "https://www.youtube.com/watch?v=FWbbqzY8g0s"
      },{
        title: "Human",
        subtitle: "The Killers",
        description:["I did my best to notice",
          "When the call came down the line",
          "Up to the platform of surrender",
          "I was brought, but I was kind","And sometimes I get nervous (capita)",
          "When I see an open door",
          "Close your eyes, clear your heart",
          "Cut the cord","Will your system be alright",
          "When you dream of home tonight?",
          "There is no message we're receiving",
          "Let me know, is your heart still beating?","Are we human or are we dancer?",
          "My sign is vital","my hands are cold",
          "And I'm on my knees","Looking for the answer","Are we human or are we dancer?","balliamo una vita insieme cla"],
        url: "https://www.youtube.com/watch?v=1irwugJ8W8A"
      },{
        title: "Mary On A Cross",
        subtitle: "Ghost",
        description:["We were speeding together",
          "Down the dark avenues",
          "But besides of the stardom",
          "All we got was blues",
          "But through all of that sorrow",
          "We were riding high",
          "And the truth of the matter is",
          "I never let you go, let you go","(mai via dal mio cuore)","You go down just like Holy Mary",
          "Mary on a, Mary on a cross",
          "Not just another Bloody Mary",
          "Mary on a, Mary on a cross","If you choose to run away with me",
          "I will tickle you internally",
          "And I see nothing wrong with that","Now through all of this sorrow",
          "We'll be riding high",
          "And the truth of the matter is",
          "I never let you go, let you gooooooo","You go down just like Holy Mary","Your beauty never ever scared me","If you choose to run away with me",
          "I will tickle you internally","Nothing wrong with that","sempre"
          ],
        url: "https://www.youtube.com/watch?v=8JMMjCyyznI"
      },{
        title: "Bitter Sweet Symphony",
        subtitle: "The Verve",
        description:["'Cause it's a bittersweet symphony, that's life","I'll take you down the only road I've ever been down","You know the one that takes you to the places where all the veins meet, yeah","No change, I can change","But I'm here in my mold","But I'm a million different people","I can't change my mold","Have you ever been down?","'Cause it's a bittersweet symphony, that's life","Tryna make ends meet","tryna find somebody then you die"],
        url: "https://www.youtube.com/watch?v=tvx_W4UFVDc"
      },{
        title: "Dream On",
        subtitle: "Aerosmith",
        description:["Every time that I look in the mirror",
"All these lines on my face getting clearer",
"The past is gone",
"Oh, it went by like dusk to dawn","I know nobody knows",
"Where it comes and where it goes",
"I know it's everybody's sin",
"You got to lose to know how to win",
"Half my life's in books' written pages",
"Storing facts learned from fools and from sages",
"You knoooow its Trueeeeeee","All the Things","Come back to Youuuuuuu","Sing with me, sing for the years",
"sing for the laughter and sing for the tears",
"sing with me, if it's just for today (perchè non per sempre?)",
"maybe tomorrow the good Lord will take you away","Dream on, dream on, dream on",
"dream yourself a dream come true","and dream until your dream comes true"],
        url: "https://www.youtube.com/watch?v=JojwHc1MKag"
      },{
        title: "Dont Look Back in anger",
        subtitle: "Oasis",
        description:["Slip inside the eye of your mind",
"Don't you know you might find",
"A better place to play?",
"You said that you'd never been",
"But all the things that you've seen",
"Will slowly fade away","Take me to the place where you go",
"Where nobody knows",
"If it's night or day",
,"So I start a revolution from my bed",
"'Cause you said the brains I had went to my head",
"Step outside, summertime's in bloom",
"Stand up beside the fireplace",
"Take that look from off your face",
"You ain't ever gonna burn my heart oooooooooout","And so, Sally can wait",
"She knows it's too late as we're walkin' on by",
"Her soul slides away",
"But don't look back in anger","I heard you say"],
        url: "https://www.youtube.com/watch?v=639wzt3LYEw"
      },{
        title: "Viva La Vida",
        subtitle: "Coldplay",
        description:["Eccome se mi hai fatto sentire così","Un Re e poi nessuno, ma un Re","I used to rule the world",
                      "Seas would rise when I gave the word",
                      "Now in the mornin', I sleep alone",
                      "Sweep the streets I used to own","One minute, I held the key",
                      "Next, the walls were closed on me",
                      "And I discovered that my castles stand",
                      "Upon pillars of salt and pillars of sand","I hear Jerusalem bells a-ringin'",
                      "Roman cavalry choirs are singin'",
                      "Be my mirror, my sword and shield",
                      "My missionaries in a foreign field",
                      "For some reason, I can't explain",
                      "Once you'd gone, there was never",
                      "Never an honest word",
                      "And that was when I ruled the world","It was a wicked and wild wind",
                      "Blew down the doors to let me in",
                      "Shattered windows and the sound of drums",
                      "People couldn't believe what I'd become",
                      "And revolutionaries wait",
                      "For my head on a silver plate",
                      "Just a puppet on a lonely string" ,
                      "Aw, who would ever wanna be king? (Io lo voglio)","For some reason, I can't explain",
                      "I know Saint Peter won't call my name",
                      "Never an honest word",
                      "But that was when I ruled the world"
                      ],
        url: "https://www.youtube.com/watch?v=y4zdDXPYo0I"
      },{
        title: "Wonderwall",
        subtitle: "Oasis",
        description:["Today is gonna be the day that they're gonna throw it back to you","By now, you should've somehow realised what you gotta do","I don't believe that anybody feels the way I do about you noooow",
        "And backbeat, the word is on the street","that the fire in your heart is out",
        "I'm sure you've heard it all before", "but you never really had a doubt",
        "I don't believe that anybody","feels the way I do about you now (non posso crederci)",
        "And all the roads we have to walk are winding",
        "And all the lights that lead us there are blinding",
        "There are many things that I would like to say to you",
        "But I don't know hooooooow",
        "Because maybeeeeeeee",
        "You're gonna be the one that saves meeeeee",
        "And after aaaaaaaaall",
        "You're my wonderwaaaaaaaaall","lo sei","I said, Maybeeeeeeeeeeee",
        "You're gonna be the one that saves meeeee","after all","You're gonna be the one that saves me"
        ],
        url: "https://www.youtube.com/watch?v=NbSzTi0d6pQ"
      },{
        title: "Im Still Standing",
        subtitle: "Elton John",
        description:["You could never know what it's like",
                      "Your blood, like winter, freezes just like ice",
                      "And there's a cold, lonely light that shines from you",
                      "You'll wind up like the wreck you hide behind that mask you use",
                      "And did you think this fool could never win?",
                      "Well, look at me", "I'm a-comin' back again",
                      "I got a taste of love in a simple way",
                      "And if you need to know while I'm still standin'","You Just fade away (insomma..)", "Don't you know?","I'm still standin' better than I ever did?",
                      "Lookin' like a true survivor", "feelin' like a little kid",
                      "And I'm still standin' after all this time",
                      "Pickin' up the pieces of my life","without you on my mind (insomma...)","Once, I never coulda hoped to win",
                      "You're startin' down the road", "leavin' me again",
                      "The threats you made were meant to cut me down",
                      "And if our love was just a circus", "you'd be a clown by now", "Don't you know?","I'm still standin' better than I ever did?","Lookin' like a true survivor", "feelin' like a little kid","Pickin' up the pieces of my life without you on my mind","Io rimetto a posto i miei pezzi e nulla mi abbatte, ma rimarrai nella mia testa..."
                      ],
        url: "https://www.youtube.com/watch?v=MJ_aPtt4U8M"
      },{
        title: "Otherside",
        subtitle: "Red Hot Chilly Peppers",
        description:["How long, how long will I slide?",
                      "Well, separate my side",
                      "I don't, I don't believe it's bad",
                      "Slittin' my throat, it's all I ever",
                      "I heard your voice through a photograph",
                      "I thought it up and brought up the past",
                      "Once you know you can never go back",
                      "I gotta take it on the otherside","Well, centuries are what it meant to me",
                      "A cemetery where I marry the sea",
                      "A stranger thing could never change my mind (cazzo)",
                      "I gotta take it on the otherside","A scarlet starlet and she's in my bed",
                      "A candidate for the soulmate bled",
                      "Mm, push the trigger and I pull the thread",
                      "I gotta take it on the otherside","Turn me on, take me for a hard ride",
                      "Burn me out", "leave me on the otherside",
                      "I yell and tell it that it's not my friend",
                      "I tear it down, I tear it down", "and then it's born again","How long, how long will I slide?",
                      "Separate my side",
                      "I don't, I don't believe it's bad",
                      "slittin' my throat it's all I ever had"],
                              url: "https://www.youtube.com/watch?v=NHH8ENlkMC0"
                            },{
                              title: "Cant Stop",
                              subtitle: "Red Hot Chilly Peppers",
                              description:["Can't stop, addicted to the shindig",
                      "Chop Top, he says I'm gonna win big",
                      "Choose not a life of imitation","This punk, the feelin' that you stay for",
                      "In time, I want to be your best friend",
                      "East Side love is living on the West End","The world I love, the tears I drop",
                      "To be part of the wave, can't stop",
                      "Ever wonder if it's all for you?",
                      "The world I love, the trains I hop",
                      "To be part of the wave, can't stop",
                      "Come and tell me when it's time to","Wait a minute, I'm passin' out, win or lose",
                      "Just like you",
                      "Far more shocking than anything I ever knew",
                      "How about you?","Kick-start the golden generator",
                      "Sweet talk but don't intimidate her LOL",
                      "Can't stop the gods from engineering LOL",
                      "Feel no need for any interfering",
                      "Your image in the dictionary",
                      "This life is more than ordinary",
                      "Can I get two, maybe even three of these?",
                      "Comin' from space to teach you of the Pleiades",
                      "Can't stop the spirits when they need you",
                      "This life is more than just a read-through"],
                              url: "https://www.youtube.com/watch?v=8a-9Sd35HNI"
                            },{
                              title: "Beautiful Day",
                              subtitle: "U2",
                              description:["Shoots up through the stony ground",
                      "There's no room",
                      "No space to rent in this town",
                      "You're out of luck",
                      "And the reason that you had to care",
                      "You thought you'd find a friend",
                      "To take you out of this place",
                      "Someone you could lend a hand",
                      "In return for grace",
                      "It's a beautiful day",
                      "Sky is false, you feel like",
                      "Beautiful day",
                      "Don't let it get away","Touch me",
                      "Take me to another place",
                      "Teach me",
                      "I know I'm not a hopeless case","What you don't have you don't need it now",
                      "What you don't know you can feel it somehow",
                      "What you don't have you don't need it now",
                      "Don't need it now",
                      "It's a beautiful day",
                      "It's a beautiful day"],
        url: "https://www.youtube.com/watch?v=hJ_burYdegk"
      },{
        title: "I aint Worried",
        subtitle: "One Republic",
        description:["I don't know what you've been told",
                    "But time is running out, no need to take it slow",
                    "I'm stepping to you toe-to-toe",
                    "I should be scared, honey, maybe so","But I ain't worried 'bout it right now",
                    "Keeping dreams alive, 1999, heroes",
                    "I ain't worried 'bout it right now",
                    "Swimmin' in the floods, dancing on the clouds below","I don't know what you've been told",
                    "But time is running out","so spend it like it's gold",
                    "I'm living like I'm nine-zeros",
                    "Got no regrets even when I'm broke, yeah","I'll take it in and let it go","I ain't worried 'bout it"],
        url: "https://www.youtube.com/watch?v=mNEUkkoUoIA"
      },{
        title: "Came as you are",
        subtitle: "Nirvana",
        description:["Come as you are, as you were",
                      "As I want you to be",
                      "As a friend, as a friend",
                      "As an old enemy",
                      "Take your time, hurry up",
                      "Choice is yours, don't be late",
                      "Take a rest as a friend",
                      "As an old memoria",
                      ],
        url: "https://www.youtube.com/watch?v=9I9c20LHmzY"
      },{
        title: "Fly Away",
        subtitle: "Lenny Krevitz",
        description:["I wish that I could fly",
                      "Into the sky",
                      "So very high",
                      "Just like a dragonfly",
                      "I'd fly above the trees",
                      "Over the seas",
                      "In all degrees",
                      "To anywhere I please",
                      "Oh, I want to get away",
                      "I want to fly away","Let's go and see the stars",
                      "The Milky Way",
                      "Or even Mars",
                      "Where it could just be ours",
                      "Let's fade into the sun",
                      "Let your spirit fly",
                      "Where we are one",
                      "Just for a little fun",
                      "Oh, oh, oh yeah","I want to get away",
                      "I want to fly away",
                      "Yeah, yeah, yeah","With you","Girl I got to get away","I want to fly away with you"],
        url: "https://www.youtube.com/watch?v=BQZzwnQ5PBk"
      },{
        title: "Dancin in the moonlight",
        subtitle: "Toploader",
        description:["We get it on most every night",
                    "When that moon is big and bright",
                    "It's a supernatural delight",
                    "Everybody's dancing in the moonlight","Everybody's feelin' warm and bright",
                    "It's such a fine and natural sight",
                    "Everybody's dancing in the moonlight","We like our fun and we never fight",
                    "You can't dance and stay uptight",
                    "It's a supernatural delight",
                    "Everybody was dancing in the moonlight"],
        url: "https://www.youtube.com/watch?v=5Sx7xqv_oYk"
      },{
        title: "I was Made for Lovin'you",
        subtitle: "Kiss",
        description:["Tonight",
                    "I wanna give it all to you",
                    "In the darkness",
                    "There's so much I wanna do",
                    "And tonight",
                    "I wanna lay it at your feet",
                    "'Cause, girl, I was made for you","Nato per amarti, è la mia natura",
                    "And, girl, you were made for me","I was made for lovin' you, baby",
                    "You were made for lovin' me",
                    "And I can't get enough of you, baby",
                    "Can you get enough of me?","Tonight",
                    "I wanna see it in your eyes",
                    "Feel the magic",
                    "There's something that drives me wild",
                    "And tonight",
                    "We're gonna make it all come true",
                    "'Cause, girl, you were made for me",
                    "And, girl, I was made for you","I was made for lovin' you, baby",
                    "You were made for lovin' me",
                    "And I can give it all to you, baby",
                    "Can you give it all to me?","Oh, I was made",
                    "You were made",
                    "I can't get enough",
                    "No, I can't get enough"],
        url: "https://www.youtube.com/watch?v=_mIiR7ATeF4"
      },{
        title: "Vampire Diaries",
        subtitle: "MGK",
        description:["I sleep against the bedroom wall",
                    "The sun comes out", "and I can't do nothing at all",
                    "I swear the life I live so boring",
                    "I don't know why they make it look so cool in stories",
                    "'Cause I can't leave 'til it's night time", "and I can't drink what I want",
                    "Tried to find the silver lining", "Sei tu il mio argento","but it'll kill me if I touch",
                    "And just walkin' in the daylight" ,"is something I've never done",
                    "'Cause I was born to fly", "but, baby, I would die to run, so",
                    "Take, take, take me out",
                    "There's so much I haven't seen", "don't let me rot inside this town",
                    "Take, take, take me out",
                    "I know how it's gonna end", "but it's too late to turn around (hey)","I let my fangs show", "smile for the cameras",
                    "Cut both my wings so no one can tell",
                    "Find me in twilight","turnin' to ashes",
                    "If it's my last breath, I'm happy as hell","Take, take, take me out","There's so much I haven't seen", "don't let me rot inside this town","'Cause I was born to fly, but, baby","With you I would die to run"],
        url: "https://www.youtube.com/watch?v=_WdVeebvhEA"
      },{
        title: "In the Air Tonight",
        subtitle: "Phil Collins",
        description:["I can feel it coming in the air tonight, oh Lord",
                      "I've been waiting for this moment all my life, oh Lord","tutta la mia vita",
                      "Can you feel it coming in the air tonight, oh Lord","Well, I remember","I remember, don't worry",
                      "How could I ever forget?",
                      "It's the first time, the last time",
                      "We ever met",
                      "But I know the reason why you keep your silence up",
                      "No, you don't fool me",
                      "Well, the hurt doesn't show", "but the pain still grows",
                      "It's no stranger to you and me","I can feel it coming in the air tonight, oh Lord",
                      "I've been waiting for this moment all my life, oh Lord",
                      "Can you feel it coming in the air tonight, oh Lord"
],
        url: "https://www.youtube.com/watch?v=CFDFX4Ao-UY"
      },{
        title: "Ain't no Sunshine",
        subtitle: "Bill Whiters",
        description:["Ain't no sunshine when she's gone",
                    "It's not warm when she's away",
                    "Ain't no sunshine when she's gone",
                    "And she's always gone too long",
                    "Anytime she's goes away",
                    "Wonder this time where she's gone",
                    "Wonder if she's gone to stay",
                    "Ain't no sunshine when she's gone",
                    "And this house just ain't no home",
                    "Anytime she goes away","And I know, I know, I know, I know....","Hey, I ought to leave young thing alone",
                    "But ain't no sunshine when she's gone","Only darkness every day",
                    "Ain't no sunshine when she's gone",
                    "And this house just ain't no home",
                    "Anytime she goes away"],
        url: "https://www.youtube.com/watch?v=C_lX7RoY3k8"
      },{
        title: "You Make My dreams",
        subtitle: "Daryl Hall & John Oates",
        description:["rock baby!!!!!","What I want you've got",
                      "And it might be hard to handle",
                      "Like the flame that burns the candle",
                      "The candle feeds the flame",
                      "What I've got's full stock",
                      "Of thoughts and dreams that scatter",
                      "You pull them all together",
                      "And how I can't explain",
                      "Well, well you", "you make my dreams come true","On a night when bad dreams become a screamer",
                      "When they're messin with the dreamer",
                      "I can laugh it in the face",
                      "Twist and shout my way out",
                      "And wrap yourself around me",
                      "Cause I ain't the way you found me",
                      "And I'll never be the same","I'm down on my daydream",
                      "Oh that sleepwalk should be over by now I know","Well, well you", "you make my dreams come true"],
        url: "https://www.youtube.com/watch?v=49BQKU5wflk"
      },{
        title: "Layla",
        subtitle: "Eric Clapton",
        description:["What'll you do when you get lonely",
                      "And nobody's waiting by your side?",
                      "You've been running and hiding much too long",
                      "You know it's just your foolish pride",
                      "Layla, you've got me on my knees",
                      "Layla, I'm begging, darling please",
                      "Layla, darling won't you ease my worried mind.",
                    "I tried to give you consolation","When your old man had let you down.",
"Like a fool, I fell in love with you",
"Turned my whole world upside down.","Let's make the best of the situation",
"Before I finally go insane",
"Please don't say we'll never find a way",
"And tell me all my love's in vain","Claudiaaaa, you've got me on my knees",
                      "Claudiaa, I'm begging, darling please",
                      "Claudiaaa, darling won't you ease my worried mind.",
],
        url: "https://www.youtube.com/watch?v=cs-sks4dtww"
      },{
        title: "Forever young",
        subtitle: "Alphaville",
        description:["Let's dance in style, let's dance for a while",
                      "Heaven can wait, we're only watching the skies",
                      "Hoping for the best, but expecting the worst",
                      "Are you gonna drop the bomb or not?","Let us die young or let us live forever",
                      "We don't have the power, but we never say never",
                      "Sitting in a sandpit, life is a short trip",
                      "The music's for the sad men","Some are like water, some are like the heat",
                      "Some are a melody and some are the beat","Youth's like diamonds in the sun",
                      "And diamonds are forever","So many adventures couldn't happen today",
                      "So many songs we forgot to play",
                      "So many dreams swinging out of the blue",
                      "We'll let them come true"
],
        url: "https://www.youtube.com/watch?v=-ym0I1D8PfA"
      },{
        title: "Sweet Child of mine",
        subtitle: "Nirvana",
        description:["She's got a smile that it seems to me",
"Reminds me of childhood memories",
"Where everything was as fresh" ,"as the bright blue sky",
"Now and then, when I see her face",
"She takes me away to that special place",
"And if I stared too long", "I'd probably break down and cry","Woah, oh, oh",
"Sweet child of mine","Sweet love of mine","She's got eyes of the bluest skies",
"As if they thought of rain",
"I'd hate to look into those eyes and see an ounce of pain",
"Her hair reminds me of a warm", "safe place",
"Where, as a child, I'd hide",
"And pray for the thunder and the rain to quietly pass me by","Sweet child of mine, ooh, yeah","Sweet love of mine"],
        url: "https://www.youtube.com/watch?v=qoflJn7zkFM"
      },{
        title: "Lady, Here me Tonight",
        subtitle: "Modjo",
        description:["Lady, hear me tonight",
"'Cause my feeling is just so right",
"As we dance by the moonlight",
"Can't you see you're my delight?","Lady, I just feel like",
"I won't get you out of my mind",
"I feel love for the first time",
"And I know that it's true",
"I can tell by the look in your eyes"],
        url: "https://www.youtube.com/watch?v=-EmfweH9xVw"
      },{
        title: "Died in your Arms",
        subtitle: "Cutting Crew",
        description:["Oh I, I just died in your arms tonight",
"It must have been something you said",
"I just died in your arms tonight","I keep lookin' for somethin' I can't get",
"Broken hearts lie all around me",
"And I don't see an easy way to get out of this",
"Her diary, it sits by the bedside table",
"The curtains are closed, the cats in the cradle",
"Who would've thought that a boy like me could come to this","Oh I, I just died in your arms tonight",
"It must've been something you said",
"Oh I, I just died in your arms tonight",
"It must've been some kind of kiss",
"I should've walked away","It was a long hot night",
"She made it easy", "she made it feel right",
"But now it's over", "the moment has gone",
"I followed my hands not my head, I know I was wrong","Oh I, I just died in your arms tonight",
"It must've been something you said",
"Oh I, I just died in your arms tonight",
"It must've been some kind of kiss"],
        url: "https://www.youtube.com/watch?v=8ZIOkbrX_uU"
      },{
        title: "Locked Away",
        subtitle: "R.city ft. Adam Levine",
        description:["Io ti risponderei si a ogni domanda","If I got locked away and we lost it all today",
                      "Tell me honestly", "would you still love me the same?" ,
                      "If I showed you my flaws" , "if I couldn't be strong",
                      "Tell me honestly, would you still love me the same?","Now tell me, would you really ride for me?","Baby, tell me, would you die for me?","Would you spend your whole life with me?","Would you be there to always hold me down?","Tell me, would you really cry for me?","Baby, don't lie to me","If I didn't have anything?",
                      "I wanna know, would you stick around?","If I got locked away and we lost it all today",
                      "Tell me honestly", "would you still love me the same?" ,
                      "If I showed you my flaws" , "if I couldn't be strong",
                      "Tell me honestly, would you still love me the same?"],
        url: "https://www.youtube.com/watch?v=0m6O7vzjVro"
      },{
        title: "Locked ot of Heaven",
        subtitle: "Bruno Mars",
        description:["Never had much faith in love or miracles",
                      "Never wanna put my heart on the line ",
                      "But swimming in your water's something spiritual" ,
                      "I'm born again every time you spend the night","'Cause your sex takes me to paradise",
                      "Yeah, your sex takes me to paradise",
                      "And it shows",
                      "Yeah, yeah, yeah"],
        url: "https://www.youtube.com/watch?v=OK_b2-w0u60"
      },{
        title: "Drive By",
        subtitle: "Train",
        description:["On the other side of a street I knew",
                      "Stood a girl that looked like you",
                      "I guess that's déjà vu",
                      "But I thought this can't be true 'cause",
                      "You moved to west L.A., or New York or Santa Fe",
                      "Or wherever, to get away from me","Oh, but that one night, was more than just right",
                      "I didn't leave you 'cause I was all through",
                      "Oh, I was overwhelmed", "and frankly scared as hell",
                      "Because I really fell for you",
                      "Oh, I swear to you", "I'll be there for you",
                      "This is not a drive by",
                      "Just a shy guy, looking for a two-ply Hefty bag",
                      "To hold my love",
                      "When you move me", "everything is groovy",
                      "They don't like it sue me", "mhmm the way you do me",
                      "Oh, I swear to you, I'll be there for you",
                      "This is not a drive by","Please believe that when I leave",
                      "There's nothing up my sleeve but love for you",
                      "And a little time to get my head together too"],
        url: "https://www.youtube.com/watch?v=maklLfjCO90"
      }
      ,{
        title: "Should i Stay or should i go?",
        subtitle: "The Clash",
        description:["Darling, you got to let me know",
"Should I stay, or should I go?",
"If you say that you are mine",
"I'll be here till the end of time",
"So you got to let me know",
"Should I stay, or should I go?",
"It's always tease, tease, tease",
"You're happy when I'm on my knees",
"One day it's fine, and next it's black",
"So if you want me off your back",
"Well, come on and let me know",
"Should I stay, or should I go?","This indecision's bugging me",
"If you don't want me, set me free",
"Exactly whom I'm supposed to be",
"Don't you know which clothes even fit me?",
"Come on and let me know",
"Should I cool it, or should I blow?"],
        url: "https://www.youtube.com/watch?v=KPeT0jTcWGU"
      },{
        title: "Take on me!",
        subtitle: "A-ha",
        description:["We're talking away",
                      "I don't know what I'm to say",
                      "I'll say it anyway",
                      "Today is another day to find you",
                      "Shyin' away",
                      "Oh, I'll be comin' for your love, okay",
                      "Take on me",
                      "Take me on","I'll be gone",
                      "In a day or two",
                      "So needless to say",
                      "I'm odds and ends",
                      "But I'll be stumblin' away",
                      "Slowly learnin' that life is okay",
                      "Say after me",
                      "It's no better to be safe than sorry",
                      "All the things that you say, yeah",
                      "Is it life or just to play my worries away?",
                      "You're all the things I've got to remember",
                      "You're shyin' away",
                      "I'll be comin' for you anyway",
                      "sei tu per me","e io sono per te"],
        url: "https://www.youtube.com/watch?v=kmDBDn8Ju6w"
      },
       {
        title: "Walking The Wire",
        subtitle: "Imagine Dragons",
        description:["Do you feel the same when I'm away from you?","Do you know the line that I'd walk for you?","We could turn around or we could give it up","But we'll take what comes, take what comes","Oh, the storm is raging against us now","If you're afraid of falling, then don't look down ","But we took the step, oh, we took the leap","And we'll take what comes, take what comes","We're walking the wire, love,We couldn't be higher up","There's nights we had to just walk away","And there's tears we'll cry, but those tears will fade","It's a price you pay when it comes to love","Oh, I'll take your hand when thunder roars","And I'll hold you close, I'll stay the course","I promise you from up above","That we'll take what comes, take what comes, love","We're walking the wire, love,So, look out down below,We're walking the wire"],
        url: "https://www.youtube.com/watch?v=1nv9br7P7g0"
      },{
        title: "Bitter Sweet Symphony",
        subtitle: "The Verve",
        description:["'Cause it's a bittersweet symphony, that's life","I'll take you down the only road I've ever been down","You know the one that takes you to the places where all the veins meet, yeah","No change, I can change, But I'm here in my mold","Have you ever been down?","Well, I've never prayed but tonight I'm on my knees","I let the melody shine, let it cleanse my mind, I feel free now","But the airwaves are clean and there's nobody singin' to me now","And I'm a million different people, From one day to the next","I'll take you down the only road I've ever been down","You know I can change, I can change","I can't change my mold, no, no, no, no"],
        url: "https://www.youtube.com/watch?v=DGC0a4cby5c"
      },
       {
        title: "Whatever It Takes",
        subtitle: "Imagine Dragons",
        description:["Falling too fast to prepare for this","Everybody waiting for the fall of man","Everybody praying for the end of times","Everybody hoping they could be the one","I was born to run, I was born for this","Run me like a racehorse, Pull me like a ripcord","I wanna be the slip Word upon your lip, Letter that you rip","Break me down and build me up","Whatever it takes, 'Cause I love the adrenaline in my veins","I do whatever it takes, 'Cause I love how it feels when I break the chains","Yeah, take me to the top I'm ready for, 'Cause I love the adrenaline in my veins","Always had a fear of being typical, Looking at my body feeling miserable","I wanna be invisible, Looking at my years like a martyrdom","Never be enough, I'm the prodigal son","I was born to run, I was born for this","Working onto something that I'm proud of, out of the box","I'm an apostrophe","I'm just a symbol to remind you that there's more to see","I'm just a product of the system, a catastrophe, And yet a masterpiece","I do what it takes","Yeah, take me to the top, I'm ready for whatever it takes, 'Cause I love the adrenaline in my veins"],
        url: "https://www.youtube.com/watch?v=UsuF4jJ4sgA"
      },{
        title: "More than a feeling",
        subtitle: "Boston",
        description:["Turned on some music to start my day, I lost myself in a familiar song","I closed my eyes and I slipped away","It's more than a feeling, When I hear that old song they used to play", "I begin dreaming, 'Til I see Marianne walk away, I see my Marianne walkin' away","So many people have come and gone, Their faces fade as the years go by","Yet I still recall as I wander on, As clear as the sun in the summer sky", "I hide in my music, forget the day, and dream of a girl I used to know","I closed my eyes and she slipped away, She slipped away","It's more than a feeling, When I hear that old song they used to play", "I begin dreaming, 'Til I see my Marianne walkin' away"],
        url: "https://www.youtube.com/watch?v=gwIQpmXc_ZA"
      },{
        title: "My Only Angel",
        subtitle: "Aerosmith, YUNGBLUD",
        description:["Would you cry if I called you my angel?","Gotta leave, gotta leave, gotta leave you one more time","My pretty little poison","I'll taste you in the morning","Drink you in the evening","Won't rest 'til I find you","won't rest 'til I light you one last time","Take it when you want it","Never when you need it","Meet up in an island","Tell me all your problems one last time","You say you wanna keep me around your little finger","Don't know where you'll find me" ,"But I hope that you'll find me one last time","I had to face the fact that I should let you know","That after all this time","The show will still go on","But I need a little something to remember you by","Would you cry, my only angel?","Gotta leave, gotta leave, gotta leave you far behind"],
        url: "https://www.youtube.com/watch?v=bTOWDRL1KbA"
      },{
        title: "So Lonely",
        subtitle: "Police",
        description:["Well someone told me yesterday","That when you throw your love away","You act as if you just don't care","But I just can't convince myself","I couldn't live with no one else","And I can only play that part","And sit and nurse my broken heart","Now no one's knocked upon my door","For a thousand years or more","All made up and nowhere to go","Welcome to this one man show","Just take a seat they're always free","In this theater that I call my soul, I always play the starring role"],
        url: "https://www.youtube.com/watch?v=60M_yIDzMcw"
      },
       {
        title: "Lovesick",
        subtitle: "Maroon 5",
        description:["Lovesick, you know I can't fight it anymore","'Cause I love it, the way my heart drops to the floor","I've been searchin' high and low","Baby, baby, where'd you go?","My starlight, my firefly","Like all night, my whole life","For someone like you to really take my breath away","And I can't be lonely, no","You gon' be the death of me","You got me lovesick, But I love it ","Lovesick, I'm falling, I can't be trusted","If that's what you want, then rush in, Trust me when I say, I want this, want this","'Cause I love it, the way my heart drops to the floor, You got me lovesick, lovesick (but I love it)"],
        url: "https://www.youtube.com/watch?v=zAVqPCuYN4k"
      },
       {
        title: "Maps",
        subtitle: "Maroon 5",
        description:["I miss the taste of a sweeter life","I miss the conversation","I like to think that we had it all, We drew a map to a better place","But on that road, I took a fall","Oh, baby, why did you run away?","I hear your voice in my sleep at night, Hard to resist temptation","'Cause something strange has come over me, And now, I can't get over you","So I'm following the map that leads to you, Ain't nothing I can do"],
        url: "https://www.youtube.com/watch?v=_sIeccYNLKI"
      },,
      {
        title: "Fairytale",
        subtitle: "Alexander Rybak",
        description:["Years ago, when I was younger","I kinda liked a girl I knew","She was mine and we were sweethearts","That was then, but then it's true","I'm in love with a fairytale, Even though it hurts","'Cause I don't care if I lose my mind, I'm already cursed","Every day, we started fighting","Every night, we fell in love","No one else could make me sadder","But no one else could lift me high above","I don't know what I was doing, When suddenly, we fell apart","Nowadays, I cannot find her, But when I do, we'll get a brand new start","I'm in love with a fairytale, Even though it hurts","'Cause I don't care if I lose my mind, I'm already cursed"],
        url: "https://www.youtube.com/watch?v=1rVY08gRGmA"
      },
       {
        title: "Next to Me",
        subtitle: "Imagine Dragons",
        description:["Something about the way that you","walked into my living room","Casually and confident, looking at the mess I am","But still you, still you want me?","There's something about the way that you, always see the pretty view","Overlook the blooded mess","Always looking effortless","And still you, still you want me?","I got no innocence, faith ain't no privilege","Stress lines and cigarettes","politics, and deficits","But still you, still you want me?","Oh, I always let you down","You're shattered on the ground","Still, I find you there, Next to meeee","And ooooh, stupid things I do","I'm far from good, it's true","But still, I find you, Neeeeext to me","So thank you, for taking a chance on me","I know it isn't easy, But I hope to be worth it"],
        url: "https://www.youtube.com/watch?v=-C_rvt0SwLE"
      },{
        title: "Every breath you take",
        subtitle: "Police",
        description:["Every breath you take And every move you make","Every step you take, Every bond you break","Every single day And every word you say","Every game you play, Every night you stay","Oh, can't you see You belong to me?","How my poor heart aches with every step you take?","I dream at night, I can only see your face","I look around, but it's you I can't replace","I feel so cold, and I long for your embrace","Every move you make, Every step you take, I'll be watching you"],
        url: "https://www.youtube.com/watch?v=FXozwCdSLb0"
      },
       {
        title: "Cant help Falling in Love",
        subtitle: "Elvis Presley",
        description:["Wise men say...","Only fools rush in","But I can't help","Falling in love with you","Shall I stay? Would it be a sin?","Like a river flows surely to the sea","Darling, so it goes","Some things are meant to be","Take my hand","Take my whole life, too","For I can't help falling in love with you"],
        url: "https://www.youtube.com/watch?v=MqazV4hbu8E"
      },
       {
        title: "Birds",
        subtitle: "Imagine Dragons",
        description:["Two hearts, one valve","Two lives, one life","Sticking it out, letting you down, making it right","Seasons, they will change","Life will make you grow","Dreams will make you cry","Everything is temporary, everything will slide","Love will never dieeee","I know that,ooooooooohhh, birds fly in different directions","Oooooh I hope to see you again","Some nights, I think of you","Reliving the past, wishing it'd last, wishing and dreaming","When the moon is looking down, Shining light upon your ground","I'm flying up to let you see, That the shadow cast is me","I know that, birds fly in different directions, Oh I hope to see you again, so fly high, so fly high"],
        url: "https://www.youtube.com/watch?v=XPRvQzu5KLI"
      },
       {
        title: "What Lovers Do",
        subtitle: "Maroon 5",
        description:["Said let's get one thing straight now, baby","Tell me, tell me if you love me or not","I'll bet the house on you, am I lucky or not?","Been wishin' for you, am I lucky or not?","Lucky or not, lucky or not?","Been wishin' for you, Ooh, ooh Tryna do what lovers do","You gon' make me hit you with that laydown, baby","You know what I need, out the gate now, baby","Aren't we too grown for games?","Aren't we too grown to play around?","Young enough to chase","But old enough to know better","Are we too grown for changin'?","Are we too grown to mess around?","Ooh, and I can't wait forever, baby","Both of us should know better","Been wishin' for you, Tryna do what lovers do"],
        url: "https://www.youtube.com/watch?v=5Wiio4KoGe8"
      },{
        title: "Stray Heart",
        subtitle: "Green Day",
        description:["I lost my way, oh baby, this stray heart","Went to another, Can you recover, baby?","Oh, you're the only one that I'm dreamin' of","Your precious heart, Was torn apart by me","And you, you're not alone","And now I'm where I belong","I'll hold your heart and never let go","Everything that I want, I want from you","But I just can't have you","I said a thousand times, and now a thousand one","We'll never part","I'll never stray again from you","This dog is destined for a home to your heart","And you, you're not alone","And now I'm where I belong","I'll hold your heart and never let go","Everything that I want, I want from you","But I just can't have you"],
        url: "https://www.youtube.com/watch?v=P2GFl6bM4Wo"
      },{
        title: "Follow you",
        subtitle: "Imagine Dragons",
        description:["You know I got your number, number all night","I'm always on your team","I got your back alright","taking those losses if it treats you right","I want to put you into the spotlight","If the world would only know","what you've been holding back","Heart attacks every night","Oh, you know it's not right","I will follow you way down wherever you may go","I'll follow you way down to your deepest low","I'll always be around wherever life takes you","You know I'll follow you","Call you up, you've been cryin', cryin' all night","You're only disappointed in yourself, alright","I wanna take you into the sunlight","You're not the type to give yourself enough love","I wish that I could fix it, I could fix it for you","But instead I'll be right here comin' through","I will follow you way down wherever you may go","I'll follow you way down to your deepest low","I'll always be around wherever life takes you","You know I'll follow you"],
        url: "https://www.youtube.com/watch?v=1DoI5WTjd3w"
      },{
        title: "Hey soul sister",
        subtitle: "Train",
        description:["I knew I wouldn't forget you","And so I went and let you blow my mind","The smell of you in every single dream I dream","I knew when we collided, You're the one I had decided who's one of my kind","Hey, soul sister, The way you move ain't fair you know","I don't wanna miss a single thing you do tonight","You gave my life direction, A game show love connection we can't deny","I'm so obsessed, My heart is bound to beat right out of my untrimmed chest","I believe in you, like a virgin you're madonna, And I'm always gonna wanna blow your mind","So gangsta, I'm so thug, You're the only one I'm dreaming of","I want the world to see You'll be with me","Hey, soul sister, i don't wanna miss a single thing you dooooooo..."],
        url: "https://www.youtube.com/watch?v=Iurs-gVL48Y"
      },{
        title: "Counting Stars",
        subtitle: "OneRepublic",
        description:["Lately, I been, I been losin' sleep","Dreamin' about the things that we could be","But baby, I been, I been prayin' hard, Said, no more countin' dollars, we'll be countin' stars","Old, but I'm not that old, Young, but I'm not that bold","And I don't think the world is sold on just doin' what we're told","I feel somethin' so right doin' the wrong thing","And I feel somethin' so wrong doin' the right thing","I couldn't lie, Everything that kills me makes me feel alive (tu )","I feel your love, and I feel it burn","Down this river, every turn","Make that money, watch it burn","Said, no more countin' dollars, we'll be countin' stars"],
        url: "https://www.youtube.com/watch?v=yY3wc58yo2A"
      },{
        title: "Do i Wanna Know?",
        subtitle: "Artic Monkeys",
        description:["Are there some aces up your sleeve? ","Have you no idea that you're in deep?","I've dreamt about you nearly every night this week","'Cause there's this tune I found","That makes me think of you somehow an' I play it on repeat","Do I wanna know? If this feelin' flows both ways?","Sad to see you go, Was sorta hopin' that you'd stay","Baby, we both know, That the nights were mainly made","For saying things that you can't say tomorrow day","Ever thought of calling when you've had a few? 'Cause I always do","Maybe I'm too busy being yours to fall for somebody new","Now, I've thought it through","So, have you got the guts?","Been wondering if your heart's still open","And if so, I wanna know what time it shuts","I don't know if you feel the same as I do","But we could be together if you wanted to","Was sorta hoping that you'd stay","Too busy being yours to fall, Do you want me crawling back to you?"],
        url: "https://www.youtube.com/watch?v=PUL2mVdt3xo"
      },{
        title: "Dont Cry",
        subtitle: "Guns And Roses",
        description:["Talk to me softly","There's something in your eyes","Don't hang your head in sorrow","And please don't cry","I know how you feel inside, I, I've been there before","Something is changing inside you, And don't you know?","Don't you cry tonight","I still love you, baby","Don't you cry tonight","There's a heaven above you, baby","Give me a whisper,And give me a sigh","Give me a kiss, before you tell me goodbye","Don't you take it so hard now","And please don't take it so bad","I'll still be thinking of you and the times we had, baaaaaaaby","And please remember that I never lied","and please remember how I felt inside","You got to make it your own way","But you'll be alright now, sugar","You'll feel better tomorrow","Come the morning light now, baby","Don't you cry tonight, There's a heaven above you, baby","And don't you cry, don't you ever cry","Don't you cry tonight"],
        url: "https://www.youtube.com/watch?v=x2W0P9PDU9U"
      },
       {
        title: "It could have been me",
        subtitle: "The Struts",
        description:["Don't wanna live as an untold story","Rather go out in a blaze of glory","I can't hear you, I don't fear you","I'll live now 'cause the bad die last","Dodging bullets with your broken past","I can't hear you, I don't fear you, now","Wrapped in your regret, What a waste of blood and sweat oh oh oh","I wanna taste love and pain","Wanna feel pride and shame","I don't wanna take my time, Don't wanna waste one line","I wanna live better days","Never look back and say","Could have been me, it could have been me","Don't wanna live as an unsung melody","I'd rather listen to the silence telling me","I can't hear you, I won't fear you","What a waste of blood and sweat","I wanna taste love and pain","Wanna feel pride and shame","I don't wanna take my time, Don't wanna waste one line","I wanna live better days","Never look back and say","Could have been me, it could have been me"],
        url: "https://www.youtube.com/watch?v=ARhk9K_mviE"
      },
       {
        title: "I dont wanna miss a thing",
        subtitle: "Aerosmith",
        description:["I could stay awake just to hear you breathing","Watch you smile while you are sleeping","While you're far away and dreaming","I could spend my life in this sweet surrender","I could stay lost in this moment forever","Where a moment spent with you is a moment I treasure","Don't wanna close my eyes","I don't wanna to fall asleep","'Cause I'd miss you baby","And I don't wanna miss a thing","Lying close to you, feeling your heart beating (assai)","And I'm wondering what you're dreaming","Wondering if it's me you're seeing","Then I kiss your eyes, And thank God we're together","And I just wanna stay with you","In this moment forever,Forever and ever","I don't wanna miss one smile And I don't wanna miss one kiss","And I just wanna be with you","And I just wanna hold you close","I feel your heart so close to mine","And just stay here in this moment, For all the rest of time","I Don't wanna close my eyes","I don't wanna to fall asleep","'Cause I'd miss you baby","And I don't wanna miss a thing"],
        url: "https://www.youtube.com/watch?v=T-doQhcwDS8"
      },
       {
        title: "Secrets",
        subtitle: "One Republic",
        description:["I need another story, Something to get off my chest","My life gets kinda boring, Need something that I can confess","Come by it honestly, I swear","Thought you saw me wink, no, I've been on the brink","So tell me what you want to hear","Something that will light those ears","I'm sick of all the insincere","So I'm gonna give all my secrets away","My God, amazing how we got this far","It's like we're chasing all those stars","And every day I see the news, All the problems that we could solve","This time, Don't need another perfect lie","Got no reason, got no shame","Got no family I can blame","Just don't let me disappear","I'ma tell you everything","So tell me what you want to hear","Something that will light those ears","I'm sick of all the insincere","So I'm gonna give all my secrets away"],
        url: "https://www.youtube.com/watch?v=ZFGDRzyPXE0"
      },
      {
        title: "happy together",
        subtitle: "the turtles",
        description:["Imagine me and you, I do","I think about you day and night, it's only right","To think about the girl you love and hold her tight","So happy together","And you say you belong to me, and ease my mind","Imagine how the world could be, so very fine","So Happy toghether","I can't see me lovin' nobody but you","For all my life","When you're with me, baby, the skies'll be blue, for all my life","Me and you, and you and me, No matter how they toss the dice, it had to be","The only one for me is you, and you for me","So happy together"],
        url: "https://www.youtube.com/watch?v=WiPcgmSQ5uI"
      },
       {
        title: "Cliche",
        subtitle: "MGK",
        description:["Tell me, would you wait for me? Baby, I'm a rolling stone","I got a lotta right in me, But I don't wanna say this wrong","Tell me, would you stay with me?, Maybe we could make this home","You should run away with me","Even if you're better off alone","I like that you like me","I kissed your lips, you got good taste","I could close my eyes and draw your face","If you take this chance, I'll give you oxygen to breathe me in","But I'll say sorry in advance","My head's a mess, It's like that every day","I'll try my best, It sounds cliché, but","Tell me, would you wait for me? Baby, I'm a rolling stone","I got a lotta right in me, But I don't wanna say this wrong","Tell me, would you stay with me?, Maybe we could make this home","You should run away with me","Even if you're better off alone"],
        url: "https://www.youtube.com/watch?v=pAVkr5SG02s"
      },
       {
        title: "Come and get your love",
        subtitle: "Redbone",
        description:["Hey (hey) what's the matter with your head, yeah"," with your mind and your sign and oh","Baby, find it, come on and find it","'cause you're fine, And you're mine, and you look so divine","Come and get your love","Come and get your love"],
        url: "https://www.youtube.com/watch?v=wFwYcHjP-YU"
      },,
       {
        title: "im a Believer",
        subtitle: "Smash Mouth",
        description:["I thought love was only true in fairy tales","Meant for someone else but not for me","Love was out to get me, That's the way it seemed","Disappointment haunted all my dreams","And then I saw her face, Now I'm a believer","And not a trace, Of doubt in my mind","I'm in love","I'm a believer, I couldn't leave her if I tried","I thought love was more or less a giving thing","The more I gave the less I got, oh yeah","What's the use in trying? All you get is pain","When I wanted sunshine I got rain","And then I saw her face, Now I'm a believer","And not a trace, Of doubt in my mind","I'm in love","I'm a believer, I couldn't leave her if I tried"],
        url: "https://www.youtube.com/watch?v=bWqmc8qxEps"
      },{
        title: "Living on a Prayer",
        subtitle: "Bon Jovi",
        description:["It's tough,so tough","She brings home her pay, for love, oh love","She says, We've gotta hold on to what we've got","It doesn't make a difference if we make it or not","We got each other, and that's a lot for love","We'll give it a shot","Oh, we're halfway there","oh, livin' on a prayer","Take my hand, we'll make it, I swear","ohhhh , living on a prayer"],
        url: "https://www.youtube.com/watch?v=2ognf_oRQWM"
      },
       {
        title: "The reason",
        subtitle: "Hoobastank",
        description:["I'm not a perfect person","There's many things I wish I didn't doooo","But I continue learning","I never meant to do those things to youuuuu","And so I have to say before I go","That I just want you to knoooow","I've found a reason for me","To change who I used to be","A reason to start over newwwwww","And the reason is you","I'm sorry that I hurt youuuu","It's somethin' I must live with every day","And all the pain I put you through","I wish that I could take it all awayyy","And be the one who catches all your teeeeears","That's why I need you to hear","I've found a reason for me","To change who I used to be","A reason to start over newwwwww","And the reason is you"],
        url: "https://www.youtube.com/watch?v=-F9nCQtxkRw"
      },
       {
        title: "Since i dont have you",
        subtitle: "Guns And Roses",
        description:["I don't have plans and schemes","And I don't have hopes and dreams","I, I, I don't have anything","Since, i don't have youuuuuuu","And I don't have fond desires","And I don't have happy hours","I, I, I don't have anything","Since, i don't have youuuuuuu","Happiness and I guess","I never will again","When you walked out on me","In walked old misery","And he's been here since theeeeen","I don't have love to share","And I don't have one who cares","I, I, I don't have anything","Since I don't have youuuuu (non sono così tragico (forse), ma che canzone)"],
        url: "https://www.youtube.com/watch?v=x2W0P9PDU9U"
      },
       {
        title: "Narcotic",
        subtitle: "Liquido",
        description:["So you face it with a smile","There is no need to cry","Will you still recall my name","And the month it all began?","Will you release me with a kiss?","If I have, how could I fail?","Did I fear the consequence?","Dazed by careless words, Cozy in my mind","I don't mind, I think so","I will let you go","Now you shaped that liquid wax","Sweet devotion, my delight","Oh, you're such a pretty one","And the naked thrills of flesh and skin","Would tease me through the night","Now, I hate to leave you bare","If you need me, I'll be there","Don't you ever let me down","And I touched your face","And I called your name","Like an addicted to cocaine calls for the stuff he'd rather blame.","And I called your name, My cocaine...","I don't mind,I think so","I will let you go."],
        url: "https://www.youtube.com/watch?v=X2Md9upR2K0"
      }
       
 
    ]
  },
  {
    name: "Playlist Energia",
    description: "Per caricarsi",
    songs: [
      
       {
        title: "Love me Again",
        subtitle: "John Newman",
        description:["Know I've done wrong","left your heart torn, Is that what devils do?" ,"Took you so low, where only fools go","I shook the angel in you","It's unforgivable,I stole and burnt your soul,Is that what demons do?","Now I'm rising from the ground, Rising up to you, Filled with all the strength I found,There's nothing I can't do","I need to know now, know now, Can you love me again?"],
        url: "https://www.youtube.com/watch?v=MmmRjwgVVOw"
      },
      ,{
        title: "Somebody that i used to know",
        subtitle: "Gothe",
        description:["Now and then I think of when we were together","Like when you said you felt so happy you could die","Told myself that you were right for me","But that was love","And it's an ache I still remember","You can get addicted to a certain kind of sadness","Like resignation to the end, always the end","So, when we found that we could not make sense","Well, you said that we would still be friends","But I'll admit that I was glad it was over","But you didn't have to cut me off","Make out like it never happened and that we were nothing","And I don't even need your love, But you treat me like a stranger and that feels so rough","bellissima canzone, ma per me non sarai mai una sconosciuta"],
        url: "https://www.youtube.com/watch?v=t_dLoOXy8PA"
      }
      ,{
        title: "Without you",
        subtitle: "David Guetta, Usher",
        description:["I can't win, I can't reign","I will never win this game without you","I am lost, I am vain","I will never be the same without you","I won't run, I won't fly","I will never make it by without you","I can't rest, I can't fight","All I need is you and I","Can't erase, so I'll take blame","But I can't accept that we're estranged","I can't quit now, this can't be right","I can't take one more sleepless night without you","I can't look, I'm so blind","I lost my heart, without you"],
        url: "https://www.youtube.com/watch?v=4KTJ5qy8XWs"
      },
       {
        title: "We are the People",
        subtitle: "Empire Of The Sun",
        description:["We can remember","We share in each other","Nearer than farther","We are the people that rule the world"," A force running in every boy and girl","All rejoicing in the world","Take me now, we can try", "We lived an adventure","Love in the summer","Reminiscing other times of life","The feeling was stronger, The shock hit eleven"," got lost in your eyeeees", "I can′t do well,When I think you're gonna leave me","But I know I try...","Are you gonna leave me now?" ,"Can′t you be believing now?","I know everything about you"," You know everything about me ","We know everything about us"],
        url: "https://www.youtube.com/watch?v=J7MFQAB6R-Q"
      },
       {
        title: "stereo Heart",
        subtitle: "Adam Levine",
        description:["My heart's a stereo","It beats for your, so listen close","Hear my thoughts in every note","Make me your radio, Turn me up when you feel low","This melody was meant for you, Just sing along to my stereo","If I was just another dusty record on the shelve","Will you blow me off and play me like everybody else","Furthermore, I apologize for make skipping tracks","Cause holding grudges over love is ancient artifacts","If I could only find a note to make you understand","I sing a song and the image grab you by the head","Keep me stuck inside your head, like your favorite tune","And know my heart is a stereo, the only place for you","And all I ask is that you don't get mad at me","You never know we come and go like we're on a interstate","This melody was meant for you, So sing along to my stereo"],
        url: "https://www.youtube.com/watch?v=Mblkcs4fxsw"
      },
       {
        title: "It could have been me",
        subtitle: "The Struts",
        description:["Don't wanna live as an untold story","Rather go out in a blaze of glory","I can't hear you, I don't fear you","I'll live now 'cause the bad die last","Dodging bullets with your broken past","I can't hear you, I don't fear you, now","Wrapped in your regret, What a waste of blood and sweat oh oh oh","I wanna taste love and pain","Wanna feel pride and shame","I don't wanna take my time, Don't wanna waste one line","I wanna live better days","Never look back and say","Could have been me, it could have been me","Don't wanna live as an unsung melody","I'd rather listen to the silence telling me","I can't hear you, I won't fear you","What a waste of blood and sweat","I wanna taste love and pain","Wanna feel pride and shame","I don't wanna take my time, Don't wanna waste one line","I wanna live better days","Never look back and say","Could have been me, it could have been me"],
        url: "https://www.youtube.com/watch?v=ARhk9K_mviE"
      },
       {
        title: "What Lovers Do",
        subtitle: "Maroon 5",
        description:["Said let's get one thing straight now, baby","Tell me, tell me if you love me or not","I'll bet the house on you, am I lucky or not?","Been wishin' for you, am I lucky or not?","Lucky or not, lucky or not?","Been wishin' for you, Ooh, ooh Tryna do what lovers do","You gon' make me hit you with that laydown, baby","You know what I need, out the gate now, baby","Aren't we too grown for games?","Aren't we too grown to play around?","Young enough to chase","But old enough to know better","Are we too grown for changin'?","Are we too grown to mess around?","Ooh, and I can't wait forever, baby","Both of us should know better","Been wishin' for you, Tryna do what lovers do"],
        url: "https://www.youtube.com/watch?v=5Wiio4KoGe8"
      },
       {
        title: "Wings",
        subtitle: "Armand Van Helden",
        description:["I had my reasons and I had my doubts","Oh, I left my feelings, running around this time","Yeah, I admit I was foolish, but I found a way out","It's you that gives me love you believe in, now","I put my hands up in the sky, and I say","That I won't be letting you down","That I won't be letting you down","I won't let you down, Let you down again","I won't be leaving, I'll be sticking around","'Cause I got this feeling, to pick you up when you're down","You gave me something I needed","I won't let you down, let you down again","No, I won't be letting you down"],
        url: "https://www.youtube.com/watch?v=Gh6JkwZ-5QM"
      },
       {
        title: "Sunflower",
        subtitle: "Post Malone",
        description:["Needless to say, I keep it in check","She was a bad-bad, nevertheless","Callin' it quits now, baby, I'm a wreck","Crash at my place, baby, you're a wreck","Thinkin' in a bad way, losin' your grip","Screamin' at my face, baby, don't trip","Someone took a big L, don't know how that fel","Ohhhhh, Some things you just can't refuse","She wanna ride me like a cruise","And I'm not tryna lose","Then you're left in the dust","Unless I stuck by ya, I think your love would be too much","You're the sunflower, You're the sunflower","Every time I'm leavin' on you","You don't make it easy, no","Wish I could be there for you, Give me a reason to","Every time I'm walkin' out","I can hear you tellin' me to turn around","Fightin' for my trust and you won't back down","Even if we gotta risk it all right now","I know you're scared of the unknown","You don't wanna be alone","I know I always come and go","But it's out of my control","You're the sunflower, I think your love would be too much"],
        url: "https://www.youtube.com/watch?v=ApXoWvfEYVU"
      },
       {
        title: "More than you know",
        subtitle: "Alesso",
        description:["I just need to get it off my chest","You should know that baby you're the best","Yeah, more than you know Yeah, more than you know","I saw it coming, from miles away, I better speak up if I got something to say","You had your reasons, you had a few","But you knew that I would go anywhere for you","Your good intentions are sweet and pure","But they can never tame a fire like yours","Right where you wanted, down on my knees","Come a little closer, let me taste your smile","Ain't no going back the way you look tonight","I see it in your eyes","I just need to get it off my chest","More than you know"],
        url: "https://www.youtube.com/watch?v=GsF05B8TFWg"
      },
       {
        title: "Do i Wanna Know?",
        subtitle: "Artic Monkeys",
        description:["Are there some aces up your sleeve? ","Have you no idea that you're in deep?","I've dreamt about you nearly every night this week","'Cause there's this tune I found","That makes me think of you somehow an' I play it on repeat","Do I wanna know? If this feelin' flows both ways?","Sad to see you go, Was sorta hopin' that you'd stay","Baby, we both know, That the nights were mainly made","For saying things that you can't say tomorrow day","Ever thought of calling when you've had a few? 'Cause I always do","Maybe I'm too busy being yours to fall for somebody new","Now, I've thought it through","So, have you got the guts?","Been wondering if your heart's still open","And if so, I wanna know what time it shuts","I don't know if you feel the same as I do","But we could be together if you wanted to","Was sorta hoping that you'd stay","Too busy being yours to fall, Do you want me crawling back to you?"],
        url: "https://www.youtube.com/watch?v=PUL2mVdt3xo"
      },
       {
        title: "happy together",
        subtitle: "the turtles",
        description:["Imagine me and you, I do","I think about you day and night, it's only right","To think about the girl you love and hold her tight","So happy together","And you say you belong to me, and ease my mind","Imagine how the world could be, so very fine","So Happy toghether","I can't see me lovin' nobody but you","For all my life","When you're with me, baby, the skies'll be blue, for all my life","Me and you, and you and me, No matter how they toss the dice, it had to be","The only one for me is you, and you for me","So happy together"],
        url: "https://www.youtube.com/watch?v=WiPcgmSQ5uI"
      },
       {
        title: "Reload",
        subtitle: "Various Artists",
        description:["When night has become the day, They're sending you far away","When everything starts to fade, You don't have to be afraid","Take my hand and reload","This is free love","When you wanna get off the ground, But gravity pulls you down","And when you feel out of place, You don't have to be afraid","Take my hand and reload, This is free love","That's what we are made of"],
        url: "https://www.youtube.com/watch?v=xlcxWHsCojU"
      },
       {
        title: "Marvin Gaye",
        subtitle: "Charlie Puth",
        description:["Let's Marvin Gaye and get it on, You got the healin' that I want","Just like they say it in the song, Until the dawn","We got this king-size to ourselves","Don't have to share with no one else","Don't keep your secrets to yourself","It's Kama Sutra show and tell, yeah","there's lovin' in your eyes that pulls me closer","It's so subtle,  I'm in trouble","But I love to be in trouble with you","Let's Marvin Gaye and get it on","You've got to give it up to me","And when you leave me all alone","I'm like a stray without a home","I'm like a dog without a bone","Just like they say it in the song, until the dawn","let's Marvin Gaye and get it on"],
        url: "https://www.youtube.com/watch?v=a5CslyeXmOE"
      },
       {
        title: "Left and right",
        subtitle: "Charlie Puth - Jungkook",
        description:["Memories follow me left and right","I can feel you over here, I can feel you over here","You take up every corner of my mind, What you gon' do now?","Ever since the day you went away, No, I don't know how","How to erase your body from out my brain","Maybe I should just focus on me instead","Are the nights we were tangled up in your bed","Oh, no (oh, no) You're goin' 'round in circles, Got you stuck up in my head, yeah","Did you know you're the one that got away?","And even now, baby, I'm still not okay","Did you know that my dreams, they're all the same","Every time I close my eyes....","Memories follow me left and right","I can feel you over here, I can feel you over here","You take up every corner of my mind"],
        url: "https://www.youtube.com/watch?v=Otkibvs-aAs"
      },
       {
        title: "Cliche",
        subtitle: "MGK",
        description:["Tell me, would you wait for me? Baby, I'm a rolling stone","I got a lotta right in me, But I don't wanna say this wrong","Tell me, would you stay with me?, Maybe we could make this home","You should run away with me","Even if you're better off alone","I like that you like me","I kissed your lips, you got good taste","I could close my eyes and draw your face","If you take this chance, I'll give you oxygen to breathe me in","But I'll say sorry in advance","My head's a mess, It's like that every day","I'll try my best, It sounds cliché, but","Tell me, would you wait for me? Baby, I'm a rolling stone","I got a lotta right in me, But I don't wanna say this wrong","Tell me, would you stay with me?, Maybe we could make this home","You should run away with me","Even if you're better off alone"],
        url: "https://www.youtube.com/watch?v=pAVkr5SG02s"
      },
       {
        title: "Closer",
        subtitle: "The Chainsmokers",
        description:["Hey, I was doing just fine before I met you","I know it breaks your heart","Moved to the city in a broke-down car, and","Four years, no calls","Now you're lookin' pretty in a hotel bar.","And I-I-I can't stop","So, baby, pull me closer in the backseat of your Rover","we ain't ever gettin' older","You look as good as the day I met you","I forget just why I left you, I was insane","So, baby, pull me closer, we ain't ever gettin' older"],
        url: "https://www.youtube.com/watch?v=25ROFXjoaAU"
      },
       {
        title: "Come and get your love",
        subtitle: "Redbone",
        description:["Hey (hey) what's the matter with your head, yeah"," with your mind and your sign and oh","Baby, find it, come on and find it","'cause you're fine, And you're mine, and you look so divine","Come and get your love","Come and get your love"],
        url: "https://www.youtube.com/watch?v=wFwYcHjP-YU"
      },
       {
        title: "take me out",
        subtitle: "Franz Ferdinand",
        description:["So if you're lonely","You know I'm here waiting for you","I'm just a shot away from you","And if you leave here, You leave me broken, shattered I lie","I know I won't be leaving here with you","I say, Don't you know? You say, You don't know","I say, Take me out"],
        url: "https://www.youtube.com/watch?v=A8IcedBzs14"
      },
       {
        title: "im a Believer",
        subtitle: "Smash Mouth",
        description:["I thought love was only true in fairy tales","Meant for someone else but not for me","Love was out to get me, That's the way it seemed","Disappointment haunted all my dreams","And then I saw her face, Now I'm a believer","And not a trace, Of doubt in my mind","I'm in love","I'm a believer, I couldn't leave her if I tried","I thought love was more or less a giving thing","The more I gave the less I got, oh yeah","What's the use in trying? All you get is pain","When I wanted sunshine I got rain","And then I saw her face, Now I'm a believer","And not a trace, Of doubt in my mind","I'm in love","I'm a believer, I couldn't leave her if I tried"],
        url: "https://www.youtube.com/watch?v=bWqmc8qxEps"
      },{
        title: "this is what it feels like",
        subtitle: "Armin Van Buuren",
        description:["Nobody here knocking at my door, The sound of silence, I can't take anymore","Nobody ringing my telephone now","Oh, how I miss such a beautiful sound","And I don't even know how I survive","I won't make it to the shore without your light","No, I don't even know if I'm alive","oh without you now, this is what it feels like","Nothing to hold but the memories and frames","Oh, they remind me of the battle I face","Oh, oh, oh without you now, this is what it feels like"],
        url: "https://www.youtube.com/watch?v=f8ZmYjPzPUE"
      },{
        title: "Best Day of My Life",
        subtitle: "American Authors",
        description:["I had a dream so big and loud","I jumped so high, I touched the clouds","I'm never gonna look back, woah","I'm never gonna give it up, no","Please don't wake me now","This is gonna be the best day of my life","The stars were burning so bright","The sun was out 'til midnight","I say we lose control (Control)","Just don't wake me now"],
        url: "https://www.youtube.com/watch?v=vJ9KFEJVISo"
      },{
        title: "Addicted to you",
        subtitle: "Avicii",
        description:["I don't know just how it happened","I let down my guard","Swore I'd never fall in love agai, But I fell hard","Guess I should have seen it coming, Caught me by surprise","Wasn't looking where I was going","I fell into your eyes","You came into my crazy world Like a cool and cleansing wave","Before I, I knew what hit me, baby","You were flowing through my veins","I'm addicted to you","Hooked on your love","Like a powerful drug","I can't get enough of","Lost in your eyes, Drowning in blue","Out of control, What can I do","Got me hypnotized, I'm getting high on love with you","I couldn't live without you now Oh, I know I'd go insane","I couldn't stand the pain","Lost in your eyes, Drowning in blue","Out of control, What can I do","Im addicted to you"],
        url: "https://www.youtube.com/watch?v=X6xokv_0cyQ"
      },{
        title: "Glad you Came",
        subtitle: "The Wanted",
        description:["The sun goes down, the stars come out","And all that counts is here and now","My universe will never be the same","I'm glad you came","You cast a spell on me","You hit me like the sky fell on me","And I decided you look well on me","So let's go somewhere no one else can see, you and me","Turn the lights out now","Now I'll take you by the hand","Can you spend a little time?","Time is slipping away","Away from us, so stay","Stay with me, I can make","Make you glad you came","My universe will never be the same","I'm glad you came"],
        url: "https://www.youtube.com/watch?v=I5GjALNHzPQ"
      },{
        title: "Under Control",
        subtitle: "Calvin Harris & Alesso",
        description:["I might be anyone, A lone fool out in the sun","Your heartbeat of solid gold","I love you, you'll never know","When the daylight comes, you feel so cold, you know","I'm too afraid of my heart to let you go","Waitin' for the fire to light","Feelin' like we could do right","Be the one that makes tonight","'Cause freedom is a lonely road","We're under control"],
        url: "https://www.youtube.com/watch?v=K0fYK-Bwc0g"
      },{
        title: "i could be the one",
        subtitle: "Avicii",
        description:["Do you think about me when you're all alone?","The things we used to do, we used to be","I could be the one to make you feel that way","I could be the one to set you free","When you need a way to beat the pressure down","When you need to find a way to breathe","If you wanna see me when the crowd is gone","Used to be so easy, can't you see?","I could be the one to make you feel that way","I could be the one to set you free"],
        url: "https://www.youtube.com/watch?v=fZcScHIS7Sg"
      },{
        title: "Sugar",
        subtitle: "Maroon 5",
        description:["I'm hurtin', baby, I'm broken down","I need your lovin', lovin', I need it now","I don't wanna be needin' your love","I just wanna be deep in your love","And it's killin' me when you're away","'Cause I really don't care where you are","I just wanna be there where you are","And I gotta get one little taste","Your sugar, yes, please","Won't you come and put it down on me?","I'm right here, 'cause I need Little love, a little sympathy","Yeah, you show me good lovin', make it all right","Need a little sweetness in my life","I want that red velvet, I want that sugar sweet","Don't let nobody touch it unless that somebody's me","I gotta be a man, there ain't no other way","And I wanna play no games, you don't gotta be afraid","Don't give me all that shy shit","Need a little sweetness in my life","Sugar, yes, please","Won't you come and put it down on me?"],
        url: "https://www.youtube.com/watch?v=Y-pEoGvuWKk"
      },{
        title: "Stray Heart",
        subtitle: "Green Day",
        description:["I lost my way, oh baby, this stray heart","Went to another, Can you recover, baby?","Oh, you're the only one that I'm dreamin' of","Your precious heart, Was torn apart by me","And you, you're not alone","And now I'm where I belong","I'll hold your heart and never let go","Everything that I want, I want from you","But I just can't have you","I said a thousand times, and now a thousand one","We'll never part","I'll never stray again from you","This dog is destined for a home to your heart","And you, you're not alone","And now I'm where I belong","I'll hold your heart and never let go","Everything that I want, I want from you","But I just can't have you"],
        url: "https://www.youtube.com/watch?v=P2GFl6bM4Wo"
      },{
        title: "We dont talk anymore",
        subtitle: "Charlie Puth",
        description:["We don't talk anymore","Like we used to do","We don't love anymore","What was all of it for?","I just heard you found the one you've been looking","I wish I would have known that wasn't me","'Cause even after all this time, I still wonder","Why I can't move on?","Just the way you did so easily","Don't wanna know, Kind of dress you're wearing tonight","If he's holding onto you so tight, The way I did before","I overdosed","Should've known your love was a game (so che non lo era)","Now I can't get you out of my brain","Oh, it's such a shame","I just hope you're lying next to somebody","Who knows how to love you like me","There must be a good reason that you're gone","Every now and then I think you might want me to","Come show up at your door","But I'm just too afraid that I'll be wrong","Don't wanna know","If you're looking into her eyes","If she's holding onto you so tight","Now I can't get you out of my brain","Oh, it's such a shame","That we don't talk anymore, like we used to do","We don't love anymore, What was all of it for?","Oh is such a shame"],
        url: "https://www.youtube.com/watch?v=MO6kDZckv5s"
      },{
        title: "Living on a Prayer",
        subtitle: "Bon Jovi",
        description:["It's tough,so tough","She brings home her pay, for love, oh love","She says, We've gotta hold on to what we've got","It doesn't make a difference if we make it or not","We got each other, and that's a lot for love","We'll give it a shot","Oh, we're halfway there","oh, livin' on a prayer","Take my hand, we'll make it, I swear","ohhhh , living on a prayer"],
        url: "https://www.youtube.com/watch?v=2ognf_oRQWM"
      },{
        title: "the less i know the better",
        subtitle: "Time Impala",
        description:["Someone said they left together","Not the greatest feeling ever","Said, Pull yourself together","Then I heard they slept together","Oh, the less I know the better","Oh, my love, can't you see yourself by my side?","Don't suppose you could convince your lover to change his mind?","So goodbye","She said, It's not now or never","Wait ten years, we'll be together","I said, Better late than never","Just don't make me wait forever","I was doin' fine without you","'Til I saw your face, now I can't erase","Givin' in to all his bullshit","Is this what you want? is this who you are?","I was doin' fine without you","'Til I saw your eyes turn away from mine","Oh, sweet darling, where he wants you","Come on Superman, say your stupid line"],
        url: "https://www.youtube.com/watch?v=HYGUQglULoA"
      },{
        title: "Watermelon Sugar",
        subtitle: "Harry Styles",
        description:["Tastes like strawberries on a summer evenin'","And it sounds just like a song", "Breathe me in, breathe me out","I'm just thinking out loud","I don't know if I could ever go without","Watermelon sugar high"],
        url: "https://www.youtube.com/watch?v=dZwffaluIgg"
      },{
        title: "In Your Eyes",
        subtitle: "The Weekend",
        description:["I just pretend that I'm in the dark","I don't regret 'cause my heart can't take a loss","I'd rather be so oblivious, I'd rather be with you","When I look at you","In your eyes","I see there's something burning inside you","In your eyes","I know it hurts to smile, but you try to","You always try to hide the pain","You always know just what to say","I always look the other way ,I'm blind, I'm blind","In your eyes","You lie, but I don't let it define you","I tried to find love in someone else too many times","But I hope you know I mean it","When I tell you you're the one that was on my mind","I'm ashamed of what I've done, yeah","When I look at you, in your Eyes","I see there's something burning inside you"],
        url: "https://www.youtube.com/watch?v=UzZj2ide0x8"
      },{
        title: "Walking on a Dream",
        subtitle: "Empire of the Sun",
        description:["Walking on a dream, How can I explain?","We are always running for the thrill of it","Always pushing up the hill, searching for the thrill of it","Is it real now? Two people become one","I can feel it, Two people become one","Thought I'd never see the love you found in me","Now it's changing all the time","Living in a rhythm where the minute's working overtime","All we got is tonight, that is right 'til first light"],
        url: "https://www.youtube.com/watch?v=kYJeot8wsWY"
      }
 
    ]
  },
  {
    name: "Molto belle senza categoria",
    description: "Per godersi bella musica",
    songs: [
      
       {
        title: "A Sky Full of Stars",
        subtitle: "Coldplay",
        description:["cause you're a sky full of stars","I'm gonna give you my heart","'Cause you light up the path","I don't care, go on and tear me apart","I don't care if you do","'Cause in a sky, 'cause in a sky full of stars","I think I saw you","I wanna die in your arms","'Cause you get lighter the more it gets dark","I'm gonna give you my heart, oh","I don't care, go on and tear me apart","I don't care if you do","'Cause in a sky, 'cause in a sky full of stars","I think I saw you","you're such a hevavenly viewwwwww"],
        url: "https://www.youtube.com/watch?v=HRK_-LNDpcQ&list=RDHRK_-LNDpcQ&start_radio=1"
      },
       {
        title: "Secrets",
        subtitle: "One Republic",
        description:["I need another story, Something to get off my chest","My life gets kinda boring, Need something that I can confess","Come by it honestly, I swear","Thought you saw me wink, no, I've been on the brink","So tell me what you want to hear","Something that will light those ears","I'm sick of all the insincere","So I'm gonna give all my secrets away","My God, amazing how we got this far","It's like we're chasing all those stars","And every day I see the news, All the problems that we could solve","This time, Don't need another perfect lie","Got no reason, got no shame","Got no family I can blame","Just don't let me disappear","I'ma tell you everything","So tell me what you want to hear","Something that will light those ears","I'm sick of all the insincere","So I'm gonna give all my secrets away"],
        url: "https://www.youtube.com/watch?v=ZFGDRzyPXE0"
      },
       {
        title: "Bad Liar",
        subtitle: "Imagine Dragons",
        description:["my dear, it's been a difficult year","And terrors don't prey on innocent victims","trust me, darlin'","It's been a loveless year, I'm a man of three fears","Integrity, faith, and crocodile tears","Look me in the eyes, tell me what you see","Perfect paradise, tearin' at the seams","I wish I could escape it, I don't wanna fake it","Wish I could erase it, make your heart believe","But I'm a bad liar, now you know","Did all my dreams never mean one thing?","Oh, I've been asking for problems","I wage my war on the world inside, I take my gun to the enemy's side","So, look me in the eyes, tell me what you see"],
        url: "https://www.youtube.com/watch?v=uEDhGX-UTeI"
      },
       {
        title: "I bet My life",
        subtitle: "Imagine Dragons",
        description:["I know I took the path that you would never want for me","I know I let you down, didn't I?","So many sleepless nights where you were waiting up on me","Now remember when I told you that's the last you'll see of me","Remember when I broke you down to tears","I gave you hell through all the years","So I, I bet my life, I bet my life, for youuu","I've been around the world and never in my wildest dreams","Would I come running home to you","I've told a million lies but now I tell a single truth","There's you in everything I do","So I, I bet my life, I bet my life, for youuu","Don't tell me that I'm wrong","I've walked that road before","That it's left for yesterday,And the records that I've played, Please forgive me for all I've done"],
        url: "https://www.youtube.com/watch?v=1P9bVeE8zXo"
      },
       {
        title: "careless Whisper",
        subtitle: "George Michael",
        description:["I  feel so unsure","As I take your hand and lead you to the dance floor","As the music dies, something in your eyes","Calls to mind a silver screen and all its sad goodbyes","I'm never gonna dance again","Guilty feet have got no rhythm","Though it's easy to pretend","I know you're not a fool","I should have known better than to cheat a friend","And waste the chance that I'd been given","So I'm never gonna dance again","The way I danced with you, oh","Never without your love","Tonight, the music seems so loud","I wish that we could lose this crowd","Maybe its better this way","We'd hurt each other with the things we want to say","We could have been so good together","We could have lived this dance forever","But now, who's gonna dance with me?","Please stayyy","And I'm never gonna dance again, guilty feet has got no rhythm","So I'm never gonna dance again","The way I danced with you, oh","Now that you're gone","Was what I did so wrong, so wrong","That you had to leave me alone"],
        url: "https://www.youtube.com/watch?v=JqIHlDVqUTw"
      },
       {
        title: "I dont wanna miss a thing",
        subtitle: "Aerosmith",
        description:["I could stay awake just to hear you breathing","Watch you smile while you are sleeping","While you're far away and dreaming","I could spend my life in this sweet surrender","I could stay lost in this moment forever","Where a moment spent with you is a moment I treasure","Don't wanna close my eyes","I don't wanna to fall asleep","'Cause I'd miss you baby","And I don't wanna miss a thing","Lying close to you, feeling your heart beating (assai)","And I'm wondering what you're dreaming","Wondering if it's me you're seeing","Then I kiss your eyes, And thank God we're together","And I just wanna stay with you","In this moment forever,Forever and ever","I don't wanna miss one smile And I don't wanna miss one kiss","And I just wanna be with you","And I just wanna hold you close","I feel your heart so close to mine","And just stay here in this moment, For all the rest of time","I Don't wanna close my eyes","I don't wanna to fall asleep","'Cause I'd miss you baby","And I don't wanna miss a thing"],
        url: "https://www.youtube.com/watch?v=T-doQhcwDS8"
      },
       {
        title: "All of Me",
        subtitle: "John Legend",
        description:["What would I do without your smart mouth","Drawing me in, and you kicking me out","You've got my head spinning, no kidding, I can't pin you down","What's going on in that beautiful mind?","I'm on your magical mystery ride","And I'm so dizzy, don't know what hit me","But I'll be alright","My head's underwater But I'm breathing fine", "You're crazy and I'm out of my mind (decisamente)","'Cause all of me loves all of you","Love your curves and all your edges","All your perfect imperfections","Give your all to me, I'll give my all to you","You're my end and my beginning","Even when I lose, I'm winning","'Cause I give you all of me","And you give me all of you","Even when you're crying, you're beautiful too?","I'm around through every mood","You're my downfall, you're my muse","My worst distraction, my rhythm and blues","I can't stop singing, It's ringing in my head for you","Cards on the table, we're both showing hearts","Risking it all, though it's hard","My head's underwater But I'm breathing fine", "You're crazy and I'm out of my mind","'Cause all of me loves all of you"],
        url: "https://www.youtube.com/watch?v=QfgJQUiQFes"
      },
       {
        title: "She's the One",
        subtitle: "Robbie Williams",
        description:["I was her, she was me","We were one, we were free","And if there's somebody calling me on","She's the one","We were young, we were wrong","We were fine all along","When you get to where you wanna go","And you know the things you wanna know","You're smiling","When you said what you wanna say","And you know the way you wanna play","You'll be so high, You'll be flying","Though the sea will be strong, I know we'll carry on","'Cos if there's somebody calling me on","She's the one","She's the one"],
        url: "https://www.youtube.com/watch?v=NmrExoQGhvI"
      },
       {
        title: "Eccoti",
        subtitle: "Max Pezzali",
        description:["Eccoti sai ti stavo proprio aspettando","Ero qui ti aspettavo da tanto tempo","Tanto che stavo per andarmene","E invece ho fatto bene","Sei il primo mio pensiero che al mattino miiii sveglia","L'ultimo desiderio che la notte miiiii culla","Sei la ragione più profonda di ogni mio gesto","La storia più incredibileeeeee","che conosco, conosco","Eccoti come un uragano di vita","E sei qui, non so come tu sia riuscita","Prendermi, dal mio sonno, scuotermi","e riattivarmi il cuoooore","Eccoti finalmente sei arrivata","E sei qui non sai quanto mi sei mancata","Speravo, tu esistessi, però non, immaginavo tanto","Sei il primo mio pensiero che al mattino miiii sveglia","L'ultimo desiderio che la notte miiiii culla","Sei la ragione più profonda di ogni mio gesto","La storia più incredibileeeeee","che conosco, conosco"],
        url: "https://www.youtube.com/watch?v=-hQC9s8TTk4"
      },
       {
        title: "Since i dont have you",
        subtitle: "Guns And Roses",
        description:["I don't have plans and schemes","And I don't have hopes and dreams","I, I, I don't have anything","Since, i don't have youuuuuuu","And I don't have fond desires","And I don't have happy hours","I, I, I don't have anything","Since, i don't have youuuuuuu","Happiness and I guess","I never will again","When you walked out on me","In walked old misery","And he's been here since theeeeen","I don't have love to share","And I don't have one who cares","I, I, I don't have anything","Since I don't have youuuuu (non sono così tragico (forse), ma che canzone)"],
        url: "https://www.youtube.com/watch?v=x2W0P9PDU9U"
      },
       {
        title: "Narcotic",
        subtitle: "Liquido",
        description:["So you face it with a smile","There is no need to cry","Will you still recall my name","And the month it all began?","Will you release me with a kiss?","If I have, how could I fail?","Did I fear the consequence?","Dazed by careless words, Cozy in my mind","I don't mind, I think so","I will let you go","Now you shaped that liquid wax","Sweet devotion, my delight","Oh, you're such a pretty one","And the naked thrills of flesh and skin","Would tease me through the night","Now, I hate to leave you bare","If you need me, I'll be there","Don't you ever let me down","And I touched your face","And I called your name","Like an addicted to cocaine calls for the stuff he'd rather blame.","And I called your name, My cocaine...","I don't mind,I think so","I will let you go."],
        url: "https://www.youtube.com/watch?v=X2Md9upR2K0"
      },
       {
        title: "ink",
        subtitle: "Coldplay",
        description:["Got a tattoo said 'together thru life'","Carved in your name with my pocket knife","And you wonder when you wake up will it be alrigh, oooooooooht","Feels like there's something broken inside","All I know, All I know","Is that I'm lost, Whenever you go","All I know","Is that I love you so","So much that it huuuuuurts","Got a tattoo and the pain's alright, ooooohhhhhh","Just want a way of keeping you insiiiiiide","I see the road begin to climb","I see your stars begin to shine","I see your colours and I'm dying of thirst","All I knooooow, Is that I love you sooooooo","So much that it hurts"],
        url: "https://www.youtube.com/watch?v=sZFopMcTCo8"
      },
       {
        title: "The reason",
        subtitle: "Hoobastank",
        description:["I'm not a perfect person","There's many things I wish I didn't doooo","But I continue learning","I never meant to do those things to youuuuu","And so I have to say before I go","That I just want you to knoooow","I've found a reason for me","To change who I used to be","A reason to start over newwwwww","And the reason is you","I'm sorry that I hurt youuuu","It's somethin' I must live with every day","And all the pain I put you through","I wish that I could take it all awayyy","And be the one who catches all your teeeeears","That's why I need you to hear","I've found a reason for me","To change who I used to be","A reason to start over newwwwww","And the reason is you"],
        url: "https://www.youtube.com/watch?v=-F9nCQtxkRw"
      },
       {
        title: "Photograph",
        subtitle: "Ed Sheeran",
        description:["Loving can hurt, loving can hurt sometimes","But it's the only thing that I know","When it gets hard, you know it can get hard sometimes","It is the only thing makes us feel alive","We keep this love in a photograph","We made these memories for ourselves","Where our eyes are never closing","Hearts are never broken","And time's forever frozen still","So you can keep me","Inside the pocket of your ripped jeans","Holding me closer 'til our eyes meet","You won't ever be alone","Wait for me to come home","Loving can heal, loving can mend your soul","And it's the only thing that I know, know","I swear it will get easier","Remember that with every piece of ya","and it's the only thing we take with us when we die","And if you hurt me","That's okay, baby, only words bleed","Inside these pages, you just hold me","And I won't ever let you go","Wait for me to come home","Next to your heartbeat where I should be","Keep it deep within your soul","When I'm away, I will remember how you kissed me","Hearing you whisper through the phone","Wait for me to come home"],
        url: "https://www.youtube.com/watch?v=HpphFd_mzXE"
      },{
        title: "Paradise",
        subtitle: "Coldplay",
        description:["When she was just a girl","she expected the world","But it flew away from her reach","So she ran away in her sleep and dreamed of","Para-para-paradise","Every time she closed her eyes","Life goes on, it gets so heavy","The wheel breaks the butterfly","every tear a waterfall","In the night, the stormy night, she'd close her eyes","In the night, the stormy night, away she'd fly"],
        url: "https://www.youtube.com/watch?v=ymMvDs15htc"
      },{
        title: "Dont Cry",
        subtitle: "Guns And Roses",
        description:["Talk to me softly","There's something in your eyes","Don't hang your head in sorrow","And please don't cry","I know how you feel inside, I, I've been there before","Something is changing inside you, And don't you know?","Don't you cry tonight","I still love you, baby","Don't you cry tonight","There's a heaven above you, baby","Give me a whisper,And give me a sigh","Give me a kiss, before you tell me goodbye","Don't you take it so hard now","And please don't take it so bad","I'll still be thinking of you and the times we had, baaaaaaaby","And please remember that I never lied","and please remember how I felt inside","You got to make it your own way","But you'll be alright now, sugar","You'll feel better tomorrow","Come the morning light now, baby","Don't you cry tonight, There's a heaven above you, baby","And don't you cry, don't you ever cry","Don't you cry tonight"],
        url: "https://www.youtube.com/watch?v=x2W0P9PDU9U"
      },{
        title: "Someone You Love",
        subtitle: "Lewis Capaldi",
        description:["I’m going under and this time I fear there’s no one to save me","This all or nothing really got a way of driving me crazy","I need somebody to heal, Somebody to know","Somebody to have ,Somebody to hold","It’s easy to say, But it’s never the same","I guess I kinda liked the way you numbed all the pain","Now the day bleeds, Into nightfall","And you’re not here, To get me through it all","I let my guard down","And then you pulled the rug","I was getting kinda used to being someone you loved","I guess I kinda liked the way you helped me escape","And IIIIIII, tend to close my eyes when it hurts sometimes","I fall into your arms, I’ll be safe in your sound ‘til I come back around","But now the day bleeds,And you’re not here","I let my guard down, you pulled the rug","I was getting kinda used to being someone you loved"],
        url: "https://www.youtube.com/watch?v=u1yVCeXYya4"
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
  { name: "Provare uno sport nuovo per scoprire il più impedito", date: null },
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
  "tra tutti i pensieri, tu sei il più dolce",
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
  "Datti un po'di pace, sei la migliore dopo tutto",
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
  "Sei il più dolce pensiero",
  "Non è possibile, la tua aura è potentissima",
  "Sei un Caterpillar (mica un bruchetto)",
  "Ricordati sempre che meriti il meglio",
  "Conoscerti e non amarti non è possibile",
  "Che bella che sei quando sai che ti sto guardando",
  "Comunque, che capolavoro che sei",
  "Rimanga tra noi, sei carina",
  "Adorabile",
  "Ci sai fare, credici un po'di più",
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
  "Sei la scelta più scontata che si possa fare",

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
    {citazione: "I grandi momenti della tua vita non saranno necessariamente le cose che fai, saranno anche le cose che ti accadono. Ora, non sto dicendo che tu non possa agire per influenzare l'esito della tua vita, devi agire, e lo farai. Ma non dimenticare mai che in qualsiasi giorno, puoi uscire dalla porta di casa e tutta la tua vita può cambiare per sempre. Vedi, l'universo ha un piano, bambini, e quel piano è sempre in movimento. Una farfalla batte le ali, e inizia a piovere. È un pensiero spaventoso, ma è anche un pò meraviglioso. Tutte queste piccole parti della macchina che lavorano costantemente, assicurandosi che tu arrivi esattamente dove dovresti essere, esattamente quando dovresti esserci. Il posto giusto al momento giusto.", fonte: "Ted Mosby, How i met your mother"},
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
    {citazione: "Lily, ci sono un milione di motivi per cui ti amo. Mi fai ridere, ti prendi cura di me quando sono malato, sei dolce, premurosa e hai persino creato un piatto a base di uova e lo hai chiamato con il mio nome. Lei mette un pò di condimento italiano sulle uova prima di cucinarle, si chiama Uova Marshall ed è fantastico. Ma il motivo principale è che sei la mia migliore amica, Lily. Sei la migliore amica che abbia mai avuto.", fonte: "Marshall Eriksen, How i met your mother"},
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
    {citazione: "Moriro col sorriso sulla faccia, perché , dopotutto, se penserai a me in futuro... non è meglio che mi ricordi cosi?", fonte: "Rosinante , One Piece"},
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
  "Vuoi troppi regali, vedi se ti calmi un pò!",
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