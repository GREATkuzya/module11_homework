export function getPercents(percent, number) {
	if (isNaN(+percent&&+number)) return "Entering value not a number";
	if (+percent < 0) return "Value of percent should be above zero";
	
		return number / 100 * percent;
	
	
}



