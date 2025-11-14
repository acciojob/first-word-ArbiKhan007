function firstWord(s) {
	if(s==="") return "";
	let trimmed=s.trim();
	
	return trimmed.split(" ").filter(el=>el.trim()!=="")[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s))
