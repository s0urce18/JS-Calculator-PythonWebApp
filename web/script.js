var answ = 0;
var sansw = "";
var ssansw = "";
var nsansw = "";
var a = true;
var sqmode = false;
var drmode = true;

function fbacl(){
	sign = "";
	sansw = "";
	ssansw = "";
	answ = 0;
	document.getElementById("answerup").innerHTML = sansw;
	document.getElementById("answerdn").innerHTML = "=";
	document.getElementById("answerdn").style.fontSize = "28px";
	document.getElementById("answerup").style.fontSize = "30px";
	document.getElementById("answerdn").style.color = "#666666";
	document.getElementById("answerup").style.color = "black";
}

function fbcl(){
	nsansw = sansw.slice(0, sansw.lastIndexOf("+")+1);
	ssansw = ssansw.slice(0, sansw.lastIndexOf("+")+1);
	if (nsansw.length < sansw.slice(0, sansw.lastIndexOf("-")+1).length){
		nsansw = sansw.slice(0, sansw.lastIndexOf("-")+1);
		ssansw = ssansw.slice(0, sansw.lastIndexOf("-")+1);
	}
	if (nsansw.length < sansw.slice(0, sansw.lastIndexOf("*")+1).length){
		nsansw = sansw.slice(0, sansw.lastIndexOf("*")+1);
		ssansw = ssansw.slice(0, sansw.lastIndexOf("×")+1);
	}
	if (nsansw.length < sansw.slice(0, sansw.lastIndexOf("/")+1).length){
		nsansw = sansw.slice(0, sansw.lastIndexOf("/")+1);
		ssansw = ssansw.slice(0, sansw.lastIndexOf("÷")+1);
	}
	sqmode = false;
	sansw = nsansw;
	nsansw = "";
	document.getElementById("answerup").innerHTML = ssansw;
	document.getElementById("answerdn").innerHTML = "=";
}

function fbb(){
	if(sansw.slice(-1) == ')' && sansw.slice(-1) != ssansw.slice(-1)){
		sansw = sansw.slice(0, -2);
	}
	else{
		sansw = sansw.slice(0, -1);
	}
	ssansw = ssansw.slice(0, -1);
	document.getElementById("answerup").innerHTML = ssansw;
	try{
		answ = eval(sansw);
	}
	catch{}
	if (sansw.length == 0){
		document.getElementById("answerdn").innerHTML = "=";
	}
	else if(typeof(answ) =="number"){
		document.getElementById("answerdn").innerHTML = "="+answ;
	}	
}

function fbeq(){
	a = false;
	document.getElementById("answerup").style.fontSize = "28px";
	document.getElementById("answerdn").style.fontSize = "30px";
	document.getElementById("answerup").style.color = "#666666";
	document.getElementById("answerdn").style.color = "black";
	try{
		answ = eval(sansw);
		if (sansw.length == 0){
		document.getElementById("answerdn").innerHTML = "=";
		}
		else if(typeof(answ) =="number"){
			document.getElementById("answerdn").innerHTML = "="+answ;
		}
	}
	catch{
		document.getElementById("answerdn").innerHTML = "Error";
	}
}

function fbn(n){
	if(sqmode == false){
		if(a == true){
			if(sansw.slice(-1) == ")"){
				sansw += "*"+String(n);
				ssansw += "×"+String(n);
			}
			else{
				sansw += String(n);
				ssansw += String(n);
			}
			document.getElementById("answerup").innerHTML = ssansw;
			try{
				answ = eval(sansw);
			}
			catch{}
			if(typeof(answ) =="number"){
				document.getElementById("answerdn").innerHTML = "="+answ;
			}
		}
		else if(a == false){
			fbacl();
			a = true;
			if(sansw.slice(-1) == ")"){
				sansw += "*"+String(n);
				ssansw += "×"+String(n);
			}
			else{
				sansw += String(n);
				ssansw += String(n);
			}
			document.getElementById("answerup").innerHTML = ssansw;
			try{
				answ = eval(sansw);
			}
			catch{}
			if(typeof(answ) =="number"){
				document.getElementById("answerdn").innerHTML = "="+answ;
			}
		}
	}
	else if(sqmode == true){
		if(a == true){
			if(sansw.slice(-1) == ')'){
				sansw = sansw.slice(0, sansw.length-1);
			}
			if(sansw.slice(-1) == ")"){
				sansw += "*"+String(n)+')';
				ssansw += "×"+String(n);
			}
			else{
				sansw += String(n)+')';
				ssansw += String(n);
			}
			document.getElementById("answerup").innerHTML = ssansw;
			try{
				answ = eval(sansw);
			}
			catch{}
			if(typeof(answ) =="number"){
				document.getElementById("answerdn").innerHTML = "="+answ;
			}
		}
		else if(a == false){
			fbacl();
			a = true;
			if(sansw.slice(-1) == ")"){
				sansw += "*"+String(n)+')';
				ssansw += "×"+String(n);
			}
			else{
				sansw += String(n)+')';
				ssansw += String(n);
			}
			document.getElementById("answerup").innerHTML = ssansw;
			try{
				answ = eval(sansw);
			}
			catch{}
			if(typeof(answ) =="number"){
				document.getElementById("answerdn").innerHTML = "="+answ;
			}
		}
	}
	else if(sqmode == true){
		if(a == true){
			if(sansw.slice(-1) == ")"){
				sansw += "*"+String(n);
				ssansw += "×"+String(n);
			}
			else{
				sansw += String(n);
				ssansw += String(n);
			}
			document.getElementById("answerup").innerHTML = ssansw;
			try{
				answ = eval(sansw);
			}
			catch{}
			if(typeof(answ) =="number"){
				document.getElementById("answerdn").innerHTML = "="+answ;
			}
		}
		else if(a == false){
			fbacl();
			a = true;
			if(sansw.slice(-1) == ")"){
				sansw += "*"+String(n);
				ssansw += "×"+String(n);
			}
			else{
				sansw += String(n);
				ssansw += String(n);
			}
			document.getElementById("answerup").innerHTML = ssansw;
			try{
				answ = eval(sansw);
			}
			catch{}
			if(typeof(answ) =="number"){
				document.getElementById("answerdn").innerHTML = "="+answ;
			}
		}
	}
}

