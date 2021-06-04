document.addEventListener('keydown', key);

function key(event) {
	if(event.key == "1"){
		fbn(1);
	}
	else if(event.key == "2"){
		fbn(2);
	}
	else if(event.key == "3"){
		fbn(3);
	}
	else if(event.key == "4"){
		fbn(4);
	}
	else if(event.key == "5"){
		fbn(5);
	}
	else if(event.key == "6"){
		fbn(6);
	}
	else if(event.key == "7"){
		fbn(7);
	}
	else if(event.key == "8"){
		fbn(8);
	}
	else if(event.key == "9"){
		fbn(9);
	}
	else if(event.key == "0"){
		fbn(0);
	}
	else if(event.key == "("){
		fblb()
	}
	else if(event.key == ")"){
		fbrb()
	}
	else if(event.code == "Backspace"){
		fbb();
	}
	else if(event.code == "Escape"){
		fbacl();
	}
	else if(event.key == "=" || event.code == "NumpadEnter" || event.code == "Enter"){
		fbeq();
	}
	else if(event.key == "+"){
		fbs('+', '+');
	}
	else if(event.key == "-"){
		fbs('-', '-');
	}
	else if(event.key == "*"){
		fbs('*', '×');
	}
	else if(event.key == "/"){
		fbs('/', '÷');
	}
	else if(event.code == "KeyP"){
		fbn('3.14159265', '3.14159265');
	}
	else if(event.code == "KeyC"){
		fbcs();
	}
	else if(event.code == "KeyS"){
		fbsn();
	}
	else if(event.code == "KeyT"){
		fbtg();
	}
	else if(event.code == "KeyD"){
		fbdr();
	}
	else if(event.code == "KeyI"){
		fbp2();
	}
	else if(event.code == "KeyO"){
		fbs('**', '^');
	}
	else if(event.code == "KeyK"){
		fbms();
	}
	else if(event.code == "KeyE"){
		fbs('e', 'e');
	}
	else if(event.code == "KeyO"){
		fbs('e', 'e');
	}
	else if(event.code == "KeyL"){
		fbs('e', 'e');
	}
	else if(event.code == "KeyH"){
		alert('Keys: \nKeyH - help \nEsc - AC \nDel - C \nBackspace - ⌫ \nKeyE - e \nKeyD - deg/rad \nKeyC - cos \nKeyS - sin \nKeyT - tan \nKeyP - π \nKeyI - ^2 \nKeyO - ^ \nKeyK - √');
	}
	else if(event.code == "Comma" || event.code == "Period" || event.code == "NumpadDecimal"){
		fbs('.', ',');
	}
}