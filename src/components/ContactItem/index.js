import './index.css'

const ContactItem = props => {
  const {userData} = props
  console.log(userData)
  const {id, name, email, gender, country, city, dob} = userData
  return (
    <li className="table-header">
      <p className="table-header-cell name-column">{id}</p>
      <hr className="separator-off" />
      <p className="table-header-cell name-column">{name}</p>
      <hr className="separator" />
      <p className="table-header-cell">{email}</p>
      <hr className="separator-off" />
      <p className="table-header-cell">{gender}</p>
      <hr className="separator-off" />
      <p className="table-header-cell">{dob}</p>
      <hr className="separator-off" />
      <p className="table-header-cell">{country}</p>
      <hr className="separator-off" />
      <p className="table-header-cell">{city}</p>
      <hr className="separator-off" />
      <p />
    </li>
  )
}

export default ContactItem
