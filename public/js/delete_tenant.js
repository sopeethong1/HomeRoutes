
const deleteBtn = document.querySelector("#delete");



const crazy = function deleteTenantFormHandler() {
   
    
    
    
    
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
      
      const response =  fetch(`/api/tenant/${id}`, {
        method: 'DELETE',
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
  document.querySelector("#delete").addEventListener("click", crazy);