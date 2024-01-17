import { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../../UI/Toast/Toast";
import styles from "../Login/Login.module.css";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  // const [message, setMessage] = useState("");
  const [toast, setToast] = useState({
    showToast: false,
    message: "",
    type: "",
  });

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value;
      return helper;
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formData.cpassword !== formData.password) {
      // setMessage("password do not match.");
      setToast({
        showToast: true,
        message: "password do not match.",
        type: "danger",
      });
      return;
    } else if (
      formData.fullname.trim().length === 0 ||
      formData.email.trim().length === 0 ||
      formData.username.trim().length === 0 ||
      formData.password.trim().length === 0 ||
      formData.cpassword.trim().length === 0
    ) {
      // setMessage("all fields are required.");
      setToast({
        showToast: true,
        message: "all fields are required.",
        type: "danger",
      });
      return;
    } else if (formData.fullname.trim().length < 3) {
      // setMessage("full name should atleast 3 charecters long.");
      setToast({
        showToast: true,
        message: "full name should atleast 3 charecters long.",
        type: "danger",
      });
      return;
    } else if (formData.username.trim().length < 4) {
      
      // setMessage("username or email should atleast be 4 characters long.");
      setToast({
        showToast: true,
        message: "username or email should atleast be 4 characters long.",
        type: "danger",
      });
      return;
    } else if (formData.password.trim().length < 8) {
      // setMessage("password should atleast be 8 characters long.");
      setToast({
        showToast: true,
        message: "password should atleast be 8 characters long.",
        type: "danger",
      });
      return;
    }
    // setMessage("");
    setToast({
      showToast: false,
      message: "",
      type: "",
    });

    console.log("FORM DATA ", formData);
  };

  return (
    <div className={styles["main"]}>
      <form className={styles["form"]} onSubmit={onSubmitHandler}>
        <div className={styles["user-image"]}>
          <div className={styles["head"]} />
          <div className={styles["body"]} />
        </div>
        <p className={styles["heading"]}>SignUp</p>
        <div className={styles["inputs-div"]}>
          <input
            onChange={onChange}
            value={formData.fullname}
            type={"text"}
            id='fullname'
            name='fullname'
            placeholder='Full Name'
          />
          <input
            onChange={onChange}
            value={formData.email}
            type={"email"}
            id='email'
            name='email'
            placeholder='Email'
          />
          <input
            onChange={onChange}
            value={formData.username}
            type={"text"}
            id='username'
            name='username'
            placeholder='Username'
          />
          <input
            onChange={onChange}
            value={formData.password}
            type={"password"}
            id='password'
            name='password'
            placeholder='Password'
          />
          <input
            onChange={onChange}
            value={formData.cpassword}
            type={"password"}
            id='cpassword'
            name='cpassword'
            placeholder='Confirm Password'
          />
          <button>submit</button>
          {/* <div className={styles["err-msg-div"]}>{message}</div> */}
        </div>

        <p className={styles["p-link"]}>
          Existing user?{" "}
          <Link to={"/login"} className={styles["link"]}>
            login
          </Link>
        </p>
      </form>
      {toast.showToast ? (
        <Toast setToast={setToast} message={toast.message} type={toast.type} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SignUp;
