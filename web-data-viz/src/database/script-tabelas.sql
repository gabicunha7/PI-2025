-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database learntot;
use learntot;

create table usuario (
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(60) not null,
senha varchar(45) not null,
genfav varchar(45) not null
);

create table musica (
id int primary key auto_increment,
nome varchar(45) not null,
artista varchar(45) not null,
letra mediumtext not null,
genero varchar(45) not null,
idioma varchar(45) not null
)auto_increment = 100;

create table traducao(
id int primary key auto_increment,
fkmusica int unique not null,
letra_trad mediumtext not null,
idioma varchar(45) not null,
constraint fk_musica foreign key(fkmusica) references musica(id)
);

create table comentario(
id int primary key auto_increment,
texto tinytext not null,
avaliacao int not null,
fkusuario int not null,
fktraducao int not null,
constraint chk_avaliacao check (avaliacao in (1, 2, 3, 4, 5)),
constraint fk_traducao foreign key(fktraducao) references traducao(id),
constraint fk_usuario_comentario foreign key(fkusuario) references usuario(id)
)auto_increment = 100;

insert into usuario (nome, email, senha, genfav) 
values		('Ronaldo', 'ronaldo@gmail.com', 'senha1', 'Rock'),
			('Carlos', 'carlos@email.com', 'senha2', 'Pop'),
			('Julia', 'julia@gmail.com', 'senha3', 'Rock'),
			('Pedro', 'pedro@gmail.com', 'senha4', 'Funk'),
			('João', 'joao@email.com', 'senha5', 'Indie');
            
