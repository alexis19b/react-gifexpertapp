


export const getGifs = async(category)=>{
       
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=cfDjVBdiR2NFt4o7c6N7S6ZbGokAqz0P`;
    const resp= await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    
}