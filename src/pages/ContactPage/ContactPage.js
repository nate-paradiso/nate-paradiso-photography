import React, { useEffect } from "react";
import "./ContactPage.scss";

export const ContactPage = () => {
  useEffect(() => {
    (function () {
      // get all data in form and return object
      function getFormData(form) {
        let elements = form.elements;
        let honeypot;

        let fields = Object.keys(elements)
          .filter(function (k) {
            if (elements[k].name === "honeypot") {
              honeypot = elements[k].value;
              return false;
            }
            return true;
          })
          .map(function (k) {
            if (elements[k].name !== undefined) {
              return elements[k].name;
            } else if (elements[k].length > 0) {
              return elements[k].item(0).name;
            }
            return null;
          })
          .filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item;
          });

        let formData = {};
        fields.forEach(function (name) {
          let element = elements[name];

          // singular form elements just have one value
          formData[name] = element.value;

          // when our element has multiple items, get their values
          if (element.length) {
            let data = [];
            for (let i = 0; i < element.length; i++) {
              let item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(", ");
          }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        return { data: formData, honeypot: honeypot };
      }

      function handleFormSubmit(event) {
        event.preventDefault();
        let form = event.target;

        // Check if the form is already submitting
        if (form.getAttribute("data-submitting") === "true") {
          return;
        }

        form.setAttribute("data-submitting", "true"); // Mark the form as submitting

        let submitButton = form.querySelector("button[type=submit]");
        submitButton.disabled = true; // Disable the submit button

        let formData = getFormData(form);
        let data = formData.data;

        if (formData.honeypot) {
          // If a honeypot field is filled, assume it was done so by a spam bot.
          form.removeAttribute("data-submitting"); // Release the form from submitting state
          submitButton.disabled = false; // Re-enable the submit button
          return false;
        }

        console.log("Submitting form data:", data);

        let url = form.action;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
          console.log("Ready state:", xhr.readyState, "Status:", xhr.status);

          if (xhr.readyState === 4) {
            form.removeAttribute("data-submitting"); // Release the form from submitting state
            submitButton.disabled = false; // Re-enable the submit button

            if (xhr.status === 200) {
              console.log("Form submission successful.");
              form.reset();
              let formElements = form.querySelector(".form-elements");
              if (formElements) {
                formElements.style.display = "none";
              }
              let thankYouMessage = form.querySelector(".thankyou_message");
              if (thankYouMessage) {
                thankYouMessage.style.display = "block";
              }
            } else {
              console.error("Form submission failed.");
            }
          }
        };

        let encoded = Object.keys(data)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          })
          .join("&");
        xhr.send(encoded);
      }

      function loaded() {
        // bind to the submit event of our form
        let forms = document.querySelectorAll("form.gform");
        for (let i = 0; i < forms.length; i++) {
          forms[i].addEventListener("submit", handleFormSubmit, false);
        }
      }
      document.addEventListener("DOMContentLoaded", loaded, false);
      // function disableAllButtons(form) {
      //   let buttons = form.querySelectorAll("button");
      //   for (let i = 0; i < buttons.length; i++) {
      //     buttons[i].disabled = true;
      //   }
      // }

      // bind to the submit event of our form
      let forms = document.querySelectorAll("form.gform");
      for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }

      document.addEventListener("DOMContentLoaded", loaded, false);

      // Cleanup
    })();
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div className="contact">
      <form
        className="gform"
        method="POST"
        data-email="natepphotography@gmail.com"
        action="https://script.google.com/macros/s/AKfycbwXHksOd-1SD06F5mQZZkKkuTtG-ybtjZIcNoHyxCsoHijDgh83bv3Kq68sbzik0JCgyg/exec"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
