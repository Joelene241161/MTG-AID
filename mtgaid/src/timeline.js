import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavigationBar from './navigationBar';

function Timeline() {
  return (
    <body class="bodyBG">
      <section>
        <h1 class="heading1">Timeline</h1>

          <>
      {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
          key={idx}
          id={`dropdown-button-drop-${idx}`}
          size="lg"
          title="Choose a set"
          variant="info"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </>

</section>
    <NavigationBar />
      
    </body>
  )
}

export default Timeline;