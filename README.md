This is a React practice repo which contains small components organized by features.

## Inputs

- ControlledInputs
  - A controlled component is a component where React is in control. Data lives in Component state instead of DOM element
  - Demo: Submit input a contact info (phone, firstName, lastName) and display the data in a list
- UncontrolledInputs
  - An uncontrolled component is where the form data is handled by the DOM instead of the React component.
  - Demo: Input a value and click on the button to get the value from alert

## Hooks

- ContactContext

  1. Create a context object with React.createContext()

     - ContactContext.Provider: provide state
     - ContactContext.Consumer: extracts state

  2. Create a Store Component (ContactStore Component)

     - Create state with useState
     - render Provider Component
     - pass the state as Provider's "value" props
     - wrap {children} inside Provider

  3. Wrap the whole App in the Store component <br/>

- ContactBoard: It doesn't use any data from the state
- ContactList: Use ({users, setEditId, setUsers}) from the state

  - render Consumer Component
  - wrap {() => ( some code to display the view)} inside Consumer

- ContactForm: ControlledInput: Use ({ editId, updateFormState, updateUser,addUser, cancelUpdate, user: { name, phone } from the state
  - render Consumer Component
  - wrap {() => ( some code to display the view)} inside Consumer

## state management

### class with constructor

- CountingParent: class component with constructor

  - inside constructor
    - super(props)
    - declare state
    - bind the event handler function
  - pass the event handler function to Child component
  - Notes: Every instance of a component has its own state

- Child: stateless component
  - trigger the state change by onClick event of the button
