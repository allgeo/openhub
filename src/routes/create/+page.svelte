<script>
	import { goto } from '$app/navigation';
    function goMain(){
		goto('/');
	}
</script>

<div class="create">
    <form method="post" action="?/create" class="max-w-full ">

        <label for="title" class="block mb-2 font-bold rounded order-gray-300 ">Title</label>
        <input type="text" name="title" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="What is the name of your project?">
        
        <label for="description" class="block mb-2 font-bold rounded order-gray-300 ">Description</label>
        <textarea name="description" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="A brief description about your project"></textarea>
        
        <label for="tags" class="block mb-2 font-bold rounded order-gray-300 ">Tags</label>
        <input type="text" name="tags" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="E.g, opensource, python, datascience">

        <label for="url" class="block mb-2 font-bold rounded order-gray-300 ">URL</label>
        <input type="text" name="url" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="https://yourproject.com">
        
        <div class="flex justify-end mt-4">
            <button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
                <span class="px-4 py-4"> create-post </span>
              </button>
        </div>
    </form> 
</div>




