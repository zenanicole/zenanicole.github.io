(function () {
    "use strict"
window.onload=function(){
	document.getElementById("createacc").onclick=createaccount;
}

var accountarr=[];
var i=0;
var createaccount=(function clickacc(){
	
	var bankaccount=function(){
		
		var acctType=document.getElementById("account").value;
		var deposit=document.getElementById("deposit").value;
		var getaccttype = function () { return acctType };
          var  getdeposit = function () { return deposit };
			
			return {
				getaccttype:getaccttype,
				getdeposit:getdeposit
			}
		} 
		return function(){
			accountarr.push(bankaccount());
			displayAccount();
		}
		
		
	})();
	var displayAccount=function(){	
		var textacc="";
		for (let acct of accountarr) {
            textacc += `Account: ${acct.getaccttype()}  Balance: ${acct.getdeposit()} \n`;
        }
		  document.getElementById("banktextearea").value = textacc;
	}
		
   
})();
	