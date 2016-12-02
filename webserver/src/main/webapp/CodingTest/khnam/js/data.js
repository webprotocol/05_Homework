var bible = {
	'Matthew' : {
		kname : '마태복음',
		chapter : 28,
		versePerChap : [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20],
		contentK : new Array(28),
		contentE : new Array(28),
		load : function() {
			var contentK = bible.Matthew.contentK;
			var contentE = bible.Matthew.contentE;
			var versePerChapCnt = bible.Matthew.versePerChap.length;

			for(var i=0; i<versePerChapCnt; i++) {
				var vpc = bible.Matthew.versePerChap[i];
				contentK[i] = new Array(vpc);
				contentE[i] = new Array(vpc);
			}

			contentK[0][0]  = '아브라함과 다윗의 자손 예수 그리스도의 계보라';
			contentK[0][1]  = '아브라함이 이삭을 낳고 이삭은 야곱을 낳고 야곱은 유다와 그의 형제들을 낳고';
			contentK[0][2]  = '유다는 다말에게서 베레스와 세라를 낳고 베레스는 헤스론을 낳고 헤스론은 람을 낳고'
			contentK[0][3]  = '람은 아미나답을 낳고 아미나답은 나손을 낳고 나손은 살몬을 낳고';
			contentK[0][4]  = '살몬은 라합에게서 보아스를 낳고 보아스는 룻에게서 오벳을 낳고 오벳은 이새를 낳고';
			contentK[0][5]  = '이새는 다윗 왕을 낳으니라 다윗은 우리야의 아내에게서 솔로몬을 낳고';
			contentK[0][6]  = '솔로몬은 르호보암을 낳고 르호보암은 아비야를 낳고 아비야는 아사를 낳고';
			contentK[0][7]  = '아사는 여호사밧을 낳고 여호사밧은 요람을 낳고 요람은 웃시야를 낳고';
			contentK[0][8]  = '웃시야는 요담을 낳고 요담은 아하스를 낳고 아하스는 히스기야를 낳고';
			contentK[0][9]  = '히스기야는 므낫세를 낳고 므낫세는 아몬을 낳고 아몬은 요시야를 낳고';
			contentK[0][10] = '바벨론으로 사로잡혀 갈 때에 요시야는 여고냐와 그의 형제들을 낳으니라';
			contentK[0][11] = '바벨론으로 사로잡혀 간 후에 여고냐는 스알디엘을 낳고 스알디엘은 스룹바벨을 낳고';
			contentK[0][12] = '스룹바벨은 아비훗을 낳고 아비훗은 엘리아김을 낳고 엘리아김은 아소르를 낳고 ';
			contentK[0][13] = '아소르는 사독을 낳고 사독은 아킴을 낳고 아킴은 엘리웃을 낳고';
			contentK[0][14] = '엘리웃은 엘르아살을 낳고 엘르아살은 맛단을 낳고 맛단은 야곱을 낳고'
			contentK[0][15] = '야곱은 마리아의 남편 요셉을 낳았으니 마리에게서 그리스도라 칭하는 예수가 나시니라';
			contentK[0][16] = '그런즉 모든 대 수가 아브라함부터 다윗까지 열네대요 다윗부터 바벨론으로 사로잡혀 갈 때까지 열네대요 바벨론으로 사로잡혀 간 후부터 그리스도까지 열네 대더라';
			contentK[0][17] = '예수 그리스도의 나심은 이러하니라 그의 어머니 마리아가 요셉과 약혼하고 동거하기 전에 성령으로 잉태된 것이 나타났더니';
			contentK[0][18] = '그의 남편 요셉은 의로운 사람이라 그를 드러내지 아니하고 가만히 끊고자 하여';
			contentK[0][19] = '이 일을 생각할 때에 주의 사자가 현몽하여 이르되 다윗의 자손 요셉아 네 아내 마리아 데려오기를 무서워하지 말라 그에게 잉태된 자는 성령으로 된 것이라';
			contentK[0][20] = '아들을 낳으리니 이름을 예수라 하라 이는 그가 자기 백성을  그들의 죄에서 구원할 자이심이라 하니라';
			contentK[0][21] = '이 모든일이 된 것은 주께서 선지자로 하신 말씀을 이루려 하심이니 이르시되';
			contentK[0][22] = '보라 처녀가 잉태하여 아들을 낳을 것이요 그의 이름은 임마누엘이라 하셨으니 이를 번역한즉 하나님이 우리와 함께 계시다 함이라';
			contentK[0][23] = '요셉이 잠에서 깨어 일어나 주의 사자의 분부대로 행하여 그의 아내를 데려왔으나 ';
			contentK[0][24] = '아들을 낳기까지 동침하지 아니하더니 낳으매 이름을 예수라 하니라';


			contentE[0][0]  = 'A record of the genealogy of Jesus Christ the son of David, the son of Abraham:';
			contentE[0][1]  = 'Abraham was the father of Isaac, Issac the father of Jacob, Jacob the father of Judah and his brothers,';
			contentE[0][2]  = 'Judah the father of Perez and Zerah, whose mother was Tamar,Perez the father of Hezron,Hezron the father of Ram,';
			contentE[0][3]  = 'Ram the father of Amminadab, Amminadab the father of Nahshon, Nahshon the father of Salmon';
			contentE[0][4]  = 'Salmon the father of Boaz,whose mother was Rahab, Boaz the father of Obed,whose mother was Ruth, Obed the father of Jesse,';
			contentE[0][5]  = 'and Jesse the father of King David. David was the father of Solomon, whose mother had been Uriahs wife,';
			contentE[0][6]  = 'Solomon the father of Rehoboam, Rehoboam the father of Abijah, Abijah the father of Asa,';
			contentE[0][7]  = 'Asa the father of Jehoshaphat, Jehoshaphat the father of Jehoram, Jehoram the father of Uzziah';
			contentE[0][8]  = 'Uzziah the father of Jotham, Jotham the father of Ahaz, Ahaz the father of Hezekiah,';
			contentE[0][9]  = 'Hezekiah the father of Manasseh, Manasseh the father of Amon, Amon the father of Josiah';
			contentE[0][10] = 'and Josiah the father of Jeconiah and his brothers at the time of the exile to Babylon.';
			contentE[0][11] = 'After the exile to Babylon: Jeconiah was the father of Shealtiel, Shealtiel the father of Zerubbabel,';
			contentE[0][12] = 'Zerubbabel the father of Abiud, Abiud the father of Eliakim, Eliakim the father of Azor';
			contentE[0][13] = 'Azor the father of Zadok, Zadok the father of Akim, Akim the father of Eliud,';
			contentE[0][14] = 'Eliud the father of Eleazar, Eleazar the father of Matthan, Matthan the father of Jacob,';
			contentE[0][15] = 'and Jacob the father of Joseph, the husband of Mary, of whom was born Jesus, who is called Christ.';
			contentE[0][16] = 'Thus there were fourteen generations in all from Abraham to David, fourteen from David to the exile to Babylon, and fourteen from the exile to the Christ.';
			contentE[0][17] = 'This is how the birth of Jesus Christ came about: His mother Mary was pledged to be married to Joseph, but before they came together, she was found to be with child through the Holy Spirit';
			contentE[0][18] = 'Because Joseph her husband was a righteous man and did not want to expose her to public disgrace, he had in mind to divorce her quietly';
			contentE[0][19] = 'But after he had considered this, an angel of the Lord appeared to him in a dream and said, "Joseph son of David,do not be afraid to take Mary home as your wife, because what is conceived in her is from the Holy Spirit.';
			contentE[0][20] = 'She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins.';
			contentE[0][21] = 'All this took place to fulfill what the Load had said through the prophet:';
			contentE[0][22] = '"The virgin will be with child and will give birth to a son, and they will call him Immanuel" -- which means, "God with us."';
			contentE[0][23] = 'When Joseph woke up,he did what the angel of the Lord had commanded him and took Mary home as his wife.';
			contentE[0][24] = 'But he had no union with her until she gave birth to a son. And he gave him the name Jesus.';



			console.dir(bible.Matthew.contentK);
		}
	
	}
};

(function(){
	for(var b in bible) {
		bible[b].load();
	}
}())