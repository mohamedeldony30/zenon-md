
//import db from '../lib/database.js'

const dia = 500
const prem = 200000

let handler = async (m, {conn, isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 0
  if (new Date - global.db.data.users[m.sender].lastclaim < 0) throw `🎁 *لقد تلقيت هديتك اليوميه بالفعل*\n\n🕚 انتظر قليلاً*${msToTime(time - new Date())}* `
  global.db.data.users[m.sender].exp += isPrems ? prem : dia
  m.reply(`
🎁 *مبروك هديتك اليوميه*

▢ *لقد حصلت علي:*
➢ *${dia} الألماس* 💎
🆙 *اكسبي* : +${isPrems ? prem : dia}`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['econ']
handler.command = ['الماس', 'يومي'] 

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " ساعات " + minutes + " دقائق"
}
