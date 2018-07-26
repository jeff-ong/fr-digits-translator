const complete_number = ["zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
const decimal_number = ["0","dix","vingt","trente","quatante","cinquante","soixante"];
const hundred_number = "cent";

const inputNumber = document.getElementById("fr_input");
const showNumber = document.getElementById("out_input");
const resetBtn = document.querySelector('reset_btn');

$(inputNumber).keyup(function(e){
	let getNumber = $(e.target).val();
	let split_digits = getNumber.split('');

	let firstDigit = split_digits[0];
	let secondDigit = split_digits[1];
	let thirdDigit = split_digits[2];

	function count_20to60(e) {
		if (secondDigit==0) {
			fr_output.innerHTML = decimal_number[firstDigit];
		} else if (secondDigit==1) {
			fr_output.innerHTML = decimal_number[firstDigit] + '-et-' + complete_number[secondDigit];
		} else {
			fr_output.innerHTML = decimal_number[firstDigit] + '-' + complete_number[secondDigit];
		}
	}

	//count from 20 to 60
	if ((firstDigit>1)&&(split_digits.length==2)) {
			count_20to60(e);		
	} else if (split_digits.length==3) {
		//count from 100 to 600
		if ((secondDigit==0)&&(thirdDigit==0)) {
			if (firstDigit==1)  {
				fr_output.innerHTML = hundred_number
			} else { 
				fr_output.innerHTML = complete_number[firstDigit] + ' ' + hundred_number + 's'
			}
		} else if ((firstDigit==1)&&(secondDigit==0)) {
			fr_output.innerHTML = hundred_number + ' ' + complete_number[thirdDigit];
		} else if (firstDigit==1) { 
			fr_output.innerHTML = hundred_number + ' ' + decimal_number[secondDigit] + '-' + complete_number[thirdDigit];
			if (thirdDigit==1) {
				fr_output.innerHTML = hundred_number + ' ' + decimal_number[secondDigit] + ' et ' + complete_number[thirdDigit];
			}
		} else if (secondDigit==0) { 
			fr_output.innerHTML = complete_number[firstDigit] + ' ' + hundred_number + ' ' + complete_number[thirdDigit];
		} else if (thirdDigit==1) {
			fr_output.innerHTML = complete_number[firstDigit] + ' ' + hundred_number + ' ' + decimal_number[secondDigit] + ' et ' + complete_number[thirdDigit];
		} else {
			fr_output.innerHTML = complete_number[firstDigit] + ' ' + hundred_number + ' ' + decimal_number[secondDigit] + '-' + complete_number[thirdDigit];
		}
	} else {
		fr_output.innerHTML = complete_number[getNumber];
	}

	//count from 70
	if ((firstDigit>=7)&&(split_digits.length>1)) {
		if (firstDigit == 7) {
			if (split_digits.length==2) {
				var seventy = decimal_number[6]
				var sevent_secondDigit = parseFloat(secondDigit)+10

				if (secondDigit==1) {
					fr_output.innerHTML = seventy + '-et-' + complete_number[sevent_secondDigit]	
				} else {
					fr_output.innerHTML = seventy + '-' + complete_number[sevent_secondDigit]	
				}
			} else if (split_digits.length==3) {
				
			}
		}
		if (firstDigit == 8) {
			if (split_digits.length==2) {
				var eighty = complete_number[4] + '-' + decimal_number[2]

				if (secondDigit==0) {
					fr_output.innerHTML = eighty +'s'
				} else {
					fr_output.innerHTML = eighty + '-' + complete_number[secondDigit]
				}
			}
		}
		if (firstDigit == 9) {
			var ninety_secondDigit = parseFloat(secondDigit)+10
			var ninety = complete_number[4] + '-' + decimal_number[2] + '-' + complete_number[ninety_secondDigit]

			fr_output.innerHTML = ninety
		}			
	} 

	check_output_string();
});

$('.reset_btn').click(function(){
	document.getElementById("fr_input").reset();
});

function check_output_string() {
	let string = $("#fr_output").text();
	if (string == "undefined") {
		fr_output.innerHTML ='Please enter a number between 1 to 999';
	}
}