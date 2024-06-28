const result = document.getElementById("result");
const contactForm = document.getElementById("contact-form")

const submitContact = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "c13877fa-b8db-4c36-b785-5fc3b17c8480");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  
  const data = await response.json();

  if (data.success) {
    result.innerHTML = "Submission Sucessfull! We'll contact you soon.";
    result.classList.add("text-green-500");
    event.target.reset();
  } else {
    result.innerHTML = data.message;
    result.classList.add("text-red-500");
  }
};
contactForm.addEventListener("submit", submitContact)