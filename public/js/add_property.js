//function event handler to handle the form contents
// const updateProperty = document.querySelector('#updateProperty')

const newFormHandler = async (event) => {
    event.preventDefault();
    console.log("Here we are in add_property js!")
  
    const address = document.querySelector('#property_address').value;
    const leaseStart = document.querySelector('#lease_start').value;
    const leaseEnd = document.querySelector('#lease_end').value;
    const squareFootage = document.querySelector('#square_footage').value;
    const propertyType = document.querySelector('#property_type').value;
  
    //where am I fetching from? just the api route to get the data
    const response = await fetch(`/api/property`, {
      method: 'POST',
      body: JSON.stringify({
        address,
        leaseStart,
        leaseEnd,
        squareFootage,
        propertyType,
      }),
     
      headers: {
        'Content-Type': 'application/json',
      },
    });
  console.log(response);

    if (response.ok) {
      console.log("thank god");
      document.location.reload();
      document.location.replace('/property');
    } else {
      // alert('Failed to add property');
      console.log(err);
      document.location.reload();
      document.location.replace('/property');
    }
  };
  
  //add a property submit button
  document.querySelector('#new-property-form').addEventListener('submit', newFormHandler);
  