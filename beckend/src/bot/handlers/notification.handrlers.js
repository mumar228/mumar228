import { findUserById } from "../../repositories/user.repositors.js";

export const notifyHandler = async (ctx) => {
  const adminChatId = process.env.ADMIN_CHAT_ID;

  if (String(ctx.from.id) !== String(adminChatId)) {
    return ctx.reply("❌ Sizda bu buyruqni ishlatish huquqi yo'q!");
  }

  const args = ctx.message.text.split(" ").slice(1);
  const userId = args[0];  
  const message = args.slice(1).join(" ").trim();

  if (!userId || !message) {
    return ctx.reply("⚠️ To'g'ri format: /notify <userId> <xabar>\n\nNamuna: `/notify 123 Ertaga dars qoldirildi.`");
  }

  const isNumber = /^\d+$/.test(userId);
  if (!isNumber) {
    return ctx.reply("❌ Xato: User ID faqat raqamlardan iborat bo'lishi kerak! Matn yozish mumkin emas.");
  }

  try {
    const user = await findUserById(Number(userId));

    if (!user) {
      return ctx.reply(`❌ ID: ${userId} bo'lgan user topilmadi!`);
    }
     
    const chat_id = user.telegramChatId || user.telegram_chat_id;

    if (!chat_id) {
      return ctx.reply(`❌ Bu userning Telegram chatId si yo'q!`);
    }

    await ctx.telegram.sendMessage(chat_id, `📩 Admin xabari:\n\n${message}`);
    ctx.reply(`✅ Xabar muvaffaqiyatli yuborildi! (User: ${user.name || userId})`);
    
  } catch (err) {
    console.error("Xabar yuborishda xato:", err);
    ctx.reply("❌ Xabar yuborishda xatolik yuz berdi yoki user botni bloklagan.");
  }
};