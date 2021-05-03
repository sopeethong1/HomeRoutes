// function event handler to handle the form contents
// const updateTenantFormHandler = async () => {
  const apple = function updateTenantFormHandler(event) {
    event.preventDefault();
    
    
    
    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;
    const phone_number = document.querySelector('#phone_number').value;
    const emer_contact_name = document.querySelector('#emer_contact_name').value;
    const emer_contact_phone = document.querySelector('#emer_contact_phone').value;
    const email = document.querySelector('#email').value;
    
    
    
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
      
      const response =  fetch(`/api/tenant/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          phone_number,
          email,
          first_name,
          last_name,
          emer_contact_name,
          emer_contact_phone,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.reload();
        document.location.replace(`/tenant`);
        
    } else {
      document.location.reload();
      document.location.replace(`/tenant`);
    }
  };
  
  
  
  
  // calls in #update_tenant submit button
  document.querySelector("#updateMe").addEventListener("click", apple);
  

  
  
  
  // const test = function(event) {
  //   event.preventDefault();
  //   console.log("ayyyyeeeeee")
  //   prompt("helllooo")
  // }
  
  // document.querySelector("#update_tenant").addEventListener("submit", test);