import {Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import ContactItem from '../ContactItem'
import './index.css'

const userDataList = [
  {
    id: 0,
    name: '',
    email: '',
    gender: '',
    dob: '',
    country: '',
    city: '',
  },
]

class Welcome extends Component {
  state = {
    selectedData: userDataList,
    gender: '',
    name: '',
    email: '',
    dob: new Date(),
    country: '',
  }

  onAddUserData = event => {
    event.preventDefault()
    const {gender, name, email, dob, country, selectedData} = this.state
    const updatedData = {
      id: selectedData.length,
      gender,
      name,
      email,
      dob,
      country,
    }
    this.setState(prevState => ({
      selectedData: [...prevState.selectedData, updatedData],
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})

    console.log(event.target.value)
  }

  onChangeCountry = event => {
    this.setState({country: event.target.value})
    console.log(event.target.value)
  }

  handleDateChange = date => {
    this.setState({dob: date})
    console.log(date)
  }

  render() {
    const {name, email, gender, country, city, dob, selectedData} = this.state

    return (
      <div className="app-container">
        <div className="buttons-container">
          <button className="button" type="button">
            Add Row
          </button>
          <button className="button" type="button">
            Delete Selected Rows
          </button>
          <button className="button" type="button">
            Delete Non Selected Rows
          </button>
          <button className="button" type="button">
            Submit
          </button>
        </div>
        <ul className="contacts-table">
          <li className="table-header">
            <p className="table-header-cell name-column">Id</p>
            <hr className="separator-off" />
            <p className="table-header-cell name-column">Name</p>
            <hr className="separator" />
            <p className="table-header-cell">Email</p>
            <hr className="separator-off" />
            <p className="table-header-cell">Gender</p>
            <hr className="separator-off" />
            <p className="table-header-cell">DOB</p>
            <hr className="separator-off" />
            <p className="table-header-cell">Country</p>
            <hr className="separator-off" />
            <p className="table-header-cell">City</p>
            <hr className="separator-off" />
          </li>

          <form className="form-container" onSubmit={this.onAddUserData}>
            <li className="table-header alignments">
              <div className="input-fields">
                <input
                  value={name}
                  onChange={this.onChangeName}
                  className="input name"
                  placeholder="Name"
                />

                <input
                  type="text"
                  placeholder="Email"
                  className="username-input-filed email"
                  value={email}
                  onChange={this.onChangeEmail}
                />
                <select
                  className="username-input-filed"
                  onChange={this.onChangeGender}
                  value={gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <DatePicker
                  className="dob"
                  selected={dob}
                  onChange={this.handleDateChange}
                  name="startDate"
                  dateFormat="MM/dd/yyyy"
                />

                <select
                  className="username-input-filed country-select"
                  onChange={this.onChangeCountry}
                  value={country}
                >
                  <option value="India">INDIA</option>
                  <option value="America">America</option>
                  <option value="Australia">Australia</option>
                </select>

                <input
                  value={city}
                  onChange={this.onChangeCity}
                  className="input"
                  placeholder="City"
                />

                <button className="button" type="submit">
                  Submit
                </button>
              </div>
            </li>
          </form>
        </ul>
        <ul className="contacts-table">
          <li className="table-header">
            <p className="table-header-cell name-column">Id</p>
            <hr className="separator-off" />
            <p className="table-header-cell name-column">Name</p>
            <hr className="separator" />
            <p className="table-header-cell">Email</p>
            <hr className="separator-off" />
            <p className="table-header-cell">Gender</p>
            <hr className="separator-off" />
            <p className="table-header-cell">DOB</p>
            <hr className="separator-off" />
            <p className="table-header-cell">Country</p>
            <hr className="separator-off" />
            <p className="table-header-cell">City</p>
            <hr className="separator-off" />
            <p />
          </li>
          {selectedData.map(eachData => (
            <ContactItem key={eachData.id} userData={eachData} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Welcome
