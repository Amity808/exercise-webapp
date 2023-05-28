export const exerciseOption = {
    
        method: 'GET',
        // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': '2e1d84b11emsh62a82bef27bd67ap1841b7jsne9fbf9190654',
        }
      
};

export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data
}

export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '2e1d84b11emsh62a82bef27bd67ap1841b7jsne9fbf9190654',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

};