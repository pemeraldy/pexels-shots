import { createClient } from 'pexels';
const client = createClient('563492ad6f91700001000001e18886ffa0cb4ee0bf10479c68847b0f');

export default async(query)=>{
    const photos = await client.photos.search({ query, per_page: 20 })
        .then(photos => photos)
        return photos    
}