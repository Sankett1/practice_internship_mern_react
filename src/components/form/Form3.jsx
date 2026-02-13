import React from "react";
import { useForm } from "react-hook-form";

export function Form3() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  // Validation Rules
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasLength = password.length >= 8;
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  // Check if all validations pass
  const isPasswordValid = hasUpper && hasLower && hasDigit && hasSpecial && hasLength && passwordsMatch;

  const onSubmit = (data) => {
    if (!isPasswordValid) {
      alert("Please meet all password requirements!");
      return;
    }
    console.log("Form Data:", data);
    alert("Form Submitted Successfully ✅\nPassword is: " + data.password);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Password Validation Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "30px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "8px", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
            Enter Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "2px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "8px", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword", { required: "Please confirm your password" })}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "2px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {errors.confirmPassword.message}
            </p>
          )}
          {confirmPassword && password && (
            <p style={{
              color: passwordsMatch ? "green" : "red",
              fontSize: "14px",
              marginTop: "5px",
              fontWeight: "bold",
              transition: "color 0.2s"
            }}>
              {passwordsMatch ? "✔ Passwords Match" : "✗ Passwords do not match"}
            </p>
          )}
        </div>

        {/* Validation Requirements Display */}
        <div style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "6px",
          marginBottom: "30px",
          border: "1px solid #dee2e6"
        }}>
          <p style={{ marginBottom: "15px", fontWeight: "bold", color: "#333" }}>Password Requirements:</p>
          
          <p style={{
            color: hasUpper ? "green" : "black",
            fontSize: "15px",
            margin: "8px 0",
            transition: "color 0.2s"
          }}>
            ✔ Minimum 1 Capital Letter
          </p>

          <p style={{
            color: hasLower ? "green" : "black",
            fontSize: "15px",
            margin: "8px 0",
            transition: "color 0.2s"
          }}>
            ✔ Minimum 1 Small Letter
          </p>

          <p style={{
            color: hasDigit ? "green" : "black",
            fontSize: "15px",
            margin: "8px 0",
            transition: "color 0.2s"
          }}>
            ✔ Minimum 1 Digit
          </p>

          <p style={{
            color: hasSpecial ? "green" : "black",
            fontSize: "15px",
            margin: "8px 0",
            transition: "color 0.2s"
          }}>
            ✔ Minimum 1 Special Character (!@#$%^&*...)
          </p>

          <p style={{
            color: hasLength ? "green" : "black",
            fontSize: "15px",
            margin: "8px 0",
            transition: "color 0.2s"
          }}>
            ✔ Minimum 8 Characters
          </p>
        </div>

        <button
          type="submit"
          disabled={!isPasswordValid}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: isPasswordValid ? "#28a745" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: isPasswordValid ? "pointer" : "not-allowed",
            transition: "background-color 0.3s"
          }}
          onMouseEnter={(e) => {
            if (isPasswordValid) e.target.style.backgroundColor = "#218838";
          }}
          onMouseLeave={(e) => {
            if (isPasswordValid) e.target.style.backgroundColor = "#28a745";
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
