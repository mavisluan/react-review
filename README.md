This is a React practice repo which contains small components organized by features.

## Inputs

- ControlledInputs
  - A controlled component is a component where React is in control. Data lives in Component state instead of DOM element
  - Demo: Submit input a contact info (phone, firstName, lastName) and display the data in a list
- UncontrolledInputs

  - An uncontrolled component is where the form data is handled by the DOM instead of the React component.
  - Demo: Input a value and click on the button to get the value from alert

- Forms (React Bootstrap)
  - SingleInput
  - Select
    - <Form.Control as="select" value={selectedOption} onChange={handleInput}><option value="A">A</option></Form.Control>
  - CheckboxOfRadioGroup
    - <Form.Check type="radio" value={item} checked={condition} onChange={handleInput}></Form.Check>
  - TextArea
    - <Form.Control as="textarea" row="3"></Form.Control>

## Hooks

### A CRUD app with hooks

- ContactContext

  1. Create a context object with React.createContext()

     - ContactContext.Provider: provide state
     - ContactContext.Consumer: extracts state

  2. Create a Store Component (ContactStore Component)

     - Create state with useState
     - Render Provider Component
     - Pass the state as Provider's "value" props
     - Wrap {children} inside Provider

  3. Wrap the whole App in the Store component <br/>

- ContactBoard: It doesn't use any data from the state
- ContactList: Use ({users, setEditId, setUsers}) from the state

  - Render Consumer Component
  - Wrap {() => ( some code to display the view)} inside Consumer

- ContactForm: ControlledInput: Use ({ editId, updateFormState, updateUser,addUser, cancelUpdate, user: { name, phone } from the state
  - Render Consumer Component
  - Wrap {() => ( some code to display the view)} inside Consumer

## state management

### class component

- CountingParent: class component with constructor

  - Inside constructor
    - super(props)
    - declare state
    - bind the event handler function
  - Pass the event handler function to Child component
  - Notes: Every instance of a component has its own state

- ParentNoConstructor: class component without constructor
  - Decalre state
  - Write handler with arrow functions to avoid binding 'this'

### state merge

- House component (class component)

  - Shallow Merge: (Update one property of an object)

    - When calling this.setState, it will shallow merge the properties in your object with the current state.

  - Deep Merge: (Update a property in a nested object)
    - To copy in all the other parts that you don't intend to change (Use the spread operator ...)
    - Update the nested property of the object.

- UpdateState (function component && hooks)
  - Room (state is boolean)
  - RandomList (state is an array)
  - AudioControls (state is an object)

### convert a class component into a function component with useState

- OneTimeButtonClass (class component)
- OneTimeButtonHooks (function component)

### update state based on the previous state

- Counter
  - setCounter(counter => counter + 2);

## API request

- FetchData class Component

  - axios

    1. Uses Promises
    2. Automatically parses JSON
    3. treats non-200 responses as errors
    4. returns data object

  - fetch

    1. built in to the modern browser
    2. requires to parse JSON responses
    3. treates every response as success, including 404s and 500s
    4. returns response object

  - componentDidMount
    - is executed only once after the component mounts for the first time
    - make API requests and update the state with the response data
    - Notes: 'clearPosts' and 'Get Posts' update the state and cause re-rendering, but 'componentDidMount' will not be executed.