insert into musica (nome, artista, letra, genero, idioma) 
values		('Tom Sawyer', 'Rush', 'A modern-day warrior\nMean, mean stride\nToday\'s Tom Sawyer\nMean, mean pride\nThough his mind is not for rent\nDon\'t put him down as arrogant\nHis reserve, a quiet defense\nRiding out the day\'s events\nThe river\nWhat you say about his company\nIs what you say about society\nCatch the mist, catch the myth\nCatch the mystery, catch the drift\nThe world is, the world is\nLove and life are deep\nMaybe as his skies are wide\nToday\'s Tom Sawyer\nHe gets high on you\nAnd the space he invades\nHe gets by on you\nNo, his mind is not for rent\nTo any god or government\nAlways hopeful, yet discontent\nHe knows changes aren\'t permanent\nBut change is\nAnd what you say about his company\nIs what you say about society\nCatch the witness, catch the wit\nCatch the spirit, catch the spit\nThe world is, the world is\nLove and life are deep\nMaybe as his eyes are wide\nExit the warrior\nToday\'s Tom Sawyer\nHe gets high on you\nAnd the energy you trade\nHe gets right on to the friction of the day\n', 'Rock', 'Inglês'),
			('Lover, You Should’ve Come Over', 'Jeff Buckley', 'Looking out the door I see the rain\nFall upon the funeral mourners\nParading in a wake of sad relations\nAs their shoes fill up with water\nMaybe I\'m too young\nTo keep good love from going wrong\nBut tonight you\'re on my mind\nSo... you\'ll never know\nBroken down and hungry for your love\nWith no way to feed it\nWhere are you tonight?\nChild, ya know how much I need it\nToo young to hold on\nAnd too old to just break free and run\nSometimes a man gets carried away\nWhen he feels like should be having his fun\nMuch too blind to see the damage he\'s done\nSometimes a man must awake to find that\nReally he has no one\nSo I\'ll wait for you, love\nAnd I\'ll burn\nWill I ever see your sweet return?\nOh, will I ever learn?\nOh-oh, lover, you should\'ve come over\n\'Cause it\'s not too late\nLonely is the room, the bed is made\nThe open window lets the rain in\nBurning in the corner is the only one who dreams\nHe had you with him\nMy body turns\nAnd yearns for a sleep that won\'t ever come\nIt\'s never over\nMy kingdom for a kiss upon her shoulder\nIt\'s never over\nAll my riches for her smiles\nWhen I\'ve slept so soft against her\nIt\'s never over\nAll my blood for the sweetness of her laughter\nIt\'s never over\nShe is the tear that hangs inside my soul forever\nOh, but maybe I\'m just too young\nTo keep good love from going wrong\nOh-oh-oh, lover\nYou should\'ve come over, yeah, yes\nYes, I feel too young to hold on\nAnd much too old to break free and run\nToo deaf, dumb and blind to see the damage I\'ve done\nSweet lover, you should\'ve come over\nOh, love, well I\'ve waited for you\nLover, lover, lover\nLover, love, love, love, love, love, love!\nLover, you should\'ve come over\n\'Cause it\'s not too late\n', 'Alternativo', 'Inglês'),
			('Wuthering Heights', 'Kate Bush', 'Out on the wily, windy moors\nWe\'d roll and fall in green\nYou had a temper like my\njealousy\nToo hot, too greedy\nHow could you leave me\nWhen I needed to possess you?\nI hated you, I loved you too\nBad dreams in the night\nThey told me I was going to lose the fight\nLeave behind my Wuthering, Wuthering\nWuthering Heights\nHeathcliff, it\'s me, I\'m Cathy\nI\'ve come home, I\'m so cold\nLet me in your window\nHeathcliff, it\'s me I\'m Cathy\nI\'ve come home, I\'m so cold\nLet me in your window\nOoh, it gets dark, it gets lonely\nOn the other side from you\nI pine a lot, I find the lot\nFalls through without you\nI\'m coming back love, cruel Heathcliff\nMy one dream, my only master\nToo long I roam in the night\nI\'m coming back to his side to put it right\nI\'m coming home to wuthering, wuthering\nWuthering Heights\nHeathcliff, it\'s me, I\'m Cathy\nI\'ve come home, I\'m so cold\nLet me in your window\nHeathcliff, it\'s me, I\'m Cathy\nI\'ve come home, I\'m so cold\nLet me in your window\nOoh, let me have it\nLet me grab your soul away\nOoh, let me have it\nLet me grab your soul away\nYou know it\'s me, Cathy\nHeathcliff, it\'s me I\'m Cathy\nI\'ve come home, I\'m so cold\nLet me in your window\nHeathcliff, it\'s me, I\'m Cathy\nI\'ve come home, I\'m so cold\nLet me in your window\nHeathcliff, it\'s me, I\'m Cathy\nI\'ve come home, I\'m so cold', 'Pop', 'Inglês'),
			('Papaoutai', 'Stromae','Dites-moi d\'où il vient\nEnfin je saurai où je vais\nMaman dit que lorsqu\'on cherche bien\nOn finit toujours par trouver\nElle dit qu\'il n\'est jamais très loin\nQu\'il part très souvent travailler\nMaman dit "travailler, c\'est bien"\nBien mieux qu\'être mal accompagné\nPas vrai?\nOù est ton papa?\nDis-moi, où est ton papa?\nSans même devoir lui parler\nIl sait ce qui ne va pas\nAh, sacré papa\nDis-moi, où es-tu caché?\nÇa doit faire au moins mille fois que j\'ai\nCompté mes doigts\nHey\nOù t\'es, papaoutai?\nOù t\'es, papaoutai?\nOù t\'es, papaoutai?\nOù t\'es, où t\'es où, papaoutai?\nOù t\'es, papaoutai?\nOù t\'es, papaoutai?\nOù t\'es, papaoutai?\nOù t\'es, où t\'es où, papaoutai?\nQuoi? Qu\'on y croie ou pas\nY aura bien un jour où on n\'y croira plus\nUn jour ou l\'autre, on sera tous papas\nEt d\'un jour à l\'autre, on aura disparu\n
			Serons-nous détestables?\n
			Serons-nous admirables?\n
			Des géniteurs ou des génies?\n
			Dites-nous qui donne naissance aux irresponsables?\n
			Ah, dites-nous qui?\n
			Tiens, tout le monde sait comment on fait des bébés\n
			Mais personne sait comment on fait des papas\n
			Monsieur je-sais-tout en aurait hérité, c\'est ça\n
			Faut l\'sucer d\'son pouce ou quoi?\n
			Dites-nous où c\'est caché, ça doit\n
			Faire au moins mille fois qu\'on a\n
			Bouffé nos doigts\n
			Hey\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, où t\'es où, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, où t\'es où, papaoutai?\n
			Où est ton papa?\n
			Dis-moi, où est ton papa?\n
			Sans même devoir lui parler\n
			Il sait ce qui ne va pas\n
			Ah, sacré papa\n
			Dis-moi, où es-tu caché?\n
			Ça doit faire au moins mille fois que j\'ai\n
			Compté mes doigts\n
			Hey\n
			Où est ton papa?\n
			Dis-moi, où est ton papa?\n
			Sans même devoir lui parler\n
			Il sait ce qui ne va pas\n
			Ah, sacré papa\n
			Dis-moi, où es-tu caché?\n
			Ça doit faire au moins mille fois que j\'ai\n
			Compté mes doigts\n
			Hey\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, où t\'es où, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, papaoutai?\n
			Où t\'es, où t\'es où, papaoutai?
			', 'Pop', 'Francês'),
			('Since I´ve Been Loving You', 'Led Zeppelin',
			'Working from seven to eleven every night
			It really makes life a drag, I don\'t think that\'s right
			I\'ve really, been the best, the best of fools
			I did what I could, yeah
			\'Cause I love you, baby
			How I love you, darling
			How I love you, baby
			How I love you, girl, little girl
			Baby, since I\'ve been loving you, yeah
			I\'m about to lose my worried mind, oh yeah
			Everybody trying to tell me
			That you didn\'t mean me no good
			I\'ve been trying, Lord, let me tell you
			Let me tell you I really did the best I could
			I\'ve been working from seven to eleven every night
			I said it kinda makes my life a drag, drag, drag, drag,
			Lord, that ain\'t right
			Since I\'ve been loving you
			I\'m about to lose my worried mind
			Said I\'ve been crying, my tears they fell like rain
			Don\'t you hear, don\'t you hear them falling
			Do you remember, mama, when I knocked upon your door?
			I said you had the nerve to tell me
			you didn\'t want me no more, yeah
			I open my front door,
			hear my back door slam
			You must have one of them new fangled back door man
			I\'ve been working from seven, seven, seven,
			to eleven every night
			It kinda makes my life a drag, drag, drag
			Baby, since I\'ve been loving you
			I\'m about to lose, I\'m about lose to my worried mind',
			'Rock', 'Inglês');
            
insert into traducao (fkmusica, letra_trad, idioma) 
values		(100, 'Um guerreiro dos dias modernos\nSignifica um grande passo\nO Tom Sawyer moderno\nSignifica orgulho\nEmbora sua mente não esteja à venda\nNão o diga arrogante\nSeu jeito reservado, uma defesa silenciosa\nLevando em frente os eventos do dia\nO rio\nO que você diz sobre sua companhia\nÉ o que você diz sobre sociedade\nPegue a névoa, pegue o mito\nPegue o mistério, pegue a traição\nO mundo é, o mundo é\nAmor e vida são profundos\nTalvez como seus céus são largos\nO Tom Sawyer moderno\nEle se liga em você\nE o espaço que ele invade\nComeça perto de você\nNão, sua mente não está à venda\nPara nenhum deus ou governo\nSempre esperançoso, ainda que descontente\nEle sabe que mudanças não são permanentes\nMas que mudar é\nE o que você diz sobre sua companhia\nÉ o que você diz sobre sociedade\nPegue a testemunha, pegue a sagacidade\nPegue o espírito, pegue o cuspe\nO mundo é, o mundo é\nAmor e vida são profundos\nTalvez como seus olhos são largos\nSaia o guerreiro\nO Tom Sawyer moderno\nEle se liga em você\nE a energia que você troca\nEle fica ligado na fricção do dia\n', 'Português'),
			(101, 'Amor, Você Deveria Ter Vindo Pra Cá
			Olhando pela porta, eu vejo a chuva
			Que cai nos lutos fúnebres
			Desfilando em uma vigília de relações tristes
			Enquanto seus sapatos se enchem de água
			E talvez eu seja muito novo
			Para impedir que um bom amor dê errado
			Mas esta noite você está em meus pensamentos
			Então, nunca se sabe
			Despedaçado e faminto por seu amor
			Sem nenhuma maneira de me alimentar
			Onde está você esta noite?
			Querida, você sabe o quanto eu preciso
			Sou jovem demais para esperar
			E velho demais para simplesmente me libertar e correr
			Às vezes, o homem se deixa levar
			Quando sente que na verdade ele deveria estar se divertindo
			E é cego demais para ver o dano que causou
			Às vezes, o homem deve acordar para descobrir que
			Na verdade, ele tem ninguém
			Então eu vou esperar por você, e vou queimar
			Será que vou assistir ao seu doce retorno
			Oh, será que um dia vou aprender?
			Oh, amor, você deveria ter vindo para cá
			Porque não é tarde demais
			Solitário é o quarto em que a cama está feita
			A janela aberta deixa a chuva entrar
			Queimando no canto, está o único
			Que sonha que já teve você com ele
			Meu corpo vira e anseia
			Por um descanso que nunca virá
			Nunca tem fim
			Meu reino por um beijo no ombro dela
			Nunca tem fim
			Todas as minhas riquezas pelos seus sorriso
			Quando eu dormia tão gentilmente encostado nela
			Nunca tem fim
			Todo o meu sangue pela doçura da risada dela
			Nunca tem fim
			Ela é a lágrima que está dentro de minha alma para sempre
			Bem, talvez eu seja jovem demais
			Para impedir que um bom amor dê errado
			Oh... Ohh... Ohh... Ohh
			Oh... amor, você deveria ter vindo para cá
			Sim, sim, me sinto jovem demais para esperar
			E velho demais para me libertar e correr
			Surdo demais, burro e cego para ver o dano que eu fiz
			Doce amor, você deveria ter vindo pra cá
			Oh, amor, bem, estou esperando por você
			Amor, amor, amor
			Amor, amor, amor, amor, amor, amor
			Amor, amor, amor, você deveria ter vindo pra cá
			Porque não é tarde demais', 'Português'),
			(102, 'O Morro dos Ventos Uivantes
			Lá fora nas campinas tempestuosas
			Nós rolávamos e caíamos no gramado
			Seu temperamento era como o meu ciúme
			Ardente demais, ávido demais
			Como você pôde me abandonar
			Quando eu precisei te possuir?
			Eu te odiei, eu te amei também
			Sonhos ruins durante a noite
			Eles disseram-me que eu perderia a luta
			Deixo para trás meu morro, morro
			Morro dos ventos uivantes
			Heathcliff, sou eu, Cathy, voltei para casa
			Estou com tanto frio, deixe-me entrar por sua janela
			Heathcliff, sou eu, Cathy, voltei para casa
			Estou com tanto frio, deixe-me entrar por sua janela
			Oh, fica escuro, fica solitário
			Do outro lado, longe de você
			Eu definho tanto, eu noto que o destino
			Fracassa sem você
			Estou voltando, amor, cruel Heathcliff
			Meu único sonho, meu único mestre
			Por muito tempo eu vago pela noite
			Estou voltando para o seu lado para consertar isso
			Estou voltando para o meu morro, morro
			Morro dos ventos uivantes
			Heathcliff, sou eu, Cathy, voltei para casa
			Estou com tanto frio, deixe-me entrar por sua janela
			Heathcliff, sou eu, Cathy, voltei para casa
			Estou com tanto frio, deixe-me entrar por sua janela
			Oh, deixe-me ter, deixe-me levar sua alma embora
			Oh, deixe-me ter, deixe-me levar sua alma embora
			Você sabe que sou eu, Cathy
			Heathcliff, sou eu, Cathy, voltei para casa
			Estou com tanto frio, deixe-me entrar por sua janela
			Heathcliff, sou eu, Cathy, voltei para casa
			Estou com tanto frio, deixe-me entrar por sua janela
			Heathcliff, sou eu, Cathy, voltei para casa
			Estou com tanto frio', 'Português'),
			(103, 'Diga-me de onde ele vem
			E então eu saberei para onde estou indo
			Mamãe diz que se você procura bem,
			Sempre acabará encontrando
			Ela diz que ele nunca está muito longe
			Que ele trabalha muito
			Mamãe diz que trabalhar é bom,
			Bem melhor que estar em má companhia
			Não é?
			Onde está o seu pai?
			Diga-me, onde está o seu pai?
			Sem mesmo nos responder,
			Ele sabe o que está errado
			Ah, sagrado pai!
			Diga-me onde você tem se escondido!
			Devem ter sido pelo menos mil vezes que eu
			Contei nos dedos
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você, onde está você?
			Onde, papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você, onde está você?
			Onde, papai, onde está você?
			Se acreditamos nisso ou não,
			Uma hora não vamos mais
			Mais cedo ou mais tarde seremos todos pais
			E de um dia para o outro, teremos desaparecido
			Seremos detestáveis?
			Seremos admiráveis?
			Genitores ou gênios?
			Digam-nos, quem dá à luz os irresponsáveis?
			Ah, digam-nos quem
			Todo mundo sabe come fazer bebês
			Mas ninguém sabe como fazer pais
			Senhor, "eu sei tudo", deve tê-lo herdado, é isso
			Está chupando o dedo ou o quê?
			Digam-nos onde está escondido
			Devem ter sido ao menos mil vezes que nós
			Contamos nossos dedos
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você, onde está você?
			Onde, papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você, onde está você?
			Onde, papai, onde está você?
			Onde está o seu papai?
			Diga-me, onde está o seu papai?
			Sem mesmo falar com ele,
			Ele sabe o que está errado
			Ah, sagrado papai!
			Diga-me onde você se escondeu!
			Devem ter sido ao menos mil vezes que eu
			Contei meus dedos
			Onde está o seu papai?
			Diga-me, onde está o seu papai?
			Sem mesmo nos responder,
			Ele sabe o que está errado
			Ah, sagrado papai!
			Diga-me onde você se escondeu!
			Devem ter sido ao menos mil vezes que eu
			Contei meus dedos
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você, onde está você?
			Onde, papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você? Papai, onde está você?
			Onde está você, onde está você?
			Onde, papai, onde está você?', 'Português'),
			(104, 'Trabalhando das sete às onze, todas as noites,
			Isso faz da vida um saco, acho que isto não está certo.
			Eu realmente, tenho bancado o perfeito idiota,
			eu fiz o que pude.
			Pois eu te amo, baby,
			Como eu te amo, querida,
			Como eu te amo, baby,
			Como eu te amo, garota, garotinha.
			Mas baby, desde que andei amando você,
			estou a ponto de perder minha mente angustiada, oh, yeah.
			Todo mundo tenta me dizer
			que você não quis me fazer nenhum bem.
			Eu tenho tentado, Senhor, deixe-me lhe dizer,
			deixe-me lhe dizer, eu realmente fiz o melhor que pude.
			Eu tenho trabalhado das sete às onze todas as noites,
			eu disse que isto meio que faz da minha vida um saco.
			Senhor, isso não está certo... Não, não.
			Desde que andei amando você,
			estou a ponto de perder minha mente angustiada
			Disse que tenho chorado. Minhas lágrimas parecem chuva,
			Você não ouve, você não as ouve cair?
			Você se lembra mulher, quando eu bati em sua porta?
			Eu disse que você se atreveu a me falar
			que não me queria mais, é
			Eu abro minha porta da frente,
			e escuto minha porta dos fundos bater,
			Você deve ter um desses amantes mais jovens.
			Eu tenho trabalhado das sete, das sete, das sete às onze
			todas as noites, isto meio que faz da minha vida um saco...
			Baby, desde que andei amando você,
			estou a ponto de perder, estou
			a ponto de perder minha mente angustiada', 'Português');
            
insert into comentario (texto, avaliacao, fkusuario, fktraducao) 
values		('Tradução ótima', 5, 2, 1),
			('Tem muito o que melhorar', 2, 3, 1),
			('Perfeita, trouxe bem a ideia principal', 5, 4, 1),
            ('Achei que falou alguns pontos', 4, 3, 2),
            ('Bem ruim', 1, 4, 3),
			('Faltou adaptar algumas coisas', 3, 1, 3),
			('Me ajudou muito, adorei', 5, 5, 1),
            ('Muito confusa', 2, 5, 3),
            ('Pode melhorar', 3, 5, 2),
			('Não gostei de alguns pontos', 3, 1, 4),
			('Melhore', 2, 5, 4),
            ('Muito boa', 4, 3, 5),
            ('Finalmente entendi o significado', 5, 2, 5);
            