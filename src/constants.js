const data = [{
  "tag": "input",
	"name": "first_name",
  "type": "text",
	"human_label": "First Name",
  "required": true,
  "is_valid": () => {
    return true
  },
}, {
  "tag": "input",
  "name": "last_name",
  "type": "text",
	"human_label": "Last Name",
  "required": true,
  "is_valid": () => {
    return true
  },
}, {
  "tag": "input",
  "name": "email",
  "type": "email",
  "human_label": "Email Address",
  "required": true,
  "is_valid": () => {
    return true
  },
}, {
  "tag": "input",
  "name": "phone_number",
  "type": "text",
  "human_label": "Phone Number",
  "required": false,
  "is_valid": (value) => {
    if (value) {
      const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      return phoneRegex.test(value);
    } else {
      return true
    }
  }
}, {
  "tag": "input",
  "name": "job_title",
  "type": "text",
  "human_label": "Job Title",
  "required": false,
  "is_valid": () => {
    return true
  },
}, {
  "tag": "input",
  "name": "date_of_birth",
  "type": "date",
  "human_label": "Date of Birth",
  "required": true,
  "is_valid": () => {
    return true
  },
}, {
  "tag": "input",
  "name": "parental_consent",
  "type": "checkbox",
  "human_label": "Parental Consent",
  "required": true,
  "is_valid": () => {
    return true
  },
	"conditional": {
		"name": "date_of_birth",
		"show_if": (value) => {
      const now = new Date();
      const valueDate = new Date(value);
      return valueDate >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate()) && value !== null;
    }
  }
}]

export default data
