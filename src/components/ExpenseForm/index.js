const ExpenseForm = ({ inputHandler, submitHandler, isValidForm, data, operation }) => {


  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <div className="form-wrap">
        <label htmlFor="title">Title</label>
        <input className="form-input" type="text"
          placeholder="Enter title" name="title"
          onChange={inputHandler} value={data.title}
          required />
      </div>

      <div className="form-wrap">
        <label htmlFor="description">Description</label>
        <textarea className="form-textarea"
          placeholder="Enter description" name="description"
          onChange={inputHandler} value={data.description}
          required></textarea>
      </div>

      <div className="form-wrap">
        <label htmlFor="amount">Amount</label>
        <input className="form-input" type="number"
          placeholder="Enter Amount" name="amount"
          onChange={inputHandler} value={data.amount}
          required />
      </div>

      <div className="flexbox">
        <div className="form-wrap flexbox-child__fb50 pr-5">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-input"
            name="date"
            placeholder="Enter date"
            onChange={inputHandler}
            value={data.date}
          />
        </div>

        <div className="form-wrap flexbox-child__fb50 pl-5">
          <label htmlFor="type">Select Type</label>
          <select
            className="form-select"
            name="type"
            required
            onChange={inputHandler}
            value={data.type}
          >
            <option value="">Select type</option>
            <option value="1">Credit</option>
            <option value="2">Debit</option>
          </select>
        </div>
      </div>
      
      <div className="flexbox flexbox-reverse">
        <button disabled={!isValidForm} className="btn" type="submit">
          <span>{ operation.toUpperCase() }</span>
        </button>

        {
          operation !== "edit" &&
          <button className="btn mr-5" type="reset">
            <span>Clear</span>
          </button>
        }
      </div>
    </form>
  )
}

export default ExpenseForm