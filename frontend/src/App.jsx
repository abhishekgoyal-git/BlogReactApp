import React from 'react'

export const App = () => {
  return (
    <>
    <div>AI BLOGS</div>
    <ul>
      <li>Ai in Education </li>
      <li>Ai in medical  </li>
      <li>Ai in Technology </li>
      <li>Ai in Agriculture</li>
      <li>Ai in Transportation </li>
    </ul>
    <form action="#">
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' />
      <br />
      <label htmlFor="message">message:</label>
      <textarea id="message" name="message"></textarea>
      <br/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default app