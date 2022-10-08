//18:00 --> 1080 [ "18", "00"] --> [18, 00]
               //spltit               Nuber

export function converteHorasMinuto(houseString: string) {
	const [haurs, minutes] = houseString.split(':').map(Number)

	const minutesAmount = (haurs * 60) + minutes;

	return minutesAmount
}