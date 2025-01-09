

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=HEPNCZyC88yFaidUSgcPg2HMQUl8Myty`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(elements => {
        return {
            id: elements.id,
            title: elements.title,
            url: elements.images.downsized_medium.url
        }
    })

    return gifs;
};

