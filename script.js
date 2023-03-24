  function clearName() {
        if (
          document.getElementById("nameField").value == "First and Last Name"
        ) {
          document.getElementById("nameField").value = "";
        }
      }
      function resetName() {
        if (document.getElementById("nameField").value == "") {
          document.getElementById("nameField").value = "First and Last Name";
        }
      }
      function clearPhone() {
        if (
          document.getElementById("phoneField").value == "example: 212-123-1234"
        ) {
          document.getElementById("phoneField").value = "";
        }
      }
      function resetPhone() {
        if (document.getElementById("phoneField").value == "") {
          document.getElementById("phoneField").value = "example: 212-123-1234";
        }
      }
	  function clearComments() {
			if (document.getElementById("commentField").value == "Type Here:") {
				document.getElementById("commentField").value = "";
			}
		}
		function resetComments() {
				if (document.getElementById("commentField").value == "") {
					document.getElementById("commentField").value = "Type Here:";
				}
			}
			 function submitPage() {
					alert('Thanks! You will receive text alerts.');
				}
