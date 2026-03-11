// ДОБАВЬТЕ В КОНЕЦ game.js
setTimeout(() => {
    console.log("🔍 Telegram данные:", window.Telegram?.WebApp?.initData);
    console.log("📱 Платформа:", window.Telegram?.WebApp?.platform);
}, 2000);