function fbs(sign , ssign){
	if(sqmode == false){
		sansw += sign;
		ssansw += ssign;
		document.getElementById("answerup").innerHTML = ssansw;
	}
	else if(sqmode == true){
		sqmode = false;
		sansw += sign;
		ssansw += ssign;
		document.getElementById("answerup").innerHTML = ssansw;
	}
	document.getElementById("answerup").innerHTML = ssansw;
}

function fbp2(){
	fbs('**', '^');
	fbn(2);
}

function fbrb(){
	if(sqmode == false){
		sansw += ')';
		ssansw += ')';
		document.getElementById("answerup").innerHTML = ssansw;
	}
	else if(sqmode == true){
		sqmode = false;
		sansw += '))';
		ssansw += '))';
		document.getElementById("answerup").innerHTML = ssansw;
	}
	else if(sqmode == true){
		sqmode = false;
		sansw += ')';
		ssansw += ')';
		document.getElementById("answerup").innerHTML = ssansw;
	}
	try{
		answ = eval(sansw);
	}
	catch{}
	if(typeof(answ) =="number"){
		document.getElementById("answerdn").innerHTML = "="+answ;
	}
}

function fblb(){
	if(sansw.slice(-1) == ""){
		sansw += "(";
		ssansw += "(";
	}
	else if(ssansw.slice(-1) == "√"){
		sansw += "(";
		ssansw += "(";
	}
	else if(sqmode == true){
		sqmode = false;
		sansw = sansw.slice(0, -1);
		sansw += ")*(";
		ssansw += "×(";
	}
	else if(String(Number(sansw.slice(-1))) != "NaN" || sansw.slice(-1) == ')'){
		sansw += "*(";
		ssansw += "×(";
	}
	else{
		sansw += "(";
		ssansw += "(";
	}
	document.getElementById("answerup").innerHTML = ssansw;
}

function fbms(){
	sqmode = true;
	sansw += "Math.sqrt(";
	ssansw += "√";
	document.getElementById("answerup").innerHTML = ssansw;
}

function fbdr(){
	if(drmode == true){
		drmode = false;
		document.getElementById("bdr").innerHTML = "rad";
		document.getElementById("bcs").innerHTML = "cos";
		document.getElementById("bsn").innerHTML = "sin";
		document.getElementById("btg").innerHTML = "tan";
	}
	else if(drmode == false){
		drmode = true;
		document.getElementById("bdr").innerHTML = "deg";
		document.getElementById("bcs").innerHTML = "cos°";
		document.getElementById("bsn").innerHTML = "sin°";
		document.getElementById("btg").innerHTML = "tan°";
	}
}

function fbcs(){
	sqmode = true;
	if(drmode == true){
		sansw += "Math.cos(0.0174533*";
		ssansw += "cos°";
	}
	else if(drmode == false){
		sansw += "Math.cos(";
		ssansw += "cos";
	}
	document.getElementById("answerup").innerHTML = ssansw;
}

function fbsn(){
	sqmode = true;
	if(drmode == true){
		sansw += "Math.sin(0.0174533*";
		ssansw += "sin°";
	}
	else if(drmode == false){
		sansw += "Math.sin(";
		ssansw += "sin";
	}
	document.getElementById("answerup").innerHTML = ssansw;
}

function fbtg(){
	sqmode = true;
	if(drmode == true){
		sansw += "Math.tan(0.0174533*";
		ssansw += "tan°";
	}
	else if(drmode == false){
		sansw += "Math.tan(";
		ssansw += "tan";
	}
	document.getElementById("answerup").innerHTML = ssansw;
}