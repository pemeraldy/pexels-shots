import { createClient } from 'pexels';
const API_KEY = '563492ad6f91700001000001e18886ffa0cb4ee0bf10479c68847b0f'
// const client = createClient(process.env.API_KEY);
const client = createClient(API_KEY);

export default {
    async fetchPhotos(query){
        const photos = await client.photos.search({ query, per_page: 20 })
            .then(photos => photos)
            return photos    
    },
    showPhoto(id){
        return client.photos.show({ id: id }).then(photo => photo.src.medium)
    },
    async fetchPhotosPerPage(){
        const resp = await fetch(  "https://api.pexels.com/v1/search?query=nature&per_page=1",{
            Authorizarion: API_KEY
        } )
        const result = resp.json()
    
        return result
    }
}