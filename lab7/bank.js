window.onload=function(){
	document.getElementById("createacc").onclick=clickacc;
}

let arr=[];
var i=0;
function clickacc(){
	
	var bankaccountmodule=(function(){
		let bankaccObject={};
		let account={};
		bankaccObject.getAccount=function(){
			account.name=document.getElementById("account").value;
			account.balance=document.getElementById("deposit").value;		
			return account;
		} 
		
		return bankaccObject;
		
	})();
	
	
	arr.push(bankaccountmodule.getAccount());
		
	document.getElementById("banktextearea").value=document.getElementById("banktextearea").value+'Account Name:'+arr[i].name +' Balance: '+ arr[i].balance+'\n';
	i++;
	}

	

	