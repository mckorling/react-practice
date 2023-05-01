import './modal.css'
import { useState } from 'react';

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    page: "",
    description: "",
    status: "live"
  });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit(formState);
    closeModal();
  }

  const validateForm = () => {
    if (formState.page && formState.description) {
      setErrors("");
      return true;
    }
    let errorFields = [];
    for (const [key, value] of Object.entries(formState)) {
      if (!value) errorFields.push(key)
    }
    setErrors(errorFields.join(', '));
    return false;
  }

  return (
    // modal-container is parent of elements within it
    // but we are also using it to define what isn't the modal
    // so have to be specific and target the class name
    // if the onClick just called closeModal(), it would close when the user clicks to enter input
    <div className='modal-container' onClick={(e) => {
      if (e.target.className === "modal-container") closeModal();
    }}>
      <div className='modal'>
        <form>
          <div className='form-group'>
            <label htmlFor='page'>Page</label>
            <input name="page" value={formState.page} onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea name="description" value={formState.description} onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <label htmlFor='status'>Status</label>
            <select name="status" value={formState.status} onChange={handleChange}>
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {/* error fields don't update after being corrected */}
          {errors && <p className="error">Please include: {errors}</p>}
          <button type="submit" className='btn' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal;