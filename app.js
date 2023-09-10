// Get the form element with the id "myform"
var form = document.getElementById("myform")

// Add a 'submit' event listener to the form
form.addEventListener('submit',function(e){
    e.preventDefault() // Prevent the default form submission behavior

     // Get the value entered in the input field with the id "search"
        var search =document.getElementById("search").value

         // Remove spaces from the search input to create the originalName
        var originalName= search.split(' ').join('')

         // Clear the content of the element with the id "result"
        document.getElementById("result").innerHTML = ""

        // Fetch data from the GitHub API using the originalName
        fetch("https://api.github.com/users/"+originalName)
        .then((result) => {
            // if(result.status==200){
                console.log(result)
            
            if(result.ok){
                return result.json()
            }
            else{
                alert(`${result.status} : Account not found`)
            }
        }) // Parse the response as JSON

        //  this .then only executes if the about .then returns sth
        .then((data) => {
            console.log(data) // Log the fetched data to the console

            // Populate the element with id "result" with the fetched user data
            document.getElementById("result").innerHTML = `
            <div class="rbox d-flex align-items-center justify-content-center flex-column">
            <img class="w-50 rounded-5 mx-auto"  src="${data.avatar_url}"/>
            <div class="fontsize">
              <p class="text-center">Name: ${data.name}</p>
              <p class="text-center">Username: ${data.login}</p>
              <p class="text-center">Followers: ${data.followers}</p>
              <p class="text-center">Following: ${data.following}</p>
              <p class="text-center">Location: ${data.location}</p>
              <p class="text-justify">Bio: ${data.bio}</p>
            </div>
            </div>
            `
        })
})