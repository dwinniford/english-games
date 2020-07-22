// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event)
  try {
    return await db.collection('cards').add({
      data: {
        // where does event.content come from??
        image: event.image,
        character: event.character,
        pinyin: event.pinyin,
        english: event.english
        // image: "test_image",
        // character: "char",
        // pinyin: "pinyin",
        // english: "word"
      }
    })
  } catch(e) {
    console.error(e)
  }
  
 
}