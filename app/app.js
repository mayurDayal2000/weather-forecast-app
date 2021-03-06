(() => {
    const t = document.querySelector("form");
    t.addEventListener("submit", (e) => {
        e.preventDefault();
        const a = t.city.value.trim();
        t.reset(),
            (async (t) => {
                const e = await getCity(t);
                return { cityDetail: e, weather: await getWeather(e.Key) };
            })(a)
                .then((t) => {
                    ui(t);
                })
                .catch((t) => {
                    console.log(t);
                });
    });
})();
