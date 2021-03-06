const apiKey = "jVKdnhl03dJKnUs2oKQ2yRgWD6GMEfz0"; // change the api if not working

const getWeather = async (id) => {
    const currentCondition = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${apiKey}`;

    const response = await fetch(currentCondition + query);
    const data = await response.json();

    return data[0];
};

const getCity = async (city) => {
    const citySearch = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(citySearch + query);
    const data = await response.json();

    return data[0];
};
