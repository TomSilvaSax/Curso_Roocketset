//1080 --> 18:00 [ "18", "00"] --> [18, 00]
               //spltit               Nuber

export function converteMinutoHoras(minutos: number) {


	const hours = Math.floor(minutos / 60);
    const minutes = minutos % 60;

	return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}