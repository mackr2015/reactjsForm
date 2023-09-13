import "./Form.css";

const Form = () => {
  return (
    <div>
    <label htmlFor="nameInpt">First and Last Name</label>
    <input type="text" name="full_name" placeholder="ex. John Doe" id="nameInpt"/>
    <label htmlFor="emailInpt">Email address</label>
    <input type="text" name="email" placeholder="ex. john@gmail.com" id="emailInpt"/>
    <label htmlFor="passwordInpt">Password</label>
    <input type="password" name="password" id="passwordInpt" />
    <button type="submit">Submit</button>
    </div>
  )
}

export default Form;