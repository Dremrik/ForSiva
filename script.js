document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".buttonn");
    var flowersContainer = document.getElementById("flowers");

    var wishes = [
         "✨ Желаю счастья! ✨",
         "✨ Пусть все мечты сбудутся! ✨",
         "✨ Любви и тепла! ✨",
         "✨ Хорошего настроения! ✨",
         "✨ Удачи во всем! ✨",
         "✨ Пусть судьба дарит только хорошее! ✨",
         "✨ Радости каждый день! ✨",
         "✨ Улыбок и гармонии! ✨",
         "✨ Легкости в жизни! ✨",
         "✨ Мирного неба! ✨",
         "✨ Пусть все трудности исчезают! ✨",
         "✨ Хорошо и уютно! ✨",
         "✨ Тепла в сердце! ✨",
         "✨ Верных друзей рядом! ✨",
         "✨ Пусть везение сопровождает всегда! ✨",
         "✨ Душевного покоя! ✨",
         "✨ Любви к себе! ✨",
         "✨ Огромного вдохновения! ✨",
         "✨ Счастливых моментов! ✨",
         "✨ Воплощение грез! ✨",
         "✨ Пусть жизнь будет яркой! ✨",
         "✨ Настоящей любви! ✨",
         "✨ Веры в себя! ✨",
         "✨ Пусть все будет так, как ты хочешь! ✨",
         "✨ Новых свершений! ✨",
         "✨ Гармонии и покоя! ✨",
         "✨ Обилия во всем! ✨",
         "✨ Удачи в делах! ✨",
         "✨ Хороших перемен! ✨",
         "✨ Лучшей жизни! ✨",
         "✨ Вдохновение и мотивация! ✨",
         "✨ Солнечное настроение! ✨",
         "✨ Счастливых событий! ✨",
         "✨ Много радости! ✨",
         "✨ Незабываемых впечатлений! ✨",
         "✨ Силы и выдержки! ✨",
         "✨ Спокойствия и умиротворения! ✨",
         "✨ Теплых объятий! ✨",
         "✨ Ярких эмоций! ✨",
         "✨ Благополучие! ✨",
         "✨ Счастье в каждом мгновении! ✨",
         "✨ Пусть все проблемы исчезнут! ✨",
         "✨ Чудесного настроения! ✨",
         "✨ Больше веселья! ✨",
         "✨ Ярких впечатлений! ✨",
         "✨ Только приятных новостей! ✨",
         "✨ Обилия в доме! ✨",
         "✨ Радости в каждом дне! ✨",
         "✨ Пусть каждый день будет особенным! ✨",
         "✨ Настоящих друзей рядом! ✨",
         "✨ Легкости и гармонии! ✨",
         "✨ Улыбок без повода! ✨",
         "✨ Прекрасных людей рядом! ✨",
         "✨ Великих достижений! ✨",
         "✨ Света в сердце! ✨",
         "✨ Любовь и искренность! ✨",
         "✨ Настоящего женского счастья! ✨",
         "✨ Сказочных моментов! ✨",
         "✨ Незабываемых путешествий! ✨",
         "✨ Огромного счастья! ✨",
         "✨ Пусть жизнь будет яркой и насыщенной! ✨"
     ];

    button.addEventListener("click", function() {
        flowersContainer.innerHTML = "";
        flowersContainer.style.display = "flex";

        for (let i = 0; i < 101; i++) {
            let rose = document.createElement("span");
            rose.classList.add("rose");
            rose.textContent = "🌹";

            let wish = document.createElement("p");
            wish.classList.add("wish");
            wish.textContent = wishes[i % wishes.length];

            // Для ПК (мышь)
            rose.addEventListener("mousedown", function() {
                wish.style.display = "block";
            });

            rose.addEventListener("mouseup", function() {
                wish.style.display = "none";
            });

            rose.addEventListener("mouseleave", function() {
                wish.style.display = "none";
            });

            // Для телефона (касание)
            rose.addEventListener("touchstart", function() {
                wish.style.display = "block";
            });

            rose.addEventListener("touchend", function() {
                wish.style.display = "none";
            });

            let roseContainer = document.createElement("div");
            roseContainer.appendChild(rose);
            roseContainer.appendChild(wish);

            flowersContainer.appendChild(roseContainer);
        }
    });
});