import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    aadharName: "",
    email: "",
    phone: "",
    address: "",
    permanentAddress: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };

  const validate = () => {
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.aadharName.trim() === "") {
      newErrors.aadharName = "Aadhar card name is required";
    } else if (
      formData.name.trim().toLowerCase() !==
      formData.aadharName.trim().toLowerCase()
    ) {
      newErrors.aadharName = "Aadhar card name and name should be equal";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    }

    if (formData.permanentAddress.trim() === "") {
      newErrors.permanentAddress = "Permanent address is required";
    } else if (
      formData.address.trim().toLowerCase() !==
      formData.permanentAddress.trim().toLowerCase()
    ) {
      newErrors.permanentAddress =
        "Address and permanent address are not equal. Please enter the correct address";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration successful!");

      setFormData({
        name: "",
        aadharName: "",
        email: "",
        phone: "",
        address: "",
        permanentAddress: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Aadhar Card Name</label>
          <input
            type="text"
            name="aadharName"
            value={formData.aadharName}
            onChange={handleChange}
          />
          {errors.aadharName && <p className="error">{errors.aadharName}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>Permanent Address</label>
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
          />
          {errors.permanentAddress && (
            <p className="error">{errors.permanentAddress}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit">Register</button>

        {success && <p className="success">{success}</p>}

      </form>
    </div>
  );
}

export default FormValidation;