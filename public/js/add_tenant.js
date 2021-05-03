const adding = function updateTenantFormHandler(event) {
    event.preventDefault();
    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;
    const phone_number = document.querySelector('#phone_number').value;
    const emer_contact_name = document.querySelector('#emer_contact_name').value;
    const emer_contact_phone = document.querySelector('#emer_contact_phone').value;
    const email = document.querySelector('#email').value;
    const response =  fetch(`/api/tenant`, {
        method: 'POST',
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
document.querySelector("#addMe").addEventListener("click", adding);