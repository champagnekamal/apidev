const axios = require('axios');

async function getbgremove (req,res){
    // const image = req.file;
    const data = new FormData();
    data.append('image', req.file.buffer);
    console.log(data,"fnjrjbb")
    
    const options = {
        method: 'POST',
        url: 'https://ai-image-background-remover1.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': '04caa4a54dmsh31b534674c46502p123d38jsnf90a5a791c7a',
          'x-rapidapi-host': 'ai-image-background-remover1.p.rapidapi.com',
          'Accept': '*'
        },
        data: data
      };
    
    try {
        const response = await axios.request(options);
        console.log(response.data,"vjrbrhef");
    res.status(200).json({response})

    } catch (error) {
        console.error(error);
    }

}

module.exports = getbgremove
