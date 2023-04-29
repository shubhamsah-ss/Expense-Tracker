import { useEffect, useState } from "react"
import ExpenseForm from "../../components/ExpenseForm"
import { fetchExpenseById, postExpense, updateExpenseById } from "../../services"
import { useNavigate, useParams } from "react-router-dom"

const AddExpense = (props) => {

  const params = useParams()
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    description: "",
    type: "",
    date: ""
  })

  const [formProcessing, setFormProcessing] = useState(false)
  const [isValidForm, setIsValidForm] = useState(true)
  const [operation, setOperation] = useState("add")
  const [notFound, setNotFound] = useState(false)
  const navigate = useNavigate()

  const inputHandler = event => {
    setExpenseData({
      ...expenseData,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    setFormProcessing(true)

    if(operation === "edit") {
      updateExpenseById(params.id, expenseData)
      .then(() => {
        alert("Data updated!")
        setFormProcessing(false)

      })
      .catch(error => {
        console.log(error);
      })
    }
    else {
      postExpense(expenseData)
      .then(() => {
        alert("Data saved!");
        setExpenseData({
          title: "",
          amount: "",
          description: "",
          type: "",
          date: ""
        })
        setFormProcessing(false)
      })
      .catch(error => {
        console.log(error.message);
      })
    }

    
  }

  useEffect(() => {
    if (new Date(expenseData.date) > new Date()) {
      alert("Date cannot be greater than current date")
      setIsValidForm(false)
    }
    else {
      setIsValidForm(true)
    }
  }, [expenseData.date])

  useEffect(() => {
    if(params.operation === "edit") {
      setFormProcessing(true)
      setOperation(params.operation)
      fetchExpenseById(params.id)
      .then(data => {
        setExpenseData(data)
        setFormProcessing(false)
      })
      .catch(error => {
        console.log(error.message);
        setNotFound(true)
      })
    }
    if(params.operation !== "add" && params.operation !=="edit"){
        navigate(`/`)
      
    }
    return() => {
      setOperation(true)
      setFormProcessing(false)
      setIsValidForm(true)
      setExpenseData({
        title: "",
        amount: "",
        description: "",
        type: "",
        date: ""
      })
      setNotFound(false)

    }

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  if (notFound) {
    return <p>ID Not found!</p>;
  }
  return (
    <div className="layout-container__wrapper">
      {
        formProcessing &&
        <div className="loader-overlay">
          <div className="load loader-overlay__animation"></div>
        </div>
      }
      <div className="heading">
        <h2>{operation.toUpperCase()} EXPENSE LOG</h2>
      </div>
      <hr />
      <ExpenseForm
        data={expenseData}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        operation={operation}
        isValidForm={isValidForm}
      />
    </div>
  )
}

export default AddExpense