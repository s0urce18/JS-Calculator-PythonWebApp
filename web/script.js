var answ = 0;
var sansw = "";
var ssansw = "";
var nsansw = "";
var a = true;
var sqmode = false;

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
}

function fbn(n){
	if(sqmode == false){
		if(a == true){
			sansw += String(n);
			ssansw += String(n);
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
			sansw += String(n);
			ssansw += String(n);
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
			sansw += String(n)+')';
			ssansw += String(n);
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
			sansw += String(n);
			ssansw += String(n);
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
}

function fbrb(){
	if(sqmode == false){
		sansw += ')';
		ssansw += ')';
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

function fbsb(sign , ssign){
	sansw += sign;
	ssansw += ssign;
	document.getElementById("answerup").innerHTML = ssansw;
}

function fbms(){
	sqmode = true;
	sansw += "Math.sqrt(";
	ssansw += "√";
	document.getElementById("answerup").innerHTML = ssansw;
}