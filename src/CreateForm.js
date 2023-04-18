import { useState } from "react";

const defaultApp = {
    appName: "",
    description: "",
    developers: [],
    appLink: "",
    videoLink: "",
    github: "",
    type: "web",
    technologies: []
};

const CreateAppForm = () => {

  const [appData, setAppData] = useState(defaultApp);

  const typeOptions = [
      { value: "web", label: "Web" },
      { value: "mobile", label: "Mobile" },
      { value: "game", label: "Game"},
      { value: "social", label: "Social"}
  ]

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`form submitted with: ${appData}`)
      // import createApp route and call it here?
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const inputName = event.target.name;
    let newAppData = { ...appData };
    newAppData[inputName] = value; 
    setAppData(newAppData);
    console.log(newAppData);
  }


  return (
    <div>
      <h2>Create New App</h2>
      <form onSubmit={handleSubmit}>
        <label>
          App Name
          <input type="text" value={appData.appName} onChange={handleChange} name="appName" />
        </label>
        <label>
          Description
          <textarea value={appData.description} onChange={handleChange} name="description" />
        </label>
        <label>
          Github Link
          <input type="text" value={appData.github} onChange={handleChange} name="github"/>
        </label>
        <label>
          App Link
          <input type="text" value={appData.appLink} onChange={handleChange} name="appLink"/>
        </label>
        <label>
          Video Demo Link
          <input type="text" value={appData.videoLink} onChange={handleChange} name="videoLink"/>
        </label>
        <label>
          {/* create a dropdown component */}
          Category
          <select value={appData.type} onChange={handleChange} name="type">
            {typeOptions.map((option) => (
              <option value={option.value} key={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        {/* dropdown for tech stack- multiple selections */}
        {/* dropdown with option to type for adding co-developers */}
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default CreateAppForm;