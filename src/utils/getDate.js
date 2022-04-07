export const getDateNow = () => {
	let d = new Date()

	let [date] = d.toISOString().split(':')
	let [YYYY, MM, day] = date.split('-')
	let [DD] = day.split('T')

	let hh = d.getHours()
	let mm = d.getMinutes()

	const dateNow = `${DD}.${MM}.${YYYY} ${hh}:${mm}`

	return dateNow
}
