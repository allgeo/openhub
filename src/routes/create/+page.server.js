import { supabaseClient } from "$lib/supabase";
import { redirect } from '@sveltejs/kit';

export async function load({parent}) {
    let {session} = await parent();

    if (!session){
        throw redirect(307, "/login");
    }
}

function parseTags(input){
    //Use this to modify tags as needed
    let output = "";
    return output;
}

export const actions = {
    create: async (event) => {
        //Create post in db if logged in, etc.
        const formData = await event.request.formData();
        const sesh = event.locals.session;
        //console.log(sesh);
        let title = formData.get('title');
        let desc = formData.get('title');
        let uid = sesh.user.id;
        let name = sesh.user.user_metadata.name;//Change this to using the (todo) built in name on our user table

        //Temp payload for testing. Either process tags here, or process them clientsided first
        //UID IS TEMP for TESTING ONLY
        const payload = {   title:title, 
                            desc:desc,
                            tags:formData.get('tags'),
                            uid:uid,
                            name:name
                        };
        const { error } = await event.locals.sb.from("Posts").insert(payload);
        if(error){
            console.log(error);
        }
    },
}