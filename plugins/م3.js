let handler = async (m, { conn, command, text }) => {
let love = `
مرحبا😘
---------------
اهلا بيك في بوت زينون احنا هنا في خدمتك دايما🥰
اليك قائمة اوامر القران

---------------
 .قران 
.اذكار صباح 
.اذكار مساء
.ايه
 .ايات
.اذكار 
لاي مشكلة يمكنك التواصل معنا من خلال
www.zenonsoftware.com
او عن طريق كتابة الامر
.ابلاغ (كتابه تفاصيل مشكلتك)
---------------
All ©️ Copyright Reserved Zenonsoftware
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(القران)$/i
export default handler
