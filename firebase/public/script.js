
$(()=>{
  //  on clcikc take them to the next screen
  $("#button").click(()=>{
    $("#content").html(`
    You Caught Us<br/><br/>

    We are still getting ready, but leave your email below and we will let you know as soon as a spaces are avalible for you.
<br/><br/>
    <form class="">
  <div class="form-group mb-2" style="margin-right:1rem;">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text"  class="form-control" id="staticEmail2" placeholder="email@example.com" >
  </div> 
  
  <button type="submit" class="btn btn-primary mb-2 btn-lg">Tell Me When</button>
</form>
<div class="subtext text-small ">
        We’ll never share your details with third parties.
        View our <a href="privacy.html">Privacy Policy</a> for more info.    
      </div>
    `);
  });
})